import { createSelector } from 'reselect';

// Get the loading property from the video state
export const getLoadingSelector = createSelector(
  state => state.video.loading,
  loading => loading
);

// Get the video property from the video state
export const getVideoSelector = createSelector(
  state => state.video.video,
  video => video
);

// Get the videos property from the video state
export const getVideosSelector = createSelector(
  state => state.video.videos,
  videos => videos
);
