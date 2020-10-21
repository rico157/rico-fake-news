import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rico-nc-api.herokuapp.com/api'
});

export const getArticles = (topic) => {
  return instance.get('/articles', {
    params: {
      topic
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
