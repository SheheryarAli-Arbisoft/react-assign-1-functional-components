import { mount } from 'enzyme';
import { Frame } from '../../../components/Frame';
import { connectProviders } from '../../utils';

describe('testing the Frame component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(Frame, {
        embedHtml:
          'fksdjfldskfjdls fksdjflsdkfjdsldsk fkjsdlfksdjflsdkfjsdlk fksjdfldskfjsklfjdskl',
      })
    );
    const frame = wrapper.find('iframe');
    expect(frame.length).toBe(1);
  });
});
