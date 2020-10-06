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
  font-size: ${props => (props.small ? '16' : '26')}px;
  font-size: ${({ theme, small }) =>
    small ? theme.size.text.default : theme.size.text.title};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitle = styled.div`
  color: #5a5a5a;
  font-size: ${props => (props.small ? '14' : '18')}px;
  margin-bottom: ${props => (props.small ? '6' : '10')}px;
`;

const Description = styled.div`
  font-size: ${props => (props.small ? '14' : '18')}px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Heading, Title, SubTitle, Description };
