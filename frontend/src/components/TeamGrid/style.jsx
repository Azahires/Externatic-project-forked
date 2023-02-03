import styled from "styled-components";

export default styled.div`
  .gridContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .mainDiv {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.95;
    height: 29.7vh;
    @media (max-width: 1000px) {
      height: auto;
      flex-direction: column;
    }
  }
  .titleMainDiv {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: justify;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 1000px) {
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
  .firstBloc,
  .secondBloc,
  .thirdBloc,
  .fourthBloc {
    border: 3px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 14rem;
    width: 14rem;
    border-radius: 50%;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    @media (min-width: 768px) and (max-width: 1300px) {
      height: 10rem;
      width: 10rem;
    }
    @media (max-width: 1000px) {
      margin-bottom: 2rem;
    }
  }
  em {
    color: black;
  }
  ul {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    @media (min-width: 768px) and (max-width: 1300px) {
      font-size: 1rem;
    }
  }
  li {
    list-style-type: none;
    color: #c91961;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.3rem;
    @media (min-width: 768px) and (max-width: 1300px) {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
  }
  .pSecondBloc,
  .pThirdBloc,
  .fourthBloc {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    color: #c91961;
    line-height: 2rem;
    @media (min-width: 768px) and (max-width: 1300px) {
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      color: #c91961;
    }
  }
  .imageConsultant {
    height: 20vh;
    width: 11vw;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      height: 25vh;
      width: 50vw;
    }
  }
  .consultantDiv {
    position: relative;
  }
  .consultantDivContent {
    position: absolute;
    visibility: hidden;
    opacity: 0;
  }
  .consultantDiv:hover .consultantDivContent {
    visibility: visible;
    opacity: 1;
    top: 5%;
    left: 10%;
  }
  .consultantDiv:hover .imageConsultant {
    opacity: 0.2;
  }
  h3 {
    font-size: 1.7rem;
    font-weight: bold;
    color: #c91961;
  }
  .pMail,
  .pPhoneNumber {
    font-size: 0.85rem;
  }
  .pJob,
  .pMail,
  .pPhoneNumber {
    margin-top: 8px;
  }
  .pJob {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .LinkedinLogo {
    height: 2rem;
    margin-top: 5px;
  }
  .locationImg,
  .checkImg,
  .studentImg,
  .companyImg {
    height: 3rem;
    @media (min-width: 768px) and (max-width: 1300px) {
      display: none;
    }
  }
`;
