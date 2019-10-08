import React from 'react'
import Scaffold from '../components/Scaffold'

import profilePic from '../assets/profile_pic.jpg'
export default () => {
  return (
    <Scaffold>
      <div className="row">
        <div className="col-4">
          <img alt="profile" src={profilePic} />
          <h3>Sahil Bondre</h3>
          <p>sahilbondre@gmail.com</p>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <p>
            I am a computer engineering undergraduate with experience in Fulstack Web and Mobile. I am passionate about writing clean, efficient and professional code. I have good knowledge of Data Structures, Algorithms and UI Design.
          </p>
          <button onClick={() => {
            window.location.href = "https://github.com/godcrampy/portfolio/raw/master/src/assets/resume.pdf"
          }} className="btn-link ">Here's My Resume</button>
        </div>
      </div>
    </Scaffold>
  )
}
