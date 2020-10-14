import { mount } from 'enzyme';
import { ListItem } from '../../../components/List';
import { connectProviders } from '../../utils';

describe('testing the ListItem component', () => {
  test('should render the component without errors', () => {
    const video = {
      thumbnails: {
        high: {
          url: 'some url',
        },
      },
      title: 'Title',
      channelTitle: 'Channel Title',
      publishedAt: 'Monday',
      description: 'Description',
    };
    const wrapper = mount(connectProviders(ListItem, { video }));
    const thumbnail = wrapper.find('div img');
    const container = wrapper.find('div div');
    expect(thumbnail.at(0).props().src).toBe(video.thumbnails.high.url);
    expect(container.at(0).children().at(0).text()).toBe(video.title);
    expect(container.at(0).children().at(1).children().at(0).text()).toBe(
      video.channelTitle
    );
    expect(container.at(0).children().at(1).children().at(1).text()).not.toBe(
      ''
    );
    expect(container.at(0).children().at(2).text()).toBe(video.description);
  });
});
