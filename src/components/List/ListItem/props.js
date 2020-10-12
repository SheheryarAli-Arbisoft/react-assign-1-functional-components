import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.array,
  small: PropTypes.bool,
  video: PropTypes.object.isRequired,
};

export const defaultProps = {
  children: [],
  small: false,
};
