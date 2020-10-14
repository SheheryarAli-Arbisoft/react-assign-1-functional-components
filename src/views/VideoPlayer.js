import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { VideoList } from './VideoList';
import {
  VideoPlayer as CustomVideoPlayer,
  Video,
  RelatedVideos,
} from '../components/Section';
import { loadVideo, loadAllRelatedVideos } from '../actions/weather';
import { getLoadingSelector, getVideoSelector } from '../selectors/video';

export const VideoPlayer = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    // Getting the current video
    dispatch(loadVideo(id));

    // Getting the related videos
    dispatch(loadAllRelatedVideos(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loading = useSelector(getLoadingSelector);
  const video = useSelector(getVideoSelector);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <CustomVideoPlayer>
        {!loading && video && <Video video={video} />}
        <RelatedVideos>
          <VideoList small />
        </RelatedVideos>
      </CustomVideoPlayer>
    </Fragment>
  );
};
