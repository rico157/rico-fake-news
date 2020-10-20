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
          <li>
            <select name="sort by">
              <option value="0">Newest</option>
              <option value="1">Title</option>
              <option value="2">Author</option>
            </select>
          </li>
        </ul>
      </nav>
    );
  }
}
