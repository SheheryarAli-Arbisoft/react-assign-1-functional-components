import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { Frame } from '../components/Frame';
import { Title, SubTitle, Description } from '../components/Text';
import { getFormattedTime } from '../utils';

export const Video = ({ video }) => {
  return (
    <Fragment>
      <Frame title={video.title} embedHtml={video.embedHtml} />
      <Title>{video.title}</Title>
      <div>
        <SubTitle>{video.channelTitle}</SubTitle>
        <SubTitle>{getFormattedTime(video.publishedAt)}</SubTitle>
      </div>
      <Description full>
        {parser(video.description.replaceAll('\n', '<br />'))}
      </Description>
    </Fragment>
  );
};

Video.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  video: PropTypes.object.isRequired,
};
