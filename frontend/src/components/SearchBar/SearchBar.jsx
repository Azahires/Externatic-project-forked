import PropTypes from "prop-types";
import Style from "./style";

export default function SearchBar({ searchValue, setSearchValue }) {
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Style>
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
    </Style>
  );
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired,
};
