import React from 'react';

import { Title as CustomTitle } from './styled';

import { propTypes, defaultProps } from './props';

const Title = ({ children, ...rest }) => {
  return <CustomTitle {...rest}>{children}</CustomTitle>;
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
