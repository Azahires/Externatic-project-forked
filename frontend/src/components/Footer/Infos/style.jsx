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
    width: 100vw;
    margin: 2em;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin: 0;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .info-content,
  li {
    align-items: center;
    text-decoration: none;
    color: white;
    margin: auto;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin: none;
    }
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
