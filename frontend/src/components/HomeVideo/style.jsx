import styled from "styled-components";

export default styled.div`
  .videoContainer {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 90vh;
    margin-bottom: 3rem;
    border-bottom: 4px solid #c91961;
    border-top: 4px solid #c91961;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      height: auto;
    }
  }
  video {
    position: absolute;
    width: 100vw;
    height: auto;
    filter: blur(2px) grayscale();
    z-index: -100;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      width: 100vw;
      height: 60vh;
      filter: blur(1px) grayscale();
    }
  }

  .titleVideo {
    background-image: linear-gradient(
      -225deg,
      #c91961 0%,
      #c91961 10%,
      #c91961 20%,
      #c91961 30%,
      #ffe3ee 40%,
      #ffe3ee 50%,
      #ffe3ee 60%,
      #ffe3ee 70%,
      #ffe3ee 80%,
      #c91961 90%,
      #c91961 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 5s linear infinite;
    display: inline-block;
    font-size: 10rem;
    padding-bottom: 3rem;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 3rem;
      padding-bottom: 2rem;
      padding-top: 2rem;
    }
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  .textVideo {
    text-align: center;
    font-size: 6rem;
    color: white;
    text-shadow: 1px 1px 2px #c91961;
    @media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
      font-size: 2rem;
      padding-bottom: 2rem;
    }
  }
`;
