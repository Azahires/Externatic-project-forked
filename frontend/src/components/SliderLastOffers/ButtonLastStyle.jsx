import styled from "styled-components";

export default styled.div`
  a {
    text-decoration: none;
  }

  .flex-container {
    display: flex;
    justify-content: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Jost", sans-serif;
    width: 17vw;
    height: 5vh;
    cursor: pointer;
    font-size: 1.125rem;
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
      width: 70vw;
      height: 5vh;
      margin-top: 1rem;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 50vw;
      height: 5vh;
      margin-top: 1rem;
      font-size: 1.4rem;
    }
  }
  button span {
    position: relative;
    z-index: 2;
  }
  button:after {
    position: absolute;
    content: "";
    left: 0;
    width: 0;
    height: 100%;
    background: white;
    transition: all 0.35s;
  }
  button:hover {
    color: #c91961;
  }
  button:hover:after {
    width: 100%;
  }
`;
