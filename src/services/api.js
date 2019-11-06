import axios from 'axios';
import {getToken} from '../utils/storage'
const api = axios.create({
  baseURL: 'http://192.168.43.61:8000/api/v1/user/',
});
api.defaults.timeout = 60000;
// Add a request interceptor
api.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = "Bearer "+token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

// Add a response interceptor
api.interceptors.response.use(function (response) {
  console.log("API RESPONSE",response)
  return response;
}, function (error) {
  console.log("API RESPONSE ERROR",error)
  return Promise.reject(error);
});

export default api;
