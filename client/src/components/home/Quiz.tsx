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
    return (
        <div>
            <div
                className="chat-header"
                style={{ backgroundColor: '#5344B2', height: '100px', color: 'white', zIndex: 9999999999, borderRadius: '10px 10px 0px 0px' }}
            >
                <h3>Haihan's React Class 425</h3>
                <p>By Haihan</p>
            </div>
            <div>
                <button onClick={sendGetRequest}>Get Questions for quiz 1</button>
            </div>
            <div className="chat-screen">
                <Conversation
                    className="conversation"
                    onSubmit={(Response: any) => {
                        console.log(Response);
                    }}
                    chatOptions={{
                        thankTheUser: ['identifier', 'feedbackType'],
                        introText: 'Hi there. Lets leave some feedback! To edit any of your responses, just click on them.',
                        submitText: 'Thanks for giving us your feedback!',
                    }}
                >
                    <Select id="feedbackType" question="What type of feedback are you thinking of?">
                        <Option value="issue">Issue</Option>
                        <Option value="typo">Typo</Option>
                        <Option value="praise">Praise</Option>
                        <Option value="other">Other</Option>
                    </Select>
                    <Question id="email" validation={(text: any) => text.includes('@')}>
                        {"What's your company email address, so we can identify you?"}
                    </Question>
                    <Question id="feedback" validation="^[a-zA-Z ]+$">
                        What are you thinking?
                    </Question>
                </Conversation>
            </div>
        </div>
    );
};

export default Quiz;
