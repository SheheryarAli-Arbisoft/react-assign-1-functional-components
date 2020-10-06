import React from 'react';

import { Description as CustomDescription } from './styled';

import { propTypes, defaultProps } from './props';

const Description = ({ children, ...rest }) => {
  return <CustomDescription {...rest}>{children}</CustomDescription>;
};

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
