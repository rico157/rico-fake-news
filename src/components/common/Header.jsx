import React, { Component } from 'react';
import Nav from './Nav';
import './Header.css';
import { Link } from '@reach/router';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Link to="/">
          <h1>Rico NC News!</h1>
        </Link>
        <Nav />
      </header>
    );
  }
}
