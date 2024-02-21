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
    padding: 2rem 0;
    margin: 1.75rem;

    h1 {
      font-size: 14px;
    }

    h2 {
      font-size: 20px;
    }
  }
`

export const PCDownload = styled.div`
  margin: 2rem 0;

  h3 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
  }

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6rem;
    margin: 4rem;

    @media (max-width: 1025px) {
      margin: 0rem;
      gap: 2rem;
    }
  }

  .mobile-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    margin: 4rem auto;
    width: 60%;

    @media (max-width: 1025px) {
      width: 80%;
    }
  }

  .card {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;

    h4{
      font-size: 36px;
      font-weight: 700;
    }

    p {
      margin: 1rem 0 0 0;
      color: #6A597A;
    }

    a{
      text-decoration: none;
      color: #ffffff;
      font-size: 20px;
      font-weight: 700;
    }

    button {
      background-color: black;
      border-radius: 10px;
      width: 100%;
      padding: 1rem;
      margin: 2rem 0 0 0;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .card a img {
    margin: 2rem 0 0 0;
    width: 100%;
    height: 25%;
  }

  @media (max-width: 769px) {
    display: none;
  }
`

export const DownloadContent = styled.div`
  display: none;
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