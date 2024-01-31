import styled from 'styled-components';
import styles from '@/styles/general.styles';

export const SectionContainer = styled.section`
  background-color: ${styles.color.gray_100};
  min-height: 100vh;
  padding: 2rem 1.5rem;
  overflow: hidden;
  width: 100%;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%px;
  display: flex;
  align-items: center;
  height: 95vh;
  background-color: #FFFFFF;
  margin: 2rem 0;
  padding: 2.8rem 1rem;
  border-radius: 25px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Inter" sans-serif;
  font-style: normal;
  width: 60%;

  h1{
    color: #000;
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.8rem;
  }

  p{
    color: ${styles.color.gray_600};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: normal;
  }
  
`;

export const RightBar = styled.div` 
  display: flex;
  justify-content: center;
  position: relative;
  width: 40%;
`;

export const BottomImage = styled.img`
  position: relative;
  margin: 0 1rem;
  z-index: 5;
`;

export const TopImage = styled.img`
  position: absolute;
  top: 30%;
  left: -1rem;
  z-index: 10;
`;

export const OuterImage = styled.img`
  position: absolute;
  top: 0;
  right: 33%;
  z-index: 20;
`;