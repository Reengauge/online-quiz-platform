import React, { useState } from 'react';
import SurveyTitle from './SurveyTitle';
import SurveyQuestion from './SurveyQuestion';
import { useInputValue } from '../hooks';
import Question from '../models/Question';
import ListController from '../controllers/ListController';
import axios from 'axios';
import { auth, firestore } from '../../utils/Firebase';
import '../builder.css';

export default function SurveyBuilder() {
    const [title, handleChangeTitle] = useInputValue('New Survey');
    const [questions, setQuestions] = useState([
        new Question({
            text: "What's your favorite color?",
            options: ['Blue', 'Orange', 'White', 'Purple'],
        }),
    ]);

    const listController = new ListController(questions, setQuestions);

    async function createQuestions(quizId: any) {
        // return axios({
        //     url: 'http://localhost:3000/api/room/' + String(roomId) + '/quizzes',
        //     method: 'post',
        //     data: {
        //         maxDuration: 600,
        //         title: title,
        //     },
        // }).then((response) => {
        //     console.log('quiz created: ', response);
        //     return response.data;
        // });

        let questionSaveBuffer = [];
        for (var i = 0; i < questions.length; i++) {
            questionSaveBuffer.push(
                axios({
                    url: 'http://localhost:3000/api/questions/',
                    method: 'post',
                    data: {
                        questionLabel: questions[i].text,
                        choiceLabels: questions[i].options,
                        quizId: quizId,
                    },
                }).then((response: any) => {
                    console.log('questions saved: ', response);
                    return response.data;
                }),
            );
        }

        await Promise.all(questionSaveBuffer).then((allQuestionsResp) => {
            console.log('All questions saved: ', allQuestionsResp);
        });
    }

    function createQuiz(roomId: any) {
        return axios({
            url: 'http://localhost:3000/api/rooms/' + String(roomId) + '/quizzes',
            method: 'post',
            data: {
                maxDuration: 600,
                title: title,
            },
        }).then((response) => {
            console.log('quiz created: ', response);
            return response.data;
        });
    }

    function createRoom() {
        return axios({
            url: 'http://localhost:3000/api/rooms/',
            method: 'post',
            data: {
                presenterId: auth.currentUser?.uid,
                name: title,
            },
        }).then((response) => {
            console.log('room created: ', response);
            return response.data;
        });
    }

    async function createAll() {
        console.log('questions raw: ', questions);
        const roomData = await createRoom();
        const quizData = await createQuiz(roomData.roomId);
        const questionData = await createQuestions(quizData.quizId);
    }

    return (
        <div className="small-container">
            <SurveyTitle title={title} handleChangeTitle={handleChangeTitle} />

            <ol>
                {questions.map((question, i) => (
                    <SurveyQuestion
                        key={(question as any).id}
                        question={question as any}
                        setQuestion={(question: any) => listController.set(i, question)}
                        removeQuestion={() => listController.remove(i)}
                        moveQuestionUp={() => listController.moveUp(i)}
                        moveQuestionDown={() => listController.moveDown(i)}
                    />
                ))}
            </ol>
            <button onClick={() => listController.add(new Question())}>
                <i className="fas fa-plus icon" />
                Add Question
            </button>

            <button className="save-button" onClick={() => createAll()}>
                <i className="fas fa-save icon" />
                Create Quiz
            </button>
        </div>
    );
}
