import { Link } from '@reach/router';
import React, { Component } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { getTopics } from '../../utils/axios';
import Loader from './Loader';

export default class Nav extends Component {
  state = {
    topic: 'home',
    topicList: [],
    isLoading: true
  };

  componentDidMount() {
    getTopics().then(({ data }) =>
      this.setState({ topicList: data.topics, isLoading: false })
    );
  }

  handleChange = (event) => {
    this.setState({ topic: event.target.value });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <nav className="Nav-Header">
        <FormControl variant="outlined" className="Topic-Menu">
          <InputLabel id="Topic-Input-Select">Topics</InputLabel>
          <Select
            labelId="Topic-Input-Select"
            id="Topic-Select"
            value={this.state.topic}
            onChange={this.handleChange}
            label="Topics"
          >
            <MenuItem component={Link} to="/" value={'home'}>
              Home
            </MenuItem>

            {this.state.topicList.map((topic) => {
              return (
                <MenuItem
                  className="Topic-Item"
                  component={Link}
                  to={`/topic/${topic.slug}`}
                  key={topic.slug}
                  value={topic.slug}
                >
                  {topic.slug}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </nav>
    );
  }
}
