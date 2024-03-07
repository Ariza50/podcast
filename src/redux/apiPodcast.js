import { createApi } from '@reduxjs/toolkit/query/react'
import axiosInstance from "../config/axios";

const axiosBaseQuery =
  ({ baseUrl } = { myURL: '' }) =>
    async ({ url, method, data, params, headers }) => {
      console.log('-> params', params)
      console.log('-> data', data)
      try {
        const result = await axiosInstance({
          url: baseUrl,
          method,
          data,
          params,
          headers,
        })
        return { data: result }
      } catch (axiosError) {
        const err = axiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        }
      }
    }

export const apiPodcast = createApi({
  reducerPath: "podcastApi",
  baseQuery: axiosBaseQuery( {
    baseUrl: 'https://itunes.apple.com'
  }),
  endpoints: (builder) => ({
    getListPodcast: builder.query({
      query: () =>
        'us/rss/toppodcasts/limit=100/genre=1310/json',
    }),
    getPodcastDetail: builder.query({
      query: (podcastId) =>
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast &entity=podcastEpisode&limit=20`
    }),
    getEpisodeDetail: builder.query({
      query: (episodeId) =>
        `movie/${episodeId}?language=${process.env.LANGUAGE}`
    })
  }),
});

export const { useGetListPodcastQuery } = apiPodcast;
