import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export const defaultProps = {
  children: [],
};
