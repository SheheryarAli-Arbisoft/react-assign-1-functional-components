import React from 'react';
import parser from 'html-react-parser';
import { Video as CustomVideo } from './styled';
import { propTypes, defaultProps } from './props';
import { Frame } from '../../Frame';
import { Text } from '../../Text';
import { getFormattedTime } from '../../../utils';

export const Video = ({ video }) => {
  const { title, embedHtml, channelTitle, publishedAt, description } = video;

  return (
    <CustomVideo>
      <Frame title={title} embedHtml={embedHtml} />
      <Text variant='title' full>
        {title}
      </Text>
      <div>
        <Text variant='subtitle'>{channelTitle}</Text>
        <Text variant='subtitle'>{getFormattedTime(publishedAt)}</Text>
      </div>
      <Text variant='description' full>
        {parser(description.replaceAll('\n', '<br />'))}
      </Text>
    </CustomVideo>
  );
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
