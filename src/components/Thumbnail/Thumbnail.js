import React from 'react';

import { Thumbnail as CustomThumbnail } from './styled';

import { propTypes, defaultProps } from './props';

const Thumbnail = ({ src }) => {
  return <CustomThumbnail src={src} />;
};

Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;

export default Thumbnail;
