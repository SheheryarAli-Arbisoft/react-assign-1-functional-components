import {
  getLoadingSelector,
  getVideoSelector,
  getVideosSelector,
} from '../../selectors/video';

const state = {
  video: {
    loading: false,
    video: {
      title: 'Title 1',
    },
    videos: [
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
    ],
  },
};

describe('testing the video selectors', () => {
  test('should return the loading property from state', () => {
    expect(getLoadingSelector(state)).toBe(false);
  });
  test('should return the video property from state', () => {
    expect(getVideoSelector(state)).toEqual({
      title: 'Title 1',
    });
  });
  test('should return the videos property from state', () => {
    expect(getVideosSelector(state)).toEqual([
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
    ]);
  });
});
