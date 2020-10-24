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
import Vote from './common/Vote';
import UserContext from './UserContext';

export default class Comments extends Component {
  state = {
    comments: {},
    newComment: '',
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    getCommentsByArticle(article_id)
      .then(({ data: { comments } }) =>
        this.setState({ comments, isLoading: false })
      )
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ newComment: e.target.value });
  };

  handleSubmit = (user) => {
    const { article_id } = this.props;
    const { newComment } = this.state;
    postComment(user, article_id, newComment)
      .then(({ data: { comment } }) => {
        const newComment = { ...comment };
        this.setState(({ comments }) => {
          return {
            newComment: '',
            comments: [newComment, ...comments]
          };
        });
      })
      .catch((err) => console.dir(err));
  };

  handleDelete = (comment_id) => {
    const { comments } = this.state;
    deleteComment(comment_id).then(() => {
      const copy = comments.filter(
        (comment) => comment.comment_id !== comment_id
      );
      this.setState({
        comments: copy
      });
    });
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => {
          const { newComment, isLoading, comments } = this.state;
          const statWriting = newComment === '';
          if (isLoading) return <Loader />;
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
                  value={newComment}
                  onChange={this.handleChange}
                />
                <IconButton
                  aria-label="send"
                  onClick={() => this.handleSubmit(user)}
                  disabled={statWriting}
                >
                  <SendIcon />
                </IconButton>
              </form>
              {comments.map((comment) => {
                const { author, body, created_at, comment_id, votes } = comment;
                return (
                  <div className="Comment-Block" key={comment_id}>
                    <Vote votes={votes} comment_id={comment_id} />
                    <div className="comment">
                      <h3>{author}</h3>
                      <p>{body}</p>
                      <p>{formatDate(created_at)}</p>
                      {author === user && (
                        <Button onClick={() => this.handleDelete(comment_id)}>
                          Delete
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
