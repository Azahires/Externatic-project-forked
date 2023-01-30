import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "@services/useApi";
import { FaHeartBroken } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Context } from "../../contexts/Context";
import logolinkedin from "../../assets/logo-linkedin.svg";

import Style from "./style";

export default function Offer() {
  const { userInfo } = useContext(Context);
  const [offer, setOffer] = useState({});
  const [consultant, setConsultant] = useState({});
  const { id } = useParams();
  const api = useApi();
  const [fav, setFav] = useState(false);

  useEffect(() => {
    api.get(`/offers/${id}`).then(async ({ data: offerdata }) => {
      const data2 = offerdata;
      data2.publication_date = new Date(
        data2.publication_date
      ).toLocaleDateString("fr");
      setOffer(data2);
      api
        .get(`/team/${data2.consultant_id}`)
        .then(({ data: consultantdata }) => {
          setConsultant(consultantdata);
        });
    });
  }, []);

  const navigate = useNavigate();
  const hsendMail = () => {
    if (!userInfo.email) {
      navigate("/login");
    } else if (!userInfo.CV) {
      navigate("/account");
    } else {
      api
        .post("/mailing", { userInfo, consultant, offer })
        .then(() => {
          console.warn("ok");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const hClick = (e) => {
    e.preventDefault();
    setFav(!fav);
  };

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
            <div className="consultantPart">
              <div className="picturepart">
                <img
                  className="conspicture"
                  src={consultant.avatar}
                  alt="consultantpicture"
                />{" "}
                <a href={consultant.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src={logolinkedin}
                    className="logolinkedin"
                    alt="logo linkedin"
                  />
                </a>
              </div>
              <ul>
                <li className="consultantName">
                  {consultant.firstname} {consultant.name}
                </li>
                <li>{consultant.job}</li>
                <li>{consultant.phonenumber}</li>
                <li>
                  <a href={`mailto:${consultant.mail}`}>{consultant.mail}</a>
                </li>
              </ul>
            </div>
          </>
        )}
        <p className="lastmessage">
          Vous êtes intéréssé(e) par cette offre ? Envoyez votre candidature au
          consultant et vous serez recontacté si votre profil correspond au
          besoin de l'entreprise. <br /> Attention, n'oubliez pas d'importer
          votre CV dans votre espace personnel au préalable !
        </p>
        <div className="firstcontainer">
          <div className="secondcontainer">
            <button type="button" onClick={hsendMail}>
              Candidater
            </button>
            <button type="button" onClick={hClick}>
              {fav ? <FaHeartBroken /> : <AiFillHeart />}
              Ajouter cette offre a vos favoris
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
}
