import { mount } from 'enzyme';
import { List } from '../../../components/List';
import { connectProviders } from '../../utils';

describe('testing the List component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(List, { children: 'These are children of list item' })
    );
    const content = wrapper.find('div');
    expect(content.text()).toBe('These are children of list item');
  });
});
