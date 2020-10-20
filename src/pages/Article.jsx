import React, { Component } from 'react';
import Loader from '../components/common/Loader';
import { getArticlesById } from '../utils/axios';
import './Article.css';
import ErrorPage from './ErrorPage';

export default class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    errorData: null
  };
  componentDidMount() {
    getArticlesById(this.props.article_id)
      .then(({ data: { article } }) => {
        this.setState({ article, isLoading: false });
      })

      .catch(({ response }) => {
        this.setState({
          errorData: {
            status: response.status,
            msg: response.data.msg,
            statusText: response.statusText
          },
          isLoading: false
        });
      });
  }
  render() {
    const {
      title,
      author,
      body,
      comment_count,
      created_at,
      topic,
      votes
    } = this.state.article;
    if (this.state.isLoading) return <Loader />;
    if (this.state.errorData) return <ErrorPage {...this.state.errorData} />;

    return (
      <div className="Article">
        <h2>{title}</h2>
        <h5>Created at: {created_at}</h5>
        <h5>By: {author}</h5>
        <p>{body}</p>
      </div>
    );
  }
}
