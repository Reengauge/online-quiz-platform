import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../history';
import HomePage from './home/HomePage';
import Header from './global/Header';
import Quiz from './home/Quiz';
import Signin from './home/Signin';
import SignUp from './home/Signup';

const AppRouter: React.FunctionComponent = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
