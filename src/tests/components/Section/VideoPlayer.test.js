import { mount } from 'enzyme';
import { VideoPlayer } from '../../../components/Section';
import { connectProviders } from '../../utils';

describe('testing the VideoPlayer component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(VideoPlayer, { children: 'This is some content' })
    );
    const content = wrapper.find('div');
    expect(content.text()).toBe('This is some content');
  });
});
