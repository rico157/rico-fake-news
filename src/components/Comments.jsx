import React, { Component } from 'react';
import { getCommentsByArticle } from '../utils/axios';
import Loader from './common/Loader';

export default class Comments extends Component {
  state = {
    comments: {},
    isLoading: true
  };

  componentDidMount() {
    getCommentsByArticle(this.props.article_id)
      .then(({ data: { comments } }) =>
        this.setState({ comments, isLoading: false })
      )
      .catch((err) => console.log(err));
  }
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        <h2>Comments</h2>
        {this.state.comments.map((comment) => {
          const { author, body, created_at, comment_id } = comment;
          return (
            <div key={comment_id}>
              <h3>{author}</h3>
              <p>{body}</p>
              <p>{created_at}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
