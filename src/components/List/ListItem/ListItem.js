import React from 'react';
import { ListItem as CustomListItem } from './styled';
import { propTypes, defaultProps } from './props';
import { ListItemContent } from '../ListItemContent';
import { Thumbnail } from '../../Thumbnail';
import { Text } from '../../Text';
import { getFormattedTime } from '../../../utils';

export const ListItem = ({ video, small, ...rest }) => {
  const { thumbnails, title, channelTitle, publishedAt, description } = video;

  return (
    <CustomListItem {...rest}>
      <Thumbnail src={thumbnails.high.url} small={small} />
      <ListItemContent small={small}>
        <Text variant='title' small={small}>
          {title}
        </Text>
        <div>
          <Text variant='subtitle' small={small}>
            {channelTitle}
          </Text>
          <Text variant='subtitle' small={small}>
            {getFormattedTime(publishedAt)}
          </Text>
        </div>
        <Text variant='description' small={small}>
          {description}
        </Text>
      </ListItemContent>
    </CustomListItem>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
