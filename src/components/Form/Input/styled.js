import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  font-size: ${({ theme, size }) => theme.text.getSize(size)};
  padding: ${({ theme, size }) => theme.text.getSpacing(size)};
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  flex-grow: 1;
`;

export { Input };
