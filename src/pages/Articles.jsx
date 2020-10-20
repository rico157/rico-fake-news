import { Link } from '@reach/router';
import React, { Component } from 'react';
import { getArticles } from '../utils/axios';
import ArticleCard from '../components/ArticleCard';
import Loader from '../components/common/Loader';
import './Articles.css';
import ErrorPage from './ErrorPage';

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    errorData: null
  };

  componentDidMount() {
    getArticles(this.props.topic_id)
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response: { status, data, statusText } }) =>
        this.setState({
          errorData: { status, msg: data.msg, statusText },
          isLoading: false
        })
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic_id !== this.props.topic_id) {
      getArticles(this.props.topic_id)
        .then(({ data: { articles } }) => {
          this.setState({ articles, isLoading: false });
        })
        .catch(({ response: { status, data, statusText } }) =>
          this.setState({
            errorData: { status, msg: data.msg, statusText },
            isLoading: false
          })
        );
    }
  }
  render() {
    const { articles, isLoading, errorData } = this.state;
    if (isLoading) return <Loader />;
    if (errorData) return <ErrorPage {...errorData} />;

    return (
      <div className="Articles">
        <h2>Many articles</h2>
        {articles.map((article) => {
          const { article_id } = article;

          return (
            <Link
              className="Articles-Link"
              to={`/articles/${article_id}`}
              key={article_id}
            >
              <ArticleCard {...article} />
            </Link>
          );
        })}
      </div>
    );
  }
}
