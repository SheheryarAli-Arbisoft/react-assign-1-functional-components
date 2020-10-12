import React, { Fragment } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { Video } from './Video';
import { RelatedVideos } from './RelatedVideos';
import { List, ListItem } from '../List';

export default {
  title: 'Section',
  component: VideoPlayer,
};

const Template = args => <VideoPlayer {...args} />;

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

const getListItem = () => {
  return <ListItem video={video} small />;
};

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <Fragment>
      <Video
        video={{
          title:
            'Python Tutorial for Absolute Beginners #1 - What Are Variables?',
          channelTitle: 'CS Dojo',
          publishedAt: '2017-12-26T14:57:53Z',
          description:
            'Learn Python programming with this Python tutorial for beginners! Tips: 1. Here is the playlist of this series: https://goo.gl/eVauVX 2. If you want to learn faster than I talk, I’d recommend 1.25x or 1.5x speed :) 3. Check the outline in the comment section below if you want to skip around. 4. Download the sample files here to follow along (they are Jupyter Notebook files): https://www.csdojo.io/python1 5. Have fun! If anything is unclear, please let me know in a comment. Keep in touch on Facebook: https://www.facebook.com/entercsdojo Subscribe to my newsletter: https://www.csdojo.io/news Support me on Patreon: https://www.patreon.com/csdojo Outline (check the comment section for a clickable version): 0:00 : Introduction 0:17 : Who’s this tutorial for? 0:30 : An outline of this video 1:18 : What is Python and what can you do with it? 2:01 : What is IDE and why I chose Jupyter Notebook 3:09 : How Jupyter Notebook works 4:19 : How to install Python and Jupyter (through Anaconda) 5:58 : Launching Jupyter 7:59 : The print() function 10:24 : Introduction to variables 13:08 : What are variables (in Python)? 16:42 : Assigning a variable to another variable 19:03 : A practice problem - swapping two variables 20:40 : Solutions to the practice problem - swapping two variables',
          embedHtml:
            '<iframe width="480" height="270" src="//www.youtube.com/embed/Z1Yd7upQsXY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }}
      />
      <RelatedVideos>
        <List small>
          {getListItem()}
          {getListItem()}
          {getListItem()}
        </List>
      </RelatedVideos>
    </Fragment>,
  ],
};
