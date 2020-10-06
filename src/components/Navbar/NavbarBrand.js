import React from 'react';

import { NavbarBrand as CustomNavbarBrand } from './styled';

const NavbarBrand = ({ children, ...rest }) => {
  return <CustomNavbarBrand {...rest}>{children}</CustomNavbarBrand>;
};

export default NavbarBrand;
