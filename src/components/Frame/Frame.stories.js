import React from 'react';
import { Frame } from './Frame';

export default {
  title: 'Frame',
  component: Frame,
};

const Template = args => <Frame {...args} />;

const defaultArgs = {
  embedHtml:
    '<iframe width="480" height="270" src="//www.youtube.com/embed/Qqx_wzMmFeA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
};
