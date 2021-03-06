import styled from 'styled-components';

export const Video = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.large};
  width: 65%;
  min-height: 100px;
  height: fit-content;
  background-color: ${({ theme }) => theme.card.background};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.card.border};
  border-radius: 5px;
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.card.border};

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  & > div:nth-child(3) > div {
    margin-right: ${({ theme }) => theme.spacing.xlarge};
  }
`;
