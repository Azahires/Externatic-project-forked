import propTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  const context = useMemo(
    () => ({
      searchValue,
      setSearchValue,
    }),
    [searchValue, setSearchValue]
  );

  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
export { SearchContext };

SearchProvider.propTypes = {
  children: propTypes.shape({
    searchValue: propTypes.string,
    setSearchValue: propTypes.string,
  }).isRequired,
};
