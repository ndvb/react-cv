import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    constructor(props) {
      super(props);
      this.text = props.text;
      this.linkText = props.linkText;
    }

    render() { 
        return (  
            <div className="footer">
                <div>{this.text}</div>
                <div>
                    <span>{this.linkText}: </span>
                    <a href="https://github.com/ndvb/react-cv">https://github.com/ndvb/react-cv</a>
                </div>
            </div>
        );
    }
}
 
export default Footer;