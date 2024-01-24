"use client";

import React from "react";
import {
  Footer,
  FootWrapper,
  WaitList,
  FooterContainer,
  LinkContainer,
  LinkWrapper,
  LogoCards,
  Address,
  NavLink,
  LineDiv,
  NavWrapper,
  CopyrightWrapper,
  SocialMediaContainer,
  SocialMediaBox,
  BtnWrapper,
} from "./FooterSection.styles"
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import cuepriseLogo from "@/assets/images/cuepriseLogo.png";
import LocationIcon from "@/assets/icons/location";
import Link from "next/link";

const FooterSection = () => {
  return (
    <Footer data-testid="footer-wrapper">
      <FootWrapper>
        <WaitList>
          <h1>Join the waitlist</h1>
          <h2>Get Exciting Update About Cueprise And Productivity</h2>
          <div>
            <input type="email" placeholder="Your email address"></input>
            <button>Subscribe</button>
          </div>
        </WaitList>
        <FooterContainer>
            <LogoCards>
              <div className="footer__logo">
                <Link href="/">
                  <Image src={cuepriseLogo} alt="logo" />
                </Link>
              </div>
              <p>
                We make innovative software and global talent affordable and
                accessible to all types of businesses
              </p>
              <BtnWrapper className="">
                <button className="footer__btn">
                  <a href="https://checkout.cuesoft.io/b/14k9DscXJbenbSw7ss" target="_blank">
                    Donate Now
                  </a>
                  <span><FaArrowRightLong /></span>
                </button>
              </BtnWrapper>
            </LogoCards>

            <div>
              <LinkWrapper>
                <LinkContainer>
                  <h2>Company</h2>
                  <NavWrapper>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="https://blog.cuesoft.io" target="_blank">
                      Blog
                    </NavLink>
                    <NavLink href="https://handbook.cuesoft.io" target="_blank">
                      Employee Handbook
                    </NavLink>
                  </NavWrapper>
                </LinkContainer>

                <LinkContainer>
                  <h2>Legal</h2>
                  <NavWrapper>
                    <NavLink href="https://terms.cuesoft.io" target="_blank">
                      Terms of Service
                    </NavLink>

                    <NavLink href="https://privacy.cuesoft.io" target="_blank">
                      Privacy Policy
                    </NavLink>

                    <NavLink href="/">Cookie Policy</NavLink>
                  </NavWrapper>
                </LinkContainer>
                <LinkContainer>
                  <h2>Contacts</h2>
                  <NavWrapper>
                    <NavLink href="tel:+1 302 359 6437">
                      +1 302 359 6437
                    </NavLink>

                    <NavLink href="tel:+234 902 650 9478">
                      +234 902 650 9478
                    </NavLink>

                    <NavLink href="mailto:hello@cuesoft.io">
                      hello@cuesoft.io
                    </NavLink>
                  </NavWrapper>
                </LinkContainer>
              </LinkWrapper>
              <Address>
                <LocationIcon />
                <p>
                  <span>
                    39 Alfred Rewane Road, Mulliner Towers, Ikoyi, 100233, Lagos,
                    Nigeria
                  </span>
                  <span>
                    8 The Green, Ste 300, Dover, 19901, Delaware, United States
                  </span>
                </p>
              </Address>
            </div>
        </FooterContainer>
        <LineDiv></LineDiv>
        <CopyrightWrapper>
          <p>
            <span>&copy;</span> Cuesoft 2024. All rights reserved.
          </p>

          <SocialMediaContainer>
            <SocialMediaBox>
              <Link href="https://instagram.com/cuesoftinc" target="_blank">
                <FaInstagram className="social__media__icon" />
              </Link>
            </SocialMediaBox>
            <SocialMediaBox>
              <Link
                href="https://linkedin.com/company/cuesoft"
                target="_blank"
              >
                <FaLinkedin className="social__media__icon" />
              </Link>
            </SocialMediaBox>
            <SocialMediaBox>
              <Link href="https://x.com/cuesoftinc" target="_blank">
                <FaXTwitter className="social__media__icon" />
              </Link>
            </SocialMediaBox>
            <SocialMediaBox>
              <Link href="https://facebook.com/cuesoft" target="_blank">
                <FaFacebook className="social__media__icon" />
              </Link>
            </SocialMediaBox>
          </SocialMediaContainer>
        </CopyrightWrapper>
      </FootWrapper>
    </Footer>
  );
};

export default FooterSection;
