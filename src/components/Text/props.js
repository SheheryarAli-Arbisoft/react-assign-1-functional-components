import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.any,
  small: PropTypes.bool,
  full: PropTypes.bool,
  variant: PropTypes.string,
};

const defaultProps = {
  small: false,
  full: false,
  variant: '',
};

export { propTypes, defaultProps };
