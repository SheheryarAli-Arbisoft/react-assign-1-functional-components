import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array,
  small: PropTypes.bool,
  video: PropTypes.object,
};

const defaultProps = {
  children: [],
  small: false,
};

export { propTypes, defaultProps };
