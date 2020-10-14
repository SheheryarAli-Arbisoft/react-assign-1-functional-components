import {
  LOAD_VIDEO,
  LOAD_ALL_VIDEOS,
  LOAD_ALL_RELATED_VIDEOS,
} from '../../actions/types';
import {
  loadVideo,
  loadAllVideos,
  loadAllRelatedVideos,
} from '../../actions/video';

describe('testing the video action creators', () => {
  test('should return an action to load a single video', () => {
    const id = 'abc123';
    const expectedAction = {
      type: LOAD_VIDEO,
      payload: id,
    };
    expect(loadVideo(id)).toEqual(expectedAction);
  });

  test('should return an action to load all videos related to description', () => {
    const description = 'Javascript crash course';
    const expectedAction = {
      type: LOAD_ALL_VIDEOS,
      payload: description,
    };
    expect(loadAllVideos(description)).toEqual(expectedAction);
  });

  test('should return an action to load all related videos against a video', () => {
    const id = 'abc123';
    const expectedAction = {
      type: LOAD_ALL_RELATED_VIDEOS,
      payload: id,
    };
    expect(loadAllRelatedVideos(id)).toEqual(expectedAction);
  });
});
