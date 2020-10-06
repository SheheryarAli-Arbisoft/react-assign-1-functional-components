import styled from 'styled-components';

const Thumbnail = styled.img`
  width: ${({ theme, small }) =>
    small ? theme.thumbnail.small.width : theme.thumbnail.normal.width};
  height: ${({ theme, small }) =>
    small ? theme.thumbnail.small.height : theme.thumbnail.normal.height};
`;

export { Thumbnail };
