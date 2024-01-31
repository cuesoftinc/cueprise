"use client";
import React, { Dispatch, SetStateAction } from "react";
import { links } from "./Index";
import {
  Container,
  MobileNavContainer,
  Header,
  MobileNavLinks,
  MobileNavLink,
  Icon,
} from "./HeroSection.styles";
import { FaTimes } from "react-icons/fa";

interface Props {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavBar = ({ setIsNavOpen }: Props) => {
  return (
    <Container>
      <MobileNavContainer data-testid="mobile-navbar">
        <Header>
          <Icon src="/logo.png" alt="Cueprise Logo" width={120} />
          <FaTimes onClick={() => setIsNavOpen(false)} className="close__nav" />
        </Header>
        <MobileNavLinks>
          {links.map((link: string, index: number) => (
            <MobileNavLink
              key={index}
              onClick={() => setIsNavOpen(false)}
              target="_blank"
            >
              {link}
            </MobileNavLink>
          ))}
        </MobileNavLinks>
      </MobileNavContainer>
    </Container>
  );
};

export default MobileNavBar;
