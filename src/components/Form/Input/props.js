import PropTypes from 'prop-types';

const propTypes = {
  size: PropTypes.string,
  error: PropTypes.bool,
};

const defaultProps = {
  size: 'normal',
  error: false,
};

export { propTypes, defaultProps };
