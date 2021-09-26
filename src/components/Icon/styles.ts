import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0.6rem;
  border-radius: 3px;
  cursor: pointer;

  color: ${(props) => props.theme.colors.text};

  &:hover {
    background: ${(props) => props.theme.colors.background_icon};
  }
`;
