import styled from "styled-components";

export default styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  input,
  .error,
  textarea {
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
    margin: 10px auto;
    border-radius: initial;
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
    background-color: #c91961;
    color: black;
  }
  input:hover,
  textarea:hover {
    background-color: #c91961;
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
  }
`;
