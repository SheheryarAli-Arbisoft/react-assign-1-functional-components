import React from 'react';

import { Navbar as CustomNavbar } from './styled';

const Navbar = ({ children, ...rest }) => {
  return <CustomNavbar {...rest}>{children}</CustomNavbar>;
};

export default Navbar;
