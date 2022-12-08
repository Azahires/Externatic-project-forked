import styled from "styled-components";

export default styled.div`
  margin: 1rem;
  border: 5px solid black;
  width: 30vw;
  height: 20vh;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  h2 {
    font-family: "JostBold";
    font-size: 1.2rem;
  }
  :hover {
    color: #c91961;
    border: 5px solid #c91961;
    p:last-of-type {
      background-color: #c91961;
    }
  }
  p:last-of-type {
    background-color: black;
    color: white;
    padding: 0.5rem;
    margin: -1rem;
  }
`;
