import { mount } from 'enzyme';
import { Input } from '../../../components/Form';
import { connectProviders } from '../../utils';

describe('testing the Form component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(connectProviders(Input, { placeholder: 'Search' }));
    const input = wrapper.find('input');
    expect(input.at(0).props().placeholder).toBe('Search');
  });
});
