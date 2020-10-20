import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rico-nc-api.herokuapp.com/api'
});

export const getArticles = () => {
  return instance.get('/articles');
};

export const getArticlesById = (article_id) => {
  return instance.get(`/articles/${article_id}`);
};
