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
            type="text"
            placeholder="Développeur JavaScript, PHP, Python ?"
            value={searchValue}
            onChange={handleSearchValue}
          />
          <a href="/offers" className="searchButton">
            <span>Rechercher</span>
          </a>
        </form>
      </Centered>
    </Style>
  );
}
