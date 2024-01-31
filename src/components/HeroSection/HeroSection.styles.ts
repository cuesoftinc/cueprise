import styled from "styled-components";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/lib/motion";
import styles from "@/styles/general.styles";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionWrapper = styled.section`
  position: relative;
  background-color: ${styles.color.gray_100};
  min-height: 100vh;
  padding: 2rem 2.6rem;

  background-image: url("/spectrum.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  width: 100%;

  @media (max-width: 912px) {
    background-position: center;
    background-size: 500px;
  }

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  width: 120px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${styles.color.gray_100};
  padding: 2.06rem 2.2rem;
  border-bottom: 0.5px solid ${styles.color.gray_300};
  font-family: "Manrope", sans-serif;

  .open__nav {
    font-size: 25px;
    display: none;
    cursor: pointer;
  }

  @media (max-width: 912px) {
    position: fixed;
    width: 100%;
    padding: 15px;
    z-index: 99;

    .open__nav {
      display: block;
    }
  }
`;

export const NavLinks = styled(Center)`
  gap: 3rem;
  display: flex;
  align-items: center;

  @media (max-width: 912px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${styles.color.gray_900};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavButton = styled.button`
  text-align: center;
  padding: 0.9rem 1.5rem;
  color: #fff;
  border: none;
  background-color: ${styles.color.purple_400};
  border-radius: 0.3rem;
  cursor: pointer;
  display: block;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 912px) {
    display: none;
  }
`;

// ---------Hero styles ------
export const HeroContainer = styled(Center)`
  flex-direction: column;
  margin: 4rem 0;
  padding: 2rem 0;
  font-family: "Inter", sans-serif;
`;

export const HeroText_Wrapper = styled(Center)`
  flex-direction: column;
  gap: 1.2rem;
`;

export const HeroButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  padding: 0.5rem;
  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.04);

  > p {
    color: ${styles.color.gray_700};
  }

  span {
    display: flex;
    padding: 0.25rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 1rem;
    background: ${styles.color.green};
  }
`;

export const Hero_HeaderText = styled.div`
  h1 {
    color: ${styles.color.gray_700};
    text-align: center;
    font-family: "Inter" sans-serif;
    font-size: 4rem;
    font-weight: 800;
    line-height: normal;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  p {
    color: ${styles.color.gray_700};
    font-family: "Libre Baskerville" serif;
    text-align: center;
    font-size: 4rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  span {
    display: flex;
    align-items: center;
    transform: translateY(10%);
  }

  @media screen and (max-width: 768px) {
    h1,
    p {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }

  @media screen and (max-width: 640px) {
    h1,
    p {
      font-size: 6vw;
      line-height: 2.5rem;
    }
  }
`;

export const CustomImage = styled.img`
  @media screen and (max-width: 768px) {
    width: 70%;
  }

  /* @media screen and (max-width: 640px) {
    width: 50%;
  } */
`;

export const Hero_Subtext = styled.p`
  color: ${styles.color.gray_600};
  text-align: center;
  font-family: "Inter" sans-serif;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  padding: 0 1rem;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(243, 244, 246, 0.5),
    rgba(243, 244, 246, 0.9)
  );
  height: 70px;
  opacity: 0.9;
  bottom: 0;
`;

export const HeroImage = styled(motion.img)`
  margin-top: 2rem;
  width: 100%;
  object-fit: contain;
`;

// -------- Mobile styles -------------
export const Container = styled.div`
  justify-content: flex-end;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  min-height: 100vh;
  width: 100vw;
  background-color: ${styles.color.gray_100};
  display: none;

  @media screen and (max-width: 912px) {
    display: flex;
  }
`;

export const MobileNavContainer = styled.div`
  width: 100%;
  background-color: ${styles.color.gray_100};
  color: ${styles.color.gray_900};
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;

  .close__nav {
    font-size: 25px;
    cursor: pointer;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 4rem;
`;

export const MobileNavLink = styled(NavLink)`
  display: inline-block;
  padding: 1rem;
  text-decoration: none;
  color: ${styles.color.gray_900};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
    border-radius: 10px;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 912px) {
    display: block;
  }
`;

export const MobileNavButton = styled.button`
  text-align: center;
  width: 100%;
  padding: 0.9rem 1.5rem;
  color: #fff;
  border: none;
  background-color: ${styles.color.purple_400};
  border-radius: 0.3rem;
  cursor: pointer;
  display: block;

  &:hover {
    opacity: 0.8;
  }
`;
