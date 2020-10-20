import { Link } from '@reach/router';
import React, { Component } from 'react';
import { getArticles } from '../utils/axios';
import ArticleCard from '../components/ArticleCard';
import Loader from '../components/common/Loader';
import './Articles.css';

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    getArticles().then(({ data: { articles } }) => {
      this.setState({ articles, isLoading: false });
    });
  }
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div className="Articles">
        <h2>Many articles</h2>
        {articles.map((article) => {
          const { article_id } = article;
          return (
            <Link to={`/articles/${article_id}`} key={article_id}>
              <ArticleCard {...article} />
            </Link>
          );
        })}
      </div>
    );
  }
}
