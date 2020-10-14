import { mount } from 'enzyme';
import { Video } from '../../../components/Section';
import { connectProviders } from '../../utils';

describe('testing the Video component', () => {
  test('should render the component without errors', () => {
    const video = {
      title: 'Title',
      channelTitle: 'Channel Title',
      embedHtml:
        'fksdjflsdfkjds fksdfjsdlkfds  fksjflsdkjfsdlk fksdljfldskfjsdl',
      publishedAt: 'Monday',
      description: 'Description',
    };
    const wrapper = mount(connectProviders(Video, { video }));
    const frame = wrapper.find('div iframe');
    const container = wrapper.find('div div');
    expect(frame.at(0).props().title).toBe(video.title);
    expect(container.at(0).text()).toBe(video.title);
    expect(container.at(1).children().at(0).text()).toBe(video.channelTitle);
    expect(container.at(1).children().at(1).text()).not.toBe('');
    expect(container.at(2).text()).not.toBe('');
  });
});
