import {
  ALL_VIDEOS_LOADED,
  VIDEO_LOADED,
  ALL_RELATED_VIDEOS_LOADED,
  VIDEO_ERROR,
} from '../../actions/types';
import video from '../../reducers/video';

describe('testing the video reducer', () => {
  test('should return the default state', () => {
    const expectedState = {
      video: null,
      videos: [],
      loading: true,
      errors: null,
    };
    expect(video(undefined, {})).toEqual(expectedState);
  });

  test('should return the state with all the loaded videos', () => {
    const videos = [
      {
        title: 'Javascript',
        channelTitle: 'Traversy Media',
      },
      {
        title: '.Net Core MVC',
        channelTitle: 'Programming with Mosh',
      },
    ];
    const action = {
      type: ALL_VIDEOS_LOADED,
      payload: videos,
    };
    const expectedState = {
      video: null,
      videos,
      loading: false,
      errors: null,
    };
    expect(
      video(
        {
          video: null,
          videos: [],
          loading: false,
          errors: null,
        },
        action
      )
    ).toEqual(expectedState);
    expect(
      video(
        {
          video: null,
          videos: [
            {
              title: 'Python',
              channelTitle: 'Academind',
            },
            {
              title: 'Resident Evil 5',
              channelTitle: 'theRadBrad',
            },
            {
              title: 'Forged in Fire',
              channelTitle: 'History',
            },
          ],
          loading: false,
          errors: null,
        },
        action
      )
    ).toEqual(expectedState);
  });

  test('should return the state with the loaded video object', () => {
    const videoObj = {
      title: '.Net Core MVC',
      channelTitle: 'Programming with Mosh',
    };
    const action = {
      type: VIDEO_LOADED,
      payload: videoObj,
    };
    const expectedState = {
      video: videoObj,
      videos: [],
      loading: false,
      errors: null,
    };
    expect(
      video(
        {
          video: null,
          videos: [],
          loading: true,
          errors: null,
        },
        action
      )
    ).toEqual(expectedState);
    expect(
      video(
        {
          video: {
            title: 'React',
            channelTitle: 'Traversy Media',
          },
          videos: [],
          loading: true,
          errors: null,
        },
        action
      )
    ).toEqual(expectedState);
  });

  test('should return the state will all the loaded related videos', () => {
    const videos = [
      {
        title: 'Javascript',
        channelTitle: 'Traversy Media',
      },
      {
        title: '.Net Core MVC',
        channelTitle: 'Programming with Mosh',
      },
    ];
    const action = {
      type: ALL_RELATED_VIDEOS_LOADED,
      payload: videos,
    };
    const expectedState = {
      video: null,
      videos,
      loading: false,
      errors: null,
    };
    expect(
      video(
        {
          video: null,
          videos: [],
          loading: false,
          errors: null,
        },
        action
      )
    ).toEqual(expectedState);
    expect(
      video(
        {
          video: null,
          videos: [
            {
              title: 'Python',
              channelTitle: 'Academind',
            },
            {
              title: 'Resident Evil 5',
              channelTitle: 'theRadBrad',
            },
            {
              title: 'Forged in Fire',
              channelTitle: 'History',
            },
          ],
          loading: false,
          errors: null,
        },
        action
      )
    ).toEqual(expectedState);
  });

  test('should return the state with the error object', () => {
    const errors = {
      msg: 'Internal Server Error',
      status: 500,
    };
    const action = {
      type: VIDEO_ERROR,
      payload: errors,
    };
    const expectedState = {
      video: null,
      videos: [],
      loading: false,
      errors,
    };
    expect(
      video(
        {
          video: null,
          videos: [],
          loading: true,
          errors: null,
        },
        action
      )
    ).toEqual(expectedState);
    expect(
      video(
        {
          video: null,
          videos: [],
          loading: true,
          errors: {
            msg: 'Not Found',
            status: 404,
          },
        },
        action
      )
    ).toEqual(expectedState);
  });
});
