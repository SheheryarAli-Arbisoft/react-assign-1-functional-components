import { mount } from 'enzyme';
import { Text } from '../../../components/Text';
import { connectProviders } from '../../utils';

describe('testing the Text component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(Text, { children: 'This is some text' })
    );
    const text = wrapper.find('div');
    expect(text.text()).toBe('This is some text');
  });
});
