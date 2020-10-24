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
      <div class="Article-Page">
        <div className="Article">
          <Vote votes={votes} article_id={article_id} />
          <div class="Article-data">
            <Author author={author} />
            <h2>{title}</h2>
            <h5>{formatDate(created_at)}</h5>

            <p>{body}</p>
          </div>
        </div>
        <Comments article_id={article_id} />
      </div>
    );
  }
}
