import Centered from "@components/Centered/Centered";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function FilterPanel() {
  const { filterCdd, setFilterCdd, filterCdi, setFilterCdi, filterAlternance, setFilterAlternance, filterInternship, setFilterInternship } = useContext(Context);

  const hCddChange = (event) => {
    setFilterCdd(event.target.checked);
  };
  const hCdiChange = (event) => {
    setFilterCdi(event.target.checked);
  };
  const hAlternanceChange = (event) => {
    setFilterAlternance(event.target.checked);
  };
  const hInternshipChange = (event) => {
    setFilterInternship(event.target.checked);
  };
  return (
    <Style>
      <Centered>
        <form>
          <input
            type="checkbox"
            checked={filterCdd}
            onChange={hCddChange}
            id="filter-cdd"
            value="CDD"
          />
          <label htmlFor="filters">CDD</label>
          <input
            type="checkbox"
            checked={filterCdi}
            onChange={hCdiChange}
            id="filter-cdi"
            value="CDI"
          />
          <label htmlFor="filters">CDI</label>
          <input
            type="checkbox"
            checked={filterAlternance}
            onChange={hAlternanceChange}
            id="filter-alternance"
            value="Alternance"
          />
          <label htmlFor="filters">Alternance</label>
          <input
            type="checkbox"
            checked={filterInternship}
            onChange={hInternshipChange}
            id="filter-stage"
            value="Stage"
          />
          <label htmlFor="filters">Stage</label>

          {/* <label for="distance"> Distance maximale </label> */}

          {/* <select name="disatnce-max" id="selector">
            <option value="">Sélectionne ta distance maximale</option>
            <option value="5">5 Km</option>
            <option value="10">10 Km</option>
            <option value="25">25 Km</option>
            <option value="50">50 Km</option>
            <option value="100">100 Km</option>
            <option value="all">Indifférent</option>
          </select> */}
        </form>
      </Centered>
    </Style>
  );
}
