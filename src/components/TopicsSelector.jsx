import { Link } from '@reach/router';
import React, { Component } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { getTopics } from '../utils/axios';

export default class TopicsSelector extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    getTopics()
      .then(({ data: { topics } }) =>
        this.setState({ topics, isLoading: false })
      )
      .catch((err) => {
        if (err.response) {
          const {
            response: { status, data, statusText }
          } = err;
          this.setState({
            errorData: { status, msg: data.msg, statusText },
            isLoading: false
          });
        } else {
          const status = '';
          const msg = err.message;
          const statusText = 'Something went wrong';

          this.setState({
            errorData: { status, msg, statusText },
            isLoading: false
          });
        }
        console.dir(err);
      });
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
