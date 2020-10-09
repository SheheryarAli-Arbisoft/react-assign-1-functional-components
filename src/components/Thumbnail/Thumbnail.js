import React from 'react';

import { Thumbnail as CustomThumbnail } from './styled';

import { propTypes, defaultProps } from './props';

export const Thumbnail = ({ ...rest }) => {
  return <CustomThumbnail {...rest} />;
};

Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;
