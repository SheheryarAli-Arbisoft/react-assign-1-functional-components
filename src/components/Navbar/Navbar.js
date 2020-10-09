import React from 'react';

import { Navbar as CustomNavbar } from './styled';

import { propTypes, defaultProps } from './props';

export const Navbar = ({ children, ...rest }) => {
  return <CustomNavbar {...rest}>{children}</CustomNavbar>;
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
