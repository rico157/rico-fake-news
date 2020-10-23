import { Link } from '@reach/router';
import React, { Component } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { getTopics } from '../utils/axios';

export default class TopicsSelector extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    getTopics().then(({ data: { topics } }) =>
      this.setState({ topics, isLoading: false })
    );
  }

  handleChange = ({ target }) => {
    const { updateTopic } = this.props;
    updateTopic(target.value);
  };

  render() {
    const { topics } = this.state;
    const { topic } = this.props;

    return (
      <div className="TopicsSelector">
        <FormControl variant="outlined" className="Topic-Menu">
          <InputLabel id="Topic-Input-Select">Topics</InputLabel>
          <Select
            labelId="Topic-Input-Select"
            id="Topic-Select"
            value={topic}
            onChange={this.handleChange}
            label="Topics"
          >
            <MenuItem component={Link} to="/" value={'home'}>
              Home
            </MenuItem>

            {topics.map(({ slug }) => {
              return (
                <MenuItem
                  className="Topic-Item"
                  component={Link}
                  to={`/?topic=${slug}`}
                  key={slug}
                  value={slug}
                >
                  <span style={{ textTransform: 'capitalize' }}>{slug}</span>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}
