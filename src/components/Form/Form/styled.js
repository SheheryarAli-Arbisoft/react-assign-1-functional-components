import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 20px;

  & > input {
    margin-right: ${({ theme }) => theme.spacing.default};
  }
`;
