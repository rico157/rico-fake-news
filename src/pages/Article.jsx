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
    getArticlesById(this.props.article_id)
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

    // Axios.get(`https://avatars.dicebear.com/api/avataaars/${this.state.article.author}.svg`).then(({data}) => )
  }
  render() {
    const {
      article_id,
      title,
      author,
      body,
      created_at,
      votes
    } = this.state.article;
    if (this.state.isLoading) return <Loader />;
    if (this.state.errorData) return <ErrorPage {...this.state.errorData} />;

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
