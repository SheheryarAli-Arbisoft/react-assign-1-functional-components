import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object,
  fluid: PropTypes.bool,
};

const defaultProps = {
  children: [],
  fluid: false,
};

export { propTypes, defaultProps };
