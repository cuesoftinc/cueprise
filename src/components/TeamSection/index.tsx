"use client";

import React from "react";
import {
  SectionContainer,
  InnerContainer,
  CustomLeftBar,
  CustomRightBar,
  CustomTopImage,
  CustomContentWrapper,
  BottomImage,
} from "./team.styles";
import { zoomIn } from "@/lib/motion";
import { motion } from "framer-motion";
import { PageWrapper } from "../PageWrapper/PageWrapper.styles";

const index = () => {
  return (
    <PageWrapper>
      <SectionContainer>
        <InnerContainer>
          <CustomContentWrapper>
            <CustomRightBar>
              <CustomTopImage
                as={motion.img}
                src="/justin.png"
                alt="an image"
                initial="hidden"
                variants={zoomIn(0.1, 0.7)}
                whileInView="show"
              />
              <BottomImage src="list.png" alt="an image" />
            </CustomRightBar>
            <CustomLeftBar>
              <h1>Streamlined Team Organization</h1>
              <p>
                Effortlessly organize, track, and optimize your entire team in one
                centralized hub, ensuring smooth collaboration and increased
                productivity
              </p>
            </CustomLeftBar>
          </CustomContentWrapper>
        </InnerContainer>
      </SectionContainer>
    </PageWrapper>
  );
};

export default index;
