import PresentationHP from "@components/PresentationHP/PresentationHP";
import DisplayOffers from "@components/DisplayOffers/DisplayOffers";
import LoginHP from "@components/LoginHP/LoginHP";
import Footer from "@components/Footer/Footer";
import HomeVideo from "@components/HomeVideo/HomeVideo";
import Partners from "../../components/SliderPartners/Partners";
import ButtonLast from "../../components/SliderLastOffers/ButtonLast";
import DescPartnes from "../../components/SliderPartners/DescPartnes";
import DescOffers from "../../components/SliderLastOffers/DescOffers";
import SearchBar from "../../components/SearchBar/SearchBar";
import Style from "./style";

export default function Home() {
  const limit = 3;
  return (
    <div>
      <Style>
        <HomeVideo />
        <div className="blockContainer">
          <LoginHP />
          <PresentationHP />
        </div>
        <SearchBar />
        <DescOffers />
        <DisplayOffers limit={limit} />
        <ButtonLast />
        <DescPartnes />
        <Partners />
        <Footer />
      </Style>
    </div>
  );
}
