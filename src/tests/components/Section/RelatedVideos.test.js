import { mount } from 'enzyme';
import { RelatedVideos } from '../../../components/Section';
import { connectProviders } from '../../utils';

describe('testing the RelatedVideos component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(RelatedVideos, { children: 'This is some content' })
    );
    const content = wrapper.find('div');
    expect(content.text()).toBe('This is some content');
  });
});
