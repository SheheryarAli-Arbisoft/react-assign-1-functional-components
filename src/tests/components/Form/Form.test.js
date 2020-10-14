import React from 'react';
import { mount } from 'enzyme';
import { Form, Input } from '../../../components/Form';
import { connectProviders } from '../../utils';

describe('testing the Form component', () => {
  test('should render the component without errors', () => {
    const wrapper = mount(
      connectProviders(Form, { children: [<Input />, <Input />] })
    );
    const form = wrapper.find('form');
    const input = wrapper.find('form input');
    expect(form.length).toBe(1);
    expect(input.length).toBe(2);
  });
});
