import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0.7rem;

  background: transparent;

  border-radius: 4px;

  color: ${({ theme }) => theme.colors.text};

  svg {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background_icon};
  }
`;
