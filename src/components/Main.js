import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../App.css'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styled from 'styled-components';
import PanelOne from '../components/Panel/PanelOneComponent';
import PanelTwo from '../components/Panel/PanelTwoComponent';
import PanelThree from '../components/Panel/PanelThreeComponent';
import PanelTwoContainer from './Panel/PanelTwoContainer'
import TextAnimation from '../components/AnimatedText'
import ModalAnimation from '../components/ModalAnimation'


function Mainpage() {

    const [modalShow, setModalShow] = React.useState(false);

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
      background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  }
  
  .panel.turqoise {
    background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);

  }
  
  .panel.green {
    background-image: linear-gradient(to right, #0D0D0D, #151515, #0D0D0D);
  }
  
  .panel.bordeaux {
    background-image: linear-gradient(to right, #0D0D0D, #151515, #0D0D0D);
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
                                                <Button variant='outline-light' className="get-in-toucch-btn" onClick={() => setModalShow(true)}>Get In Touch</Button>
                                            </div>
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </section>
                            <Tween
                                from={{ x: '-110%' }}
                                to={{ x: '0%' }}>
                                <section className="panel turqoise">
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >

                                        <PanelTwo />
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%"
                                            }}
                                        >

                                            <PanelTwoContainer />
                                        </div>
                                    </div>
                                </section>
                            </Tween>
                            <Tween
                                from={{ x: '100%' }}
                                to={{ x: '0%' }}>
                                <section className="panel green">
                                    <PanelThree />
                                </section>
                            </Tween>

                        </Timeline>
                    </Scene>
                </Controller>
            </SectionWipes2Styled>
        </div>

    );
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            animation="true"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalAnimation/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}





export default Mainpage