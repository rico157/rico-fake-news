import React from 'react';
import './ArticleCard.css';

export default function ArticleCard(props) {
  return (
    <div className="ArticleCard">
      <h5>Article {props.article_id} </h5>
      <h4>Title {props.title} </h4>
      <h5>Author {props.author} </h5>
      <h5>Topic {props.topic} </h5>
    </div>
  );
}
