import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rico-nc-api.herokuapp.com/api'
});

// const instance = axios.create({
//   baseURL: 'http://localhost:9090/api'
// });

export const getArticles = (queries) => {
  const topic = queries.topic || '';
  const sort_by = queries.sort_by || '';
  const limit = queries.limit || '5';
  return instance.get('/articles', {
    params: {
      topic,
      sort_by,
      limit
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

export const patchVote = (article_id, inc_votes, comment_id) => {
  if (comment_id) {
    return instance.patch(`/comments/${comment_id}`, { inc_votes });
  }
  return instance.patch(`/articles/${article_id}`, { inc_votes });
};
