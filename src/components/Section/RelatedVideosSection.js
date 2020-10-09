import React from 'react';

import { RelatedVideosSection as CustomRelatedVideosSection } from './styled';

import { propTypes, defaultProps } from './props';

export const RelatedVideosSection = ({ children }) => {
  return <CustomRelatedVideosSection>{children}</CustomRelatedVideosSection>;
};

RelatedVideosSection.propTypes = propTypes;
RelatedVideosSection.defaultProps = defaultProps;
