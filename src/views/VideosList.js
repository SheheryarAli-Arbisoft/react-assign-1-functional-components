import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import VideosListItem from './VideoListItem';

import { List } from '../components/List';

import { connect } from 'react-redux';
import { getAllVideos } from '../actions/video';

const VideosList = ({
  video: { loading, videos },
  small,
  getAllVideos,
  location,
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
    <Fragment>
      <List small={small}>
        {!loading &&
          videos.length > 0 &&
          videos.map((video) => (
            <VideosListItem key={video.id} video={video} small={small} />
          ))}
      </List>
    </Fragment>
  );
};

VideosList.propTypes = {
  video: PropTypes.object.isRequired,
  small: PropTypes.bool,
  getAllVideos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  video: state.video,
});

export default connect(mapStateToProps, { getAllVideos })(VideosList);
