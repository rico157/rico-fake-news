import React, { Component } from 'react';
import { getArticles } from '../utils/axios';
import ArticleCard from '../components/ArticleCard';
import Loader from '../components/common/Loader';
import './Articles.css';
import ErrorPage from './ErrorPage';
import { parse } from 'query-string';
import TopicsSelector from '../components/TopicsSelector';
import SortOptions from '../components/SortOptions';

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    errorData: null,
    params: {},
    currentTopic: '',
    currentVariant: { created_at: 'contained' }
  };

  updateTopic = (topic) => {
    this.setState({
      currentTopic: topic,
      currentVariant: { created_at: 'contained' }
    });
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
      .catch(this.errHandler);
  }

  componentDidUpdate(prevProps) {
    const { sort_by, topic } = parse(this.props.location.search);
    const prevParams = parse(prevProps.location.search);
    const newSort = prevParams.sort_by !== sort_by;
    const newTopic = prevParams.topic !== topic;
    if (newSort || newTopic) {
      getArticles({ sort_by, topic })
        .then(({ data: { articles } }) => {
          this.setState({
            articles,
            isLoading: false
          });
        })
        .catch(this.errHandler);
    }
  }

  errHandler = (err) => {
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
  };

  render() {
    const {
      articles,
      isLoading,
      errorData,
      currentTopic,
      currentVariant
    } = this.state;

    if (errorData) return <ErrorPage {...errorData} />;

    return (
      <div className="Articles">
        <div className="Articles-Header">
          <TopicsSelector updateTopic={this.updateTopic} topic={currentTopic} />
          <SortOptions
            updateVariant={this.updateVariant}
            variant={currentVariant}
            topic={currentTopic}
          />
        </div>
        <ul className="Articles-List">
          {!isLoading ? (
            articles.map((article) => {
              const { article_id } = article;
              return <ArticleCard key={article_id} {...article} />;
            })
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    );
  }
}
