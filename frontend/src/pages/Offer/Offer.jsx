import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "@services/useApi";
import Style from "./style";

export default function Offer() {
  const [offer, setOffer] = useState({});
  const [consultant, setConsultant] = useState({});
  const { id } = useParams();
  const api = useApi();
  useEffect(() => {
    api.get(`/offers/${id}`).then(({ data: offerdata }) => {
      const data2 = offerdata;
      data2.publication_date = new Date(
        data2.publication_date
      ).toLocaleDateString("fr");
      setOffer(data2);
      api
        .get(`/team/${offer.consultant_id}`)
        .then(({ data: consultantdata }) => {
          setConsultant(consultantdata);
        });
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
            <p
              dangerouslySetInnerHTML={{
                __html: offer.entreprise_description,
              }}
            />
          </>
        )}

        {offer.missions && (
          <>
            <h3>Missions</h3>{" "}
            <p
              dangerouslySetInnerHTML={{
                __html: offer.missions,
              }}
            />
          </>
        )}

        {offer.recruitement_process && (
          <>
            <h3>Process de recrutement</h3>{" "}
            <p
              dangerouslySetInnerHTML={{
                __html: offer.recruitement_process,
              }}
            />
          </>
        )}
        {offer.skills && (
          <>
            <h3>Compétences recherchées</h3>{" "}
            <p
              dangerouslySetInnerHTML={{
                __html: offer.skills,
              }}
            />
          </>
        )}
        {offer.working_conditions && (
          <>
            <h3>Conditions de travail</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: offer.working_conditions,
              }}
            />
          </>
        )}
        {offer.advantages && (
          <>
            <h3>Les +</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: offer.advantages,
              }}
            />
          </>
        )}
        {consultant.firstname && (
          <>
            <h3>Votre contact pour ce job</h3>
            <img src={consultant.avatar} alt="consultantpicture" />
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
