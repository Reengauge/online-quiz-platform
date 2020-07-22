import React, { useState, useEffect } from 'react';
import { Nav, Site, Container, Table, Button, Card } from 'tabler-react';
import { auth, firestore } from '../utils/Firebase';
import axios from 'axios';

const Analytics = () => {
    var quizObject = {
        id: '12345678',
        header: 'No quiz found',
        subtitle: 'by Professor Jason Hall',
        introText:
            'Hi there, its Jason. Can you leave some feedback on our class about the Rate of Return! To edit any of your responses, just click on them.',
        submitText: 'Thanks for giving us your feedback!',

        questions: [{ question: 'No question found. Please check 404    ', choices: [] }],
    };

    const [name, setName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

    const Navbar = () => {
        const loadName = async (uid: any) => {
            try {
                const doc: any = await firestore.collection('users').doc(uid).get();

                if (doc.exists) {
                    setName(doc.data().name);
                }
            } catch (err) {
                console.log('Error getting document:', err);
            }
        };

        async function getRooms() {
            return axios({
                url: 'http://localhost:3000/api/rooms/presenter/' + String(auth.currentUser?.uid),
                method: 'get',
            })
                .then((response: any) => {
                    console.log('rooms fetched: ', response);
                    return response.data;
                })
                .catch((err: any) => {
                    console.log('unsuccessful in getting rooms: ', err);
                });
        }

        auth.onAuthStateChanged(async function (user: any) {
            if (user) {
                var user: any = auth.currentUser;
                if (user != null) {
                    var io = user.uid;
                    // window.alert('success ' + io);
                    if (name === '') {
                        loadName(io);
                    }
                }
            } else {
                // No user is signed in.
                console.log('no user found');
            }
        });

        const accountDropdownProps = {
            // avatarURL: './demo/faces/female/25.jpg',
            name,
            description: 'Teacher',
            options: [{ icon: 'log-out', value: 'Sign out', to: 'signout' }],
        };

        const items = (
            <Nav>
                <Nav.Item active value="Manage Engaugements" icon="globe" />

                <Nav.Item icon="plus" to="/create">
                    Add Engaugement
                </Nav.Item>
            </Nav>
        );

        return (
            <div className="navbar-menu">
                <Site.Header imageURL={'https://i.imgur.com/u6424qJ.png'} href="/" accountDropdown={accountDropdownProps} align="left" />

                <Site.Nav items={items} />
            </div>
        );
    };

    //gets the number from the url
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

            for (var i = 0; i < questionsParsed.length; i++) {
                var answerObj = getAnswers(questionsParsed[i]['questionId']).then((resp) =>{
                    
                    return (
                        
                    );
                });

                var questionAndAnswer = {
                    questionId: questionsParsed[i]['questionId'],
                    questionData: questionsParsed[i],
                    answerData: answerObj,
                };

                console.log('questionAndAnswer for: ', questionAndAnswer);
            }

            quizObject['questions'] = questionsParsed;
            console.log('updated quiz object');
        });
    }, []);

    function getChoice(choiceNum: any) {
        return axios({
            url: 'http://localhost:3000/api/choices/' + String(choiceNum),
            method: 'get',
        }).then((response) => {
            console.log('choices: ', response);
            return response.data;
        });
    }

    function getAnswers(questionId: any) {
        return axios({
            url: 'http://localhost:3000/api/answers/question/' + String(questionId),
            method: 'get',
        }).then((response) => {
            console.log('answers for this question: ', questionId, ' \n', response.data);
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

            for (let i = 0; i < quizObj.length; i++) {
                console.log(quizObj[i]);
                quizObj[i]['choices'] = await getChoice(quizObj[i]['questionId']);
            }
            // console.log('quizObject', quizObj);
            return quizObj;
        });
    }

    return (
        <>
            <Navbar />
            <br />
            <br />
            <Container>
                <Card>
                    <Card.Header>
                        <Card.Title>Card title</Card.Title>
                        <Card.Options>
                            <Button color="primary" size="sm">
                                Action 1
                            </Button>
                            <Button color="secondary" size="sm" className="ml-2">
                                Action 2
                            </Button>
                        </Card.Options>
                    </Card.Header>
                    <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur
                        perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                    </Card.Body>
                    <Card.Footer>This is standard card footer</Card.Footer>
                </Card>
            </Container>
        </>
    );
};

export default Analytics;
