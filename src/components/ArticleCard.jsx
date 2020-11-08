import React, { useState } from 'react';
import { Link } from '@reach/router';
import './ArticleCard.css';
import { Badge, Card, CardContent } from '@material-ui/core';
import { Author } from './common/Author';
import { formatDate } from '../utils/utils';
import Vote from './common/Vote';

export default function ArticleCard(props) {
  const {
    article_id,
    title,
    author,
    topic,
    created_at,
    comment_count,
    votes
  } = props;

  const [state, setState] = useState({
    raised: false
  });

  return (
    <Card
      raised={state.raised}
      className="Article-List-Card"
      onMouseOver={() => setState({ raised: true })}
      onMouseOut={() => setState({ raised: false })}
    >
      <Vote votes={votes} article_id={article_id} />
      <CardContent className="Article-List-Content">
        <div className="Articles-Card-Author" color="textSecondary">
          <Author author={author} />
        </div>
        <p color="textSecondary">{topic}</p>
        <Link className="Articles-Link" to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{formatDate(created_at)}</p>
        <Link
          className="Comment_button_Link"
          to={`/articles/${article_id}/comments`}
        >
          Comments{' '}
          <Badge
            className="Badge"
            badgeContent={comment_count}
            color="primary"
          />
        </Link>
      </CardContent>
    </Card>
  );
}
