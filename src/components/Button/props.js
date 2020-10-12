import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  children: '',
  variant: '',
  size: 'normal',
};

export { propTypes, defaultProps };
