import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/15145-ok-sign.json'
import '../App.css'


class ModalAnimation extends Component {

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div className="controlled">
        <Lottie options={defaultOptions}
              height={372}
              width={370}
              className="profile-lottie"
        />
      </div>
    )
  }
}

export default ModalAnimation