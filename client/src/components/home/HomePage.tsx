import React from 'react';
import Overview from './Overview';
import '../stylesheets/homepage.css';

const HomePage: React.FunctionComponent = () => {
    return (
        <div>
            <div className="center-card">
                <h3>
                    <span>RE</span>
                    <span>EN</span>
                    <span>GAUGE</span>
                </h3>
                <p>Join as a participant?</p>
                <form action="/quiz">
                    <input type="text" id="number" name="number" placeholder="Enter your event code"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
};

export default HomePage;
