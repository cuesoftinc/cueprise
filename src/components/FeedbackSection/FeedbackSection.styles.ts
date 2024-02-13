import { styled } from "styled-components";
import styles from "@/styles/general.styles"
import { motion } from "framer-motion";

export const FeedbackContainer = styled.div`
  font-family: Inter;
  margin: 2rem 2rem 0 2rem;
  padding: 4rem 1rem;

  h1 {
    background-color: #62BAAC;
    padding: 0.5rem;
    border-radius: 2rem;
    margin: 0 auto;
    text-align: center;
    font-size: 16px;
    font-weight: 600px;
    width: 104px;
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 1rem;
  }

  @media (max-width: 769px) {
    margin: 4rem 1rem 0 1rem;
    padding: 2rem 0;

    h1 {
      font-size: 14px;
    }
  }
`
export const FeedbackContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 769px) {
    display: block;
    padding: 2rem;
    margin-top: 2rem;
    text-align: center;
  }
`

export const Feedback = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;

  img {
    border-radius: 25px;
  }

  .rating {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .text {
    min-width: 0;
  }

  h3 {
    margin: 1.5rem 0;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .user-detail {
    display: flex;
    gap: 1rem;
    margin-top: auto;
    margin-bottom: .5rem;
  }

  .user-detail > p:last-child {
    color: ${styles.color.blue_gray_500};
  }

  p {
    font-weight: 600;
    font-size: 16px;
  }

  @media (max-width: 769px) {
    display: block;

    img {
      margin: 0 auto; /* Center image */
    }

    h3 {
      margin: 1rem auto;
    }

    .user-detail {
      justify-content: center;
    }

    .user-detail > p {
      margin: 0 0 3rem 0;
    }
  }
`