import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from '@reach/router';
import React from 'react';

export default function SortOptions(props) {
  const { created_at, comment_count, votes } = props.variant;
  const { topic } = props;
  const query = topic !== 'home' && topic ? `?topic=${topic}&` : '?';

  const handleSort = (value) => {
    props.updateVariant({ [value]: 'contained' });
  };

  return (
    <div className="SortOptions">
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          component={Link}
          to={`/${query}sort_by=created_at`}
          variant={created_at}
          onClick={() => handleSort('created_at')}
        >
          New
        </Button>
        <Button
          component={Link}
          to={`/${query}sort_by=articles.comment_count`}
          variant={comment_count}
          onClick={() => handleSort('comment_count')}
        >
          Discussed
        </Button>
        <Button
          component={Link}
          to={`/${query}sort_by=votes`}
          variant={votes}
          onClick={() => handleSort('votes')}
        >
          Voted
        </Button>
      </ButtonGroup>
    </div>
  );
}
