import React from 'react';

import { Form as CustomForm } from './styled';

import { propTypes, defaultProps } from './props';

export const Form = ({ children, ...rest }) => {
  return <CustomForm {...rest}>{children}</CustomForm>;
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
