import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import LoginHP from "../../components/LoginHP/LoginHP";
import PresentationHP from "../../components/PresentationHP/PresentationHP";
import Partners from "../../components/SliderPartners/Partners";
import LastOffers from "../../components/SliderLastOffers/LastOffers";
import ButtonLast from "../../components/SliderLastOffers/ButtonLast";
import DescPartnes from "../../components/SliderPartners/DescPartnes";
import DescOffers from "../../components/SliderLastOffers/DescOffers";
import SearchBar from "../../components/SearchBar/SearchBar";
import Style from "./style";

export default function Home() {
  return (
    <div>
      <BurgerMenu />
      <SearchBar />
      <Style>
        <div className="blockContainer">
          <PresentationHP />
          <LoginHP />
        </div>
      </Style>
      <DescPartnes />
      <Partners />
      <DescOffers />
      <LastOffers />
      <ButtonLast />
    </div>
  );
}
