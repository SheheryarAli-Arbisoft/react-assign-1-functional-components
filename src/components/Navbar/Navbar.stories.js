import React from 'react';
import { Navbar } from './Navbar';
import { NavbarBrand } from './NavbarBrand';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = args => <Navbar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [<NavbarBrand>Youtube Video Player</NavbarBrand>],
};
