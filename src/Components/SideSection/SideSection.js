import React, { Component } from 'react';
import {listItems} from '../../Utils';
import './SideSection.css';
 
class SideSection extends Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
    }

    render() { 
        const sections = this.sections.map((section, i) => 
            <div className={section.title.toLowerCase() + "-section"} key={i}>
                <h2>{section.title}</h2>
                <ul>{listItems(section.items)}</ul>
            </div>
        );

        return ( 
            <div className="side-section">
                {sections}
            </div> 
        );
    }
}
 
export default SideSection;