import styled from 'styled-components';

export const Container = styled.div`
  padding: 35px ${({ fluid }) => (fluid ? '8px' : '60px')};
  margin-left: auto;
  margin-right: auto;
`;
