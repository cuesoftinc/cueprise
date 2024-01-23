"use client"
import React from 'react';
import styled from 'styled-components';
import styles from '@/styles/general.styles';

const Index = () => {
  return (
    <SectionContainer>

    </SectionContainer>
  )
}

export default Index;

export const SectionContainer = styled.section`
  min-height: 100vh;
  background-color: ${styles.color.gray_100};
  padding: 2.06rem 2.2rem;
  background-image: url("/spiral.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  width: 100%;
  @media (max-width: 912px) {
    background-position: center;
    background-size: 500px;
  }
`;