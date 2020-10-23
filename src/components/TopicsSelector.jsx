import { Link } from '@reach/router';
import React, { Component } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { getTopics } from '../utils/axios';
import Loader from './common/Loader';

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
    const { updateTopic } = this.props;
    updateTopic(event.target.value);
  };

  render() {
    const { isLoading, topicList } = this.state;
    const { topic } = this.props;

    if (isLoading) return <Loader />;
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

            {topicList.map(({ slug }) => {
              return (
                <MenuItem
                  className="Topic-Item"
                  component={Link}
                  to={`/articles?topic=${slug}`}
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
