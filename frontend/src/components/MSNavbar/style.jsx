import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
    width: auto;
    height: 6vh;
    border-radius: 5px;
    font-size: 1.125rem;
    color: #fff;
    background: #c91961;
    border: none;
    border-bottom: 2px solid #c91961;
    letter-spacing: 0.125rem;
    text-align: center;
    font-family: "Jost", sans-serif;
    margin: 0;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 30vw;
      height: 10vh;
      border: 1px solid white;
      letter-spacing: 0;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 20vw;
      height: 7.5vh;
      border: 1px solid white;
      letter-spacing: 0;
    }
  }
  .active {
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    color: #c91961;
    border: 2px solid black;
  }
  .passive {
    background-color: #c91961;
    color: white;
    border: 2px solid white;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      border: 1px solid white;
    }
  }

  span {
    padding: 0.5rem;
    font-size: 1.5rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1rem;
      text-align: justify;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      font-size: 1rem;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  .MSNavbarContainer {
    width: 100vw;
    height: 15vh;
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.95;
    display: flex;
    justify-content: space-around;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      height: 25vh;
      flex-direction: column;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 100vw;
      height: 15vh;
    }
  }
  .HelloUser {
    width: 20vw;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      text-align: center;
      height: 10vh;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 30vw;
      height: 15vh;
      text-align: justify;
      padding-left: 1rem;
    }
  }
  .EMuser {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
  }
  .ButtonProfile,
  .ButtonFavorites,
  .ButtonCandidatures {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttonResponsive {
    display: flex;
    justify-content: space-between;
    width: 50vw;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      display: flex;
      justify-content: space-around;
      height: 10vh;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 70vw;
      display: flex;
      justify-content: space-around;
      height: 15vh;
    }
  }
`;
