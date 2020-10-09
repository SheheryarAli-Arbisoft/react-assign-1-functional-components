import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object,
};

const videoPropTypes = {
  ...propTypes,
  video: PropTypes.object.isRequired,
};

const defaultProps = {};

const videoDefultProps = {
  ...defaultProps,
};

export { propTypes, videoPropTypes, defaultProps, videoDefultProps };
