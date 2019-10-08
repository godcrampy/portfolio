import React from 'react'
import Scaffold from '../components/Scaffold'
import ProjectCard from '../components/ProjectCard'
import '../styles/projects.scss'

export default () => {
  return (
    <Scaffold>
      <div id="projects">
        <ProjectCard
          title="SVNIT 101"
          link="https://github.com/godcrampy/svnit-101"
          stack="Flutter, UI Design, Firebase"
          content="Android App for College Freshers." />
        <ProjectCard
          title="CompSci Heaven"
          link="https://github.com/godcrampy/compsci-heaven"
          stack="Javascript, Webpack, Netlify, Sass"
          content="Free Resources for people who love computers." />
        <ProjectCard
          title="MIPS Assembler"
          link="https://github.com/godcrampy/mips-assembler"
          stack="C++, MIPS Assembly"
          content="Assembler to emulate and execute programs written in MIPS assembly language." />
        <ProjectCard
          title="Express Local Auth Template"
          link="https://github.com/godcrampy/Express-Local-Auth-Template"
          stack="Node, Passport, MongDB, Express, ESLint, Sass"
          content="Starter backend template for local authentication with validation." />
        <ProjectCard
          title="Portfolio"
          link="https://github.com/godcrampy/portfolio"
          stack="Gatsby, UI Design, React"
          content="This website." />
        <ProjectCard
          title="Tech Quiz App"
          link="https://github.com/godcrampy/tech-quiz-app"
          stack="Vue, Firebase"
          content="A fun computer quiz app made with Vue." />
      </div>
    </Scaffold>
  )
}