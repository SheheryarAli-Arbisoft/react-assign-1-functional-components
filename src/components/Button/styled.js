import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  padding: ${({ theme, size }) => theme.button.getSpacing(size)};
  font-size: ${({ theme, size }) => theme.button.getTextSize(size)};
  text-transform: uppercase;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  cursor: pointer;
  color: ${({ theme, variant }) => theme.button.getTextColor(variant)};
  background-color: ${({ theme, variant }) =>
    theme.button.getBackgroundColor(variant)};
  transition: background-color 200ms ease-in-out;

  &:focus {
    outline: none;
  }

  &: hover {
    background-color: ${({ theme, variant }) =>
      theme.button.getHoverColor(variant)};
  }
`;
