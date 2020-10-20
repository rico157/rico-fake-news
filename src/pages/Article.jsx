import React, { Component } from 'react';
import { getArticlesById } from '../utils/axios';
import './Article.css';

export default class Article extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
    getArticlesById(this.props.article_id).then(({ data: { article } }) => {
      this.setState({ article });
    });
  }
  render() {
    console.log(this.state.article);
    const {
      title,
      author,
      body,
      comment_count,
      created_at,
      topic,
      votes
    } = this.state.article;
    return (
      <div className="Article">
        <h2>{title}</h2>
        <h5>Created at: {created_at}</h5>
        <h5>By: {author}</h5>
        <p>{body}</p>
      </div>
    );
  }
}
