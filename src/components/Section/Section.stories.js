import React, { Fragment } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { Video } from './Video';
import { RelatedVideos } from './RelatedVideos';
import { List, ListItem, ListItemContent } from '../List';
import { Thumbnail } from '../Thumbnail';
import { Text } from '../Text';

export default {
  title: 'Section',
  component: VideoPlayer,
};

const Template = args => <VideoPlayer {...args} />;

const getListItem = () => {
  return (
    <ListItem small>
      <Thumbnail
        small
        src='https://cimg1.ibsrv.net/ibimg/hgm/1024x576-1/100/722/2020-ford-shelby-gt500-dragon-snake-concept_100722933.jpg'
      />
      <ListItemContent small>
        <Text variant='title' small>
          Video Title
        </Text>
        <div>
          <Text variant='subtitle' small>
            Channel name
          </Text>
          <Text variant='subtitle' small>
            1 year ago
          </Text>
        </div>
        <Text variant='description' small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at
          odio ipsam nobis officia cum vel sit totam quaerat iusto ex aperiam
          ipsa distinctio qui expedita reprehenderit, soluta vitae voluptate
          obcaecati sed optio, suscipit illum nostrum laboriosam. Beatae quod
          porro commodi repudiandae illum culpa animi, ipsam omnis consequatur
          dolores eveniet fuga fugit esse, dignissimos labore deleniti odit
          molestias! Nobis id tenetur tempora animi perferendis qui quia non
          dolores commodi, accusantium itaque fugiat est, quis cum
          necessitatibus rem distinctio molestiae! Ullam doloremque, amet natus
          iste repudiandae corrupti voluptates aspernatur reprehenderit cum ut
          odit inventore dolorum fugiat, nam, libero necessitatibus dignissimos
          delectus?
        </Text>
      </ListItemContent>
    </ListItem>
  );
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
