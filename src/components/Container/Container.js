import React from 'react';

import { Container as CustomContainer } from './styled';

const Container = ({ children, ...rest }) => {
  return <CustomContainer {...rest}>{children}</CustomContainer>;
};

export default Container;
