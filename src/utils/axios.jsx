import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rico-nc-api.herokuapp.com/api'
});

export const getArticles = (queries) => {
  const topic = queries.topic || '';
  const sort_by = queries.sort_by || '';
  return instance.get('/articles', {
    params: {
      topic,
      sort_by
    }
  });
};

export const getArticlesById = (article_id) => {
  return instance.get(`/articles/${article_id}`);
};

export const getTopics = () => {
  return instance.get('/topics');
};

export const getCommentsByArticle = (article_id) => {
  return instance.get(`/articles/${article_id}/comments`);
};

export const postComment = (username, article_id, body) => {
  return instance.post(`/articles/${article_id}/comments`, {
    body,
    username
  });
};

export const deleteComment = (comment_id) => {
  return instance.delete(`/comments/${comment_id}`);
};
