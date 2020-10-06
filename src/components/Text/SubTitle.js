import React from 'react';

import { SubTitle as CustomSubTitle } from './styled';

import { propTypes, defaultProps } from './props';

const SubTitle = ({ children, ...rest }) => {
  return <CustomSubTitle {...rest}>{children}</CustomSubTitle>;
};

SubTitle.propTypes = propTypes;
SubTitle.defaultProps = defaultProps;

export default SubTitle;
