import axios from 'axios';

export const getArticles = () => {
  return axios.get('https://rico-nc-api.herokuapp.com/api/articles');
};
