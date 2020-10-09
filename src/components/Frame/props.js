import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  frameBorder: PropTypes.string,
  allow: PropTypes.string,
  allowFullScreen: PropTypes.bool,
  embedHtml: PropTypes.string.isRequired,
};

const defaultProps = {
  title: 'defaultTitle',
  width: '100%',
  height: '500px',
  frameBorder: '0',
  allow:
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true,
};

export { propTypes, defaultProps };
