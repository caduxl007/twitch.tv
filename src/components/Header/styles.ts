import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.background_tertiary};
  color: ${(props) => props.theme.colors.text};

  > div {
    display: flex;
  }
`;

export const Nav = styled.nav`
  margin-left: 2.2rem;

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    align-items: center;

    li {
      a {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.text};

        &:hover {
          color: ${(props) => props.theme.colors.secundary};
        }
      }

      &:nth-child(2) {
        &::after {
          content: '';
          display: inline-block;
          margin-left: 2rem;
          width: 1px;
          padding: 1rem 0;

          background-color: ${(props) =>
            props.theme.colors.background_secundary};
        }
      }
    }
  }
`;

export const Input = styled.div`
  max-width: 35rem;
  width: 100%;

  border: 20px;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;

  input {
    flex: 1;
    border: 0;
    background-color: ${(props) => props.theme.colors.background_secundary};
    border: 1.5px solid transparent;

    padding: 0.8rem 1rem;

    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;

    font-size: 1.4rem;

    &:hover {
      border-color: ${shade(0.2, '#ffff')};
    }
  }

  > div {
    padding: 0.6rem;
    background-color: ${(props) => props.theme.colors.background_secundary};
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;

    svg {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const ContentIcons = styled.div`
  gap: 1rem;
`;
