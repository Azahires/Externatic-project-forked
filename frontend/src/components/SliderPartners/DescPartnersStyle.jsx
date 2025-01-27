import styled from "styled-components";

export default styled.div`
  .desc {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    margin-top: 3rem;
    font-size: 2rem;
    background-image: linear-gradient(
      90deg,
      rgba(201, 25, 97, 0.4) 0%,
      rgba(201, 25, 97, 0.4) 100%
    );
    background-size: 15% 8px;
    background-repeat: no-repeat;
    background-position: center 100%;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1.7rem;
      background-image: linear-gradient(
        90deg,
        rgba(201, 25, 97, 0.4) 0%,
        rgba(201, 25, 97, 0.4) 100%
      );
      background-size: 50% 8px;
      background-repeat: no-repeat;
      background-position: center 100%;
    }
  }

  p {
    color: black;
  }
`;
