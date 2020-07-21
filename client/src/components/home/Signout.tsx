import React, { useState } from 'react';
import { Grid, Button, Card, Container, Page } from 'tabler-react';
import { useHistory } from 'react-router-dom';
import { auth } from '../utils/Firebase';
import classes from '../stylesheets/SignOut.module.css';

const SignOut = () => {
    const history = useHistory();
    const [logoutMessage, setLogoutMessage] = useState(<>Click logout below</>);

    const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

    const onContinue = async () => {
        setLogoutMessage(<>One moment, aligning the magnets for your departure</>);
        await delay(1000);
        auth.signOut();
        await delay(1000);

        history.push('/');
        history.go(0);
    };

    return (
        <div className="SignOut">
            <Grid.Row className={classes.ctr}>
                <Grid.Col className={classes.right}>
                    <Page>
                        <div className="page-single">
                            <Container>
                                <Grid.Row>
                                    <Grid.Col className={`mx-auto ${classes.login}`}>
                                        <h2 style={{ fontFamily: 'Poppins', color: 'white' }}> Helping converse with more students... </h2>

                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{logoutMessage} </Card.Title>
                                                <Button onClick={onContinue} color="block primary" display="block">
                                                    Log Out{' '}
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Grid.Col>
                                </Grid.Row>
                            </Container>
                        </div>
                    </Page>
                </Grid.Col>
            </Grid.Row>
        </div>
    );
};

export default SignOut;
