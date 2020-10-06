import styled from 'styled-components';

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.size.text.heading};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  font-weight: bold;
  color: #ff0000;

  & > i {
    margin-right: ${({ theme }) => theme.spacing.default};
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme, small }) =>
    small ? theme.size.text.default : theme.size.text.large};
  font-weight: bold;
  margin-bottom: ${({ theme, small }) =>
    small ? theme.spacing.small : theme.spacing.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme, small }) =>
    small ? theme.size.text.small : theme.size.text.medium};
  margin-bottom: ${({ theme, small }) =>
    small ? theme.spacing.small : theme.spacing.medium};
`;

const Description = styled.div`
  font-size: ${({ theme, small }) =>
    small ? theme.size.text.small : theme.size.text.medium};
  color: ${({ theme }) => theme.color.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Heading, Title, SubTitle, Description };
