// import { styled } from "styled-components";
// import styles from '@/styles/general.styles'

// export const EmployeeContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   align-items: center;
//   background-color: white;
//   border-radius: 25px;
//   margin: 2rem;
//   padding: 4rem;
//   font-family: Inter;

//   @media (max-width: 769px) {
//     display: block;
//     padding: 2rem;
//     margin: 1rem;
//   }

//   .img {
//     order: 1;
//     position: relative;
//     z-index: 1;
    
//     img {
//       max-width: 100%;
//       height: auto;
//     }
//   }

//   .text {
//     order: 2;
//     justify-self: flex-end;
//     @media (max-width: 769px) {
//       text-align: center;
//     }
//   }

//   h1 {
//     font-size: 56px;
//     line-height: 56.8px;
//     font-weight: 700;
//     margin-bottom: 1rem;

//     @media (max-width: 769px) {
//       font-size: 20px;
//       line-height: 24px;
//     }
//   }

//   p {
//     font-size: 20px;
//     line-height: 24.2px;
//     font-weight: 400;
//     color: ${styles.color.gray_600}

//     @media (max-width: 769px) {
//       font-size: 16px;
//       line-height: 10px;
//     }
//   }
// `
// export const OuterImage = styled.img`
//   position: absolute;
//   top: -10%;
//   left: 40%;
//   bottom: 20%;
//   z-index: 10;
//   transform: scaleX(-1);
  
//   @media (max-width: 769px) {
//     display: none;
//   }
// `;

import { styled } from "styled-components";
import styles from "@/styles/general.styles"

export const SectionContainer = styled.section`
  background-color: ${styles.color.gray_100};
  overflow: hidden;
  margin: 2rem;
  font-family: Inter;

  @media (max-width: 769px) {
    margin: 1rem;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  height: 95vh;
  background-color: #FFFFFF;
  padding: 4rem;
  border-radius: 25px;

  @media (max-width: 769px) {
    display: block;
    padding: 2rem;
    height: 110vh;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30rem;

  @media (max-width: 769px) {
    display: block;
  }
`;

export const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Inter" sans-serif;
  font-style: normal;
  width: 60%;
  order: 2;

  @media (max-width: 769px) {
    display: block;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 56px;
    line-height: 56.8px;
    font-weight: 700;
    margin-bottom: 1rem;
    
    @media (max-width: 769px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  p {
    font-size: 20px;
    line-height: 24.2px;
    font-weight: 400;
    color: ${styles.color.gray_600};
    max-width: 80%;

    @media (max-width: 769px) {
      font-size: 16px;
      line-height: 24px;
      max-width: 100%;
    }
  }
  
`;

export const RightBar = styled.div` 
  display: flex;
  justify-content: center;
  position: relative;
  width: 40%;
  order: 1;

  @media (max-width: 769px) {
    width: 100%;
    margin: 6rem 0;
    display: block;
  }
`;

export const BottomImage = styled.img`
  position: relative;
  margin: 0 1rem;
  z-index: 5;

  @media (max-width: 769px) {
    width: 80%;
    height: auto;
    margin: 0;
  }
`;

export const TopImage = styled.img`
  position: absolute;
  top: 18%;
  right: -36%;
  z-index: 10;

  @media (max-width: 769px) {
    width: 70%;
    right: -5%;
  }
`;

export const OuterImage = styled.img`
  position: absolute;
  top: 11%;
  left: 24%;
  bottom: 20%;
  z-index: 10;
  transform: scaleX(-1);

  @media (max-width: 769px) {
    display: none;
  }
`;