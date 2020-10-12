import React from 'react';
import { Navbar } from './Navbar';
import { NavbarBrand } from './NavbarBrand';
import { Container } from '../Container';
import { theme } from '../../theme';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = args => <Navbar {...args} />;

const defaultArgs = {
  theme,
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
  children: [<NavbarBrand theme={theme}>Youtube Video Player</NavbarBrand>],
};
