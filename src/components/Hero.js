import React from 'react';

import '../styles/hero.scss'
import waveImage from '../assets/wave.png'

class Hero extends React.Component {
  render() {
    return (
      <div id="hero">
        <h1 className="headline-3">
          <img src={waveImage} />
          <strong>Hello!</strong>
        </h1>
        <h3 className="font-alt font-light">I design and build products for Web and Mobile</h3>
      </div>
    )
  }
}

export default Hero;