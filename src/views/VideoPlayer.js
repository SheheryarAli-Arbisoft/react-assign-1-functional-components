import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { connect } from 'react-redux';

import VideosList from './VideosList';

import {
  VideoPlayerSection,
  VideoSection,
  RelatedVideosSection,
} from '../components/Section';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';

import { getVideoIFrame, getFormattedTime } from '../utils';

import { getVideo, getAllRelatedVideos } from '../actions/video';

const VideoPlayer = ({
  video: { loading, video },
  match,
  /* eslint-disable no-shadow */
  getVideo,
  getAllRelatedVideos,
}) => {
  useEffect(() => {
    getVideo(match.params.id);
    getAllRelatedVideos(match.params.id);
  }, [match.params.id]);

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
              <Description full>
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
  video: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getVideo: PropTypes.func.isRequired,
  getAllRelatedVideos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  video: state.video,
});

export default connect(mapStateToProps, { getVideo, getAllRelatedVideos })(
  VideoPlayer
);
