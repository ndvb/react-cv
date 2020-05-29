import React, { Component } from 'react';
import './ProjectsSection.scss';

class ProjectsSection extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.projects = props.projects;
    }
    render() { 
        const listProjects = this.projects.map((project, i) => {
            let links;
            if (project.links) {
                links = project.links.map((link, i) =>
                    <div key={i}>
                        <span>{link.text} </span>
                        <a href={link.link}>{link.link}</a>
                    </div>
                )
            }
            return (
                <div key={i}>
                    <h3>
                        <span>{project.name}</span>
                        <span> -- </span>
                        <span>{project.type}</span>
                    </h3>
                    <p>{project.description}</p>
                    {links}
                </div>
            )
        });

        return ( 
            <div>
                <h2>{this.title}</h2>
                {listProjects}
            </div>
         );
    }
}
 
export default ProjectsSection;