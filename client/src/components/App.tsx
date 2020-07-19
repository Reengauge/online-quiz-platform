import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../history';
import HomePage from './home/HomePage';
import Header from './global/Header';
import Quiz from './home/Quiz';
import Signin from './home/Signin';
import QuizBuilder from './builder/components/SurveyBuilder';

const AppRouter: React.FunctionComponent = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/create" component={QuizBuilder} />
                <Route exact path="/signin" component={Signin} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
