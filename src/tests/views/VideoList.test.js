import { mount } from 'enzyme';
import { VideoList } from '../../views/VideoList';
import { connectProviders } from '../utils';

describe('testing the VideoList view', () => {
  test('should render component without errors', () => {
    mount(connectProviders(VideoList));
  });
});
