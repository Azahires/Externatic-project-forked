import styled from "styled-components";

export default styled.div`
  .presentationElementTopContainer {
    height: 75vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
  }
  .presentationElementTop1,
  .presentationElementTop2,
  .presentationElementTop3 {
    width: 30vw;
    height: 75vh;
    margin-top: 3vh;
    border: 5px solid #c91961;
    border-radius: 5px;
  }
  .titlePresentationElementTop {
    font-size: 3rem;
    text-transform: uppercase;
    color: #c91961;
    font-weight: bold;
    margin-top: 3rem;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    color: #c91961;
    font-weight: bold;
    margin-top: 2rem;
    text-align: center;
  }
  p {
    font-size: 1.5rem;
    margin-top: 2rem;
    text-align: justify;
    margin: 2rem;
    line-height: 1.7rem;
  }
  em {
    font-size: 1.5rem;
    font-weight: bold;
    color: #c91961;
  }
  ul {
    font-size: 1.23rem;
    margin-top: 2rem;
    text-align: justify;
    margin: 2rem;
    line-height: 1.7rem;
  }
  li {
    list-style-type: disc;
    margin-bottom: 0.5rem;
  }
`;
