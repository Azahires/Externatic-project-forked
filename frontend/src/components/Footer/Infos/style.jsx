import styled from "styled-components";

export default styled.div`
  width: 100vw;

  .info-content,
  ul {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: white;
    align-items: center;
    width: 100%;
    margin: 2em;
  }

  .info-content,
  li {
    align-items: center;
    text-decoration: none;
    color: white;
    margin: auto;
  }

  .info-content,
  a {
    text-decoration: none;
  }
  li {
    border: 2px solid;
    padding: 1em;
    border-radius: 10px;
  }
  li:hover {
    background-color: white;
    color: #c91961;
    font-family: JostBold;
  }
`;
