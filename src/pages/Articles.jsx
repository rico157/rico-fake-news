import React, { Component } from 'react';
import { getArticles } from '../utils/axios';
import ArticleCard from '../components/ArticleCard';
import Loader from '../components/common/Loader';
import './Articles.css';
import ErrorPage from './ErrorPage';
import { parse } from 'query-string';
import TopicsSelector from '../components/common/TopicsSelector';
import SortOptions from '../components/common/SortOptions';

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    errorData: null,
    params: {},
    currentTopic: 'home',
    currentVariant: { created_at: 'contained' }
  };

  updateTopic = (topic) => {
    if (topic === 'home') {
      this.setState({
        currentTopic: 'home',
        currentVariant: { created_at: 'contained' }
      });
    } else {
      this.setState({ currentTopic: topic });
    }
  };

  updateVariant = (variant) => {
    this.setState({ currentVariant: variant });
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
        <TopicsSelector
          updateTopic={this.updateTopic}
          topic={this.state.currentTopic}
        />
        <SortOptions
          updateVariant={this.updateVariant}
          variant={this.state.currentVariant}
          topic={this.state.currentTopic}
        />
        {articles.map((article) => {
          const { article_id } = article;
          return <ArticleCard key={article_id} {...article} />;
        })}
      </div>
    );
  }
}
