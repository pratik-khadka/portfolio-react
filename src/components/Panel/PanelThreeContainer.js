import React from 'react'
import '../Panel/Panel.css';
import { FaLaptopCode, FaMobile } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function PanelContainer() {
    return (
        <div className="container panelContainer">
            <div className="row">
                <span className="number-span">03.</span>
                <span className="title-span">Experience</span>
            </div>
            <div className="row flex-row justify-content-center about-row">
                <div className="col description-col">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2019 - Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingBottom:25 }}
                            icon={<FaLaptopCode style={{marginBottom:20}}/>}
                        >
                            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Insight Workshop, Kathmandu</h4>
                            <p>
                               High Quality Website and Application 
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2016 - 2018"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingBottom:25 }}
                            icon={<FaMobile />}
                        >
                            <h3 className="vertical-timeline-element-title">Andriod Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self Project</h4>
                            <p>
                                Design and Build Andriod Application
    </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
}


export default PanelContainer