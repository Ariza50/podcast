import axios from 'axios';
import {enqueueSnackbar} from "notistack";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
  config.url = `https://api.allorigins.win/get?url=${encodeURIComponent(config.url)}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // const jsonParse = JSON.parse(response.data.contents);
    return response.data = JSON.parse(response.data.contents).feed.entry;
    // return response.data = response.data.feed.entry;
  },
  (error) => {
    enqueueSnackbar(`Error Status ${error.response?.data.statusCode}: ${error} | ${error.response.data.message}`, { variant: 'error' });

    return Promise.reject((error.response && error.response.data) || 'Something went wrong');
  }
);

export default axiosInstance;
