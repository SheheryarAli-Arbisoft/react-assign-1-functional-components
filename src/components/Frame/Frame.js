import React from 'react';
import { Frame as CustomFrame } from './styled';
import { propTypes, defaultProps } from './props';

let videoUrl = '';

export const Frame = ({ title, width, height, embedHtml, ...rest }) => {
  if (embedHtml !== '') {
    // eslint-disable-next-line prefer-destructuring
    videoUrl = embedHtml.split(' ')[3];
    videoUrl = `https:/${videoUrl.slice(6, -1)}`;
  }

  return (
    <CustomFrame
      title={title}
      width={width}
      height={height}
      src={videoUrl}
      {...rest}
    />
  );
};

Frame.propTypes = propTypes;
Frame.defaultProps = defaultProps;
