import styled from 'styled-components';

export const ListItemContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  width: 100%;
  width: calc(
    100% -
      ${({ theme, small }) =>
        small ? theme.thumbnail.small.width : theme.thumbnail.normal.width}
  );

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  & > div:nth-child(2) > div {
    margin-right: ${({ theme, small }) =>
      small ? theme.spacing.medium : theme.spacing.xlarge};
  }
`;
