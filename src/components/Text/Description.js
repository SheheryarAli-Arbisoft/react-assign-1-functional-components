import React from 'react';

import { Description as CustomDescription } from './styled';

import { descriptionPropTypes, descriptionDefaultProps } from './props';

export const Description = ({ children, ...rest }) => {
  return <CustomDescription {...rest}>{children}</CustomDescription>;
};

Description.propTypes = descriptionPropTypes;
Description.defaultProps = descriptionDefaultProps;
