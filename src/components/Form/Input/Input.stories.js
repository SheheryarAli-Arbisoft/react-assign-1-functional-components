import React from 'react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = args => <Input {...args} />;

const defaultArgs = {
  type: 'text',
  placeholder: 'Name',
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large',
};
