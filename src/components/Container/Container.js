import React from 'react';

import { Container as CustomContainer } from './styled';

const Container = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};

export default Container;
