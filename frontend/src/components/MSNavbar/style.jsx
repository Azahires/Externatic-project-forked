import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
    width: 100%;
    height: 6vh;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    background: #c91961;
    border: none;
    border-bottom: 3px solid #c91961;
    letter-spacing: 0.125rem;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    font-family: "JostBold";
    margin: 0;
  }
  /* button:after {
    position: absolute;
    content: "";
    left: 0;
    width: 0;
    height: 100%;
    background: #fff;
    transition: all 0.35s;
  }
  button:hover {
    color: #c91961;
  }
  button:hover:after {
    width: 100%;
  }
  span {
    position: relative;
    z-index: 2;
  } */
  .active {
    background-color: #fff;
    color: #c91961;
  }
  .passive {
    background-color: #c91961;
    color: #fff;
  }
`;
