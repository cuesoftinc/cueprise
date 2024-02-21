"use client";

import React, { useEffect, useRef, useState } from "react";
import { DownloadContainer, DownloadStore, PCDownload } from "./DownloadSection.styles";
import { DownloadContent } from "./DownloadSection.styles";
import Image from "next/image";
import DownloadCueprise from "@/assets/images/downloadCueprise.png";
import AppleBadge from "@/assets/images/AppStore.png";
import GoogleBadge from "@/assets/images/GoogleStore.png";
import SnapCraft  from "@/assets/icons/snapcraft_icon.png";
import Windows from "@/assets/icons/microsoft_logo_icon.png";
import Apple from "@/assets/icons/apple_appstore_icon.png";
import Ios from "@/assets/icons/ios_icon.png";
import Android from "@/assets/icons/android_icon.png";
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

      <PCDownload>
        <h3>Download Cueprise For PC</h3>
        <div className="card-container">
          <div className="card">
            <Image src={Apple} alt="Apple Store icon" />
            <p>Cueprise for</p>
            <h4>Mac</h4>
            <p>Support Intel and Apple chips Perfectly compatible with macOS</p>
            <button><a href="">Free Download</a></button>
          </div>
          <div className="card">
            <Image src={SnapCraft} alt="SnapCraft Store icon" />
            <p>Cueprise for</p>
            <h4>Snapcraft</h4>
            <p>The only office suite that supports Linux</p>
            <button><a href="https://snapcraft.io/cueprise">Free Download</a></button>
          </div>
          <div className="card">
            <Image src={Windows} alt="Windows Store icon" />
            <p>Cueprise for</p>
            <h4>Windows</h4>
            <p>Lightweight, low memory usage and easy to download</p>
            <button><a href="">Free Download</a></button>
          </div>
        </div>

        <h3>Download Cueprise For Mobile</h3>
        <div className="mobile-card">
          <div className="card">
            <Image src={Android} alt="Android icon" />
            <p>Cueprise for</p>
            <h4>Andoid</h4>
            <p>Google play Best of 2015</p>
            <a href="">
              <Image alt="Play store badge" src={GoogleBadge} />
            </a>
          </div>
          <div className="card">
            <Image src={Ios} alt="Apple icon" />
            <p>Cueprise for</p>
            <h4>ios</h4>
            <p>App store Best of 2015</p>
            <a href="https://snapcraft.io/cueprise">
              <Image alt="App store badge" src={AppleBadge} />
            </a>
          </div>
        </div> 
      </PCDownload>

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
          <div className="mobile-badge">
            <a href="">
              <Image alt="App store badge" src={AppleBadge} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=io.cuesoft.cueprise">
              <Image alt="Play store badge" src={GoogleBadge} />
            </a>
          </div>
        </motion.div>
      </DownloadContent>
    </DownloadContainer>
  );
};

export default DownloadSection;
