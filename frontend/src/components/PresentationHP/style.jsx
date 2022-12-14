import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap");
  .presentationContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    margin-left: 50px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 3px 3px 25px black;
    border: 3px solid #c91961;
    width: 615px;
    height: 170px;
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
    display: block;
    width: 12.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    color: #c91961;
    border: 2px solid #c91961;
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
  .typing-demo {
    color: #c91961;
    width: 39%;
    animation: typing 2s steps(25), blink 0.6s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-size: 1.5rem;
    padding-bottom: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
