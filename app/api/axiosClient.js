import { message } from 'antd';
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'http://10.210.39.133:8181',
  paramsSerializer: params => queryString.stringify(params),
  headers: {
    'token-id': '556a686c-dfb9-4b26-8b41-d3c0fab02e1e'
  }
})

axiosClient.interceptors.request.use(async (config) => {
    
      return config
});

axiosClient.interceptors.response.use((response) => {
    if (response.status === 200) {
        return Promise.resolve(response.data);
    }
    return Promise.reject(response);
},
error => {
    message.error(error.message)
});

export default axiosClient;