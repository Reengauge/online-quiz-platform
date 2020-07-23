import React, { useState, useEffect } from 'react';
import { Nav, Site, Container, Table, Button } from 'tabler-react';
import { auth, firestore } from '../utils/Firebase';
import { Card } from 'reactstrap';
import { Icon } from 'tabler-react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import '../stylesheets/managequizzes.css';

const ManageQuizzes = () => {
    const [name, setName] = useState('');
    const [rooms, setRooms] = useState([]);
    // const [rooms, setRooms] = useState([{ eventKey: '12345678', name: 'Sample Quiz' }]);
    var QRCode = require('qrcode.react');

    const Navbar = () => {
        /*async function loadName(uid: any) {
            try {
                const doc: any = await firestore.collection('users').doc(uid).get();

                if (doc.exists) {
                    setName(doc.data().name);
                }
                return;
            } catch (err) {
                console.log('Error getting document:', err);
            }
        };*/

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
                    if (name === '') {
                        setName('a'); //TODO: remove this line
                        //await loadName(io);
                        const doc: any = await firestore.collection('users').doc(io).get();

                        if (doc.exists) {
                            console.log('shit ', doc.data().name);
                            setName(doc.data().name);
                        }
                        var roomsData = await getRooms();
                        setRooms(roomsData);
                    }
                }
            } else {
                console.log('no user found');
            }
        });

        const accountDropdownProps = {
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

    return (
        <>
            <Navbar />
            <br />
            <br />
            <Container>
                <Card>
                    <Table>
                        <Table.Header>
                            <Table.ColHeader>Event Key</Table.ColHeader>
                            <Table.ColHeader>Room Name</Table.ColHeader>
                            <Table.ColHeader>Action</Table.ColHeader>
                        </Table.Header>
                        <Table.Body>
                            {rooms.map((room, index) => {
                                return (
                                    <Table.Row>
                                        <Table.Col>{room['eventKey']}</Table.Col>
                                        <Table.Col>{room['name']}</Table.Col>
                                        <Table.Col>
                                            <a href={'/quiz?number=' + room['eventKey']}>
                                                <Button color="red">Take</Button>
                                            </a>
                                            {'          '}
                                            <Button color="primary">Analytics</Button>
                                            {'          '}
                                            <Popup trigger={<Button color="green"> Share </Button>} modal closeOnDocumentClick>
                                                <span>
                                                    Event key: {room['eventKey']}
                                                    <br></br>
                                                    Link:{' '}
                                                    <a href={'http://rengauge.com/quiz?number=' + room['eventKey']}>
                                                        http://rengauge.com/quiz?number={room['eventKey']}
                                                    </a>
                                                    <br></br>
                                                    <QRCode value={'http://rengauge.com/quiz?number=' + room['eventKey']} />
                                                </span>
                                            </Popup>
                                            {'          '}
                                            <a
                                                href={'https://twitter.com/intent/tweet?url=' + 'http://rengauge.com/quiz?number=' + room['eventKey']}
                                                data-show-count="false"
                                                target="_blank"
                                            >
                                                <Button color="light-blue">Twitter</Button>
                                            </a>
                                        </Table.Col>
                                    </Table.Row>
                                );
                            })}

                            <script async src="https://platform.twitter.com/widgets.js"></script>
                        </Table.Body>
                    </Table>
                </Card>
            </Container>
        </>
    );
};

export default ManageQuizzes;
