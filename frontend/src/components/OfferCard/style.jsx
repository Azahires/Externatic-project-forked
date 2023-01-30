import styled from "styled-components";

export default styled.div`
  * {
    text-decoration: none;
  }

  .offerCardContainer {
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: 25vw;
    border: 2px solid black;
    border-radius: 5px;
    margin-bottom: 5rem;
    :hover .moreInformationContainer {
      background-color: #c91961;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
      opacity: 0.9;
    }
    :hover .textMoreInformation {
      color: white;
    }
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 90vw;
      height: 40vh;
      margin-bottom: 3rem;
    }
  }

  .titleOfferCardContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12vh;
    width: auto;
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.9;
    text-shadow: 2px 2px 2px black;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .titleOfferCard {
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    color: white;
  }

  .informationOfferCardContainer {
    display: flex;
    justify-content: space-between;
    height: 12vh;
    width: 25vw;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      height: 12vh;
      width: 90vw;
    }
  }
  .contractType,
  .location {
    width: 12.5vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 45vw;
    }
  }
  .contractType {
    border-right: 2px solid black;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1rem;
    }
  }
  .textContractType,
  .textLocation,
  .textPublicationDate {
    font-size: 1.2rem;
    font-weight: 500;
    color: #c91961;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1rem;
    }
  }
  .textPublicationDate {
    padding-left: 0.5rem;
  }

  .publicationDateContainer {
    height: 8vh;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: black;
    border-bottom: 2px solid black;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 90vw;
    }
  }
  .black {
    color: black;
    font-weight: bold;
  }

  .moreInformationContainer {
    height: 8vh;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 90vw;
    }
  }
  .textMoreInformation {
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    background-image: linear-gradient(
      90deg,
      rgba(201, 25, 97, 0.3) 0%,
      rgba(201, 25, 97, 0.3) 100%
    );
    background-size: 100% 8px;
    background-repeat: no-repeat;
    background-position: 0 100%;
  }

  .applicationDate {
    font-size: 1rem;
    margin-top: 0.3rem;
  }
`;
