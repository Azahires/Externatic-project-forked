import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "@services/useApi";
import { FaHeartBroken } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Context } from "../../contexts/Context";
import logolinkedin from "../../assets/logo-linkedin.svg";

import Style from "./style";

export default function Offer() {
  const {
    userInfo,
    userApplications,
    setUserApplications,
    userFavorites,
    setUserFavorites,
    applicationTime,
    setApplicationTime,
  } = useContext(Context);
  const [offer, setOffer] = useState({});
  const [consultant, setConsultant] = useState({});
  const { id } = useParams();
  const api = useApi();

  useEffect(() => {
    api
      .get(`/offers/${id}`)
      .then(({ data: offerdata }) => {
        const data2 = offerdata;
        data2.publication_date = new Date(
          data2.publication_date
        ).toLocaleDateString("fr");
        setOffer(data2);
        api
          .get(`/team/${data2.consultant_id}`)
          .then(({ data: consultantdata }) => {
            setConsultant(consultantdata);
            api.get("/applications").then(({ data }) => {
              setUserApplications(
                data.filter(
                  (application) => application.user_id === userInfo.id
                )
              );
              const [currentOffer] = data.filter(
                (application) =>
                  application.user_id === userInfo.id &&
                  application.offer_id === offerdata.id
              );
              const today = new Date(
                currentOffer.application_date
              ).toLocaleDateString();
              const time = new Date(
                currentOffer.application_date
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
              setApplicationTime({ date: today, time });
            });
          })
          .catch((err) => console.error(err));
        api
          .get("/favorites")
          .then(({ data }) => {
            setUserFavorites(
              data.filter((favorite) => favorite.user_id === userInfo.id)
            );
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  const navigate = useNavigate();
  const happlication = () => {
    if (!userInfo.email) {
      navigate("/login");
    } else if (!userInfo.CV) {
      navigate("/account");
    } else {
      let today = new Date(Date.now());
      api
        .post("/applications", {
          user_id: userInfo.id,
          offer_id: offer.id,
          application_date: today,
        })
        .then(({ data }) => {
          today = new Date(data.application_date).toLocaleDateString();
          const time = new Date(data.application_date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          api
            .post("/mailing", { userInfo, consultant, offer })
            .then(() => {
              setUserApplications([...userApplications, data]);
              setApplicationTime({ date: today, time });
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => console.error(err));
    }
  };

  const haddfavorite = () => {
    if (!userInfo.email) {
      navigate("/login");
    } else {
      api
        .post("/favorites", {
          user_id: userInfo.id,
          offer_id: offer.id,
        })
        .then(({ data }) => {
          setUserFavorites([...userFavorites, data]);
          api
            .post("/mailingfavorite", { userInfo, consultant, offer })
            .then(() => {
              setUserFavorites([...userFavorites, data]);
              // ajouter changement coeur
              // console.log("favori ajouté");
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => console.error(err));
    }
  };

  const hdeletefavorite = () => {
    if (!userInfo.email) {
      navigate("/login");
    } else {
      api
        .post("/deletefavorites", {
          user_id: userInfo.id,
          offer_id: offer.id,
        })
        .then(({ data: removefav }) => {
          setUserFavorites([
            userFavorites.filter((favorite) => favorite !== removefav.offer_id),
          ]);
          // ajouter changement coeur
          // console.log("favori retiré");
        })
        .catch((err) => {
          console.error(err);
        });
    }
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
        {userApplications.filter((element) => element.offer_id === offer.id)
          .length && applicationTime.date ? (
          <p className="lastmessage">
            Votre candidature pour ce poste a été envoyé au consultant le{" "}
            {applicationTime.date} à {applicationTime.time}, vous serez
            recontacté(e) si votre profil correspond au besoin de l'entreprise.
          </p>
        ) : (
          <>
            <p className="lastmessage">
              Vous êtes intéréssé(e) par cette offre ? Envoyez votre candidature
              au consultant et vous serez recontacté si votre profil correspond
              au besoin de l'entreprise. <br /> Attention, n'oubliez pas
              d'importer votre CV dans votre espace personnel au préalable !
            </p>
            <div className="firstcontainer">
              <div className="secondcontainer">
                <button type="button" onClick={happlication}>
                  Candidater
                </button>
              </div>
            </div>
          </>
        )}
        {userInfo.email ? (
          <div className="firstcontainer">
            <div className="secondcontainer">
              {userFavorites.filter((element) => element.offer_id === offer.id)
                .length ? (
                <button type="button" onClick={hdeletefavorite}>
                  <FaHeartBroken /> Retirer des favoris
                </button>
              ) : (
                <button type="button" onClick={haddfavorite}>
                  <AiFillHeart /> Ajouter aux favoris
                </button>
              )}{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Style>
  );
}
