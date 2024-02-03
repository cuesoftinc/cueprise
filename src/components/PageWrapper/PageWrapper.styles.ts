import { styled } from "styled-components";

export const PageWrapper = styled.main`
  margin: 0 2rem;

  @media (max-width: 769px) {
    margin: 1rem;
  }

  @media (max-width: 426px) {
    margin: 0.75rem;
  }
`;