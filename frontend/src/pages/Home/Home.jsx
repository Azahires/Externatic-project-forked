import PresentationHP from "@components/PresentationHP/PresentationHP";
import DisplayOffers from "@components/DisplayOffers/DisplayOffers";
import Partners from "../../components/SliderPartners/Partners";
import ButtonLast from "../../components/SliderLastOffers/ButtonLast";
import DescPartnes from "../../components/SliderPartners/DescPartnes";
import DescOffers from "../../components/SliderLastOffers/DescOffers";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoginHP from "../../components/LoginHP/LoginHP";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <PresentationHP />
      <LoginHP />
      <DescOffers />
      <DisplayOffers />
      <ButtonLast />
      <DescPartnes />
      <Partners />
    </div>
  );
}
