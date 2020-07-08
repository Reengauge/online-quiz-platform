import React from 'react';
import Overview from './Overview';
import '../stylesheets/homepage.css';
import axios from 'axios';

const endpoint = `http://localhost:3000/api/rooms/123456/questions`;

const sendGetRequest = () => {
    return axios({
        url: endpoint,
        method: 'get',
    }).then((response) => {
        console.log(response);
        return response.data;
    });
};

const HomePage: React.FunctionComponent = () => {
    return (
        <div className="landing-page">
            <div className="center-card">
                <h1>
                    <span>RE</span>
                    <span>EN</span>
                    <span>GAUGE</span>
                </h1>
                <p className="participant">Join as a participant?</p>
                <form action="/quiz">
                    <span className="hashtag">#</span>
                    <input type="text" id="number" name="number" placeholder="Enter your event code" autoFocus></input>
                    <input type="submit" id="submit" value="Submit" hidden></input>
                </form>
                <p className="signin">
                    Teacher? <a href="/signin">Sign in here</a>
                </p>
            </div>
        </div>
    );
};

export default HomePage;
