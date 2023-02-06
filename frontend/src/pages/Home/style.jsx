import styled from "styled-components";

export default styled.div`
  .blockContainer {
    display: flex;
    justify-content: space-around;
    margin-top: 5rem;
    margin-bottom: 5rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      flex-direction: column;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      flex-direction: column;
    }
  }
`;
