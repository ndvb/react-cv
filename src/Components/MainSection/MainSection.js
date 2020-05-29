import React, { Component } from 'react';
import {EducationSection, ExperienceSection, ProjectsSection} from './SubSections';
import './MainSection.scss';

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.sections=props.sections;
    }
     
    render() {
        const sections = this.sections.map((section, i) => {
            switch (section.sectionType) {
                case 'experience':
                    return <ExperienceSection {...section} key={i}/>
                case 'education':
                    return <EducationSection {...section} key={i}/>
                case 'projects':
                    return <ProjectsSection {...section} key={i}/>
                default:
                    return <div></div>
            }
        });

        return (  
            <div className="main-section">
                <h2>{this.title}</h2>
                {sections}
                <p>{this.description}</p>
            </div>
        );
    }
}
 
export default MainSection;