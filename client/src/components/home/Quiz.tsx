import { Conversation, Select, Question, Option } from 'react-conversation-form';
import React from 'react';
import '../stylesheets/quiz.css';

const Quiz: React.FunctionComponent = () => {
    return (
        <div className="chat-screen">
            <Conversation
                onSubmit={() => {}}
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
    );
};

export default Quiz;
