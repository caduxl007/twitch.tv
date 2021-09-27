import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.8rem;
  gap: 1rem;
  cursor: pointer;

  div:nth-child(1) {
    height: 3rem;
    width: 3rem;

    &.off {
      opacity: 0.3;
    }

    > img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }
  }

  strong,
  p {
    color: ${(props) => props.theme.colors.text};
  }

  strong {
    font-size: 1.4rem;
  }

  p {
    font-size: 1.3rem;
  }

  > p {
    position: relative;
    top: -8px;
    margin-left: auto;

    &.online {
      &:before {
        content: '';
        display: inline-block;
        height: 8px;
        width: 8px;
        background-color: #e91916;
        border-radius: 50%;
        margin-right: 3px;
      }
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.background_hover};
  }
`;
