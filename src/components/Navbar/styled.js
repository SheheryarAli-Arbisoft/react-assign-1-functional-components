import styled from 'styled-components';

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
`;

const NavbarBrand = styled.div`
  padding-left: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.color.text.inverted};
  font-size: 18px;
  cursor: pointer;

  & i {
    margin-right: ${({ theme }) => theme.spacing.default};
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

export { Navbar, NavbarBrand };
