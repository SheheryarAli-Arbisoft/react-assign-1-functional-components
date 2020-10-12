import styled from 'styled-components';

const Text = styled.div`
  display: ${({ theme, variant }) => theme.text.getDisplay(variant)};
  justify-content: ${({ variant }) =>
    variant === 'heading' ? 'center' : 'none'};
  align-items: ${({ variant }) => (variant === 'heading' ? 'center' : 'none')};
  color: ${({ theme, variant }) => theme.text.getColor(variant)};
  font-size: ${({ theme, variant, small }) =>
    theme.text.getSize(variant, small)};
  font-weight: ${({ theme, variant }) => theme.text.getWeight(variant)};
  margin-bottom: ${({ theme, small }) =>
    small ? theme.spacing.small : theme.spacing.medium};
  white-space: ${({ full }) => (full ? 'none' : 'nowrap')};
  overflow: hidden;
  text-overflow: ellipsis;

  & > i {
    margin-right: ${({ theme, small }) =>
      small ? theme.spacing.small : theme.spacing.default};
  }
`;

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
  color: ${({ theme }) => theme.colors.primaryTextColor};
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
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-size: ${({ theme, small }) =>
    small ? theme.size.text.small : theme.size.text.medium};
  margin-bottom: ${({ theme, small }) =>
    small ? theme.spacing.small : theme.spacing.medium};
`;

const Description = styled.div`
  font-size: ${({ theme, small }) =>
    small ? theme.size.text.small : theme.size.text.medium};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  white-space: ${({ full }) => (full ? 'none' : 'nowrap')};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Heading, Title, SubTitle, Description, Text };
