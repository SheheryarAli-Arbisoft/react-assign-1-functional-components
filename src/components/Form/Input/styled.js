import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  font-size: ${({ theme, size }) => theme.input.getSize(size)};
  padding: ${({ theme, size }) => theme.input.getSpacing(size)};
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ error }) => (error ? '#ff0000' : 'inherit')};
  flex-grow: 1;
`;

export { Input };
