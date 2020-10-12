import styled from 'styled-components';

export const NavbarBrand = styled.div`
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
