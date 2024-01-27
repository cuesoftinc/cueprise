"use client";

import React from "react";
import {
  SectionContainer,
  InnerContainer,
  CustomLeftBar,
  CustomRightBar,
  CustomTopImage,
  BottomImage,
} from "./team.styles";

const index = () => {
  return (
    <SectionContainer>
      <InnerContainer>
        <CustomRightBar>
          <CustomTopImage src="/justin.png" alt="an image" />
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
      </InnerContainer>
    </SectionContainer>
  );
};

export default index;
