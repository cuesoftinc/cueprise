"use client";
import React from "react";
import {
  SectionContainer,
  InnerContainer,
  ContentWrapper,
  LeftBar,
  RightBar,
  TopImage,
  BottomImage,
  OuterImage,
} from "./management.styles";
import { zoomIn } from "@/lib/motion";
import { PageWrapper } from "../PageWrapper/PageWrapper.styles";

const index = () => {
  return (
    <PageWrapper>
      <SectionContainer>
        <InnerContainer>
          <ContentWrapper>
            <LeftBar>
              <h1>Manage All Your Goods and Inventories </h1>
              <p>
                Simplify your inventory tasks with our intuitive management
                system, effortlessly organizing and tracking all your goods for a
                more streamlined and efficient business operation
              </p>
            </LeftBar>
            <RightBar>
              <TopImage
                src="/iphone.png"
                alt="phone image"
                initial="hidden"
                variants={zoomIn(0.1, 0.7)}
                whileInView="show"
              />
              <BottomImage src="inventories.png" alt="phone image" />
            </RightBar>
          </ContentWrapper>
          <OuterImage src="cone.png" alt="cone image" />
        </InnerContainer>
      </SectionContainer>
    </PageWrapper>
  );
};

export default index;
