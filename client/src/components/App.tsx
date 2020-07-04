import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../history';
import HomePage from './home/HomePage';
import Header from './global/Header';
import Quiz from './home/Quiz';

const AppRouter: React.FunctionComponent = () => {
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/quiz" component={Quiz} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
