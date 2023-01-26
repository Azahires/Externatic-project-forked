import { useContext } from "react";
import { Context } from "../../contexts/Context";
import logoexternatic from "../../assets/externatic.svg";
import logolinkedin from "../../assets/logo-linkedin.svg";
import logogithub from "../../assets/github.svg";
import Style from "./style";

export default function MSFavorites() {
  const { mySpace } = useContext(Context);
  const searchType = "active";
  const userInfo = {
    lastname: "SWIERGIEL",
    firstname: "Hervé",
    email: "h.swiergiel@hotmail.fr",
    phonenumber: "0612345678",
    postalcode: 59000,
    city: "LILLE",
    linkedinlink: "https://linked.com",
    githublink: "https://github.com",
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
  const offer = {
    title: "Développeur PHP / e-santé H/F (centre-ville)",
    publication_date: "01/12/2022",
    location: "Angers",
  };
  const consultant = {
    firstname: "Donatien",
    name: "MAHIEU",
  };
  return (
    <Style className={mySpace === "favorites" ? "visible" : "hidden"}>
      <div>
        <p>
          Bonjour {consultant.firstname} {consultant.name},{" "}
        </p>
        <p>
          Une nouvelle candidature a été envoyée pour l'offre{" "}
          <strong>{offer.title}</strong> publiée le{" "}
          <strong>{offer.publication_date}</strong> et localisée à{" "}
          <strong>{offer.location}</strong>.{" "}
        </p>
        <p>
          Vous trouverez ci-dessous les informations concernant le candidat et
          son CV.{" "}
        </p>
        <ul className="candidateinfo">
          <li>
            <strong>Nom: </strong>
            {userInfo.lastname}
          </li>
          <li>
            <strong>Prénom:</strong> {userInfo.firstname}
          </li>
          <li>
            <strong>Mail:</strong>{" "}
            <a className="emaillink" href={`mailto:${userInfo.email}`}>
              {userInfo.email}
            </a>
          </li>
          <li>
            <strong>Tél:</strong> {userInfo.phonenumber}
          </li>
          <li>
            <strong>Ville:</strong> {userInfo.postalcode} - {userInfo.city}
          </li>

          <li>
            <strong>Statut:</strong> En recherche {searchType}
          </li>
          <li>
            <strong>Biographie:</strong> {userInfo.biography}
          </li>
          <li>
            <a href={userInfo.linkedinlink} target="_blank" rel="noreferrer">
              <img
                className="sociallogo"
                src={logolinkedin}
                alt="logo linkedin"
              />
            </a>
            <a href={userInfo.githublink} target="_blank" rel="noreferrer">
              <img className="sociallogo" src={logogithub} alt="logo github" />
            </a>
          </li>
        </ul>
        <p>
          Si ce profil correspond au besoin de l'entreprise, nous vous invitons
          à prendre contact avec le candidat pour poursuivre le process de
          candidature.
        </p>
        <p>Bonne journée. </p>
        <p className="signature">
          {" "}
          <img
            className="logoexternatic"
            src={logoexternatic}
            alt="logo externatic"
          />
          <ul>
            <li className="sender">Plateforme de recrutement Externatic</li>
            <li className="senderInfo">Message généré automatiquement</li>
            <li className="senderInfo">Merci de ne pas y répondre</li>
          </ul>
        </p>
      </div>
    </Style>
  );
}
