import styled from "styled-components";

export default styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 50vh;
  margin: auto;
  input {
    border-radius: 10px;
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
    color: black;
  }
  input:hover {
    background-color: #c91961;
  }
`;
