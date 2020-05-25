import axios from 'axios';

const api = axios.create({
  /**
   * Aqui sempre vai mudar pq o ip daqui desse pc no wifi muda...
   */
  // baseURL: 'http://localhost:3333/',
  // baseURL: 'http://192.168.1.7:3333/',
  baseURL: 'http://192.168.1.9:3333/',
});

export default api;
