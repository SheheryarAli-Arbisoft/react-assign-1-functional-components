import React from 'react';
import { Text } from './Text';

export default {
  title: 'Text',
  component: Text,
};

const Template = args => <Text {...args} />;

const defaultArgs = {
  children: 'Text',
};

export const Heading = Template.bind({});
Heading.args = {
  ...defaultArgs,
  variant: 'heading',
};

export const Title = Template.bind({});
Title.args = {
  ...defaultArgs,
  variant: 'title',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  ...defaultArgs,
  variant: 'subtitle',
};

export const Description = Template.bind({});
Description.args = {
  ...defaultArgs,
  variant: 'description',
};
