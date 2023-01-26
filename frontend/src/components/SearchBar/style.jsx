import styled from "styled-components";

export default styled.div`
  input {
    width: 50rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 95vw;
      border: 1px solid black;
      border-radius: 5px;
      color: black;
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
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;
