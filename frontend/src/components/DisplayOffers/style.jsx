import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
