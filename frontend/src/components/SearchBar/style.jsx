import styled from "styled-components";

export default styled.div`
  input {
    width: 50rem;
    height: 5vh;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    border: 1px solid #c91961;
    border-radius: 5px;
    color: white;
    font-size: 1.125rem;
    padding-left: 1rem;
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 90vw;
      border: 1px solid black;
      border-radius: 5px;
    }
    ::placeholder {
      color: white;
      font-size: 1.125rem;
    }
  }
  button {
    width: 10rem;
    margin-left: 0.1rem;
    font-family: "Jost", sans-serif;
    padding: 8px 1rem;
    margin-left: 1rem;
    cursor: pointer;
    font-size: 1rem;
    border: 2px solid #c91961;
    background-color: #c91961;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
  }
  button:hover {
    background-color: white;
    color: #c91961;
  }
  form {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 3rem;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 70vw;
    }
  }

  .searchButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    font-size: 1.125rem;
    margin-left: 2rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    background-color: #c91961;
    border: 3px solid #c91961;
    border-radius: 5px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 35vw;
      height: 5vh;
      margin-top: 1.5rem;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 35vw;
    }
  }
  .searchButton span {
    position: relative;
    z-index: 2;
  }
  .searchButton:after {
    position: absolute;
    content: "";
    left: 0;
    width: 0;
    height: 100%;
    background: white;
    transition: all 0.35s;
  }
  .searchButton:hover {
    color: #c91961;
  }
  .searchButton:hover:after {
    width: 100%;
  }
`;
