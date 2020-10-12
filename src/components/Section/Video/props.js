import PropTypes from 'prop-types';

const propTypes = {
  video: PropTypes.object,
};

const defaultProps = {
  video: {
    title: '',
    embedHtml: '',
    channelTitle: '',
    publishedAt: '',
    description: '',
  },
};

export { propTypes, defaultProps };
