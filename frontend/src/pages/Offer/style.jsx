import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #offer {
    border-radius: 20px;
    margin-top: 5vh;
    height: 60vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: justify;
    padding: 0 5vw;
    border: black 5px solid;
    #offerinfo {
      height: 20vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
    }
    h1 {
      font-size: 2rem;
      font-family: "JostBold";
    }
    h2 {
      font-size: 1.3rem;
    }
  }
`;
