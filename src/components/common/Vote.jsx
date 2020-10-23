import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { patchVote } from '../../utils/axios';
import './Vote.css';

export default class Vote extends Component {
  state = {
    userVote: null
  };

  handleVote = (newVote) => {
    const { article_id, comment_id } = this.props;
    this.setState((prevState) => {
      return {
        userVote: prevState.userVote + newVote
      };
    });

    patchVote(article_id, newVote, comment_id).catch((err) => {
      this.setState((prevState) => {
        return {
          userVote: prevState.userVote - newVote
        };
      });
    });
  };

  componentDidMount() {
    const { votes } = this.props;
    this.setState({ userVote: votes });
  }

  render() {
    return (
      <div className="Vote">
        <Button onClick={() => this.handleVote(1)}>Up</Button>
        <p>Rating: {this.state.userVote}</p>
        <Button onClick={() => this.handleVote(-1)}>Down</Button>
      </div>
    );
  }
}
