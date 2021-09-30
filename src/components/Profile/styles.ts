import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  background-color: #fa1ed2;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: absolute;
    bottom: 0;
    right: 0;

    background-color: ${props => props.theme.colors.background_tertiary};
    height: 1rem;
    width: 1rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: '';
      display: block;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      background-color: #00f593;
    }
  }
`;