import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
    width: 100%;
    height: 6vh;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    background: #c91961;
    border: none;
    border-bottom: 3px solid #c91961;
    letter-spacing: 0.125rem;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    font-family: "JostBold";
    margin: 0;
  }
  .active {
    background-color: #ecf0f1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c91961' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    color: #c91961;
    border: none;
    text-decoration: underline;
  }
  .passive {
    background-color: #c91961;
    color: white;
    border: 3px solid white;
  }

  span {
    font-size: 1.5rem;
  }

  .MSNavbarContainer {
    width: 100vw;
    height: 15vh;
    background-color: #c91961;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 0.95;
    display: flex;
    justify-content: space-around;
    /* border-top: 3px solid #c91961;
    border-bottom: 3px solid #c91961; */
  }
  .HelloUser {
    width: 20vw;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  }
  .EMuser {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
  }
  .ButtonProfile,
  .ButtonFavorites,
  .ButtonCandidatures {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
