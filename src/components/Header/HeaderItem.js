import React from 'react'

export default (props) => {
  return (
    <div className="nav-item hide right item">
      <a href={props.link}>{props.title}</a>
    </div>
  )
}