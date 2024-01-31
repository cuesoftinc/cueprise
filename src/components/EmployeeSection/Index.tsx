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
} from './EmployeeSection.styles';
import { motion } from 'framer-motion';
import { zoomIn } from "@/lib/motion";


const Index = () => {
  return (
    <SectionContainer>
      <InnerContainer>
        <ContentWrapper>
          <LeftBar>
          <h1>Employee Statistics</h1>
          <p>These statistics provide insights into various aspects of employee demographics, performance, and engagement.</p>
          </LeftBar>
          <RightBar>
            <TopImage
              src="employeeStatistics2.png" 
              alt=""
              initial="hidden"
              variants={zoomIn(0.1, 1.2)}
              whileInView="show"
            />
            <BottomImage src="employeeStatistics1.png" alt="" />
          </RightBar>
          <OuterImage src="cone.png" alt="cone image"/>
        </ContentWrapper>
      </InnerContainer>
    </SectionContainer>
  )
}

export default Index;


