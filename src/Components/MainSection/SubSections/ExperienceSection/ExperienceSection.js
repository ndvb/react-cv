import React, { Component } from 'react';
import './ExperienceSection.scss';

class ExperienceSection extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.jobs = props.jobs;
    }
    render() {
        const listJobs = this.jobs.map((job, i) => 
            <div key={i}>
                <h3>
                    <span className="company">{job.company + ', '}</span>
                    <span className="location">{job.location + ' -- '}</span>
                    <span className="position">{job.position}</span>
                </h3>
                <h4>{job.timeline}</h4>
                <p>{job.description}</p>
            </div>
        );

        return (  
            <div className="experience-section">
                <h2>{this.title}</h2>
                {listJobs}
            </div>
        );
    }
}
 
export default ExperienceSection;