import { Link } from '@reach/router';
import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav-Header">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Search</li>
          <li>Slug</li>
        </ul>
      </nav>
    );
  }
}
