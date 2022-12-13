import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap");
  .presentationContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-left: 50px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 4px 25px black;
    border: 3px solid #c91961;
    width: 600px;
    height: 130px;
    font-family: "Jost", sans-serif;
    background-color: whitesmoke;
  }
  .presentationText {
    font-size: 1.3rem;
    text-align: center;
    padding-bottom: 1rem;
  }
  em {
    font-weight: bold;
    color: #c91961;
  }
  .presentationButton {
    text-align: center;
    text-decoration: none;
    padding: 8px 20px;
    width: 10rem;
    border-radius: 10px;
    background-color: #c91961;
    color: white;
    box-shadow: 2px 2px 2px gray;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .presentationButton:hover {
    background-color: white;
    color: #c91961;
    font-weight: bold;
    border: solid #c91961 2px;
  }
`;
