import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

import '../styles/scaffold.scss'

class Scaffold extends React.Component {
  render() {
    return (
      <div id="scaffold">
        <Helmet>
          <title>Sahil Bondre</title>
          <meta name="description" content="Personal Portfolio" />
        </Helmet>
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