import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.default};
  font-size: ${({ theme }) => theme.size.text.default};
  text-transform: uppercase;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.inverted};
  background-color: ${({ theme }) => theme.color.primary};

  &:focus {
    outline: none;
  }

  &: hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export { Button };
