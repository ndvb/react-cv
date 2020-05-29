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
                    <span>{degree.school + ', '}</span>
                    <span>{degree.location + ' -- '}</span>
                    <span>{degree.degree}</span>
                </h3>
                <h4>{degree.timeline}</h4>
                <p>{degree.description}</p>
            </div>
        );
        return (  
            <div>
                <h2>{this.title}</h2>
                {listDegrees}
            </div>
        );
    }
}
 
export default EducationSection;