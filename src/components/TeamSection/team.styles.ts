import styled from "styled-components";
import styles from "@/styles/general.styles";
import {
  LeftBar,
  RightBar,
  TopImage,
  BottomImage,
  ContentWrapper,
} from "../Management/management.styles";

export const SectionContainer = styled.section`
  background-color: ${styles.color.gray_100};
  min-height: 100vh;
  margin: 1rem 0;
  overflow: hidden;
  width: 100%;
  font-family: Inter;

  @media screen and (max-width: 768px) {
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
  padding: 2.8rem 0;
  border-radius: 25px;

  @media screen and (max-width: 912px) {
    margin: 0.5rem 0 0 0;
  }
`;

export const CustomContentWrapper = styled(ContentWrapper)`
  flex-direction: row;

  @media screen and (max-width: 912px) {
    flex-direction: column-reverse;
  }
`;

export const CustomLeftBar = styled(LeftBar)`
  width: 48%;

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
    padding: 0 2rem;

    h1 {
      font-size: 6vw;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;

export const CustomRightBar = styled(RightBar)`
  width: 52%;

  @media screen and (max-width: 912px) {
    width: 100%;
  }
`;

export const CustomTopImage = styled(TopImage)`
  top: 20%;
  left: 5%;

  @media screen and (max-width: 912px) {
    width: 98%;
    top: 35%;
    left: 0.5rem;
  }
`;

export { BottomImage };
