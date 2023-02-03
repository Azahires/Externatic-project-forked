import DisplayOffers from "@components/DisplayOffers/DisplayOffers";
import FilterPanel from "@components/FilterPanel/FilterPanel";
import SearchBar from "@components/SearchBar/SearchBar";
import Style from "./style";

export default function Offers() {
  const limit = 100;
  return (
    <Style>
      <SearchBar />
      <FilterPanel />
      <DisplayOffers limit={limit} />
    </Style>
  );
}
