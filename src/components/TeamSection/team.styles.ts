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
  padding: 0 1.5rem;
  overflow: hidden;
  width: 100%;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: ${styles.color.gray_50};
  padding: 0 1rem;
  border-radius: 25px;
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

    h1,
    p {
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 0 1.5rem;
    padding-right: 2.5rem;

    h1 {
      font-size: 6vw;
      line-height: 2.5rem;
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
