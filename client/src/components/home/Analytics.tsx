import React, { useState, useEffect } from 'react';
import { Nav, Site, Container, Table, Button, Card, Tag } from 'tabler-react';
import { auth, firestore } from '../utils/Firebase';
import axios from 'axios';
import Chart from 'react-google-charts';

const Analytics = () => {
    const [name, setName] = useState('');
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

        auth.onAuthStateChanged(async function (user: any) {
            if (user) {
                var user: any = auth.currentUser;
                if (user != null) {
                    var io = user.uid;
                    // window.alert('success ' + io);
                    if (name === '') {
                        setName('Account');
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
                <Site.Header imageURL={'https://i.imgur.com/PsrjhIN.png'} href="/" accountDropdown={accountDropdownProps} align="left" />

                <Site.Nav items={items} />
            </div>
        );
    };

    //gets the number from the url
    var questionsParsed: any = [];
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        getAllAnswers(urlParams.get('number')).then(async (qna) => {
            qna = qna.map((qnaEach: any, index: any) => {
                if (qnaEach['choices'] !== []) {
                    var counts: any = {};
                    qnaEach['answers'].forEach((el: any) => (counts[el] = 1 + (counts[el] || 0)));
                    qnaEach['uniqueAnswers'] = Object.entries(counts);
                }

                return qnaEach;
            });

            console.log('new qna: ', qna);
            setQuestionsAndAnswers(qna);
        });
    }, []);

    async function getAllAnswers(eventKey: any) {
        return axios({
            url: 'http://localhost:3000/api/answers/room/' + eventKey,
            method: 'get',
        })
            .then((response: any) => {
                return response.data;
            })
            .catch((err: any) => {
                console.log('unsuccessful in getting answers: ', err);
            });
    }

    function countUnique(iterable: any) {
        return new Set(iterable).size;
    }

    return (
        <>
            <Navbar />
            <br />
            <br />
            <Container>
                {questionsAndAnswers.map((qna: any, index: any) => {
                    console.log('my qna ', index, ' : ', qna['uniqueAnswers']);
                    return (
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    Question {index + 1}: {qna['questionLabel']}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {(() => {
                                    if (qna['choices'].length === 0) {
                                        return (
                                            <div>
                                                <Chart
                                                    width={'500px'}
                                                    chartType="Table"
                                                    loader={<div>Loading Chart</div>}
                                                    data={[
                                                        [
                                                            { type: 'string', label: 'Answers' },
                                                            { type: 'number', label: 'Count' },
                                                        ],
                                                    ].concat(qna['uniqueAnswers'])}
                                                    options={{
                                                        showRowNumber: true,
                                                    }}
                                                    rootProps={{ 'data-testid': '1' }}
                                                />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <Chart
                                                width={'500px'}
                                                height={'300px'}
                                                chartType="PieChart"
                                                loader={<div>Loading Chart</div>}
                                                data={[['Answer', 'Count']].concat(qna['uniqueAnswers'])}
                                                options={{
                                                    title: qna['questionLabel'],
                                                }}
                                            />
                                        );
                                    }
                                })()}
                            </Card.Body>
                            <Card.Footer>
                                Possible Choices: <br />
                                {(() => {
                                    if (qna['choices'].length === 0) {
                                        return <Tag>Free Response</Tag>;
                                    } else {
                                        return (
                                            <>
                                                <Tag.List>
                                                    {qna['choices'].map((choice: any, index: any) => {
                                                        return <Tag>{choice}</Tag>;
                                                    })}
                                                </Tag.List>
                                            </>
                                        );
                                    }
                                })()}
                            </Card.Footer>
                        </Card>
                    );
                })}
            </Container>
        </>
    );
};

export default Analytics;
