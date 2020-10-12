import React from 'react';
import { Thumbnail } from './Thumbnail';

export default {
  title: 'Thumbnail',
  component: Thumbnail,
};

const Template = args => <Thumbnail {...args} />;

const defaultArgs = {
  src:
    'https://cimg1.ibsrv.net/ibimg/hgm/1024x576-1/100/722/2020-ford-shelby-gt500-dragon-snake-concept_100722933.jpg',
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  small: true,
};
