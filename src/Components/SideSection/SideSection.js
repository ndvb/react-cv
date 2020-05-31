import React, { Component } from 'react';
import {listItems} from '../../Utils';
import './SideSection.scss';
 
class SideSection extends Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
    }

    render() { 
        const sections = this.sections.map((section, i) => 
            <div className={section.title.toLowerCase() + "-section"} key={i}>
                <h2 className="title">{section.title}</h2>
                <ul className="list">{listItems(section.items)}</ul>
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