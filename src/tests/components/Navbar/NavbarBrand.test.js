import { mount } from 'enzyme';
import { NavbarBrand } from '../../../components/Navbar';
import { connectProviders } from '../../utils';

describe('testing the NavbarBrand component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(NavbarBrand, { children: 'This is a navbar brand' })
    );
    const navbarBrand = wrapper.find('div');
    expect(navbarBrand.text()).toBe('This is a navbar brand');
  });
});
