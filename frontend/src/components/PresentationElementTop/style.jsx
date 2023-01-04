import styled from "styled-components";

export default styled.div`
  .titlePresentationElementTop {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: #c91961;
    padding-top: 2rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .presentationElementTopContainer {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  .presentationElementTop1,
  .presentationElementTop2 {
    display: flex;
    justify-content: space-around;
    align-self: center;
    border: 3px solid #fff;
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.95;
    border-radius: 10px;
    margin-bottom: 3rem;
    @media (min-width: 1024px) {
      width: 70vw;
      height: 25rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 70vw;
      height: 35rem;
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 451px) and (max-width: 767px) {
      width: 80vw;
      height: 72vh;
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 360px) and (max-width: 450px) {
      width: 95vw;
      height: 72vh;
    }
  }
  .presentationElementTop3 {
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.95;
    display: flex;
    justify-content: space-around;
    align-self: center;
    border: 3px solid #fff;
    border-radius: 10px;
    margin-bottom: 2rem;
    @media (min-width: 1024px) {
      width: 70vw;
      height: 60rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 70vw;
      height: 56rem;
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 451px) and (max-width: 767px) {
      width: 80vw;
      height: 140vh;
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 360px) and (max-width: 450px) {
      width: 95vw;
      height: 140vh;
    }
  }

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    color: #ecf0f1;
    font-weight: bold;
    margin-bottom: 1.5rem;
    @media (min-width: 360px) and (max-width: 450px) {
      font-size: 1.7rem;
    }
  }
  .Valuesimg,
  .Missionimg,
  .Engagementsimg {
    @media (min-width: 1024px) {
      height: 25rem;
    }
    @media (max-width: 1224px) {
      height: 20rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      height: 15rem;
    }
    @media (min-width: 451px) and (max-width: 767px) {
      height: 12rem;
    }
    @media (min-width: 360px) and (max-width: 450px) {
      display: none;
    }
  }

  .imagebloc1,
  .imagebloc2,
  .imagebloc3 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imagebloc3 {
    margin-left: 1rem;
  }
  .textbloc1,
  .textbloc2,
  .textbloc3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 0.5rem;
    text-align: justify;
    margin: 2rem;
    line-height: 1.5rem;
    @media (min-width: 768px) and (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 451px) and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  p {
    color: #ecf0f1;
    width: 35vw;
    font-size: 1.25rem;
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 65vw;
    }
    @media (min-width: 451px) and (max-width: 767px) {
      width: 70vw;
    }
    @media (max-width: 450px) {
      width: 80vw;
    }
  }
  em {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ecf0f1;
  }
`;
