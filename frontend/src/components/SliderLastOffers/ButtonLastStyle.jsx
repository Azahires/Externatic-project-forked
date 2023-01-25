import styled from "styled-components";

export default styled.div`
  a {
    text-decoration: none;
  }

  .flex-container {
    display: flex;
    justify-content: center;
  }

  button {
    width: 20rem;
    margin-left: 0.1rem;
    font-family: "Jost", sans-serif;
    padding: 8px 1rem;
    cursor: pointer;
    font-size: 1rem;
    border: 2px solid #c91961;
    background-color: #c91961;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
  }
  button:hover {
    background-color: white;
    color: #c91961;
  }
`;
