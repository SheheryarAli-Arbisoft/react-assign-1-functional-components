import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Thumbnail } from '../components/Thumbnail';
import { ListItem, ListItemContent } from '../components/List';
import { Title, SubTitle, Description } from '../components/Text';
import { getFormattedTime } from '../utils';

export const VideoListItem = ({ video, small }) => {
  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <Link to={`/${video.id}`}>
        <ListItem small={small}>
          <Thumbnail src={video.thumbnails.high.url} small={small} />
          <ListItemContent small={small}>
            <Title small={small}>{video.title}</Title>
            <div>
              <SubTitle small={small}>{video.channelTitle}</SubTitle>
              <SubTitle small={small}>
                {getFormattedTime(video.publishedAt)}
              </SubTitle>
            </div>
            <Description small={small}>{video.description}</Description>
          </ListItemContent>
        </ListItem>
      </Link>
    </Fragment>
  );
};

VideoListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  video: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  small: PropTypes.bool,
};
