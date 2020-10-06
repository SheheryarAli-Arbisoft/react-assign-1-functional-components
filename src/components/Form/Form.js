import React from 'react';

import { Form as CustomForm } from './styled';

const Form = ({ children, ...rest }) => {
  return <CustomForm {...rest}>{children}</CustomForm>;
};

export default Form;
