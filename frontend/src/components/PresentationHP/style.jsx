import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap");
  .presentationContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    border: 5px solid #c91961;
    width: 38vw;
    height: auto;
    font-family: "Jost", sans-serif;
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      height: auto;
      width: 80vw;
      margin-bottom: 2rem;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      height: auto;
      width: 90vw;
      margin-top: 3rem;
    }
  }
  .presentationText {
    font-size: 1.3rem;
    text-align: center;
    padding-bottom: 1rem;
    line-height: 1.4rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
  em {
    font-size: 1.5rem;
    font-weight: bold;
    color: #c91961;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1.2rem;
    }
  }
  .presentationButton {
    width: 12vw;
    line-height: 2.5rem;
    font-size: 1.125rem;
    margin-top: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    background-color: #c91961;
    border: 3px solid #c91961;
    border-radius: 5px;
    letter-spacing: 0.125rem;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 70vw;
      height: 5vh;
      margin-top: 1rem;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      height: auto;
      width: 40vw;
    }
  }
  .presentationButton span {
    position: relative;
    z-index: 2;
  }
  .presentationButton:after {
    position: absolute;
    content: "";
    left: 0;
    width: 0;
    height: 100%;
    background: white;
    transition: all 0.35s;
  }
  .presentationButton:hover {
    color: #c91961;
  }
  .presentationButton:hover:after {
    width: 100%;
  }
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    color: #c91961;
    font-weight: bold;
    margin-bottom: 2rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;
