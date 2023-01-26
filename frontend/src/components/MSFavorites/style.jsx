import styled from "styled-components";

export default styled.div`
  div {
    margin-left: 1rem;
  }
  p {
    margin: 1.2rem 0;
    font-size: 1.1rem;
  }
  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  .candidateinfo {
    margin: 0.5rem;
    padding: 0 1rem;
    border: 1px dotted #c91961;
    border-bottom: 1px dotted #c91961;
  }
  li {
    margin: 0.8rem 0;
  }
  strong {
    font-weight: bold;
    color: #c91961;
  }
  .sociallogo {
    width: 3rem;
  }
  .emaillink {
    color: black;
  }
  .signature {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    width: 60%;
    ul {
      margin-left: 0.6rem;
    }
    img {
      height: 2.5rem;
      border: 2px solid #c91961;
      padding: 0.8rem;
    }
    .sender {
      font-weight: bold;
      color: #c91961;
      margin: 0.2rem 0;
    }
    .senderInfo {
      margin: 0.2rem 0;
      font-style: italic;
      font-size: 0.9rem;
    }
  }
`;
