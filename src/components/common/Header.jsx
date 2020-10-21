import React, { Component } from 'react';
import TopicsSelector from './TopicsSelector';
import './Header.css';
import { Link } from '@reach/router';
import SortOptions from './SortOptions';
import { Button } from '@material-ui/core';

export default class Header extends Component {
  state = {
    currentTopic: 'home',
    currentVariant: { created_at: 'contained' }
  };

  updateTopic = (topic) => {
    if (topic === 'home') {
      this.setState({
        currentTopic: 'home',
        currentVariant: { created_at: 'contained' }
      });
    } else {
      this.setState({ currentTopic: topic });
    }
  };

  updateVariant = (variant) => {
    this.setState({ currentVariant: variant });
  };

  render() {
    return (
      <header className="Header">
        <Link to="/">
          <Button onClick={() => this.updateTopic('home')}>
            <h1>Rico NC News!</h1>
          </Button>
        </Link>
        <TopicsSelector
          updateTopic={this.updateTopic}
          topic={this.state.currentTopic}
        />
        <SortOptions
          updateVariant={this.updateVariant}
          variant={this.state.currentVariant}
          topic={this.state.currentTopic}
        />
      </header>
    );
  }
}
