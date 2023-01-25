import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap");
  .MSProfileContainer {
    font-family: "Jost", sans-serif;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 79vh;
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
  }
  .UserAvatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: center;
    height: 35vh;
    width: 21vw;
    .AvatarImg {
      max-width: 90%;
      max-height: 90%;
      border-radius: 36% 64% 32% 68% / 44% 30% 70% 56%;
    }
  }
  .socialMediaContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 34vh;
    width: 20vw;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
  .buttonSocialMediaLinkedin,
  .buttonSocialMediaGitHub {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 11vw;
    height: 6vh;
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
  }
  .linkedinLogo {
    height: 43px;
  }

  .githubLogo {
    height: 39px;
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
  }
  .UserField {
    font-size: 1.7rem;
    color: #c91961;
    font-weight: bold;
    text-transform: uppercase;
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
  }
  .MSProfileRightContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    border-left: 2px solid #c91961;
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
    height: auto;
    margin-top: 3rem;
    background-color: whitesmoke;
  }
  .myBiographyTitle,
  .myResearchTitle,
  .myCVTitle {
    font-family: "Jost", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 1rem;
    color: #c91961;
    font-weight: bold;
  }
  .myResearchTitle {
    margin-bottom: 1.5rem;
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
  }
  .checkboxContainer {
    display: flex;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  label {
    padding-left: 0.5rem;
  }
  .checkbox1 {
    padding-right: 8rem;
  }
  .avatarContainer {
    display: flex;
    flex-direction: row;
    padding-top: 1.5rem;
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
      border-radius: 10px;
      height: 2rem;
      width: 300px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input[type="file"] {
      height: initial;
      width: initial;
      margin: 10px auto;
      border-radius: initial;
    }

    input[type="radio"] {
      height: initial;
      width: initial;
      display: initial;
      margin: 10px auto;
    }

    fieldset {
      text-align: center;
    }

    input:hover {
      background-color: #c91961;
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
