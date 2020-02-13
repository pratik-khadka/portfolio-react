import React from 'react'
import '../Panel/Panel.css';
import { Card, Button } from 'react-bootstrap';
import ProfileLottie from '../Animation'

function PanelContainer() {
    return (
        <div className="container panelContainer">
            <div className="row">
                <span className="number-span">01.</span>
                <span className="title-span">ABOUT ME</span>
            </div>
            <div className="row flex-row justify-content-center about-row">
                <div className="col description-col">
                    <p>Hello! I'm Pratik, a software engineer based in Kathmandu who enjoys building things that live on the internet.
                    I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
                    <p>Shortly after graduating from London Metropolitan University, I joined the engineering team at Insight Workshop where I work on a wide variety of interesting and meaningful projects on a daily basis.
    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>JavaScript (ES6+)</li>
                                <li>React</li>
                                <li>Angular JS</li>
                            </ul>
                        </div>
                        <div className="col">
                        <ul>
                                <li>HTML & (S)CSS</li>
                                <li>Django</li>
                                <li>JQuery</li>
                            </ul>
                        </div>
                    </div>

                    {/* Here are a few technologies I've been working with recently:
    
    JavaScript (ES6+)
    HTML & (S)CSS
    React
    Vue
    Node.js
    Express
    NativeScript */}

                </div>
                <div className="col card-col">
                    <ProfileLottie className="profile-lottie" />
                </div>
            </div>
        </div>
    );
}


export default PanelContainer