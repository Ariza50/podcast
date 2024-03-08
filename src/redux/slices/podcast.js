import {createSlice} from '@reduxjs/toolkit';
import axiosInstance from "../../config/axios";
import * as dateFns from "date-fns";
import {store} from "../store";

const initialState = {
  isLoading: false,
  podcastList: [],
  podcastListExpiresAt: null,
  podcast: [],
};

const slice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getPodcastsListSuccess(state, action) {
      const newExpiresAt = dateFns.addDays(new Date(), 1);
      state.isLoading = false;
      state.podcastList = action.payload;
      state.podcastListExpiresAt = newExpiresAt;
    },
    getPodcastsDetailSuccess(state, action) {
      state.isLoading = false;
      const index = state.podcast.findIndex(podcast => podcast.podcastId === action.payload.podcastId);
      const newExpiresAt = dateFns.addDays(new Date(), 1);
      if (index === -1) {
        state.podcast.push({
          podcastId: action.payload.podcastId,
          details: action.payload.response,
          expiresAt: newExpiresAt
        });
      } else {
        state.podcast[index].details = action.payload.response;
        state.podcast[index].expiresAt = newExpiresAt
      }
    },
  }
});

export default slice.reducer;

export function getPodcastList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const myStore = store.getState();

      if (dateFns.isBefore(new Date(), myStore.podcast.podcastListExpiresAt)) {
        dispatch(slice.actions.endLoading());
        return;
      }

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
      const myStore = store.getState();

      const index = myStore.podcast.podcast.findIndex(podcast => podcast.podcastId === podcastId);
      if (index !== -1 && !dateFns.isAfter(new Date(), myStore.podcast.podcast[index].expiresAt)) {
        dispatch(slice.actions.endLoading());
        return;
      }

      const response = await axiosInstance.get(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast &entity=podcastEpisode&limit=20`)
      dispatch(slice.actions.getPodcastsDetailSuccess({podcastId, response}));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
