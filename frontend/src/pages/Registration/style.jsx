import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 20em;
    margin: auto;
    input,
    .error {
      border: none;
      border-radius: 10px;
      height: 50px;
      width: 300px;
      margin: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn {
      height: 50px;
      width: 310px;
    }
    .btn:hover {
      background-color: #c91961;
      color: #f6f1f1;
    }
    input:hover {
      border: 2px solid #c91961;
      font-family: JostBold;
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
      color: #c91961;
      font-weight: bold;
    }
  }
  .RGPD {
    width: 50%;
    margin: 1rem auto 0 auto;
    text-align: justify;
    font-size: 0.8rem;
  }
`;
