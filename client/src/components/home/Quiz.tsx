import { Conversation, Select, Question, Option } from 'react-conversation-form';
import React, { useEffect, useState } from 'react';
import '../stylesheets/quiz.css';
import axios from 'axios';
import { auth, firestore } from '../utils/Firebase';

const endpoint = `http://localhost:3000/api/rooms/12345678/questions`;

var quizObject = {
    id: '12345678',
    header: 'No quiz found',
    subtitle: 'by Professor Jason Hall',
    introText:
        'Hi there, its Jason. Can you leave some feedback on our class about the Rate of Return! To edit any of your responses, just click on them.',
    submitText: 'Thanks for giving us your feedback!',

    questions: [{ question: 'No question found. Please check 404    ', choices: [] }],
};

function getChoice(choiceNum: any) {
    return axios({
        url: 'http://localhost:3000/api/choices/' + String(choiceNum),
        method: 'get',
    }).then((response) => {
        console.log('choices: ', response);
        return response.data;
    });
}

function getRoom(choiceNum: any) {
    return axios({
        url: 'http://localhost:3000/api/rooms/' + String(choiceNum),
        method: 'get',
    }).then((response) => {
        // console.log(response);
        return response.data;
    });
}

// get Quiz Room Number, and dynamically build the quiz choices
async function getQuiz(roomNum: any) {
    return axios({
        url: `http://localhost:3000/api/rooms/` + roomNum + `/questions`,
        method: 'get',
    }).then(async (response) => {
        var quizObj = response.data;
        var roomInfo = await getRoom(roomNum);

        const doc: any = await firestore.collection('users').doc(roomInfo['presenterId']).get();

        if (doc.exists) {
            quizObject['introText'] = "Hi there, it's " + doc.data().name;
            quizObject['subtitle'] = 'by ' + doc.data().name;
        } else {
            quizObject['introText'] = 'Hi there!';
            quizObject['subtitle'] = 'by Anonymous';
        }

        quizObject['header'] = roomInfo['name'];

        for (let i = 0; i < quizObj.length; i++) {
            console.log(quizObj[i]);
            quizObj[i]['choices'] = await getChoice(quizObj[i]['questionId']);
        }
        // console.log('quizObject', quizObj);
        return quizObj;
    });
}

const Quiz: React.FunctionComponent = () => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setLoading] = useState(true);

    var questionsParsed: any = [];
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        console.log('questionNumberExtracted: ', urlParams.get('number'));

        getQuiz(urlParams.get('number')).then(async (quiz) => {
            console.log('quizItem promise: ', quiz);
            for (let i = 0; i < quiz.length; i++) {
                questionsParsed.push({
                    questionId: quiz[i]['questionId'],
                    question: quiz[i]['questionLabel'],
                    choices: quiz[i]['choices'],
                });
            }
            console.log('questionsParsed: ', questionsParsed);
            setQuestions(questionsParsed);
            quizObject['questions'] = questionsParsed;
            console.log('updated quiz object');
            setLoading(false);
        });
        // return () => {

        // };
    }, []);

    //unit tests for empty string, multiple choice, free responses, only uses specific part of the questions response data, ensure page load happens after,
    const axios = require('axios');

    return (
        <div>
            {/* <div
                className="chat-header"
                style={{ backgroundColor: '#5344B2', height: '100px', color: 'white', zIndex: 9999999999, borderRadius: '10px 10px 0px 0px' }}
            >
                <h3>{quizObject.header}</h3>
                <p>{quizObject.subtitle}</p>
            </div>
            <div>
                <button>Get Questions for quiz 1</button>
            </div>
            <div className="chat-screen">
                <Conversation
                    className="conversation"
                    onSubmit={(Response: any) => {
                        console.log(Response);
                    }}
                    chatOptions={{
                        introText: quizObject.introText,
                        submitText: quizObject.submitText,
                    }}
                >
                    {quizObject.questions.map((question, index) => {
                        if (question.choices.length === 0) {
                            return <Question id="index"> {question.question} </Question>;
                        }
                        return (
                            <Select id={index} question={question.question}>
                                {question.choices.map((choice, index2) => (
                                    <Option value={index2}>{choice}</Option>
                                ))}
                            </Select>
                        );
                    })}
                </Conversation>
            </div> */}
            {isLoading ? (
                <>Loading your quiz...</>
            ) : (
                <>
                    <div
                        className="chat-header"
                        style={{ backgroundColor: '#5344B2', height: '100px', color: 'white', zIndex: 9999999999, borderRadius: '10px 10px 0px 0px' }}
                    >
                        <h3>{quizObject.header}</h3>
                        <p>{quizObject.subtitle}</p>
                    </div>
                    <div className="chat-screen">
                        <Conversation
                            className="conversation"
                            onSubmit={async (Response: any) => {
                                console.log(Response);

                                // Object.keys(Response).forEach(function (key) {
                                //     Response[key].forEach(function (elem: any, index: any) {
                                //         console.log(elem, index);
                                //     });
                                // });

                                let answerSaveBuffer = [];
                                for (var key in Response) {
                                    console.log('keys for Response: ', key);
                                    console.log('answer Label for Response: ', Response[key]);

                                    answerSaveBuffer.push(
                                        axios({
                                            url: 'http://localhost:3000/api/answers/' + String(key),
                                            method: 'post',
                                            data: {
                                                participantId: '1',
                                                answerLabel: Response[key],
                                            },
                                        }).then((response: any) => {
                                            console.log('answer saved: ', response);
                                            return response.data;
                                        }),
                                    );
                                }

                                await Promise.all(answerSaveBuffer).then((allAnswerResp) => {
                                    console.log('All answers saved: ', allAnswerResp);

                                    alert('Your answers has been submitted');
                                    window.location.href = '/';
                                    return <h3>Your answers has been submitted</h3>;
                                });

                                return <h3>Your answers has been submitted</h3>;
                            }}
                            chatOptions={{
                                introText: quizObject.introText,
                                submitText: quizObject.submitText,
                            }}
                        >
                            {quizObject.questions.map((question: any, index: any) => {
                                if (question.choices.length === 0) {
                                    return <Question id={question.questionId.toString()}> {question.question.toString()} </Question>;
                                }
                                return (
                                    <Select id={question.questionId.toString()} question={question.question}>
                                        {question.choices.map((choice: any, index2: any) => (
                                            <Option value={index2.toString()}>{choice.choiceLabel.toString()}</Option>
                                        ))}
                                    </Select>
                                );
                            })}
                        </Conversation>
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
