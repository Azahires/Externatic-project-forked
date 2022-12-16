import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Style from "./style";

export default function Offer() {
  const [offer, setOffer] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers/${id}`)
      .then(({ data }) => {
        const data2 = data;
        data2.publicationdate = new Date(
          data2.publicationdate
        ).toLocaleDateString("fr");
        setOffer(data2);
      });
  }, []);
  return (
    <Style>
      <div id="offer">
        <div id="offerinfo">
          <h1>{offer.title}</h1>
          <h2>
            {offer.contract_type} - {offer.location}
          </h2>
          <h2>Date de publication: {offer.publication_date}</h2>
        </div>
        <p>{offer.description}</p>
      </div>
    </Style>
  );
}
