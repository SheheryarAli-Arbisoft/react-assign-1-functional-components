import React from 'react';

import { Video as CustomVideo } from './styled';

import { propTypes, defaultProps } from './props';

export const Video = ({ children }) => {
  return <CustomVideo>{children}</CustomVideo>;
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
