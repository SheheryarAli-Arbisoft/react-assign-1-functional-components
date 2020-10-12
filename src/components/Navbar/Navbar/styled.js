import styled from 'styled-components';

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;
