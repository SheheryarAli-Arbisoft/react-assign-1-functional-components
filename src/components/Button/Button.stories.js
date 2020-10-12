import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = args => <Button {...args} />;

const defaultArgs = {
  children: 'Button',
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: 'secondary',
};

export const Info = Template.bind({});
Info.args = {
  ...defaultArgs,
  variant: 'info',
};

export const Danger = Template.bind({});
Danger.args = {
  ...defaultArgs,
  variant: 'danger',
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: 'large',
};
