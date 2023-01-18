import { useContext } from "react";
import latinize from "latinize";
import { SearchContext } from "../../contexts/SearchContext";
import Style from "./Style";
import PropTypes from "prop-types";
import Centered from "@components/Centered/Centered";

export default function SearchBar() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const handleSearchValue = (e) => {
    setSearchValue(latinize(e.target.value));
  };

  return (
    <Style>
      <Centered>
        <form>
          <input
            type="text"
            placeholder="Developpeur JavaScript, php, python ?"
            value={searchValue}
            onChange={handleSearchValue}
          />
          <button className="searchButton" type="button">
            Search
          </button>
        </form>
      </Centered>
    </Style>
  );
}
