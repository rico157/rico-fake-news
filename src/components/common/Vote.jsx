import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { patchVote } from '../../utils/axios';
import './Vote.css';

export default class Vote extends Component {
  state = {
    userVote: null
  };

  handleVote = (newVote) => {
    this.setState((prevState) => {
      return {
        userVote: prevState.userVote + newVote
      };
    });

    patchVote(this.props.article_id, newVote, this.props.comment_id).catch(
      (err) => {
        this.setState((prevState) => {
          return {
            userVote: prevState.userVote - newVote
          };
        });
      }
    );
  };

  componentDidMount() {
    this.setState({ userVote: this.props.votes });
  }

  render() {
    console.log(this.state.userVote);
    return (
      <div className="Vote">
        <Button onClick={() => this.handleVote(1)}>Up</Button>
        <p>Rating: {this.state.userVote}</p>
        <Button onClick={() => this.handleVote(-1)}>Down</Button>
      </div>
    );
  }
}
