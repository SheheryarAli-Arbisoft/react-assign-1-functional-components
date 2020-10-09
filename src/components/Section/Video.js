import React, { Fragment } from 'react';
import parser from 'html-react-parser';
import { videoPropTypes, videoDefultProps } from './props';
import { Frame } from '../Frame';
import { Title, SubTitle, Description } from '../Text';
import { getFormattedTime } from '../../utils';

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

Video.propTypes = videoPropTypes;
Video.defaultProps = videoDefultProps;
