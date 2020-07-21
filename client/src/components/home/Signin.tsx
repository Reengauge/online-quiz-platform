import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event: any, email: any, password: any) => {
        event.preventDefault();
    };

    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        } else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (
        <div className="mt-8">
            <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
                {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
                <form className="">
                    <label htmlFor="userEmail" className="block">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="my-1 p-1 w-full"
                        name="userEmail"
                        value={email}
                        placeholder="E.g: faruq123@gmail.com"
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="mt-1 mb-3 p-1 w-full"
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <button
                        className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                        onClick={(event) => {
                            signInWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign in
                    </button>
                </form>
                <p className="text-center my-3">or</p>
                <button className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">Sign in with Google</button>
                <p className="text-center my-3">
                    Don't have an account?{' '}
                    <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                        Sign up here
                    </Link>{' '}
                    <br />{' '}
                    <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                        Forgot Password?
                    </Link>
                </p>
            </div>
=======
import { Grid, Button, Card, Container, Page, Form, Text } from 'tabler-react';
import { Link } from 'react-router-dom';
import 'tabler-react/dist/Tabler.css';
import classes from '../stylesheets/SignIn.module.css';
import { auth } from '../utils/Firebase';

const SignIn = () => {
    // User Input States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Validate Inputs
    const isValid = !email || !password;

    const onSignIn = (e: any) => {
        e.preventDefault();

        if (isValid) {
            console.log("Input fields couldn't be empty");
            return;
        }
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => console.log(user))
            .catch((err) => console.log(err));
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
                                                    <Text className="text-center">
                                                        Trouble logging in?{' '}
                                                        <Link to="/resetpassword" className="font-weight-bold">
                                                            Reset Password
                                                        </Link>
                                                    </Text>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </Grid.Col>
                                </Grid.Row>
                            </Container>
                        </div>
                    </Page>
                </Grid.Col>
            </Grid.Row>
>>>>>>> 6a9fcf85e5f3446e7e80a67e6ca2bf277735f31f
        </div>
    );
};

export default SignIn;
