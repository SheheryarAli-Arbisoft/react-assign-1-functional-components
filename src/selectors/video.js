import { createSelector } from 'reselect';

// Get the loading property from the video state
const getLoadingSelector = createSelector(
  state => state.video.loading,
  loading => loading
);

// Get the video property from the video state
const getVideoSelector = createSelector(
  state => state.video.video,
  video => video
);

// Get the videos property from the video state
const getVideosSelector = createSelector(
  state => state.video.videos,
  videos => videos
);

export { getLoadingSelector, getVideoSelector, getVideosSelector };
