import React from 'react'

import rocketImage from '../../assets/rocket.png'

export default (props) => {
  return (
    <div className="header-brand left">
      <div className="nav-item no-hover">
        <img alt="rocket" src={rocketImage} />
        <h4 className="title uppercase">{props.title}</h4>
      </div>
      {props.children}
    </div>
  )
}