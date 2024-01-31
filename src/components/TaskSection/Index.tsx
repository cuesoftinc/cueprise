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
} from './TaskSection.styles';
import { motion } from 'framer-motion';
import { zoomIn } from "@/lib/motion";

const index = () => {
  return (
    <SectionContainer>
      <InnerContainer>
        <ContentWrapper>
          <LeftBar>
          <h1>Comprehensive Task Management Hub</h1>
          <p>Effortlessly track, assign, and monitor tasks for your company, gaining insights into progress and achievement in one unified workspace</p>
          </LeftBar>
          <RightBar>
            <motion.div>
              
            </motion.div>
            <TopImage 
              src="taskManagement2.png" 
              alt=""
              initial="hidden"
              variants={zoomIn(0.2, 0.8)}
              whileInView="show"
            />
            <BottomImage src="taskManagement1.png" alt="" />
          </RightBar>
          <OuterImage src="cone.png" alt="cone image"/>
        </ContentWrapper>
      </InnerContainer>
    </SectionContainer>
  )
}

export default index;


