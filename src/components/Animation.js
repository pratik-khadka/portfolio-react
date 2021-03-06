import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/15203-kid-on-laptop.json'
import '../App.css'


class ProfileLottie extends Component {

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
              height={355}
              width={368}
              className="profile-lottie"
        />
      </div>
    )
  }
}

export default ProfileLottie