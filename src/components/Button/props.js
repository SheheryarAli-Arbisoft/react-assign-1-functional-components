import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object,
  variant: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  variant: '',
  size: 'normal',
};

export { propTypes, defaultProps };
