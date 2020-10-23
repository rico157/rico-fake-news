import React, { Component } from 'react';
import Comments from '../components/Comments';
import { Author } from '../components/common/Author';
import Loader from '../components/common/Loader';
import Vote from '../components/common/Vote';
import { getArticlesById } from '../utils/axios';
import { formatDate } from '../utils/utils';
import './Article.css';
import ErrorPage from './ErrorPage';

export default class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    errorData: null
  };
  componentDidMount() {
    const { article_id } = this.props;
    getArticlesById(article_id)
      .then(({ data: { article } }) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        console.dir(err);
        const { status, data, statusText } = err.response;
        this.setState({
          errorData: {
            status: status,
            msg: data.msg,
            statusText: statusText
          },
          isLoading: false
        });
      });
  }
  render() {
    const {
      errorData,
      isLoading,
      article: { article_id, title, author, body, created_at, votes }
    } = this.state;
    if (isLoading) return <Loader />;
    if (errorData) return <ErrorPage {...errorData} />;

    return (
      <div className="Article">
        <Author author={author} />
        <h5>{formatDate(created_at)}</h5>
        <h2>{title}</h2>

        <p>{body}</p>
        <Vote votes={votes} article_id={article_id} />
        <Comments article_id={article_id} />
      </div>
    );
  }
}
