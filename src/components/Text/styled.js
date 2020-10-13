import styled from 'styled-components';

export const Text = styled.div`
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
