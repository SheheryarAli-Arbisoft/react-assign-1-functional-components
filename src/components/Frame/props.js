import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  embedHtml: PropTypes.string.isRequired,
  frameBorder: PropTypes.string,
  allow: PropTypes.string,
  allowFullScreen: PropTypes.bool,
};

export const defaultProps = {
  title: '',
  width: '100%',
  height: '500px',
  frameBorder: '0',
  allow:
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true,
};
