import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  embedHtml: PropTypes.string,
  frameBorder: PropTypes.string,
  allow: PropTypes.string,
  allowFullScreen: PropTypes.bool,
};

const defaultProps = {
  title: '',
  width: '100%',
  height: '500px',
  embedHtml: '',
  frameBorder: '0',
  allow:
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true,
};

export { propTypes, defaultProps };
