import Style from "./style";
import Centered from "@components/Centered/Centered";

export default function FilterPanel() {
  return (
    <Style>
      <Centered>
        <form>
          <input type="checkbox" id="filter-cdd" value="CDD"></input>
          <label for="filters">CDD</label>
          <input type="checkbox" id="filter-cdi" value="CDI"></input>
          <label for="filters">CDI</label>
          <input
            type="checkbox"
            id="filter-alternance"
            value="Alternance"
          ></input>
          <label for="filters">Alternance</label>
          <input type="checkbox" id="filter-stage" value="Stage"></input>
          <label for="filters">Stage</label>

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
