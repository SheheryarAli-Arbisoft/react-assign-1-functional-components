import React, { Fragment } from 'react';

import { Frame as CustomFrame } from './styled';

import { propTypes, defaultProps } from './props';

export const Frame = ({ title, width, height, embedHtml, ...rest }) => {
  let videoUrl = embedHtml.split(' ')[3];
  videoUrl = `https:/${videoUrl.slice(6, -1)}`;

  return (
    <Fragment>
      <CustomFrame
        title={title}
        width={width}
        height={height}
        src={videoUrl}
        {...rest}
      />
    </Fragment>
  );
};

Frame.propTypes = propTypes;
Frame.defaultProps = defaultProps;
