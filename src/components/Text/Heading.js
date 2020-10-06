import React from 'react';

import { Heading as CustomHeading } from './styled';

const Heading = ({ children }) => {
  return <CustomHeading>{children}</CustomHeading>;
};

export default Heading;
