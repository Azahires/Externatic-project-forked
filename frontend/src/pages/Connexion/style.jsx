import styled from "styled-components";

export default styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 20em;
  height: 50vh;
  margin: auto;
  input,
  .error {
    border-radius: 10px;
    border: none;
    height: 50px;
    width: 300px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-1 {
    height: 50px;
    width: 310px;
  }
  .btn-1:hover {
    background-color: #c91961;
    color: #f7f4f4;
    font-family: JostBold;
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
`;
