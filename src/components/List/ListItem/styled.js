import styled from 'styled-components';

export const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme, small }) =>
    small ? theme.spacing.medium : theme.spacing.xlarge};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.card.border};
  border-radius: 5px;
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.card.border};
`;
