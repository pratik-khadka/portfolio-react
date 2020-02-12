import React from 'react';
import { elastic as Menu } from 'react-burger-menu'

class Example extends React.Component {

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "transparent",
            padding: "10px",
            display: "inline"
        };
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <div id="outer-container">
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                    <elastic id="page-wrap" >
                        <ul style={mystyle}>
                            <li style={{ height: 40, background: "black", color: "white" }}>
                                <a id="home" href="/">Home</a>
                            </li>
                            <li>
                                <a id="about" href="/about">About</a>
                            </li>
                            <li>
                                <a id="contact" href="/contact">Contact</a>
                            </li>
                            <li>
                                <a onClick={this.showSettings} href="">Settings</a>
                            </li>
                        </ul>
                    </elastic>
                </Menu>
            </div>
        );
    }
}

export default Example;
