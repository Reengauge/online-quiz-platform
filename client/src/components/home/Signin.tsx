import React, { useState } from 'react';
import { Icon, Grid, Button, Card, Container, Page, Form, Text } from 'tabler-react';
import { Link, useHistory } from 'react-router-dom';
import 'tabler-react/dist/Tabler.css';
import classes from '../stylesheets/SignIn.module.css';
import { auth, provider } from '../utils/Firebase';

const SignIn = () => {
    // User Input States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Validate Inputs
    const isValid = !email || !password;
    const history = useHistory();

    auth.onAuthStateChanged(function (user: any) {
        if (user) {
            history.push('/manage');
            history.go(0);
        } else {
            // No user is signed in.
        }
    });

    const onSignIn = (e: any) => {
        e.preventDefault();

        if (isValid) {
            console.log("Input fields couldn't be empty");
            return;
        }
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                history.push('/manage');
                history.go(0);
            })
            .catch((err) => console.log(err));
    };

    const onSignInGoogle = () => {
        console.log('trying to sign in with google');
        auth.signInWithPopup(provider)
            .then(function (result: any) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                console.log(user);
                history.push('/manage');
                history.go(0);
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    };

    return (
        <div className="SignIn">
            <Grid.Row className={classes.ctr}>
                <Grid.Col className={classes.right}>
                    <Page>
                        <div className="page-single">
                            <Container>
                                <Grid.Row>
                                    <Grid.Col className={`mx-auto ${classes.login}`}>
                                        <h2 style={{ fontFamily: 'Poppins', color: 'white' }}> Reengauge </h2>

                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Sign in to your account</Card.Title>
                                                <Form onSubmit={onSignIn}>
                                                    <Form.Input name="email" label="Email" onChange={(e: any) => setEmail(e.target.value)} required />
                                                    <Form.Input
                                                        type="password"
                                                        name="password"
                                                        label="Password"
                                                        onChange={(e: any) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <Button block color="primary mt-6 mb-6">
                                                        Continue
                                                    </Button>
                                                    <Text className="text-center">
                                                        Don&apos;t have an account?{' '}
                                                        <Link to="/signup" className="font-weight-bold">
                                                            Sign Up
                                                        </Link>
                                                    </Text>
                                                    {/* <Text className="text-center">
                                                        Trouble logging in?{' '}
                                                        <Link to="/resetpassword" className="font-weight-bold">
                                                            Reset Password
                                                        </Link>
                                                    </Text> */}
                                                </Form>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Button color="secondary" onClick={onSignInGoogle}>
                                                        <Icon prefix="fa" name="user" /> Sign in with Google{' '}
                                                    </Button>
                                                </div>
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

export default SignIn;
