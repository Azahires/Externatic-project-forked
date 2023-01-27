import propTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  /* useState du composant searchBar */
  const [searchValue, setSearchValue] = useState("");

  /* useStates du composant filterPanel */
  const [filterCdd, setFilterCdd] = useState(false);
  const [filterCdi, setFilterCdi] = useState(false);
  const [filterAlternance, setFilterAlternance] = useState(false);
  const [filterInternship, setFilterInternship] = useState(false);
  const [kilometer, setKilometer] = useState(1000);

  /* useState du composant UserGeolocation */
  const [userCoordinates, setUserCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  const context = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      filterCdd,
      setFilterCdd,
      filterCdi,
      setFilterCdi,
      filterAlternance,
      setFilterAlternance,
      filterInternship,
      setFilterInternship,
      userCoordinates,
      setUserCoordinates,
      kilometer,
      setKilometer,
    }),
    [
      searchValue,
      setSearchValue,
      filterCdd,
      setFilterCdd,
      filterCdi,
      setFilterCdi,
      filterAlternance,
      setFilterAlternance,
      filterInternship,
      setFilterInternship,
      userCoordinates,
      setUserCoordinates,
      kilometer,
      setKilometer,
    ]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;

export { Context };

Provider.propTypes = {
  children: propTypes.shape({
    searchValue: propTypes.string,
    setSearchValue: propTypes.string,
    filterCdd: propTypes.bool,
    setFilterCdd: propTypes.bool,
    filterCdi: propTypes.bool,
    setFilterCdi: propTypes.bool,
    filterAlternance: propTypes.bool,
    setFilterAlternance: propTypes.bool,
    filterInternship: propTypes.bool,
    setFilterInternship: propTypes.bool,
  }).isRequired,
};
