import React from 'react';

import { Button as CustomButton } from './styled';

const Button = ({ children, ...rest }) => {
  return <CustomButton {...rest}>{children}</CustomButton>;
};

export default Button;
