import { Button, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import './Comments.css';
import SendIcon from '@material-ui/icons/Send';
import React, { Component } from 'react';
import {
  deleteComment,
  getCommentsByArticle,
  postComment
} from '../utils/axios';
import Loader from './common/Loader';
import { formatDate } from '../utils/utils';

export default class Comments extends Component {
  state = {
    comments: {},
    newComment: '',
    isLoading: true
  };

  componentDidMount() {
    getCommentsByArticle(this.props.article_id)
      .then(({ data: { comments } }) =>
        this.setState({ comments, isLoading: false })
      )
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ newComment: e.target.value });
  };

  handleSubmit = () => {
    postComment('weegembump', this.props.article_id, this.state.newComment)
      .then(({ data: { comment } }) => {
        const { author, body, created_at, comment_id } = comment;
        this.setState((prevState) => {
          const copy = [...prevState.comments];
          copy.unshift({ author, body, created_at, comment_id });
          return {
            comments: copy
          };
        });
      })
      .catch((err) => console.dir(err));
  };

  handleDelete = (comment_id) => {
    deleteComment(comment_id).then(() =>
      this.setState((prevState) => {
        const copy = this.state.comments.filter(
          (comment) => comment.comment_id !== comment_id
        );

        return { comments: copy };
      })
    );
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div className="Comments">
        <h2>Comments</h2>
        <form className="new-comment">
          <TextField
            id="outlined-textarea"
            label=""
            placeholder="Write a comment..."
            multiline
            variant="outlined"
            value={this.state.newComment}
            onChange={this.handleChange}
          />
          <IconButton aria-label="send" onClick={this.handleSubmit}>
            <SendIcon />
          </IconButton>
        </form>
        {this.state.comments.map((comment) => {
          const { author, body, created_at, comment_id } = comment;
          return (
            <div key={comment_id} className="comment">
              <h3>{author}</h3>
              <p>{body}</p>
              <p>{formatDate(created_at)}</p>
              {author === 'weegembump' && (
                <Button onClick={() => this.handleDelete(comment_id)}>
                  Delete
                </Button>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
