import React from 'react';
import { Link } from '@reach/router';
import './ArticleCard.css';
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent
} from '@material-ui/core';
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

  return (
    <Card raised={true} className="Article-List-Card">
      <CardContent className="Article-List-Content">
        <p color="textSecondary">{topic}</p>
        <Link className="Articles-Link" to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{formatDate(created_at)}</p>
        <div className="Articles-Card-Author" color="textSecondary">
          <Author author={author} />
        </div>
      </CardContent>
      <CardActions>
        <Vote votes={votes} article_id={article_id} />
        <Link
          className="Comment_button_Link"
          to={`/articles/${article_id}/comments`}
        >
          <Button color="secondary" variant="contained">
            Comments{' '}
            <Badge
              className="Badge"
              badgeContent={comment_count}
              color="primary"
            />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
