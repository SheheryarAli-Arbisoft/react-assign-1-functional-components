import { mount } from 'enzyme';
import { Navbar } from '../../../components/Navbar';
import { connectProviders } from '../../utils';

describe('testing the Navbar component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(Navbar, { children: 'This is a navbar' })
    );
    const navbar = wrapper.find('div');
    expect(navbar.text()).toBe('This is a navbar');
  });
});
