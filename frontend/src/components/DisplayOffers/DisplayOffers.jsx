import OfferCard from "@components/OfferCard/OfferCard";
import { useState, useEffect, useContext } from "react";
import useApi from "@services/useApi";
import latinize from "latinize";
import Style from "./style";
import { Context } from "../../contexts/Context";

export default function DisplayOffers() {
  const [offers, setOffers] = useState([]);
  const { searchValue } = useContext(Context);
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
          return latinize(offer.title.toLowerCase()).includes(
            searchValue.toLowerCase()
          );
        })
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
