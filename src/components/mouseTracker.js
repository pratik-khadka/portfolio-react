import React from 'react';
import '../components/style.css'
import Lottie from 'react-lottie'
import animationData from '../lotties/eye.json'


class Tracker extends React.Component {

    defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    constructor(props) {
      super(props);
      this.init();
    }
    init() {
      this.state = {
        offsetX: '',
        offsetY: '',
        friction: 1 / 32
      }
      this._mouseMove = this._mouseMove.bind(this);
    }
    componentDidMount() {
      document.addEventListener('mousemove', this._mouseMove);
    }
    componentWillUnmount() {
      document.removeEventListener('mousemove', this._mouseMove);
    }
    _mouseMove(e) {
      let followX = (window.innerWidth / 2 - e.clientX);
      let followY = (window.innerHeight / 2 - e.clientY);
  
      let x = 0,
          y = 0;
      x +=( (-followX - x) * this.state.friction);
      y += (followY - y) * this.state.friction;
      this.setState({
        offsetX: x,
        offsetY: y
      });
    }
    render() {
      let offset = {
        transform: `translate(-50%, -50%) perspective(600px)
                    rotateY(${this.state.offsetX}deg)
                    rotateX(${this.state.offsetY}deg)`
                   }
  
      return (
        <div className='wrapper' style={offset}>
          <div className="shape">
          </div>
          <div className="shape2">
        
          </div>
        </div>
      )
    }
  
  }
export default Tracker;