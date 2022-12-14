import Style from "./style";

export default function SearchBar({searchValue, setSearchValue}) {
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
        <button type="button">Search</button>
      </form>
    </Style>
  );
}
