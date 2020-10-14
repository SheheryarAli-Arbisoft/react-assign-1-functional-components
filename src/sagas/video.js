import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_ALL_VIDEOS,
  ALL_VIDEOS_LOADED,
  LOAD_ALL_RELATED_VIDEOS,
  ALL_RELATED_VIDEOS_LOADED,
  LOAD_VIDEO,
  VIDEO_LOADED,
  VIDEO_ERROR,
} from '../actions/types';

const API_KEY = 'AIzaSyA6vjCwXxs-wFd7_Hr0eFA6YuHYX7INahM';

// Generate the search url
export const generateSearchUrl = description => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${description}&type=video&key=${API_KEY}`;
};

// Get required data from response
export const getRequiredVideosData = response => {
  let result = [];

  response.items.forEach(item => {
    // Destructuring the required fields
    const { videoId: id } = item.id;

    const {
      title,
      channelTitle,
      publishedAt,
      description,
      thumbnails,
    } = item.snippet;

    // Adding the object to the results array
    result = [
      ...result,
      {
        id,
        title,
        channelTitle,
        publishedAt,
        description,
        thumbnails,
      },
    ];
  });

  return result;
};

// This is the worker for loading all the videos related to the description
export function* getAllVideos(action) {
  const { payload: description } = action;

  try {
    // Getting all the video results related to the description
    let result = yield call(() => axios.get(generateSearchUrl(description)));

    // Getting required data from response
    result = getRequiredVideosData(result.data);

    yield put({
      type: ALL_VIDEOS_LOADED,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: VIDEO_ERROR,
      payload: err,
    });
  }
}

// Generate realted videos url
export const generateRelatedVideosUrl = id => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&relatedToVideoId=${id}&type=video&key=${API_KEY}`;
};

// Get all videos related to a video
export function* getAllRelatedVideos(action) {
  const { payload: id } = action;

  try {
    // Getting all the videos related to the current video
    let result = yield call(() => axios.get(generateRelatedVideosUrl(id)));

    // Getting required data from response
    result = getRequiredVideosData(result.data);

    yield put({
      type: ALL_RELATED_VIDEOS_LOADED,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

// Generate single video url
export const generateSingleVideoUrl = id => {
  return `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=${id}&key=${API_KEY}`;
};

// Get required single video data from response
export const getRequiredSingleVideoData = response => {
  // Destructuring the required fields
  const { title, channelTitle, publishedAt, description } = response.snippet;

  const { embedHtml } = response.player;

  return {
    title,
    channelTitle,
    publishedAt,
    description,
    embedHtml,
  };
};

// Get a single video
export function* getVideo(action) {
  const { payload: id } = action;

  try {
    // Getting the video related to the id
    let result = yield call(() => axios.get(generateSingleVideoUrl(id)));

    // Getting the required data from the response
    result = getRequiredSingleVideoData(result.data.items[0]);

    yield put({
      type: VIDEO_LOADED,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

// This is the watcher which listens for all the different types of actions
export function* videoSaga() {
  yield takeEvery(LOAD_ALL_VIDEOS, getAllVideos);
  yield takeEvery(LOAD_ALL_RELATED_VIDEOS, getAllRelatedVideos);
  yield takeEvery(LOAD_VIDEO, getVideo);
}
