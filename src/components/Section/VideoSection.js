import React from 'react';

import { VideoSection as CustomVideoSection } from './styled';

const VideoSection = ({ children }) => {
  return <CustomVideoSection>{children}</CustomVideoSection>;
};

export default VideoSection;
