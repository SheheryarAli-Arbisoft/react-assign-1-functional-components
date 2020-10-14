import { mount } from 'enzyme';
import { ListItemContent } from '../../../components/List';
import { connectProviders } from '../../utils';

describe('testing the ListItemContent component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(ListItemContent, {
        children: 'These are children of list item content',
      })
    );
    const content = wrapper.find('div');
    expect(content.text()).toBe('These are children of list item content');
  });
});
