import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Navbar as CustomNavbar, NavbarBrand } from '../components/Navbar';

const Navbar = () => {
  return (
    <Fragment>
      <CustomNavbar>
        <NavbarBrand>
          <Link to='/'>
            <i className='fab fa-youtube'></i> Youtube Video Player
          </Link>
        </NavbarBrand>
      </CustomNavbar>
    </Fragment>
  );
};

export default Navbar;
