"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  CustomImage,
  ImageWrapper,
  Overlay,
} from "./HeroSection.styles";
import { staggerContainer, zoomIn } from "@/lib/motion";
import { FaBars } from "react-icons/fa";
import { useHomeContext } from "@/context";
import MobileNavBar from "./MobileNavBar";

export const links = ["Features", "Downloads", "WaitList"];

const HeroSection = () => {
  const { setIsNavOpen, isNavOpen } = useHomeContext();

  return (
    <SectionWrapper data-testid="hero-section">
      <NavBar>
        <Logo src="/logo.png" alt="company logo" />
        <NavLinks>
          {links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </NavLinks>
        <NavButton>Try For Free</NavButton>
        {!isNavOpen && (
          <FaBars className="open__nav" onClick={() => setIsNavOpen(true)} />
        )}
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
              <span>
                <CustomImage
                  src="/hero-icon.svg"
                  alt=""
                  width={100}
                  height={35}
                />
              </span>
            </div>
          </Hero_HeaderText>
          <Hero_Subtext>
            Manage your inventory, accept payments, generate transaction
            reports, pay
            <br /> employees and respond to customer inquiries in one
            application
          </Hero_Subtext>
        </HeroText_Wrapper>
        <ImageWrapper>
          <HeroImage
            src="/hero-image.png"
            alt="hero image"
            initial="hidden"
            variants={zoomIn(0.1, 0.7)}
            whileInView="show"
          />
          <Overlay />
        </ImageWrapper>
      </HeroContainer>
      {isNavOpen && <MobileNavBar setIsNavOpen={setIsNavOpen} />}
    </SectionWrapper>
  );
};

// const HeroSection = () => {
//   return (
//     <div>
//       <motion.p
//         // src="/hero-image.png"
//         // alt="hero image"
//         initial={{ x: 100 }}
//         animate={{ x: 0}}
//         whileHover={{ scale: 1.2 }}
//         // whileHover={{ scale: 1.1 }}
//         // variants={zoomIn(0.1, 0.7)}
//         // initial="hidden"
//         // whileInView="show"
//       >Hello there</motion.p>
//     </div>
//   )
// }

export default HeroSection;
