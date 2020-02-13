import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/office.json'
import '../App.css'


class ProfileLottie extends Component {
  state = {isStopped: false, isPaused: false}

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

export default ProfileLottie