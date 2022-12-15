import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap");
  .presentationContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 3px 3px 25px black;
    border: 5px solid #c91961;
    width: 38vw;
    height: 20vh;
    font-family: "Jost", sans-serif;
    background-color: whitesmoke;
  }
  .presentationText {
    font-size: 1.3rem;
    text-align: center;
    padding-bottom: 1rem;
    line-height: 1.4rem;
  }
  em {
    font-size: 1.5rem;
    font-weight: bold;
    color: #c91961;
  }
  .presentationButton {
    width: 12vw;
    height: 5vh;
    line-height: 2.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    color: #c91961;
    border: 3px solid #c91961;
    border-radius: 5px;
    letter-spacing: 0.125rem;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }
  .presentationButton span {
    position: relative;
    z-index: 2;
  }
  .presentationButton:after {
    position: absolute;
    content: "";
    left: 0;
    width: 0;
    height: 100%;
    background: #c91961;
    transition: all 0.35s;
  }
  .presentationButton:hover {
    color: #fff;
  }
  .presentationButton:hover:after {
    width: 100%;
  }
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    color: #c91961;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
