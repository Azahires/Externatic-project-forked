import styled from "styled-components";
import { mainColor } from "../../style";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #offer {
    border-radius: 20px;
    margin-top: 5vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: justify;
    padding: 0 5vw;
    background-color: #ffffffa1;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ecf0f1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
  #offerinfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    color: #c91162;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
    border-radius: 10px;
  }
  h1 {
    font-size: 2.3rem;
    font-family: "JostBold";
  }
  h2 {
    font-size: 1.6rem;
  }
  h1,
  h2 {
    margin: 1.2rem 0;
  }

  h3 {
    font-size: 1.6rem;
    text-align: left;
    margin: 2rem 0 0 0;
    padding: 0.5rem 1rem;
    font-family: "JostBold";
    box-sizing: border-box;
    color: #c91162;
    border: 2px solid #c91162;
    border-radius: 10px;
  }

  p {
    text-align: justify;
    width: 100%;
    font-size: 1.2rem;
    margin: 1rem 0;
    font-family: Jost;
  }
  b {
    font-family: "JostBold";
  }
  b::before {
    content: "";
  }
  li {
    list-style-type: "- ";
    margin-top: 0.5rem;
    box-sizing: border-box;
  }
  br {
    content: "";
    display: block;
    margin: 1rem 0;
  }
  .consultantPart {
    .picturepart {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15%;
    }
    .consultantName {
      color: ${mainColor};
      font-weight: bold;
    }
    li {
      list-style-type: none;
      font-family: Jost;
    }
    .conspicture {
      width: 7rem;
      border-radius: 50%;
    }
    .logolinkedin {
      width: 3rem;
      opacity: 0.9;
      border-radius: 10px;
    }
    a {
      text-decoration: none;
      color: #c91162;
    }
  }
  .lastmessage {
    margin-top: 3rem;
    color: ${mainColor};
    font-weight: bold;
    text-align: center;
    font-size: 1.3rem;
    color: #c91162;
    padding: 1rem 0;
  }
  .firstcontainer {
    transition: all 0.3s ease-out;
    width: 25%;
    margin: 2.5rem 0rem;
    box-shadow: 5px 5px 20px lightgrey, -5px 5px 20px lightgrey;
    border-radius: 20px;
    .secondcontainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      position: relative;
      z-index: 0;
      width: 100%;
      border-radius: 20px;
    }

    button {
      width: 100%;
      transition: color 0.5s cubic-bezier(0.32, 0, 0.67, 0);
      background-color: transparent;
      font-size: 2.2rem;
      font-family: "JostBold";
      padding: 1rem;
      border: 1px solid ${mainColor};
      cursor: pointer;
      border-radius: 20px;
    }

    button:hover {
      color: #c91162;
      transition: color 0.5s cubic-bezier(0.33, 1, 0.68, 1);
    }

    button::before {
      background-color: white;
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      clip-path: circle(0% at 50% calc(50%));
      transition: clip-path 0.5s cubic-bezier(0.65, 0, 0.35, 1);
      border-radius: 20px;
    }

    button:hover::before {
      clip-path: circle(100% at 50% 50%);
    }
  }
`;
