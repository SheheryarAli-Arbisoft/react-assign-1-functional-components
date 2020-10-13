import { render } from 'enzyme';
import { SearchForm } from '../../views/SearchForm';
import { connectProviders } from '../utils';

describe('testing the SearchForm view', () => {
  test('should render component without errors', () => {
    const wrapper = render(connectProviders(SearchForm));
    const input = wrapper.find('form > input');
    const button = wrapper.find('form > button');
    expect(input.length).toBe(1);
    expect(button.length).toBe(1);
  });
});
