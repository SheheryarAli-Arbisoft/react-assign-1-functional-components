import React from 'react';
import { NavbarBrand as CustomNavbarBrand } from './styled';
import { propTypes, defaultProps } from './props';

export const NavbarBrand = ({ children, ...rest }) => {
  return <CustomNavbarBrand {...rest}>{children}</CustomNavbarBrand>;
};

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;
