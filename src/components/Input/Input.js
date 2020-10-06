import React from 'react';

import { Input as CustomInput } from './styled';

const Input = ({ ...rest }) => {
  return <CustomInput {...rest} />;
};

export default Input;
