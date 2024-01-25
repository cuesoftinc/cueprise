import styled from "styled-components";
import styles from "@/styles/general.styles";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionWrapper = styled.section`
  background-color: ${styles.color.gray_100};
  min-height: 100vh;

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
`;

export const Logo = styled.img`
  width: 120px;
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${styles.color.gray_100};
  padding: 2.06rem 2.2rem;
  border-bottom: 0.5px solid ${styles.color.gray_300};
  font-family: 'Manrope', sans-serif;
`;

export const NavLinks = styled(Center)`
  gap: 3rem;
`;

export const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color:  ${styles.color.gray_900};
  font-weight: 700;
  cursor: pointer;
`;

export const NavButton = styled.button`
  text-align: center;
  padding: 0.9rem 1.5rem;
  color: #fff;
  border: none;
  background-color: ${styles.color.purple_400};
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeroContainer = styled(Center)`
  flex-direction: column;
  margin: 4rem 0;
  padding: 2rem 0;
  font-family: 'Inter', sans-serif;
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
  background: #FFF;
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
`

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
`;

export const Hero_Subtext = styled.p`
  color: ${styles.color.gray_600};
  text-align: center;
  font-family: "Inter" sans-serif;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 400;
  line-height: normal;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(to bottom, rgba(243, 244, 246, 0.5), rgba(243, 244, 246, 0.9));
  height: 70px;
  opacity: 0.9;
  bottom: 0;
`;

export const HeroImage = styled.img`
  margin-top: 2rem;
`;