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
    /* border-top: 2px solid black;
    border-right: 2px solid black; */
    /* background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c91961' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
  }
  .UserAvatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: center;
    height: 35vh;
    width: 21vw;
    /* border-top: 3px solid #c91961; */
    .AvatarImg {
      max-width: 90%;
      max-height: 90%;
      border-radius: 36% 64% 32% 68% / 44% 30% 70% 56%;
    }
  }
  /* .socialMediaContainer {
    display: flex;
    .buttonSocialMedia {
      cursor: pointer;
      height: 2rem;
      width: 7rem;
      font-family: "Jost", sans-serif;
      font-size: 1rem;
      background-color: white;
      color: #564145;
      font-weight: bold;
      border-radius: 10px;
      border: 2px solid black;
      margin-bottom: 2rem;
    }
  }
  a {
    padding-right: 0.5rem;
  } */
  .socialMediaContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 34vh;
    width: 20vw;
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

    /* border-top: 3px solid #c91961; */
  }
  .buttonSocialMediaLinkedin,
  .buttonSocialMediaGitHub {
    width: 10vw;
    height: 5vh;
    border: none;
  }

  .buttonSocialMediaLinkedin {
    background-color: #0077b5;
    border-radius: 50px;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
  .buttonSocialMediaLinkedin:hover {
    background-color: white;
    color: #0077b5;
    border: 3px solid #0077b5;
  }
  .buttonSocialMediaGitHub:hover {
    background-color: white;
    color: black;
    border: 3px solid black;
  }
  .buttonSocialMediaGitHub {
    background-color: black;
    border-radius: 50px;
    color: white;
    font-size: 2rem;
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

    /* background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c91961' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
    /* border-top: 2px solid black; */
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
    /* background-color: whitesmoke; */
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.85; */
    /* border-top: 3px solid white; */

    /* border-top: 2px solid black; */
    /* border-left: 2px solid white; */
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
  }
`;
