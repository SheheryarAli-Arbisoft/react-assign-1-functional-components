import { render } from 'enzyme';
import { Navbar } from '../../views/Navbar';
import { connectProviders } from '../utils';

describe('testing the Navbar view', () => {
  test('should render component without errors', () => {
    const wrapper = render(connectProviders(Navbar));
    const anchorText = wrapper.find('div > div > a');
    expect(anchorText.attr('href')).toBe('/');
    expect(anchorText.text()).toBe('Youtube Video Player');
  });
});
