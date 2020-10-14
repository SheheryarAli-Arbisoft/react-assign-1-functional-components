import { mount } from 'enzyme';
import { Navbar } from '../../views/Navbar';
import { connectProviders } from '../utils';

describe('testing the Navbar view', () => {
  test('should render the component without errors', () => {
    mount(connectProviders(Navbar));
  });
});
