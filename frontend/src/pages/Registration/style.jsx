import styled from "styled-components";

export default styled.div`
  background: linear-gradient(-45deg, #f14981, #c91961, #d86076, #f14981);
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 100vw;
  font-family: Jost;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
    background: linear-gradient(-45deg, #f14981, #c91961, #d86076, #f14981);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    background: linear-gradient(-45deg, #f14981, #c91961, #d86076, #f14981);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    input,
    .error {
      border: none;
      border-radius: 10px;
      height: 5vh;
      width: 25vw;
      margin: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
        height: 5vh;
        width: 70vw;
        margin: 1rem;
      }
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        height: 5vh;
        width: 70vw;
        margin: 1rem;
      }
    }
    .btn {
      height: 5vh;
      width: auto;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
      background-color: #ecf0f1;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }
    .btn:hover {
      background-color: #c91961;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
      color: #f6f1f1;
      border: 2px solid white;
    }
    input:hover {
      border: 1px solid #c91961;
      font-family: Jost;
    }
    input::-webkit-input-placeholder {
      color: #c91961;
    }
    .noerror {
      display: none;
    }

    .error {
      text-align: center;
      font-size: 1.3rem;
      color: white;
      font-weight: bold;
    }
  }
  .RGPD {
    width: 50%;
    margin: 1rem auto 0 auto;
    text-align: justify;
    font-size: 0.8rem;
    color: white;
    padding-bottom: 1rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 90vw;
      font-size: 0.7rem;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 90vw;
      font-size: 1rem;
    }
  }

  input {
    padding-left: 1rem;
    font-size: 1.5rem;
    color: #c91961;
    font-family: Jost;
    background-color: whitesmoke;
  }

  h1 {
    text-transform: uppercase;
    color: white;
    text-align: center;
    font-size: 3rem;
    padding-bottom: 2rem;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
    background-size: 55% 8px;
    background-repeat: no-repeat;
    background-position: center 50%;
    text-shadow: 1px 1px 2px black;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 3rem;
      background-size: 90% 8px;
      background-repeat: no-repeat;
      background-position: center 50%;
      text-shadow: 1px 1px 2px black;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      font-size: 4rem;
      background-size: 62% 8px;
      background-repeat: no-repeat;
      background-position: center 60%;
      text-shadow: 1px 1px 2px black;
    }
  }
`;
