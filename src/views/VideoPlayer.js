import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { useSelector, useDispatch } from 'react-redux';
import VideosList from './VideosList';
import {
  VideoPlayerSection,
  VideoSection,
  RelatedVideosSection,
} from '../components/Section';
import { Title, SubTitle, Description } from '../components/Text';
import { getVideoIFrame, getFormattedTime } from '../utils';
import { loadVideo, loadAllRelatedVideos } from '../actions/weather';
import { getLoadingSelector, getVideoSelector } from '../selectors/video';

const VideoPlayer = ({ match }) => {
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
};

export default VideoPlayer;
