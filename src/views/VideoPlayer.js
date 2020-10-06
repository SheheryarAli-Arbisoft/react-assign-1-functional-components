import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { connect, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import VideosList from './VideosList';

import {
  VideoPlayerSection,
  VideoSection,
  RelatedVideosSection,
} from '../components/Section';
import { Title, SubTitle, Description } from '../components/Text';

import { getVideoIFrame, getFormattedTime } from '../utils';

import { getVideo, getAllRelatedVideos } from '../actions/video';

// Defining the selector for getting data from the state
const getLoadingFromState = state => state.video.loading;
const getVideoFromState = state => state.video.video;

const VideoPlayer = ({
  match,
  /* eslint-disable no-shadow */
  getVideo,
  getAllRelatedVideos,
}) => {
  useEffect(() => {
    getVideo(match.params.id);
    getAllRelatedVideos(match.params.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  const videoSelector = createSelector(
    getLoadingFromState,
    getVideoFromState,
    (loading, video) => ({
      loading,
      video,
    })
  );

  const { loading, video } = useSelector(videoSelector);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <VideoPlayerSection>
        <VideoSection>
          {!loading && video && (
            <Fragment>
              {getVideoIFrame(video.embedHtml)}
              <Title>{video.title}</Title>
              <div>
                <SubTitle>{video.channelTitle}</SubTitle>
                <SubTitle>{getFormattedTime(video.publishedAt)}</SubTitle>
              </div>
              <Description>
                {parser(video.description.replaceAll('\n', '<br />'))}
              </Description>
            </Fragment>
          )}
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
  getVideo: PropTypes.func.isRequired,
  getAllRelatedVideos: PropTypes.func.isRequired,
};

export default connect(null, { getVideo, getAllRelatedVideos })(VideoPlayer);
