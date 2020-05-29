import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() { 
        return (  
            <div className="footer">
                <div>Made with React.js</div>
                <div>
                    <span>Source Code: </span>
                    <a href="https://github.com/ndvb/react-cv">https://github.com/ndvb/react-cv</a>
                </div>
            </div>
        );
    }
}
 
export default Footer;