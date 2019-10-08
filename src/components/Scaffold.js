import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/scaffold.scss'

class Scaffold extends React.Component {
  render() {
    return (
      <div id="scaffold">
        <Header />
        <div id="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Scaffold;