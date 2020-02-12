import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/13624-flying-searcher.json'
class ControlledLottie extends Component {
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
              height={300}
              width={200}
        />
      </div>
    )
  }
}

export default ControlledLottie