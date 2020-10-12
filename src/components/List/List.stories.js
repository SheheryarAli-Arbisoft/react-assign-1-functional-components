import React from 'react';
import { List } from './List';
import { ListItem } from './ListItem';

export default {
  title: 'List',
  component: List,
};

const Template = args => <List {...args} />;

export const Empty = Template.bind({});

const video = {
  id: 'Qqx_wzMmFeA',
  title: 'JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]',
  channelTitle: 'Clever Programmer',
  publishedAt: '2019-11-05T16:00:11Z',
  description:
    'Here is the best free javascript programming course on the planet. Made with lots of ❤️. Take your web development skills to the next level with this Clever ...',
  thumbnails: {
    default: {
      url: 'https://i.ytimg.com/vi/Qqx_wzMmFeA/default.jpg',
      width: 120,
      height: 90,
    },
    medium: {
      url: 'https://i.ytimg.com/vi/Qqx_wzMmFeA/mqdefault.jpg',
      width: 320,
      height: 180,
    },
    high: {
      url: 'https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg',
      width: 480,
      height: 360,
    },
  },
};

const getListItem = (small = false) => {
  return <ListItem video={video} small={small} />;
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  children: [getListItem()],
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  children: [getListItem(), getListItem(), getListItem()],
};

export const Small = Template.bind({});
Small.args = {
  children: [getListItem(true), getListItem(true), getListItem(true)],
};
