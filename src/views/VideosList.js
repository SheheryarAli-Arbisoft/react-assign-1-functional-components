import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';

import VideosListItem from './VideoListItem';

import { List } from '../components/List';

import { getAllVideos } from '../actions/video';

const VideosList = ({
  video: { loading, videos },
  small,
  location,
  // eslint-disable-next-line no-shadow
  getAllVideos,
}) => {
  useEffect(() => {
    if (location) {
      // Getting the search paramters from the url
      const description = queryString.parse(location.search).q;

      if (description) {
        getAllVideos(description);
      }
    }
  }, [location]);

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
  video: PropTypes.object.isRequired,
  small: PropTypes.bool,
  location: PropTypes.object,
  getAllVideos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  video: state.video,
});

export default connect(mapStateToProps, { getAllVideos })(VideosList);
