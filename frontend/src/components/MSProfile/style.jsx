import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap");
  .MSProfileContainer {
    font-family: "Jost", sans-serif;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 75vh;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      display: flex;
      flex-direction: column;
      height: auto;
    }
  }
  .MSProfileLeftContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 40vw;
    height: 79vh;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: auto;
      height: auto;
    }
  }
  .UserAvatar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;
    width: 25vw;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      height: 25vh;
    }
    .AvatarImg {
      max-width: 300px;
      max-height: 300px;
      border-radius: 36% 64% 32% 68% / 44% 30% 70% 56%;
      @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
        max-width: 200px;
        max-height: 200px;
      }
    }
  }
  .socialMediaContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 34vh;
    width: 15vw;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      height: 10vh;
      display: flex;
      flex-direction: row;
    }
  }
  .buttonSocialMediaLinkedin,
  .buttonSocialMediaGitHub {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 11vw;
    height: 6vh;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 40vw;
    }
  }

  .buttonSocialMediaLinkedin {
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.95;
    border-radius: 10px;
    color: white;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1.2rem;
    }
  }
  .linkedinLogo {
    height: 43px;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      height: 30px;
    }
  }

  .githubLogo {
    height: 39px;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      height: 25px;
    }
  }
  .buttonSocialMediaGitHub {
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.95;
    border-radius: 10px;
    color: white;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1.2rem;
    }
  }
  .UserInformations {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 40vw;
    height: 45vh;
    line-height: 2.5rem;
    font-size: 1.7rem;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    padding-top: 1rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      font-size: 1.2rem;
      height: auto;
    }
  }
  .UserField {
    font-size: 1.7rem;
    color: #c91961;
    font-weight: bold;
    text-transform: uppercase;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 1.4rem;
    }
  }
  li {
    color: black;
  }
  .buttonupdate {
    padding-top: 1.5rem;
  }
  .updateInformations {
    cursor: pointer;
    height: 2.5rem;
    width: 15rem;
    font-family: "Jost", sans-serif;
    font-size: 1rem;
    background-color: #c91961;
    color: white;
    border: none;
    font-weight: bold;
    border-radius: 10px;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 70vw;
      height: 6vh;
    }
  }
  .updateIBio,
  .updateResearch {
    cursor: pointer;
    height: 2.5rem;
    width: 12rem;
    font-family: "Jost", sans-serif;
    font-size: 1rem;
    background-color: #c91961;
    color: white;
    border: none;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 1rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 70vw;
      height: 6vh;
    }
  }
  .MSProfileRightContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    border-left: 2px solid #c91961;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      height: auto;
    }
  }
  .myBiography {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #c91961;
    border-radius: 5px;
    margin: 1rem;
    width: 50vw;
    height: 35vh;
    margin-top: 3rem;
    background-color: whitesmoke;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 90vw;
      height: auto;
    }
  }
  .myBiographyTitle,
  .myResearchTitle,
  .myCVTitle {
    font-family: "Jost", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 0.5rem;
    color: #c91961;
    font-weight: bold;
  }
  .myResearchTitle {
    margin-bottom: 1.5rem;
  }

  .avatarlabel {
    font-weight: bold;
    color: #c91961;
    margin: 0;
  }
  .textBiography {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    text-align: justify;
    margin: 1rem;
    line-height: 1.5rem;
  }
  .myResearch,
  .myCV {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #c91961;
    border-radius: 5px;
    margin: 1rem;
    width: 50vw;
    height: auto;
    background-color: whitesmoke;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 90vw;
      height: auto;
    }
  }
  .checkboxContainer {
    display: flex;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      font-size: 1.2rem;
      line-height: 2rem;
      padding-left: 2rem;
      width: 90vw;
    }
  }
  label {
    padding-left: 0.5rem;
  }
  .checkbox1 {
    padding-right: 8rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      padding: 0;
    }
  }
  .avatarContainer {
    display: flex;
    flex-direction: row;
    padding-top: 1.5rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      display: flex;
      flex-direction: column;
      width: 100vw;
    }
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  #visible,
  .visible {
    display: inherit;
  }
  #hidden,
  .hidden {
    display: none;
  }

  .formPart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 40vw;
    height: 75vh;
    padding: 2vh 0;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    input,
    .error {
      color: grey;
      font-family: JostBold;
      border: none;
      height: 2rem;
      width: 300px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin: 0rem;
    }

    input[type="file"] {
      border: none;
      height: initial;
      width: initial;
      margin: 10px auto;
      border-radius: initial;
      margin: 0rem;
    }

    input[type="radio"] {
      height: initial;
      width: initial;
      display: initial;
      margin: 10px auto;
    }
    input:hover {
      font-family: JostBold;
      color: #c91961;
    }

    fieldset {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  .bioPart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    height: 20vh;
    padding: 2vh 0;
    textarea {
      border-radius: 10px;
      height: 100%;
      width: 100%;
      resize: none;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-family: "Jost";
    }
    textarea:hover {
      background-color: #c91961;
    }
  }

  .searchbutton {
    margin: auto auto 1rem auto;
  }

  a {
    color: #c91961;
  }

  input[name="CV"] {
    margin-bottom: 1.5rem;
  }
  .noerror {
    display: none;
  }
  .error {
    text-align: center;
    font-size: 0.9rem;
    color: #c91961;
    font-weight: bold;
  }
`;
