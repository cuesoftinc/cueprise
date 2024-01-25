"use client"
import React from 'react';
import { FeatureData, Features_data } from './data';
import {
  SectionContainer,
  Inner_wrapper,
  Section,
  Header_wrapper,
  Header,
  Subtext,
  CardsContainer,
  CardContainer,
  IconOverlay,
  Icon,
  CardHeader,
  CardText,
} from './Features.styles';


const FeaturesCard = ({header, sub_text, iconSrc}: FeatureData) => {
  return (
    <CardContainer>
      <IconOverlay>
        <Icon src={iconSrc} alt={`${header} icon`} />
      </IconOverlay>
      <CardHeader>{header}</CardHeader>
      <CardText>{sub_text}</CardText>
    </CardContainer>
  )
};

const Index = () => {
  return (
    <SectionContainer>
      <Inner_wrapper>
        <Section>Features</Section>
        <Header_wrapper>
          <Header>Cueprise Solutions For Your Business</Header>
          <Subtext>
            Boost efficiency and cut costs with 
            Cueprice’s intuitive business tools
          </Subtext>
        </Header_wrapper>
        <CardsContainer>
          {Features_data.map((item, index) => (
            <FeaturesCard key={index} {...item} />
          ))}
        </CardsContainer>
      </Inner_wrapper>
    </SectionContainer>
  )
}

export default Index;

