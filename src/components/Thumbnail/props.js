import PropTypes from 'prop-types';

export const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  small: PropTypes.bool,
};

export const defaultProps = {
  src: '',
  alt: '',
  small: false,
};
