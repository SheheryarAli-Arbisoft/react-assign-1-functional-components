import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  small: PropTypes.bool,
};

const defaultProps = {
  src: '',
  alt: '',
  small: false,
};

export { propTypes, defaultProps };
