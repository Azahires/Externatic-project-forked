import Style from "./style";
import backgroundVideo from "../../assets/home.mp4";
import ArrowDown from "../../assets/arrowdown.svg";

export default function HomeVideo() {
  return (
    <Style>
      <div className="videoContainer">
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <h1 className="titleVideo">Externatic</h1>
        <p className="textVideo">
          Nous cassons les codes
          <br /> du recrutement informatique.
        </p>
        <div className="scroll-container">
          <a href="#scroll">
            <img className="arrow-down" src={ArrowDown} alt="arrow down" />
          </a>
        </div>
      </div>
    </Style>
  );
}
