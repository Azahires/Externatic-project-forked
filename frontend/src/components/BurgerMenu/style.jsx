import styled from "styled-components";

export default styled.nav`
  .bm-burger-button {
    position: fixed;
    width: 33px;
    height: 30px;
    left: 1rem;
    top: 15px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #c91961;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 30px;
    width: 30px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: white;
    height: 50px;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/

  /* General sidebar styles */
  .bm-menu {
    background: #c91961;
    position: fixed;
    top: 0;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: white;
    padding-top: 6rem;
    width: 25vw;
    @media (max-width: 768px) {
      width: 99vw;
    }
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    margin: 2.5rem;
  }
`;

export const BurgerMenuContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap");
  width: 98vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  width: 40vw;
  height: 6vh;
  @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
    width: 20vw;
  }
  font-family: "Jost", sans-serif;
  button {
    font-family: "Jost", sans-serif;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #c91961;
    border: none;
    cursor: pointer;
    padding-bottom: 2rem;
  }
  .visible {
    display: inherit !important; /* Validated by LB */
  }
  .hidden {
    display: none !important;
  }
`;

export const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  width: 20vw;
  font-family: "Jost", sans-serif;
  @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
    display: 20vw;
  }
  img {
    height: 30px;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  button {
    border: none;
    background: none;
  }
`;

export const RightSection = styled.div`
  display: flex;
  width: 40vw;
  justify-content: flex-end;
  padding-right: 1rem;
  @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
    width: 60vw;
  }

  button {
    font-family: "Jost", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    cursor: pointer;
    font-size: 1rem;
    border: 2px solid #c91961;
    background-color: #c91961;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
    width: 8vw;
    height: 4vh;
  }
  button:hover {
    background-color: white;
    color: #c91961;
  }
  .visible {
    display: inherit;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 35vw;
      height: 5vh;
      font-size: 0.6rem;
    }
  }
  .hidden {
    display: none;
  }
  p {
    margin: auto 0;
    font-size: 1.2rem;
    color: #c91961;
    em {
      font-style: italic;
    }
  }
`;
