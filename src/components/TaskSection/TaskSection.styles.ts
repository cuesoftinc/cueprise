import { styled } from "styled-components";
import styles from "@/styles/general.styles";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  background-color: ${styles.color.gray_100};
  overflow: hidden;
  font-family: Inter;

  @media (max-width: 769px) {
    margin: 1rem;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%px;
  display: flex;
  align-items: center;
  height: 95vh;
  background-color: #FFFFFF;
  padding: 4rem;
  border-radius: 25px;

  @media (max-width: 769px) {
    display: block;
    padding: 2rem;
    height: 110vh;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 769px) {
    display: block;
  }
`;

export const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Inter" sans-serif;
  font-style: normal;
  width: 60%;

  @media (max-width: 769px) {
    display: block;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 56px;
    line-height: 56.8px;
    font-weight: 700;
    margin-bottom: 1rem;


    @media (max-width: 769px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 426px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  p {
    font-size: 20px;
    line-height: 24.2px;
    font-weight: 400;
    color: ${styles.color.gray_600};
    max-width: 80%;

    @media (max-width: 769px) {
      font-size: 1rem;
      max-width: 100%;
    }

    @media (max-width: 426px) {
      font-size: 16px;
      line-height: 24px;
      max-width: 100%;
    }
  }
  
`;

export const RightBar = styled.div` 
  display: flex;
  justify-content: center;
  position: relative;
  width: 40%;

  @media (max-width: 769px) {
    width: 100%;
    margin: 6rem 0;
  }
`;

export const BottomImage = styled.img`
  position: relative;
  margin: 0 1rem;
  z-index: 5;

  @media (max-width: 426px) {
    width: 100%;
    height: auto;
  }
`;

export const TopImage = styled(motion.img)`
  position: absolute;
  top: -15%;
  right: -1rem;
  z-index: 10;

  @media (max-width: 426px) {
    width: 80%;
  }
`;

export const OuterImage = styled.img`
  position: absolute;
  top: 6%;
  right: 33.3%;
  z-index: 20;

  @media (max-width: 769px) {
    display: none;
  }
`;