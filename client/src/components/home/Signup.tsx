import React, { useState, useEffect } from 'react';
import { Grid, Container, Page, Site } from 'tabler-react';
import 'tabler-react/dist/Tabler.css';
import PersonalInfoSignup from './PersonalInfoSignup';
import classes from '../stylesheets/SignUp.module.css';

const SignUp = (props: any) => {
    const [signupStep, setSignupStep] = useState(1);

    useEffect(() => {
        if (props.signupStep) {
            console.log('signup step was: ', signupStep);
            setSignupStep(props.signupStep);
            console.log('signup step is now: ', signupStep);
        }
    }, []);

    return (
        <Grid.Row className={classes.ctr}>
            <Grid.Col className={classes.right}>
                <Container>
                    <PersonalInfoSignup />
                </Container>
            </Grid.Col>
        </Grid.Row>
    );
};

export default SignUp;
