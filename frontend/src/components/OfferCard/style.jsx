import styled from "styled-components";

export default styled.div`
  width: 28vw;
  height: 25vh;
  min-height: 200px;
  border: 5px solid black;
  margin: 1rem;
  :hover {
    border: 5px solid #c91961;
    p:last-of-type {
      background-color: #c91961;
    }
  }
  a {
    height: 100%;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-decoration: none;
    color: black;
    :hover {
      color: #c91961;
    }
    h2 {
      font-family: "JostBold";
      font-size: 1.2rem;
      margin-top: 1rem;
    }
    p:last-of-type {
      background-color: black;
      padding: 0.5rem;

      color: white;
    }
  }
`;
