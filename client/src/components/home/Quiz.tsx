import { Conversation, Select, Question, Option } from 'react-conversation-form';
import React from 'react';
import '../stylesheets/quiz.css';
import axios from 'axios';

const endpoint = `http://localhost:3000/api/rooms/123456/questions`;

const sendGetRequest = () => {
    return axios({
        url: endpoint,
        method: 'get',
    }).then((response) => {
        console.log(response);
        return response.data;
    });
};

const Quiz: React.FunctionComponent = () => {
    const quizObject = {
        id: '51321',
        header: 'FIN 300 - Class 3 Survey - Understanding Check In',
        subtitle: 'by Professor Jason Hall',
        introText:
            'Hi there, its Jason. Can you leave some feedback on our class about the Rate of Return! To edit any of your responses, just click on them.',
        submitText: 'Thanks for giving us your feedback!',
        questions: [
            {
                question:
                    'You need to accumulate $25,000 in 10 years. How much will you have to invest right now if your rate of return is 6% compounded semi-annually?',
                choices: ['$11,409.79', '$11,579.97', '$13,841.98', '$13,960.24'],
            },

            {
                question: 'If you were quizzed on Rate of return tomorrow, how would you feel?',
                choices: ['5 stars', '3 stars', '1 star'],
            },

            {
                question: 'What is your name?',
                choices: [],
            },
        ],
    };

    return (
        <div>
<<<<<<< HEAD
            <div
                className="chat-header"
                style={{ backgroundColor: '#5344B2', height: '100px', color: 'white', zIndex: 9999999999, borderRadius: '10px 10px 0px 0px' }}
            >
                <h3>{quizObject.header}</h3>
                <p>{quizObject.subtitle}</p>
            </div>
            <div>
                <button onClick={sendGetRequest}>Get Questions for quiz 1</button>
=======
            <div className="chat-header" style={{ backgroundColor: '#5344B2', height: '100px', color: 'white', zIndex: 9999999999 }}>
                <h3>Haihan's React Class 425</h3>
                <p>By Haihan</p>
>>>>>>> parent of e60c6b6... added some styling for the bot page
            </div>
            <div className="chat-screen">
                <Conversation
                    className="conversation"
                    onSubmit={(Response: any) => {
                        console.log(Response);
                        console.log('will post to: ', quizObject.id);
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
            </div>
        </div>
    );
};

export default Quiz;
