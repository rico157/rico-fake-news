import React, { Component } from 'react';
import Comments from '../components/Comments';
import { Author } from '../components/common/Author';
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
    const { article_id, title, author, body, created_at } = this.state.article;
    if (this.state.isLoading) return <Loader />;
    if (this.state.errorData) return <ErrorPage {...this.state.errorData} />;

    return (
      <div className="Article">
        <h2>{title}</h2>
        <h5>Created at: {created_at}</h5>

        <p>{body}</p>
        <Author author={author} />
        <Comments article_id={article_id} />
      </div>
    );
  }
}
