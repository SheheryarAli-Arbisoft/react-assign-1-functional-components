import { LOAD_VIDEO, LOAD_ALL_VIDEOS, LOAD_ALL_RELATED_VIDEOS } from './types';
import { loadVideo, loadAllVideos, loadAllRelatedVideos } from './weather';

describe('testing action creators', () => {
  describe('testing weather action creators', () => {
    test('loading a video by id', () => {
      const id = 'abc123';
      const expectedAction = {
        type: LOAD_VIDEO,
        payload: id,
      };

      expect(loadVideo(id)).toEqual(expectedAction);
    });

    test('loading all videos according to description', () => {
      const description = 'Javascript crash course';
      const expectedAction = {
        type: LOAD_ALL_VIDEOS,
        payload: description,
      };

      expect(loadAllVideos(description)).toEqual(expectedAction);
    });

    test('loading all related videos related to a video id', () => {
      const id = 'abc123';
      const expectedAction = {
        type: LOAD_ALL_RELATED_VIDEOS,
        payload: id,
      };

      expect(loadAllRelatedVideos(id)).toEqual(expectedAction);
    });
  });
});
