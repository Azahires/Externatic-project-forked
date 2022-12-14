import DisplayOffers from "@components/DisplayOffers/DisplayOffers";
import SearchBar from "@components/SearchBar/SearchBar";
import { useState } from "react";
import Style from "./style";

export default function Offers() {
  const [searchValue, setSearchValue] = useState("");
  console.log({searchValue})
  return (
    <Style>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <DisplayOffers />
    </Style>
  );
}
