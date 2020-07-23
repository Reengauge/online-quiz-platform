import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Text, Icon } from 'tabler-react';
import { Link, useHistory } from 'react-router-dom';
import { auth, firestore, provider } from '../utils/Firebase';
import classes from '../stylesheets/SignUp.module.css';

const PersonalInfoSignup = () => {
    // User Input States
    const [fullName, setFullName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorPersonal, setErrorPersonal] = useState('');
    const [errorAccount, setErrorAccount] = useState('');

    const history = useHistory();

    // Validate Inputs
    const isInvalid = !fullName || !email || !password || !confirmPassword;
    const isInvalidGoogle = !fullName;

    const onSignUp = async (e: any) => {
        e.preventDefault();
        let isError = false;

        if (isInvalid) {
            setErrorPersonal("Input fields couldn't be empty");
            isError = true;
        }

        const emailPattern = /^\S+@\S+\.\S+/;

        if (isError) {
            console.log('ending early');
            return;
        }

        // all personal errors have been checked and accounted for. We can now reset
        setErrorPersonal('');

        if (!emailPattern.test(email)) {
            setErrorAccount('Organizational email is invalid. Please try again');
            isError = true;
        }

        if (password !== confirmPassword) {
            setErrorAccount('Passwords are not matching.');
            isError = true;
        }

        if (isError) {
            console.log('ending early');
            return;
        }

        setErrorAccount('');

        auth.createUserWithEmailAndPassword(email, password)
            .then((cred) => {
                const user = cred.user;
                if (user) {
                    console.log(user.uid);
                    // use user safely here
                    const doc = {
                        name: fullName,
                        orgEmail: email,
                    };
                    console.log(doc);
                    firestore.collection('users').doc(user.uid).set(doc);
                }
            })
            .catch((err) => {
                setErrorAccount(err);
                console.log(err);
            });

        history.push('/manage');
        history.go(0);
    };

    const onSignInGoogle = () => {
        console.log('trying to sign in with google');
        let isError = false;

        if (isInvalidGoogle) {
            setErrorPersonal('Please ensure name is inputted and then click Sign in with Google ');
            isError = true;
        }

        if (isError) {
            console.log('ending early');
            return;
        }

        setErrorPersonal('');

        auth.signInWithPopup(provider)
            .then(function (result: any) {
                // all personal errors have been checked and accounted for. We can now reset

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                const doc = {
                    name: fullName,
                    orgEmail: email,
                };
                console.log(doc);
                firestore.collection('users').doc(user.uid).set(doc);

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

    // TODO: show this error to the user instead of just logging it
    useEffect(() => {
        console.log(errorPersonal);
    }, [errorPersonal]);

    useEffect(() => {
        console.log(errorAccount);
    }, [errorAccount]);

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <span className={classes.NavbarTitle}>Register Reengauge for your Classes</span>
                </Card.Title>
                <Form onSubmit={onSignUp}>
                    <Form.Group label="Account Information">
                        <Form.Input name="fullname" placeholder="Full Name" onChange={(e: any) => setFullName(e.target.value)} required />

                        <span style={{ color: 'red' }}> {errorPersonal} </span>

                        <Form.Input name="email" type="email" placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} required />
                        <Form.Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e: any) => setPassword(e.target.value)}
                            required
                        />
                        <Form.Input
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                            required
                            invalid={password !== confirmPassword}
                        />
                        <span style={{ color: 'red' }}> {errorAccount} </span>
                    </Form.Group>
                    <Button block color="primary mt-6 mb-6">
                        Create Reengauge Account
                    </Button>
                    <Text className="text-center">
                        Have an account?{' '}
                        <Link to="/signin" className="font-weight-bold">
                            Sign In
                        </Link>
                    </Text>
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
                </Form>
            </Card.Body>
        </Card>
    );
};

export default PersonalInfoSignup;
