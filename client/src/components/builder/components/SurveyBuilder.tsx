import React, { useState } from 'react';
import SurveyTitle from './SurveyTitle';
import SurveyQuestion from './SurveyQuestion';
import { useInputValue } from '../hooks';
import Question from '../models/Question';
import ListController from '../controllers/ListController';
import axios from 'axios';
import { auth, firestore } from '../../utils/Firebase';
import '../builder.css';

function createQuiz(questionDetails: any) {
    return axios({
        url: 'http://localhost:3000/api/rooms/' + String(questionDetails),
        method: 'post',
        data: {
            presenterId: auth.currentUser?.uid,
        },
    })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

export default function SurveyBuilder() {
    const [title, handleChangeTitle] = useInputValue('New Survey');
    const [questions, setQuestions] = useState([
        new Question({
            text: "What's your favorite color?",
            options: ['Blue', 'Orange', 'White', 'Purple'],
        }),
    ]);

    const listController = new ListController(questions, setQuestions);

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

            <button className="save-button" onClick={() => console.log(questions)}>
                <i className="fas fa-save icon" />
                Create Quiz
            </button>
        </div>
    );
}
