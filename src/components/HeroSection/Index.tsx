"use client"
import React from "react";
import Image from "next/image";
import {
  SectionWrapper,
  NavBar,
  NavButton,
  NavLink,
  NavLinks,
  Logo,
  HeroContainer,
  HeroText_Wrapper,
  Hero_HeaderText,
  Hero_Subtext,
  HeroButton,
  HeroImage,
  ImageWrapper,
  Overlay
} from './HeroSection.styles';

const links = [ "Features", "Downloads", "WaitList"];

const HeroSection = () => {
  return(
    <SectionWrapper data-testid="hero-section">
      <NavBar>
        <Logo src="/logo.png" alt="company logo" />
        <NavLinks>
          {links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </NavLinks>
        <NavButton>Try For Free</NavButton>
      </NavBar>
      <HeroContainer>
        <HeroText_Wrapper>
          <HeroButton>
            <span>
              <b>update</b>
            </span>
            <p>Task Management and Financial Management</p>
          </HeroButton>
          <Hero_HeaderText>
            <h1>One Application For All Your </h1>
            <div>
              <p> Business Needs</p>
              <span><Image src="/hero-icon.svg" alt="" width={100} height={35} /></span>
            </div>
          </Hero_HeaderText>
          <Hero_Subtext>
            Manage your inventory, accept payments, 
            generate transaction reports, 
            pay< br/> employees and respond to 
            customer inquiries in one application
          </Hero_Subtext>
        </HeroText_Wrapper>
        <ImageWrapper>
          <HeroImage src="/hero-image.png" alt="cueprise dashboard" />
          <Overlay />
        </ImageWrapper>
      </HeroContainer>
    </SectionWrapper>
  ) 
};

export default HeroSection;

