import React from 'react'
import '../styles/header.scss'

class Header extends React.Component {
  handleButtonToggle = () => {
    document.querySelector(".nav-btn").classList.toggle("active");
    document.querySelectorAll(".hide").forEach(item => {
      item.toggleAttribute("hidden")
    });
  }
  render() {
    return (
      <div className="header header-fixed unselectable header-animated" id="header">
        <div className="header-brand left">
          <div className="nav-item no-hover">
            <h4 className="title uppercase">Sahil Bondre</h4>
          </div>
        </div>
        <div className="nav-item hide right">
          <a href="#">Projects</a>
        </div>
        <div className="nav-item hide right">
          <a href="#">Blog</a>
        </div>
        <div className="nav-item hide right">
          <a href="#">Contact</a>
        </div>
        <div onClick={this.handleButtonToggle}
          className="nav-item nav-btn active right">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}

export default Header;