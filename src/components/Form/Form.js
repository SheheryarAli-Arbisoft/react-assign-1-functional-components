import React from 'react';

import { Form as CustomForm } from './styled';

const Form = ({ children }) => {
  return <CustomForm>{children}</CustomForm>;
};

export default Form;
