import axios from 'axios';
import {enqueueSnackbar} from "notistack";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
  config.url = `https://api.allorigins.win/get?url=${encodeURIComponent(config.url)}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data = JSON.parse(response.data.contents);
  },
  (error) => {
    enqueueSnackbar(`Error Status ${error.response?.data.statusCode}: ${error} | ${error.response.data.message}`, { variant: 'error' });

    return Promise.reject((error.response && error.response.data) || 'Something went wrong');
  }
);

export default axiosInstance;
