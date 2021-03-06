import styled from "styled-components";

export const Container = styled.aside`
  width: 24rem;
  padding: 1.5rem 0;
  height: calc(100vh - 5.6rem);

  background-color: ${props => props.theme.colors.background_secundary};

  h2 {
    color: ${props => props.theme.colors.text};
    font-size: 1.3rem;
    padding: 0 0.8rem;
  }

  > div {
    header {
      display: flex;
      align-items: center;
      justify-content:space-between;
      margin-bottom: 1rem;
    }

    & + div {
      margin-top: 2rem;
    }
  }
`;