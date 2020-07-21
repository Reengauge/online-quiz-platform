import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../history';
import HomePage from './home/HomePage';
import ManageQuizzes from './home/ManageQuizzes';
import Header from './global/Header';
import Quiz from './home/Quiz';
import Signin from './home/Signin';
import AdminPage from './home/AdminPage';
import QuizBuilder from './builder/components/SurveyBuilder';
import SignUp from './home/Signup';
import SignOut from './home/Signout';

const AppRouter: React.FunctionComponent = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/create" component={QuizBuilder} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/admin" component={AdminPage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/manage" component={ManageQuizzes} />
                <Route exact path="/signout" component={SignOut} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
