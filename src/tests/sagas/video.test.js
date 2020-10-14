import {
  API_KEY,
  generateSearchUrl,
  generateSingleVideoUrl,
  generateRelatedVideosUrl,
  getRequiredVideosData,
  getRequiredSingleVideoData,
} from '../../sagas/video';

describe('testing the video saga', () => {
  test('should return a generated search URL', () => {
    const description = 'Some video description';
    const expectedURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${description}&type=video&key=${API_KEY}`;
    expect(generateSearchUrl(description)).toBe(expectedURL);
  });

  test('should return a generated related videos URL', () => {
    const id = 'abc123';
    const expectedURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&relatedToVideoId=${id}&type=video&key=${API_KEY}`;
    expect(generateRelatedVideosUrl(id)).toBe(expectedURL);
  });

  test('should return a generated single video URL', () => {
    const id = 'abc123';
    const expectedURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=${id}&key=${API_KEY}`;
    expect(generateSingleVideoUrl(id)).toBe(expectedURL);
  });

  test('should return the required videos data from response', () => {
    expect(getRequiredVideosData({ items: [] })).toEqual([]);
    expect(
      getRequiredVideosData({
        items: [
          {
            id: {
              videoId: 'abc123',
            },
            snippet: {
              title: 'Title 1',
              channelTitle: 'Channel Title 1',
              publishedAt: 'Monday',
              description: 'Description 1',
              thumbnails: 'Thumbnails 1',
            },
          },
        ],
      })
    ).toEqual([
      {
        id: 'abc123',
        title: 'Title 1',
        channelTitle: 'Channel Title 1',
        publishedAt: 'Monday',
        description: 'Description 1',
        thumbnails: 'Thumbnails 1',
      },
    ]);
    expect(
      getRequiredVideosData({
        items: [
          {
            id: {
              videoId: 'abc123',
            },
            snippet: {
              title: 'Title 1',
              channelTitle: 'Channel Title 1',
              publishedAt: 'Monday',
              description: 'Description 1',
              thumbnails: 'Thumbnails 1',
            },
          },
          {
            id: {
              videoId: 'def456',
            },
            snippet: {
              title: 'Title 2',
              channelTitle: 'Channel Title 2',
              publishedAt: 'Tuesday',
              description: 'Description 2',
              thumbnails: 'Thumbnails 2',
            },
          },
        ],
      })
    ).toEqual([
      {
        id: 'abc123',
        title: 'Title 1',
        channelTitle: 'Channel Title 1',
        publishedAt: 'Monday',
        description: 'Description 1',
        thumbnails: 'Thumbnails 1',
      },
      {
        id: 'def456',
        title: 'Title 2',
        channelTitle: 'Channel Title 2',
        publishedAt: 'Tuesday',
        description: 'Description 2',
        thumbnails: 'Thumbnails 2',
      },
    ]);
  });

  test('should return the required single video data from response', () => {
    expect(
      getRequiredSingleVideoData({
        snippet: {
          title: 'Title 1',
          channelTitle: 'Channel Title 1',
          publishedAt: 'Monday',
          description: 'Descritpion 1',
        },
        player: {
          embedHtml: 'Embed HTML',
        },
      })
    ).toEqual({
      title: 'Title 1',
      channelTitle: 'Channel Title 1',
      publishedAt: 'Monday',
      description: 'Descritpion 1',
      embedHtml: 'Embed HTML',
    });
  });
});
