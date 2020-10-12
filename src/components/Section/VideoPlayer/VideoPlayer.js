import React from 'react';

import { VideoPlayer as CustomVideoPlayer } from './styled';

import { propTypes, defaultProps } from './props';

export const VideoPlayer = ({ children }) => {
  return <CustomVideoPlayer>{children}</CustomVideoPlayer>;
};

VideoPlayer.propTypes = propTypes;
VideoPlayer.defaultProps = defaultProps;
