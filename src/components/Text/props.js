import PropTypes from 'prop-types';

const propTypes = {
  small: PropTypes.bool,
  children: PropTypes.object,
};

const descriptionPropTypes = {
  ...propTypes,
  full: PropTypes.bool,
};

const defaultProps = {
  small: false,
};

const descriptionDefaultProps = {
  ...defaultProps,
  full: false,
};

export {
  propTypes,
  descriptionPropTypes,
  defaultProps,
  descriptionDefaultProps,
};
