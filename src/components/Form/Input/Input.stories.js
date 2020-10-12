import React from 'react';
import { Input } from './Input';
import { theme } from '../../../theme';

export default {
  title: 'Input',
  component: Input,
};

const Template = args => <Input {...args} />;
const defaultArgs = {
  theme,
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
