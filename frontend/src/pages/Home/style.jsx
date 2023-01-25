import styled from "styled-components";

export default styled.div`
  .blockContainer {
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      flex-direction: column;
    }
  }
`;
