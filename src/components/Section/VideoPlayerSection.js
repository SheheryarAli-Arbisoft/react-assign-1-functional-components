import React from 'react';

import { VideoPlayerSection as CustomVideoPlayerSection } from './styled';

import { propTypes, defaultProps } from './props';

export const VideoPlayerSection = ({ children }) => {
  return <CustomVideoPlayerSection>{children}</CustomVideoPlayerSection>;
};

VideoPlayerSection.propTypes = propTypes;
VideoPlayerSection.defaultProps = defaultProps;
