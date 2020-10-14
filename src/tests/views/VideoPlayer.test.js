import { mount } from 'enzyme';
import { VideoPlayer } from '../../views/VideoPlayer';
import { connectProviders } from '../utils';

describe('testing the VideoPlayer view', () => {
  test('should render the component without errors', () => {
    mount(connectProviders(VideoPlayer));
  });
});
