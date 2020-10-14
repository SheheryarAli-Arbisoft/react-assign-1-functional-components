import { mount } from 'enzyme';
import { SearchForm } from '../../views/SearchForm';
import { connectProviders } from '../utils';

describe('testing the SearchForm view', () => {
  test('should render the component without errors', () => {
    mount(connectProviders(SearchForm));
  });
});
