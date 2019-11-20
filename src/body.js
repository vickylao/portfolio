import React from 'react';
import './body.css';
import portrait from './p_portrait.png'
import snowboard from './p_snowboard.png'

function Body() {
    return (
    <div>
         <div className="Body-1">
            <img src={portrait} className="Body-1-picture" alt="portrait"/>
            <div className="Body-1-text">
                <div className="Body-title">ABOUT</div>
                <p></p>
                A technology professional with 5+ years of progressive experience in professional services consulting Fortune 500 companies across a wide range of industries. Passionate about delivering high-impact, value-added initiatives to achieve organizations’ overall strategic goals. 
                <p></p>
                Experienced in delivering projects simultaneously and proficient in utilizing Agile, Waterfall and Hybrid methodologies to strive for no-surprise implementations. Possesses a proven track record of project management, client relationship management, team coaching, and collaborating with remote teams while delivering quality implementations within budget and timeline.
            </div>
        </div>
        <div className="Body-2">
            <div> </div>
            <div className="Body-2-interests">
                <div className="Body-2-interests-text">
                   I ALSO ENJOY 
                </div>
            <img src={snowboard} className="Body-2-interests-1" alt="snowboard"/>
            </div>
        </div>
    </div>
    )
}

export default Body;