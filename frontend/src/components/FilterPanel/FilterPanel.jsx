import Centered from "@components/Centered/Centered";
import { useContext, useEffect } from "react";
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
    setUserCoordinates,
    kilometer,
    setKilometer,
  } = useContext(Context);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        console.error("We are not allowed to locate you!");
      }
    );
  }, []);

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
  const hkilometerChange = (event) => {
    setKilometer(event.target.value);
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
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1000"
            value={kilometer}
            onChange={hkilometerChange}
          />
          <input
            type="text"
            className="kmInput"
            value={kilometer}
            onChange={hkilometerChange}
          />
          <label htmlFor="volume">Kilomètres {kilometer}</label>
        </form>
      </Centered>
    </Style>
  );
}
