import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  small: PropTypes.bool,
};

export const defaultProps = {
  children: [],
  small: false,
};
