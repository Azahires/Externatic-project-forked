import OfferCard from "@components/OfferCard/OfferCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Style from "./style";

export default function DisplayOffers() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/offers").then(({ data }) => {
      setOffers(data);
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
            key={offer.id}
          />
        );
      })}
    </Style>
  );
}
