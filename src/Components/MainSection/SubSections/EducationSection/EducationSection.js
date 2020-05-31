import React, { Component } from 'react';
import './EducationSection.scss';

class EducationSection extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.degrees = props.degrees;
    }
    render() { 
        const listDegrees = this.degrees.map((degree, i) => 
            <div key={i}>
                <h3>
                    <span className="school">{degree.school + ', '}</span>
                    <span className="location">{degree.location + ' -- '}</span>
                    <span className="degree">{degree.degree}</span>
                </h3>
                <h4>{degree.timeline}</h4>
                <p>{degree.description}</p>
            </div>
        );
        return (  
            <div className="education-section">
                <h2>{this.title}</h2>
                {listDegrees}
            </div>
        );
    }
}
 
export default EducationSection;