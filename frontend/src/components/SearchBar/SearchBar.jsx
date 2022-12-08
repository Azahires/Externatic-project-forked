import { useState } from "react";
import Style from "./style";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Style>
      <div>
        <input
          type="text"
          placeholder="Developpeur JavaScript, php, python ?"
          value={searchValue}
          onChange={handleSearchValue}
        ></input>
        <button>Search</button>
      </div>
    </Style>
  );
}
