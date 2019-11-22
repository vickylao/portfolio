import React from 'react';
import './body.css';
import portrait from './p_portrait.png'
import snowboard from './p_snowboard.png'
import friedchicken from './p_friedchicken.png'
import globe from './p_travel.png'

function Body() {
    return (
        <div>
            <div className="Body-1">
                <img src={portrait} className="Body-1-picture" alt="portrait" />
                <div className="Body-1-text-section">
                    <p />
                    <div className="Body-title">ABOUT</div>
                    <div className="Body-1-text">
                        <p></p>
                        A technology professional with 5+ years of progressive experience in professional services consulting Fortune 500 companies across a wide range of industries. Passionate about delivering high-impact, value-added initiatives to achieve organizations’ overall strategic goals.
                <p></p>
                        Experienced in delivering projects simultaneously and proficient in utilizing Agile, Waterfall and Hybrid methodologies to strive for no-surprise implementations. Possesses a proven track record of project management, client relationship management, team coaching, and collaborating with remote teams while delivering quality implementations within budget and timeline.
            </div>
                </div>
            </div>
            <div className="Body-2">
                <div> </div>
                <div className="Body-2-interests">
                    <div className="Body-title">INTERESTS</div>
                    <img src={snowboard} className="Body-2-icons" alt="snowboard" />
                    <div className="Body-2-interests-text"> Rolling down the mountain </div>
                    <div className="Body-2-interests-text"> on a very slippery board</div>
                    <img src={friedchicken} className="Body-2-icons" alt="friedchicken" />
                    <div className="Body-2-interests-text"> Fried chicken lover</div>
                    <img src={globe} className="Body-2-icons" alt="globe" />
                    <div className="Body-2-interests-text"> Travel and experience</div>
                </div>
                <div className="Body-2-skills">
                    <div className="Body-title">SKILLS</div>
                    <div className="Body-2-table">
                        <div className="Body-2-card">
                            <div className="Body-2-cardtitle">programming</div>
                            <div className="Body-2-cardtext">
                                Experienced with the following languages and developed this site in:
                                <br/>
                                <br />
                                react
                                <br/>
                                html
                                <br/>
                                css
                            </div>
                        </div>
                        <div className="Body-2-card">
                        <div className="Body-2-cardtitle">applications</div>
                            <div className="Body-2-cardtext">
                                System admin experience in:
                                <br />
                                SAP ECC, SAP GRC, ServiceNow, Archer, MetricStream
                                <br/>
                                Proficient in:
                                <br/>
                                Tableau, Qlik Sense, Power BI
                                <br/>
                                Microsoft Office Suite, G-Suite
                            </div>
                        </div>
                        <div className="Body-2-card">
                            hi
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Body;