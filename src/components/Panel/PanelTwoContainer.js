import React from 'react'
import '../Panel/Panel.css';
import { FaGithubAlt, FaLinkedin, FaCodepen, FaInstagram, FaTwitter } from 'react-icons/fa';
import ProfileLottie from '../Animation'

function PanelTwoContainer() {
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
                    <p>Shortly after graduating from Islington College, I joined the engineering team at Outcode Software where I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>JavaScript (ES6+)</li>
                                <li>React</li>
                                <li>Angular JS</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                        <div className="col">
                        <ul>
                                <li>HTML & (S)CSS</li>
                                <li>Django</li>
                                <li>JQuery</li>
                                <li>Blockchain</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col card-col">
                    <ProfileLottie className="profile-lottie" />
                </div>
            </div>
            <div className="footer mt-5">
            <FaGithubAlt className="icon-links hvr-grow" />
            <FaLinkedin className="icon-links hvr-grow"/>
            <FaCodepen className="icon-links hvr-grow"/>
            <FaInstagram className="icon-links hvr-grow"/>
            <FaTwitter className="icon-links hvr-grow"/>
            </div>
        </div>
    );
}


export default PanelTwoContainer