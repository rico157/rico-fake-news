import React from 'react';
import './ArticleCard.css';
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent
} from '@material-ui/core';
import { Author } from './common/Author';

export default function ArticleCard(props) {
  const { title, author, topic, created_at, comment_count } = props;

  return (
    <Card raised={true} className="Article-List-Card">
      <CardContent className="Article-List-Content">
        <p color="textSecondary">{topic}</p>
        <h2>{title}</h2>
        <p>{Date(created_at)}</p>
        <div className="Articles-Card-Author" color="textSecondary">
          <Author author={author} />
        </div>
      </CardContent>
      <CardActions>
        <Button color="secondary" variant="contained">
          Comments{' '}
          <Badge
            className="Badge"
            badgeContent={comment_count}
            color="primary"
          />
        </Button>
      </CardActions>
    </Card>
    // <div className="ArticleCard">
    //   <h5>Article {props.article_id} </h5>
    //   <h4>Title {props.title} </h4>
    //   <h5>Author {props.author} </h5>
    //   <h5>Topic {props.topic} </h5>
    // </div>
  );
}
