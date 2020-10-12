import React from 'react';
import parser from 'html-react-parser';
import { Video as CustomVideo } from './styled';
import { propTypes, defaultProps } from './props';
import { Frame } from '../../Frame';
import { Title, SubTitle, Description } from '../../Text';
import { getFormattedTime } from '../../../utils';

export const Video = ({ video }) => {
  const { title, embedHtml, channelTitle, publishedAt, description } = video;

  return (
    <CustomVideo>
      <Frame title={title} embedHtml={embedHtml} />
      <Title>{title}</Title>
      <div>
        <SubTitle>{channelTitle}</SubTitle>
        <SubTitle>{getFormattedTime(publishedAt)}</SubTitle>
      </div>
      <Description full>
        {parser(description.replaceAll('\n', '<br />'))}
      </Description>
    </CustomVideo>
  );
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
