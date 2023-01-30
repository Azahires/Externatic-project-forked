import OfferCard from "@components/OfferCard/OfferCard";
import { useState, useEffect, useContext } from "react";
import useApi from "@services/useApi";
import propTypes from "prop-types";
import latinize from "latinize";
import Style from "./style";
import { Context } from "../../contexts/Context";

export default function DisplayOffers({ limit }) {
  const [offers, setOffers] = useState([]);
  const {
    searchValue,
    filterCdd,
    filterCdi,
    filterAlternance,
    filterInternship,
    userCoordinates,
    kilometer,
  } = useContext(Context);

  const api = useApi();

  useEffect(() => {
    api.get("/offers").then(({ data }) => {
      const data2 = data;
      for (let i = 0; i < data2.length; i += 1) {
        data2[i].publication_date = new Date(
          data2[i].publication_date
        ).toLocaleDateString("fr");
      }
      setOffers(data2);
    });
  }, []);

  function getDistance(xOffer, yOffer) {
    const yUser = userCoordinates.latitude;
    const xUser = userCoordinates.longitude;

    const dX = xUser - xOffer;
    const dY = yUser - yOffer;
    const dYKm = dY * 110.574;
    const dXKm = dX * 111.32 * Math.cos(dY);
    const distKm = Math.sqrt(dXKm ** 2 + dYKm ** 2);
    return distKm;
  }

  return (
    <Style>
      {offers
        .filter((offer) => {
          if (filterCdd === true) {
            return (
              offer.contract_type === "CDD" &&
              latinize(offer.title.toLowerCase()).includes(
                searchValue.toLowerCase()
              )
            );
          }
          if (filterCdi === true) {
            return (
              offer.contract_type === "CDI" &&
              latinize(offer.title.toLowerCase()).includes(
                searchValue.toLowerCase()
              )
            );
          }
          if (filterAlternance === true) {
            return (
              offer.contract_type === "Alternance" &&
              latinize(offer.title.toLowerCase()).includes(
                searchValue.toLowerCase()
              )
            );
          }
          if (filterInternship === true) {
            return (
              offer.contract_type === "Stage" &&
              latinize(offer.title.toLowerCase()).includes(
                searchValue.toLowerCase()
              )
            );
          }
          return latinize(offer.title.toLowerCase()).includes(
            searchValue.toLowerCase()
          );
        })
        .sort((a, b) => {
          return (
            Date.parse(a.publication_date) - Date.parse(b.publication_date)
          );
        })
        .reverse()
        .slice(0, limit)
        .filter(
          (offer) => getDistance(offer.longitude, offer.latitude) < kilometer
        )
        .map((offer) => {
          return (
            <OfferCard
              title={offer.title}
              contracttype={offer.contract_type}
              publicationdate={offer.publication_date}
              location={offer.location}
              id={offer.id}
              key={offer.id}
            />
          );
        })}
    </Style>
  );
}
DisplayOffers.propTypes = { limit: propTypes.number.isRequired };
