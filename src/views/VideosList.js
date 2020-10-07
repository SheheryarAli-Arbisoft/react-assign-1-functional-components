import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import VideosListItem from './VideoListItem';

import { List } from '../components/List';

import { LOAD_ALL_VIDEOS } from '../sagas/types';

// Defining the selector for getting data from the state
const getLoadingFromState = state => state.video.loading;
const getVideosFromState = state => state.video.videos;

const VideosList = ({ dispatch, small, location }) => {
  useEffect(() => {
    if (location) {
      // Getting the search paramters from the url
      const description = queryString.parse(location.search).q;

      if (description) {
        dispatch({
          type: LOAD_ALL_VIDEOS,
          payload: description,
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const videosSelector = createSelector(
    getLoadingFromState,
    getVideosFromState,
    (loading, videos) => ({
      loading,
      videos,
    })
  );

  const { loading, videos } = useSelector(videosSelector);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <List small={small}>
        {!loading &&
          videos.length > 0 &&
          videos.map(video => (
            <VideosListItem key={video.id} video={video} small={small} />
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

export default connect(null, null)(VideosList);
