import DisplayOffers from "@components/DisplayOffers/DisplayOffers";
import Partners from "../../components/SliderPartners/Partners";
import ButtonLast from "../../components/SliderLastOffers/ButtonLast";
import DescPartnes from "../../components/SliderPartners/DescPartnes";
import DescOffers from "../../components/SliderLastOffers/DescOffers";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <DescOffers />
      <DisplayOffers />
      <ButtonLast />
      <DescPartnes />
      <Partners />
    </div>
  );
}
