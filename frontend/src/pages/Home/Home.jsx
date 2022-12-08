import Partners from "../../components/SliderPartners/Partners";
import LastOffers from "../../components/SliderLastOffers/LastOffers";
import ButtonLast from "../../components/SliderLastOffers/ButtonLast";
import DescPartnes from "../../components/SliderPartners/DescPartnes";
import DescOffers from "../../components/SliderLastOffers/DescOffers";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <DescPartnes />
      <Partners />
      <DescOffers />
      <LastOffers />
      <ButtonLast />
    </div>
  );
}
