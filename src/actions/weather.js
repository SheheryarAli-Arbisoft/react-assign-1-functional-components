import { LOAD_VIDEO, LOAD_ALL_RELATED_VIDEOS, LOAD_ALL_VIDEOS } from './types';

export const loadVideo = id => ({
  type: LOAD_VIDEO,
  payload: id,
});

export const loadAllVideos = description => ({
  type: LOAD_ALL_VIDEOS,
  payload: description,
});

export const loadAllRelatedVideos = id => ({
  type: LOAD_ALL_RELATED_VIDEOS,
  payload: id,
});
