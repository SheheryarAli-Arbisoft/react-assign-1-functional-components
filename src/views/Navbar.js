import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as CustomNavbar, NavbarBrand } from '../components/Navbar';

export const Navbar = () => {
  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Fragment>
      <CustomNavbar>
        <NavbarBrand>
          <Link to='/'>
            <i className='fab fa-youtube' />
            Youtube Video Player
          </Link>
        </NavbarBrand>
      </CustomNavbar>
    </Fragment>
  );
};
