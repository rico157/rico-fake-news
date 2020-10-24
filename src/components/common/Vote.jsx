import { IconButton } from '@material-ui/core';
import React, { Component } from 'react';
import { patchVote } from '../../utils/axios';
import './Vote.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default class Vote extends Component {
  state = {
    userVote: null,
    voted: false
  };

  handleVote = (newVote) => {
    const { article_id, comment_id } = this.props;
    this.setState((prevState) => {
      return {
        userVote: prevState.userVote + newVote,
        voted: true
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
    const { voted } = this.state;
    return (
      <div className="Vote">
        <IconButton disabled={voted} onClick={() => this.handleVote(1)}>
          <ExpandLessIcon />
        </IconButton>
        <p>{this.state.userVote}</p>
        <IconButton disabled={voted} onClick={() => this.handleVote(-1)}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    );
  }
}
