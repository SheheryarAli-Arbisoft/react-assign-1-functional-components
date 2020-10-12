import React from 'react';
import { List } from './List';
import { ListItem } from './ListItem';
import { ListItemContent } from './ListItemContent';
import { Thumbnail } from '../Thumbnail';
import { Text } from '../Text';

export default {
  title: 'List',
  component: List,
};

const Template = args => <List {...args} />;

export const Empty = Template.bind({});

const getListItem = (small = false) => {
  return (
    <ListItem small={small}>
      <Thumbnail
        small={small}
        src='https://cimg1.ibsrv.net/ibimg/hgm/1024x576-1/100/722/2020-ford-shelby-gt500-dragon-snake-concept_100722933.jpg'
      />
      <ListItemContent small={small}>
        <Text variant='title' small={small}>
          Video Title
        </Text>
        <div>
          <Text variant='subtitle' small={small}>
            Channel name
          </Text>
          <Text variant='subtitle' small={small}>
            1 year ago
          </Text>
        </div>
        <Text variant='description' small={small}>
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
