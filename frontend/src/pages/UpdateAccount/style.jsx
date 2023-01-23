import styled from "styled-components";

export default styled.form`
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-image: linear-gradient(120deg, #f7f6f5 0%, #c91961 100%);
  input,
  .error,
  textarea {
    border: none;
    border-radius: 10px;
    height: 50px;
    width: 300px;
    margin: 20px auto 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type="file"] {
    height: initial;
    width: initial;
    margin: 2% auto;
    border-radius: initial;
    background: none;
    border: none;
  }

  input[type="radio"] {
    height: initial;
    width: initial;
    display: initial;
    margin: 10px auto;
  }

  fieldset {
    text-align: center;
  }

  textarea {
    resize: none;
    height: 200px;
    width: 300px;
  }
  .btn {
    height: 50px;
    width: 310px;
  }
  .btn:hover {
    font-family: JostBold;
    color: #c91961;
  }
  input:hover {
    font-family: JostBold;
    color: #c91961;
  }

  .noerror,
  .nomodification {
    display: none;
  }

  .error,
  .modification {
    text-align: center;
    font-size: 1.3rem;
    color: #c91961;
    font-weight: bold;
  }

  p {
    text-align: center;
    font-family: Jost;
  }
  input::-webkit-input-placeholder {
    color: #c91961;
  }
  textarea:hover {
    border: 2px solid;
    font-family: JostBold;
    color: #c91961;
  }
`;
