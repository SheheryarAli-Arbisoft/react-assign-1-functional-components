import { mount } from 'enzyme';
import { Button } from '../../../components/Button';
import { connectProviders } from '../../utils';

describe('testing the Button component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(connectProviders(Button, { children: 'Button' }));
    const button = wrapper.find('button');
    expect(button.text()).toBe('Button');
  });
});
