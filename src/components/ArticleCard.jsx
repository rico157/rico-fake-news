import React, { Component } from 'react';
import './ArticleCard.css';

export default class ArticleCard extends Component {
  render() {
    return (
      <div className="ArticleCard">
        <h5>Article {this.props.article_id} </h5>
        <h4>Title {this.props.title} </h4>
        <h5>Author {this.props.author} </h5>
        <h5>Topic {this.props.topic} </h5>
      </div>
    );
  }
}
