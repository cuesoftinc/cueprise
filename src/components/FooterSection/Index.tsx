"use client";

import React, { useState, useEffect } from "react";
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
  Spinner,
} from "./FooterSection.styles";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import cuepriseLogo from "@/assets/images/cuepriseLogo.png";
import LocationIcon from "@/assets/icons/location";
import Link from "next/link";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const BASE_ID = process.env["NEXT_PUBLIC_AIRTABLE_BASE_ID"];
  const TABLE_NAME = process.env["NEXT_PUBLIC_AIRTABLE_TABLE_ID_WAITING_LIST"];
  const AIRTABLE_API_KEY = process.env["NEXT_PUBLIC_AIRTABLE_API_KEY"];

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (formError !== "") {
        setFormLoading(false);
        setFormError("");
      }

      if (formSuccess !== "") {
        setFormLoading(false);
        setFormSuccess("");
      }
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, [formLoading, formError, formSuccess]);

  const handleSubmit = async () => {
    if (email === "") {
      setFormError("fill in the input!");
      return;
    }

    if (formLoading) return;
    setFormLoading(true);

    try {
      const BASEURL = "https://api.airtable.com/v0";

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      };

      const body = JSON.stringify({ fields: { Email: email } });

      const options = {
        method: "POST",
        headers: headers,
        body,
      };

      const response = await fetch(
        `${BASEURL}/${BASE_ID}/${TABLE_NAME}`,
        options,
      );
      const parsedResponse = await response.json();

      if (parsedResponse) {
        setEmail("");
        setFormLoading(false);
        setFormSuccess("Your email has been added to our mailing list!");
      }
    } catch (error) {
      console.log(error);
      setFormLoading(true);
      setFormError("an error occurred, pls try again!");
    }
  };

  return (
    <Footer data-testid="footer-wrapper" id="WaitList">
      <FootWrapper>
        <WaitList>
          <h1>Join the waitlist</h1>
          <h2>Get Exciting Update About Cueprise And Productivity</h2>
          <div>
            <input
              type="email"
              placeholder="Your Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>
              {formLoading ? <Spinner /> : <p>Join waitlist</p>}
            </button>
          </div>
          <p style={{ color: "red" }}>{formError}</p>
          <p>{formSuccess}</p>
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
                <a
                  href="https://checkout.cuesoft.io/b/14k9DscXJbenbSw7ss"
                  target="_blank"
                >
                  Donate Now
                </a>
                <span>
                  <FaArrowRightLong />
                </span>
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
                  <NavLink href="tel:+1 302 359 6437">+1 302 359 6437</NavLink>

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
              <Link href="https://linkedin.com/company/cuesoft" target="_blank">
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
