import styled from "styled-components";
import styles from "@/styles/general.styles";

export const SectionContainer = styled.section`
  min-height: 100vh;
  background-color: ${styles.color.gray_100};
  padding: 2rem 2.6rem;
  background-image: url("/spiral.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  width: 100%;
  @media (max-width: 912px) {
    background-position: center;
    background-size: 500px;
  }
`;

export const Inner_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.span`
  display: flex;
  width: 6.875rem;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 1rem;
  background-color: ${styles.color.green};
`;
export const Header_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: "Inter" sans-serif;
  text-align: center;
  font-style: normal;
`;
export const Header = styled.h1`
  color: ${styles.color.blue_500};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: normal;
`;

export const Subtext = styled.p`
  color: ${styles.color.blue_300};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: normal;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 70px;
  gap: 1rem;
`;

// ------ Features card styles -----
export const CardContainer = styled.div`
  display: flex;
  min-width: 315px;
  padding: 1.5rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 0.75rem;
  border: 0.5px solid ${styles.color.blue_300};
  background-color: ${styles.color.gray_50};
`;

export const IconOverlay = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  background-color: ${styles.color.purple_50};
`;

export const Icon = styled.img``;

export const CardHeader = styled.h3`
  color: ${styles.color.purple_400};
  font-family: " Manrope" sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CardText = styled.p`
  color: var(--Foundation-Blue-blue-300, #6a597a);
  font-family: "Inter" sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;
