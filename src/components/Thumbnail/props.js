import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

const defaultProps = {
  small: false,
};

export { propTypes, defaultProps };
