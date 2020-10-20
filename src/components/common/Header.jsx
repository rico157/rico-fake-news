import React, { Component } from 'react';
import Nav from './Nav';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>Rico NC News!</h1>
        <Nav />
      </header>
    );
  }
}
