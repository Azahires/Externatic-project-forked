import OfferCard from "@components/OfferCard/OfferCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Style from "./style";

export default function DisplayOffers() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/offers").then(({ data }) => {
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
      {offers.map((offer) => {
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
