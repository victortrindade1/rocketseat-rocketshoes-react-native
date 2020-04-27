import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.github.com',
  // baseURL: 'http://localhost:3333/',
  baseURL: 'http://192.168.1.7:3333/',
  // headers: {
  //   Accept: 'application/json',
  // },
});

export default api;
