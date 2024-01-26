import styled from "styled-components";
import styles from "@/styles/general.styles";
import {
  LeftBar,
  RightBar,
  TopImage,
  BottomImage,
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

export const CustomLeftBar = styled(LeftBar)`
  width: 48%;
`;

export const CustomRightBar = styled(RightBar)`
  width: 52%;
`;

export const CustomTopImage = styled(TopImage)`
  top: 20%;
  left: 5%;
`;

export { BottomImage };
