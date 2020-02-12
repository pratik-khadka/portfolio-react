import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styled from 'styled-components';
import PanelOne from '../components/Panel/PanelOneComponent';
import TextAnimation from '../components/AnimatedText'


function Mainpage() {

    const SectionWipes2Styled = styled.div`
  overflow: auto;
  #pinContainer {
    height: 100vh;
    width: 100%;
    overflow: auto;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100%;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.one {
    background-image: linear-gradient(to right, #0D0D0D, #151515, #0D0D0D);
  }
  
  .panel.turqoise {
    background-image: linear-gradient( #151515, #6A6A68);
  }
  
  .panel.green {
    background-image: linear-gradient( #151515, #6A6A68);
  }
  
  .panel.bordeaux {
    background-image: linear-gradient( #151515, #6A6A68);
  }
`;

    return (
        <div className="container-fluid pr-0 pl-0" >
            <SectionWipes2Styled>
                <Controller>
                    <Scene
                        triggerHook="onLeave"
                        duration="300%"
                        pin>
                        <Timeline
                            wrapper={<div id="pinContainer" />}>
                            <section className="panel one">
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <PanelOne />
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >
                                        <div className="container">
                                            <div className="row"></div>
                                            <TextAnimation />
                                            <div className="row hi-text" style={{ marginTop: 165 }}>
                                                Hi,  my name is
                                             </div>

                                            <div className="row name-text">
                                                Pratik Khadka
                                             </div>
                                            <div className="row para-text">
                                                I built things for the Web.
                                             </div>

                                            <div className="row bio-paragraph">
                                                I'm a software engineer based in Kathmandu specializing in building (and occasionally designing) exceptional, high-quality websites and applications.
                                             </div>
                                            <div className="row btn-row">
                                                <Button variant='outline-light' className="get-in-toucch-btn">Get In Touch</Button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </section>
                            <Tween
                                from={{ x: '-100%' }}
                                to={{ x: '0%' }}>
                                <section className="panel turqoise"><span>Panel</span></section>
                            </Tween>
                            <Tween
                                from={{ x: '100%' }}
                                to={{ x: '0%' }}>
                                <section className="panel green"><span>Panel</span></section>
                            </Tween>
                            <Tween
                                from={{ y: '-100%' }}
                                to={{ y: '0%' }}>
                                <section className="panel bordeaux"><span>Panel</span></section>
                            </Tween>
                        </Timeline>
                    </Scene>
                </Controller>
            </SectionWipes2Styled>
        </div>
    );
}





export default Mainpage