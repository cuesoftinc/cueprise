"use client";

import React, { useEffect, useRef, useState } from "react";
import { DownloadContainer, DownloadStore } from "./DownloadSection.styles";
import { DownloadContent } from "./DownloadSection.styles";
import Image from "next/image";
import DownloadCueprise from "@/assets/images/downloadCueprise.png";
import AppleBadge from "@/assets/images/AppStore.png";
import GoogleBadge from "@/assets/images/GoogleStore.png";
import { motion, useAnimation } from "framer-motion";

const DownloadSection = () => {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    controls.start(
      isInView
        ? { y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        : { y: "100%" },
    );

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView, controls]);

  return (
    <DownloadContainer id="Downloads">
      <h1 className="title">Download</h1>
      <h2>Get Cueprise</h2>

      <DownloadContent>
        <div className="text">
          <h3>Download Cueprise For Mobile</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique lectus platea
            luctus enim facilisis elementum. Lorem sapien aliquam ultricies
            eleifend sagittis ullamcorper massa. Enim sed purus venenatis at
            scelerisque sit dolor tincidunt non.{" "}
          </p>
          <DownloadStore>
            <Image alt="App store badge" src={AppleBadge} />
            <Image alt="Play store badge" src={GoogleBadge} />
          </DownloadStore>
        </div>
        <motion.div
          className="img"
          animate={controls}
          initial={{ y: "100%" }}
          ref={imageRef}
        >
          <Image src={DownloadCueprise} alt="download image" />
        </motion.div>
        <div className="mobile-badge">
          <Image alt="App store badge" src={AppleBadge} />
          <Image alt="Play store badge" src={GoogleBadge} />
        </div>
      </DownloadContent>
    </DownloadContainer>
  );
};

export default DownloadSection;
