import React from 'react';

import { VideoPlayerSection as CustomVideoPlayerSection } from './styled';

const VideoPlayerSection = ({ children }) => {
  return <CustomVideoPlayerSection>{children}</CustomVideoPlayerSection>;
};

export default VideoPlayerSection;
