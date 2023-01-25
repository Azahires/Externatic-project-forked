import DisplayOffers from "@components/DisplayOffers/DisplayOffers";
import FilterPanel from "@components/FilterPanel/FilterPanel";
import SearchBar from "@components/SearchBar/SearchBar";
import Style from "./style";

export default function Offers() {
  return (
    <Style>
      <SearchBar />
      <FilterPanel />
      <DisplayOffers />
    </Style>
  );
}
