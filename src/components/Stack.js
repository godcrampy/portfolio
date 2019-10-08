import React from 'react'

import StackItem from './StackItem'
import '../styles/stack.scss'

import jsLogo from '../assets/stack/javascript.jpeg'
import reactLogo from '../assets/stack/react.png'
import nodeLogo from '../assets/stack/node.png'
import reduxLogo from '../assets/stack/redux.png'
import mongoLogo from '../assets/stack/mongo.png'
import graphqlLogo from '../assets/stack/graphql.png'
import gatsbyLogo from '../assets/stack/gatsby.svg'
import webpackLogo from '../assets/stack/webpack.png'
import firebaseLogo from '../assets/stack/firebase.jpg'
import gitLogo from '../assets/stack/git.png'
import pythonLogo from '../assets/stack/python.png'
import htmlLogo from '../assets/stack/html.png'
import npmLogo from '../assets/stack/npm.png'
import sassLogo from '../assets/stack/sass.png'
import cssLogo from '../assets/stack/css.png'
import cppLogo from '../assets/stack/cpp.png'
import eslintLogo from '../assets/stack/eslint.jpg'
import netlifyLogo from '../assets/stack/netlify.png'
import flutterLogo from '../assets/stack/flutter.png'
import expressLogo from '../assets/stack/express.png'

class Stack extends React.Component {
  render() {
    return (
      <div id="stack">
        <h3>Tools of Trade</h3>
        <section>
          <StackItem image={jsLogo} name="Javascript" />
          <StackItem image={nodeLogo} name="Node" />
          <StackItem image={reactLogo} name="React" />
          <StackItem image={reduxLogo} name="Redux" />
          <StackItem image={mongoLogo} name="MongoDB" />
          <StackItem image={graphqlLogo} name="GraphQL" />
          <StackItem image={gatsbyLogo} name="Gatsby" />
          <StackItem image={webpackLogo} name="Webpack" />
          <StackItem image={expressLogo} name="Express" />
          <StackItem image={htmlLogo} name="HTML5" />
          <StackItem image={cssLogo} name="CSS3" />
          <StackItem image={sassLogo} name="Sass" />
          <StackItem image={npmLogo} name="npm" />
          <StackItem image={gitLogo} name="Git" />
          <StackItem image={firebaseLogo} name="Firebase" />
          <StackItem image={flutterLogo} name="Flutter" />
          <StackItem image={netlifyLogo} name="Netlify" />
          <StackItem image={eslintLogo} name="ESLint" />
          <StackItem image={cppLogo} name="C++" />
          <StackItem image={pythonLogo} name="Python" />
        </section>
      </div>
    )
  }
}

export default Stack;