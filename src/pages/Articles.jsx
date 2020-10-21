import React, { Component } from 'react';
import { getArticles } from '../utils/axios';
import ArticleCard from '../components/ArticleCard';
import Loader from '../components/common/Loader';
import './Articles.css';
import ErrorPage from './ErrorPage';
import { parse } from 'query-string';

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    errorData: null,
    params: {}
  };

  componentDidMount() {
    const searchParams = parse(this.props.location.search);

    getArticles({ ...searchParams })
      .then(({ data: { articles } }) => {
        this.setState({
          articles,
          isLoading: false,
          params: { ...searchParams }
        });
      })
      .catch(({ response: { status, data, statusText } }) =>
        this.setState({
          errorData: { status, msg: data.msg, statusText },
          isLoading: false
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    const currentParams = parse(this.props.location.search);
    const prevParams = parse(prevProps.location.search);
    if (
      prevParams.sort_by !== currentParams.sort_by ||
      prevParams.topic !== currentParams.topic
    ) {
      getArticles({ ...currentParams })
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
          return <ArticleCard key={article_id} {...article} />;
        })}
      </div>
    );
  }
}
