import React, { Component } from 'react';
import {listItems} from '../../Utils';
import './Header.scss'

export default class Header extends Component {
    constructor(props) {
      super(props);
      this.title = props.title;
      this.attributes = props.attributes;
    }

    render() {
      return (
        <div className="header">
          <h1>{this.title}</h1>
          <ul>{listItems(this.attributes)}</ul>
        </div>
      );
    }
  }