import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array,
  small: PropTypes.bool,
};

const defaultProps = {
  children: [],
  small: false,
};

export { propTypes, defaultProps };
