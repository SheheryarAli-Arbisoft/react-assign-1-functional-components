import React from 'react';

import { Button as CustomButton } from './styled';

const Button = ({ children }) => {
  return <CustomButton>{children}</CustomButton>;
};

export default Button;
