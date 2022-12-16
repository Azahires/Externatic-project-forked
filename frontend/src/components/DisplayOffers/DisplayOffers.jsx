import OfferCard from "@components/OfferCard/OfferCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Style from "./style";

export default function DisplayOffers() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then(({ data }) => {
      const data2 = data;
      for (let i = 0; i < data2.length; i += 1) {
        data2[i].publicationdate = new Date(
          data2[i].publicationdate
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
            contracttype={offer.contracttype}
            publicationdate={offer.publicationdate}
            location={offer.location}
            id={offer.id}
            key={offer.id}
          />
        );
      })}
    </Style>
  );
}
