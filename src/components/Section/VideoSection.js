import React from 'react';

import { VideoSection as CustomVideoSection } from './styled';

import { propTypes, defaultProps } from './props';

export const VideoSection = ({ children }) => {
  return <CustomVideoSection>{children}</CustomVideoSection>;
};

VideoSection.propTypes = propTypes;
VideoSection.defaultProps = defaultProps;
