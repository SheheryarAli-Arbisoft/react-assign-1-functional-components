import React from 'react';

import { RelatedVideos as CustomRelatedVideos } from './styled';

import { propTypes, defaultProps } from './props';

export const RelatedVideos = ({ children }) => {
  return <CustomRelatedVideos>{children}</CustomRelatedVideos>;
};

RelatedVideos.propTypes = propTypes;
RelatedVideos.defaultProps = defaultProps;
