import React, { useState, useEffect } from 'react';
import { Nav, Site, Container, Table, Button } from 'tabler-react';
import { auth, firestore } from '../utils/Firebase';
import { Card } from 'reactstrap';
import { Icon } from 'tabler-react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const ManageQuizzes = () => {
    // const history = useHistory();

    const [name, setName] = useState('');
    const [rooms, setRooms] = useState([{ eventKey: '12345678', name: 'Sample Quiz' }]);

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
                        var roomsData = await getRooms();
                        setRooms(roomsData);
                        // console.log('rooms: ', rooms);
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
                                        <Table.Col>{room.eventKey}</Table.Col>
                                        <Table.Col>{room.name}</Table.Col>
                                        <Table.Col>
                                            <a href={'/quiz?number=' + room.eventKey}>
                                                <Button color="red">Take</Button>
                                            </a>
                                            {'          '}
                                            <Button color="primary">Analytics</Button>
                                            {'          '}
                                            <Button color="green">Share</Button>
                                            {'          '}
                                            <a
                                                href={'https://twitter.com/intent/tweet?url=' + 'http://rengauge.com/quiz?number=' + room.eventKey}
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
