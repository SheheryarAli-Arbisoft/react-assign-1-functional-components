import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { VideoListItem } from './VideoListItem';
import { List } from '../components/List';
import { getLoadingSelector, getVideosSelector } from '../selectors/video';
import { loadAllVideos } from '../actions/weather';

export const VideosList = ({ small, location }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (location) {
      // Getting the search paramters from the url
      const description = queryString.parse(location.search).q;

      if (description) {
        dispatch(loadAllVideos(description));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const loading = useSelector(getLoadingSelector);
  const videos = useSelector(getVideosSelector);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <List small={small}>
        {!loading &&
          videos.length > 0 &&
          videos.map(video => (
            <VideoListItem key={video.id} video={video} small={small} />
          ))}
      </List>
    </Fragment>
  );
};

VideosList.propTypes = {
  /* eslint-disable react/forbid-prop-types, react/require-default-props */
  small: PropTypes.bool,
  location: PropTypes.object,
};
