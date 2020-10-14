import { mount } from 'enzyme';
import { Thumbnail } from '../../../components/Thumbnail';
import { connectProviders } from '../../utils';

describe('testing the Thumbnail component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(connectProviders(Thumbnail, { src: 'Image source' }));
    const thumbnail = wrapper.find('img');
    expect(thumbnail.at(0).props().src).toBe('Image source');
  });
});
