import styled from "styled-components";
import styles from "@/styles/general.styles";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  background-color: ${styles.color.gray_100};
  min-height: 100vh;
  padding: 2rem;
  overflow: hidden;
  width: 100%;
  font-family: Inter;

  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  min-height: 95vh;
  background-color: #FFFFFF;
  margin: 2rem 0 0 0;
  padding: 2.8rem 1rem;
  border-radius: 25px;

  @media screen and (max-width: 912px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media screen and (max-width: 912px) {
    flex-direction: column;
  }
`;

export const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  font-family: "Inter" sans-serif;
  font-style: normal;
  width: 60%;

  h1 {
    color: #000;
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.8rem;
  }

  p {
    color: ${styles.color.gray_600};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: normal;
  }

  @media screen and (max-width: 912px) {
    width: 100%;
    padding: 0 2rem;

    h1,
    p {
      text-align: center;
      line-height: normal;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 0 1rem;

    h1 {
      font-size: 6vw;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;

export const RightBar = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 40%;

  @media screen and (max-width: 912px) {
    width: 100%;
  }
`;

export const BottomImage = styled.img`
  position: relative;
  margin: 0 1rem;
  z-index: 5;

  @media screen and (max-width: 912px) {
    width: fit-content;
  }
`;

export const TopImage = styled(motion.img)`
  position: absolute;
  top: 30%;
  left: -1rem;
  z-index: 10;

  @media screen and (max-width: 912px) {
    width: 98%;
    top: 25%;
    left: 0.5rem;
  }
`;

export const OuterImage = styled.img`
  position: absolute;
  top: 0;
  right: 33%;
  z-index: 20;
  display: block;

  @media screen and (max-width: 912px) {
    display: none;
  }
`;
