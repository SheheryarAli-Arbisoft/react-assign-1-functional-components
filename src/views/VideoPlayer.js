import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { VideosList } from './VideosList';
import {
  VideoPlayerSection,
  VideoSection,
  RelatedVideosSection,
  Video,
} from '../components/Section';
import { loadVideo, loadAllRelatedVideos } from '../actions/weather';
import { getLoadingSelector, getVideoSelector } from '../selectors/video';

export const VideoPlayer = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Getting the current video
    dispatch(loadVideo(match.params.id));

    // Getting the related videos
    dispatch(loadAllRelatedVideos(match.params.id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  const loading = useSelector(getLoadingSelector);
  const video = useSelector(getVideoSelector);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <VideoPlayerSection>
        <VideoSection>
          {!loading && video && <Video video={video} />}
        </VideoSection>

        <RelatedVideosSection>
          <VideosList small />
        </RelatedVideosSection>
      </VideoPlayerSection>
    </Fragment>
  );
};

VideoPlayer.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  match: PropTypes.object.isRequired,
};
