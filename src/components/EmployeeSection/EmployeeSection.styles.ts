import { styled } from "styled-components";
import styles from '@/styles/general.styles'

export const EmployeeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  margin: 2rem;
  padding: 4rem;
  font-family: Inter;

  @media (max-width: 769px) {
    display: block;
    padding: 2rem;
    margin: 1rem;
  }

  .img {
    order: 1;
    
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .text {
    order: 2;
    justify-self: flex-end;
    @media (max-width: 769px) {
      text-align: center;
    }
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
    color: ${styles.color.gray_600}

    @media (max-width: 769px) {
      font-size: 16px;
      line-height: 10px;
    }
  }
`
