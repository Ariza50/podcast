import {createSlice} from '@reduxjs/toolkit';
import axiosInstance from "../../config/axios";

const initialState = {
  isLoading: false,
  podcastList: [],
  podcast: null,
};

const slice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getPodcastsListSuccess(state, action) {
      state.isLoading = false;
      state.podcastList = action.payload;
    },
    getPodcastsDetailSuccess(state, action) {
      state.isLoading = false;
      state.podcast = action.payload;
    },
  }
});

export default slice.reducer;

export function getPodcastList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosInstance.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      dispatch(slice.actions.getPodcastsListSuccess(response.feed.entry));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getPodcastDetail(podcastId) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosInstance.get(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast &entity=podcastEpisode&limit=20`)
      dispatch(slice.actions.getPodcastsDetailSuccess(response));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
