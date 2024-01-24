import Link from "next/link";
import { styled } from "styled-components";

const Footer = styled.footer`
  position: relative;
  background-color: #2F0658;
  width: 100% !important;
  z-index: 10;
  font-family: Inter;
`;

const FootWrapper = styled.div`
  padding-bottom: 50px;
  width: 100%;
  position: relative;
  max-width: 1400px;
  margin-inline: auto;
  }
`;

const WaitList = styled.div`
  text-align: center;
  padding: 3rem;
  color: #ffffff;

  h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;
  }

  h2 {
    font-size: 48px;
    font-weight: 600;
    line-height: 72px;
    max-width: 75%;
    margin: 0 auto;
  }

  input {
    background-color: #4d3961;
    color: #fffff;
    border-radius: 5px 0 0 5px;
    height: 3rem;
    border: none;
  }

  button {
    background-color: #ffffff;
    color: white;
    height: 3rem;
    border: none;
    border-radius: 0 5px 5px 0;
  }
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  margin-inline: auto
`;

const LogoCards = styled.div`
  width: 35%;

  .footer__logo {
    text-align: center;
    width: fit-content;
    line-height: 0.5cm;
  }

  .footer__logo img {
    width: 100%;
    height: 100%;
  }

  > p {
    color: #ffffff;
    font-size: 16px;
    margin-block: 8px 20px;
    font-style: normal;
    font-weight: 500;
    max-width: 500px;
  }

  @media (max-width: 1024px) {
    width: 47%;
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 420px) {
    width: 95%;
  }

  .footer__btn {
    background-color: #fcd54d;
    color: #000;
    margin-inline: 0;
    border: none;
    font-weight: 600;
  }
  .footer__btn > a {
    color: #000;
    text-decoration: none;
    padding: 10px 0 10px 20px;
  }
  .footer__btn > span {
    padding-right: 20px;
  }
  @media (max-width: 420px) {
    .footer__btn {
      width: fit-content;
    }
  }
`;

const Address = styled.div`
  margin: 3rem 0 0 auto;
  display: flex;
  gap: 10px;
  color: #b5b5b5;

  p > span {
    display: block;
  }
  p > span:last-child {
    margin-top: 15px;
    display: block;
  }
  @media (max-width: 1024px) {  
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-right: auto;
    width: 100%;
  }
  @media (max-width: 430px) {
    p {
      font-size: 14px;
    }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: -30px;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const LinkContainer = styled.div`
  h2 {
    color: #ffffff;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
  }
  @media (max-width: 430px) {
    h2 {
      font-size: 16px;
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  padding-top: 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #b5b5b5;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    color: #8c8c8c;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const LineDiv = styled.div`
  height: 2px;
  margin-top: 40px;
  background: #ffffff;
`;

const CopyrightWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #fff;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    p {
      font-size: 16px;
    }
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialMediaBox = styled.span`
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  color: #fff;
  size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #b5b5b5;
    border: 3px solid #b5b5b5;
  }

  > a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social__media__icon {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
    .social__media__icon {
      font-size: 20px;
    }
  }
`;

const BtnWrapper = styled.div`
  margin: 6rem auto 1rem auto;
  z-index: 9;

  button {
    display: flex;
    align-items: center;
    color: white;
    margin-inline: auto;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    background-color: inherit;
    border: none;
  }

  button:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  button a {
    display: block;
    color: #fff;
  }

  button span {
    margin: 5px 0px 0px 5px;
  }
`;

export {
  Footer,
  FootWrapper,
  WaitList,
  FooterContainer,
  LogoCards,
  Address,
  LinkWrapper,
  LinkContainer,
  NavLink,
  LineDiv,
  SocialMediaBox,
  NavWrapper,
  CopyrightWrapper,
  SocialMediaContainer,
  BtnWrapper
};
