import React from 'react'

export default (props) => {
  return (
    <div className="header-brand left">
      <div className="nav-item no-hover">
        <h4 className="title uppercase">{props.title}</h4>
      </div>
      {props.children}
    </div>
  )
}