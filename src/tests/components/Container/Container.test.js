import { mount } from 'enzyme';
import { Container } from '../../../components/Container';
import { connectProviders } from '../../utils';

describe('testing the Container component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(Container, { children: 'This is a container' })
    );
    const container = wrapper.find('div');
    expect(container.text()).toBe('This is a container');
  });
});
