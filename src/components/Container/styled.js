import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px ${({ fluid }) => (fluid ? '8px' : '40px')};
  margin-left: auto;
  margin-right: auto;
`;
