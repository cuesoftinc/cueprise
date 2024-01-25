"use client"
import React from 'react';
import {
  SectionContainer,
  InnerContainer,
  ContentWrapper,
  LeftBar,
  RightBar,
  TopImage,
  BottomImage,
  OuterImage
} from './management.styles';

const index = () => {
  return (
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
            <TopImage src="/iphone.png" alt="phone image" />
            <BottomImage src="inventories.png" alt="phone image" />
          </RightBar>
        </ContentWrapper>
        <OuterImage src="cone.png" alt="cone image"/>
      </InnerContainer>
    </SectionContainer>
  )
}

export default index;

