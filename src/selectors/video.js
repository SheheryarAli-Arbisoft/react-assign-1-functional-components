// Get the loading property from the video state
const getLoadingSelector = state => state.video.loading;

// Get the video property from the video state
const getVideoSelector = state => state.video.video;

// Get the videos property from the video state
const getVideosSelector = state => state.video.videos;

export { getLoadingSelector, getVideoSelector, getVideosSelector };
