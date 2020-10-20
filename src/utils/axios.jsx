import axios from 'axios';

export const getArticles = () => {
  return axios.get('https://rico-nc-api.herokuapp.com/api/articles');
};

export const getArticlesById = (article_id) => {
  return axios.get(
    `https://rico-nc-api.herokuapp.com/api/articles/${article_id}`
  );
};
