import React from 'react'

import HeaderTitle from './Header/HeaderTitle'
import HeaderItem from './Header/HeaderItem'
import HeaderButton from './Header/HeaderButton'
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
      <div className="header unselectable header-animated" id="header">
        <HeaderTitle title="Sahil Bondre">
          <HeaderButton toggle={this.handleButtonToggle} />
        </HeaderTitle>
        <HeaderItem title="Contact" link="#" />
        <HeaderItem title="Blog" link="#" />
        <HeaderItem title="Projects" link="/projects" />
      </div>
    )
  }
}

export default Header;