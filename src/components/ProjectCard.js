import React from 'react'

class ProjectCard extends React.Component {
  render() {
    return (
      <div id="project-card" className="card">
        <h4 className="level title">
          <a href={this.props.link}>
            {this.props.title}
          </a>
        </h4>
        <p className="subtitle">{this.props.stack}</p>
        <p>{this.props.content}</p>
      </div >
    )
  }
}

export default ProjectCard;