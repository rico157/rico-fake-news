import React, { Component } from 'react';
import AddArticle from './AddArticle';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <AddArticle />
      </footer>
    );
  }
}
