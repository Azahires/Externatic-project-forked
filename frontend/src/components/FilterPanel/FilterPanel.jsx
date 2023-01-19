import Centered from "@components/Centered/Centered";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function FilterPanel() {
  const {
    filterCdd,
    setFilterCdd,
    filterCdi,
    setFilterCdi,
    filterAlternance,
    setFilterAlternance,
    filterInternship,
    setFilterInternship,
  } = useContext(Context);

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
        </form>
      </Centered>
    </Style>
  );
}
