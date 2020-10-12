import React from 'react';
import { List } from './List';
import { ListItem } from './ListItem';
import { ListItemContent } from './ListItemContent';
import { Thumbnail } from '../Thumbnail';
import { Title, SubTitle, Description } from '../Text';
import { theme } from '../../theme';

export default {
  title: 'List',
  component: List,
};

const Template = args => <List {...args} />;

const defaultArgs = {
  theme,
};

export const Empty = Template.bind({});
Empty.args = {
  ...defaultArgs,
};

const getListItem = (small = false) => {
  return (
    <ListItem theme={theme} small={small}>
      <Thumbnail
        theme={theme}
        small={small}
        src='https://cimg1.ibsrv.net/ibimg/hgm/1024x576-1/100/722/2020-ford-shelby-gt500-dragon-snake-concept_100722933.jpg'
      />
      <ListItemContent theme={theme} small={small}>
        <Title theme={theme} small={small}>
          Video Title
        </Title>
        <div>
          <SubTitle theme={theme} small={small}>
            Channel name
          </SubTitle>
          <SubTitle theme={theme} small={small}>
            1 year ago
          </SubTitle>
        </div>
        <Description theme={theme} small={small}>
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
        </Description>
      </ListItemContent>
    </ListItem>
  );
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  ...defaultArgs,
  children: [getListItem()],
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  ...defaultArgs,
  children: [getListItem(), getListItem(), getListItem()],
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  children: [getListItem(true), getListItem(true), getListItem(true)],
};
