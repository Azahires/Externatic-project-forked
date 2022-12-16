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
        {offer.entreprise_description && (
          <>
            <h3>L'entreprise</h3>
            <p>{offer.entreprise_description}</p>
          </>
        )}

        {offer.missions && (
          <>
            <h3>Missions</h3> <p>{offer.missions}</p>
          </>
        )}

        {offer.recruitement_process && (
          <>
            <h3>Process de recrutement</h3> <p>{offer.recruitement_process}</p>
          </>
        )}
        {offer.skills && (
          <>
            <h3>Compétences recherchées</h3> <p>{offer.skills}</p>
          </>
        )}
        {offer.working_conditions && (
          <>
            <h3>Conditions de travail</h3>
            <p>{offer.working_conditions}</p>
          </>
        )}
        {offer.advantages && (
          <>
            <h3>Les +</h3>
            <p>{offer.advantages}</p>
          </>
        )}
        <div className="firstcontainer">
          <div className="secondcontainer">
            <button type="button">Candidater</button>
          </div>
        </div>
      </div>
    </Style>
  );
}
