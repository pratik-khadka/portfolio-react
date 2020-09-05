import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/eye.json'


class PanelOneAnimation extends Component {

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
              height={200}
              width={210}
        />
      </div>
    )
  }
}

export default PanelOneAnimation