import styled from "styled-components";

export default styled.div`
  form {
    display: flex;
    width: auto;
    justify-content: center;
    margin-bottom: 4rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      margin-bottom: 2rem;
      justify-content: space-between;
    }
  }
  label {
    display: flex;
    align-items: center;
    width: 10vw;
    padding-left: 0.5rem;
    font-weight: bold;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      padding-left: 0;
      font-size: 0.8rem;
      width: 20vw;
      justify-content: space-arounds;
    }
  }
  input:checked {
    background-color: #c91961;
  }

  input {
    height: 30px;
    width: 30px;
    border: 3px solid #c91961;
    border-radius: 5px;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      height: 20px;
      width: 20px;
    }
  }
  label[for="filters"] {
    /* @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      padding-left: 1rem;
      padding-right: 1rem;
    } */
  }
`;
