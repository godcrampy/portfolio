import React from 'react'
import Scaffold from '../components/Scaffold'

import profilePic from '../assets/profile_pic.jpg'
import '../styles/about.scss'

export default () => {
  const getDay = () => {
    switch (new Date().getDay()) {
      case 1:
        return "Marvelous Monday"
      case 2:
        return "Terrific Tuesday"
      case 3:
        return "Wonderful Wednesday"
      case 4:
        return "Thoughtful Thursday"
      case 5:
        return "Fun Friday"
      case 6:
        return "Spectacular Saturday"
      default:
        return "Satisfying Sunday"
    }
  }
  return (
    <Scaffold>
      <div id="about">
        <div className="row">
          <div className="col-4">
            <img alt="profile" src={profilePic} />
            <div className="links">
              <p className="subtitle">Get in touch with me!</p>
              <a href="mailto:sahilbondre@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/sahil-bondre-571a8416a/">Linkedin</a>
              <a href="https://github.com/godcrampy">Github</a>
            </div>
            <br />
          </div>
          <div className="col-1"></div>
          <div className="col-7">
            <h3>Sahil Bondre</h3>
            <p>
              I am a computer engineering undergraduate currently studying in NIT Surat, India. I am experienced in Fullstack Web and Mobile. I am passionate about writing clean and efficient code. I have a good knowledge of Data Structures, Algorithms and UI Design.
          </p>
            <p>
              By the way, I write articles related to programming too! Find me on <a href="https://dev.to/godcrampy">Dev.</a>
            </p>
            <button onClick={() => {
              window.location.href = "https://github.com/godcrampy/portfolio/raw/master/src/assets/resume.pdf"
            }} className="btn-link ">Here's My Resume</button>
            <p>Have a {getDay()}!</p>
          </div>
        </div>
      </div>
    </Scaffold>
  )
}
