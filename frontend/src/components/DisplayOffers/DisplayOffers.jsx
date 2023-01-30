import OfferCard from "@components/OfferCard/OfferCard";
import { useState, useEffect, useContext } from "react";
import useApi from "@services/useApi";
import latinize from "latinize";
import propTypes from "prop-types";
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

DisplayOffers.propTypes = {
  limit: propTypes.number.isRequired,
};
