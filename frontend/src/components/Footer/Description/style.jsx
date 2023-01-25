import styled from "styled-components";

export default styled.div`
  .name-pres {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-family: JostBold;
    color: white;
    padding-top: 10px;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      text-align: center;
      line-height: 1.5rem;
    }
  }
`;
