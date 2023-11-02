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

  const handleCheckboxChange = (filterType) => {
    setFilterCdd(filterType === "CDD");
    setFilterCdi(filterType === "CDI");
    setFilterAlternance(filterType === "Alternance");
    setFilterInternship(filterType === "Stage");
  };

  const handleKilometerChange = (event) => {
    setKilometer(event.target.value);
  };

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

  return (
    <Style>
      <Centered>
        <form>
          <input
            type="checkbox"
            checked={filterCdd}
            onChange={() => handleCheckboxChange("CDD")}
            id="filter-cdd"
            value="CDD"
          />
          <label htmlFor="filters">CDD</label>
          <input
            type="checkbox"
            checked={filterCdi}
            onChange={() => handleCheckboxChange("CDI")}
            id="filter-cdi"
            value="CDI"
          />
          <label htmlFor="filters">CDI</label>
          <input
            type="checkbox"
            checked={filterAlternance}
            onChange={() => handleCheckboxChange("Alternance")}
            id="filter-alternance"
            value="Alternance"
          />
          <label htmlFor="filters">Alternance</label>
          <input
            type="checkbox"
            checked={filterInternship}
            onChange={() => handleCheckboxChange("Stage")}
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
            onChange={handleKilometerChange}
          />
          <input
            type="text"
            className="kmInput"
            value={kilometer}
            onChange={handleKilometerChange}
          />
          <label className="kilometer" htmlFor="volume">
            Kilomètres
          </label>
        </form>
      </Centered>
    </Style>
  );
}
