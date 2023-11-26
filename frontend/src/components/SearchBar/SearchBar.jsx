import { useContext } from "react";
import latinize from "latinize";
import Centered from "@components/Centered/Centered";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function SearchBar() {
  const { searchValue, setSearchValue } = useContext(Context);
  const handleSearchValue = (e) => {
    setSearchValue(latinize(e.target.value));
  };

  return (
    <Style>
      <Centered>
        <form>
          <input
            id="searchBar"
            type="text"
            placeholder="Développeur JavaScript, PHP, Python ?"
            value={searchValue}
            onChange={handleSearchValue}
          />
          <a href="/offers" className="newSearch">
            <span>Nouvelle recherche</span>
          </a>
        </form>
      </Centered>
    </Style>
  );
}
