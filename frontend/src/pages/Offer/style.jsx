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
  }
  #offerinfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    border: 3px solid ${mainColor};
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
    width: 100%;
    margin: 2rem 0 0 0;
    padding: 0.5rem 1rem;
    border-top: 2px dashed ${mainColor};
    border-bottom: 2px dashed ${mainColor};
    font-family: "JostBold";
    box-sizing: border-box;
  }

  p {
    text-align: justify;
    width: 100%;
    font-size: 1.2rem;
    margin: 1rem 0;
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
    width: 100%;
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
  }
  .lastmessage {
    margin-top: 3rem;
    color: ${mainColor};
    font-weight: bold;
    text-align: center;
    font-size: 1.3rem;
    border-top: 2px dotted ${mainColor};
    border-bottom: 2px dotted ${mainColor};
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
      border: 3px solid ${mainColor};
      cursor: pointer;
      border-radius: 20px;
    }

    button:hover {
      color: white;
      transition: color 0.5s cubic-bezier(0.33, 1, 0.68, 1);
    }

    button::before {
      background-color: ${mainColor};
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
