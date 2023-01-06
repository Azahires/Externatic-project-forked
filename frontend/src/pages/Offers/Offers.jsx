import DisplayOffers from "@components/DisplayOffers/DisplayOffers";
import SearchBar from "@components/SearchBar/SearchBar";
import Style from "./style";

export default function Offers() {
  return (
    <Style>
      <SearchBar />
      <DisplayOffers />
    </Style>
  );
}
