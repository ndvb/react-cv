import React, { Component } from 'react';
import './ContactInfo.scss'

class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.address = props.address;
        this.city = props.city;
        this.postalCode = props.postalCode;
        this.phoneNumber = props.phoneNumber;
        this.email = props.email;
    }
    
    render() { 
        return (  
            <div className="contact-info">
                <div>{this.address}</div>
                <div>{this.city} {this.postalCode}</div>
                <div>{this.phoneNumber}</div>
                <div>{this.email}</div>
            </div>
        );
    }
}
 
export default ContactInfo;