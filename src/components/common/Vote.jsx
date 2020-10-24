import { IconButton } from '@material-ui/core';
import React, { Component } from 'react';
import { patchVote } from '../../utils/axios';
import './Vote.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
        <IconButton onClick={() => this.handleVote(1)}>
          <ExpandLessIcon />
        </IconButton>
        <p>{this.state.userVote}</p>
        <IconButton onClick={() => this.handleVote(-1)}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    );
  }
}
