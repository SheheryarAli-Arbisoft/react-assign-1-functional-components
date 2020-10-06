import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.size.text.default};
  padding: ${({ theme }) => theme.spacing.default};
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  flex-grow: 1;
`;

export { Input };
