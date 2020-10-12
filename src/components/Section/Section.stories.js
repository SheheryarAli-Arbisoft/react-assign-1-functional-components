import React, { Fragment } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { Video } from './Video';
import { RelatedVideos } from './RelatedVideos';
import { List, ListItem, ListItemContent } from '../List';
import { Thumbnail } from '../Thumbnail';
import { Title, SubTitle, Description } from '../Text';
import { theme } from '../../theme';

export default {
  title: 'Section',
  component: VideoPlayer,
};

const Template = args => <VideoPlayer {...args} />;

const defaultArgs = {
  theme,
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
  children: [
    <Fragment>
      <Video theme={theme} />
      {/* <RelatedVideos theme={theme}>
        <List theme={theme} small>
          <ListItem theme={theme} small>
            <Thumbnail
              theme={theme}
              small
              src='https://cimg1.ibsrv.net/ibimg/hgm/1024x576-1/100/722/2020-ford-shelby-gt500-dragon-snake-concept_100722933.jpg'
            />
            <ListItemContent theme={theme} small>
              <Title theme={theme} small>
                Video Title
              </Title>
              <div>
                <SubTitle theme={theme} small>
                  Channel name
                </SubTitle>
                <SubTitle theme={theme} small>
                  1 year ago
                </SubTitle>
              </div>
              <Description theme={theme} small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum at odio ipsam nobis officia cum vel sit totam quaerat
                iusto ex aperiam ipsa distinctio qui expedita reprehenderit,
                soluta vitae voluptate obcaecati sed optio, suscipit illum
                nostrum laboriosam. Beatae quod porro commodi repudiandae illum
                culpa animi, ipsam omnis consequatur dolores eveniet fuga fugit
                esse, dignissimos labore deleniti odit molestias! Nobis id
                tenetur tempora animi perferendis qui quia non dolores commodi,
                accusantium itaque fugiat est, quis cum necessitatibus rem
                distinctio molestiae! Ullam doloremque, amet natus iste
                repudiandae corrupti voluptates aspernatur reprehenderit cum ut
                odit inventore dolorum fugiat, nam, libero necessitatibus
                dignissimos delectus?
              </Description>
            </ListItemContent>
          </ListItem>
        </List>
      </RelatedVideos> */}
    </Fragment>,
  ],
};
