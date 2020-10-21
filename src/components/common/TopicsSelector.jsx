import { Link } from '@reach/router';
import React, { Component } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { getTopics } from '../../utils/axios';
import Loader from './Loader';

export default class TopicsSelector extends Component {
  state = {
    topicList: [],
    isLoading: true
  };

  componentDidMount() {
    getTopics().then(({ data }) =>
      this.setState({ topicList: data.topics, isLoading: false })
    );
  }

  handleChange = (event) => {
    this.props.updateTopic(event.target.value);
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div className="TopicsSelector">
        <FormControl variant="outlined" className="Topic-Menu">
          <InputLabel id="Topic-Input-Select">Topics</InputLabel>
          <Select
            labelId="Topic-Input-Select"
            id="Topic-Select"
            value={this.props.topic}
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
                  to={`/articles?topic=${topic.slug}`}
                  key={topic.slug}
                  value={topic.slug}
                >
                  <span style={{ textTransform: 'capitalize' }}>
                    {topic.slug}
                  </span>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}
