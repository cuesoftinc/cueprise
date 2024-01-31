import { styled } from "styled-components";
import styles from "@/styles/general.styles"

export const DownloadContainer = styled.div`
  background-color: #F9F9F9;
  font-family: Inter;

  background-image: url("/downloadVector.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  border: solid 1px ${styles.color.gray_200};
  border-radius: 25px;
  margin: 8rem 2rem 2rem 2rem;
  padding: 4rem 4rem 0 4rem;
  font-family: Inter;

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
    margin: 4rem 1rem 1rem 1rem;
    padding: 2rem 0;

    h1 {
      font-size: 14px;
    }

    h2 {
      font-size: 20px;
    }
  }
`
export const DownloadContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;

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

  h3 {
    font-size: 48px;
    font-weight: 700;
  }

  p {
    font-size: 20px;
    color: ${styles.color.gray_600};
    margin-top: 2rem;
  }

  .mobile-badge {
    display: none;
  }

  @media (max-width: 769px) {
    display: block;
    padding: 2rem;
    margin-top: 2rem;

    h3 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
      margin-bottom: 2rem;
    }
    .mobile-badge {
      display: block;
      width: 14rem;
      height: auto;
      margin: 1rem auto;

      img {
        margin: 1rem 0;
        width: 100%;
        height: auto;
      }
    }
`
export const DownloadStore = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  

  @media (max-width: 769px) {
    display: block;

    img {
      display: none;
    }
  }
`