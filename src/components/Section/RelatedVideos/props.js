import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const defaultProps = {
  children: [],
};

export { propTypes, defaultProps };
