import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: space-between;
  height: 30vh;
  button {
    cursor: pointer;
    width: 100%;
    height: 5vh;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    letter-spacing: 0.125rem;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    font-family: "JostBold";
    margin: 0;
  }
  .active {
    background-color: #fff;
    color: #c91961;
  }
  .passive {
    background-color: #c91961;
    color: #fff;
  }
`;
