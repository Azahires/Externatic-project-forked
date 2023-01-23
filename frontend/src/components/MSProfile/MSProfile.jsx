import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import Style from "./style";
import Avatar from "../../assets/avatar.svg";
import LinkedIn from "../../assets/linkedin.svg";
import GitHub from "../../assets/github.svg";

export default function MSProfile() {
  const { userInfo } = useContext(Context);

  return (
    <Style>
      <div className="MSProfileContainer">
        <div className="MSProfileLeftContainer">
          <div className="avatarContainer">
            <div className="UserAvatar">
              <img className="AvatarImg" src={Avatar} alt="Avatar" />
            </div>
            <div className="socialMediaContainer">
              <a href={userInfo.linkedinlink} target="_blank" rel="noreferrer">
                <button className="buttonSocialMediaLinkedin" type="button">
                  <img
                    className="linkedinLogo"
                    src={LinkedIn}
                    alt="Linkedin logo"
                  />
                  LinkedIn
                </button>
              </a>
              <a href={userInfo.githublink} target="_blank" rel="noreferrer">
                <button className="buttonSocialMediaGitHub" type="button">
                  <img className="githubLogo" src={GitHub} alt="GitHub logo" />
                  GitHub
                </button>
              </a>
            </div>
          </div>
          <div className="UserInformations">
            <ul>
              <li>
                <em className="UserField">Nom :</em> {userInfo.lastname}
              </li>
              <li>
                <em className="UserField">Prénom :</em> {userInfo.firstname}
              </li>
              <li>
                <em className="UserField">Email :</em> {userInfo.email}
              </li>
              <li>
                <em className="UserField">Téléphone :</em>{" "}
                {userInfo.phonenumber}
              </li>
              <li>
                <em className="UserField">Ville :</em> {userInfo.city}
              </li>
              <li>
                <em className="UserField">Code postal :</em>{" "}
                {userInfo.postalcode}
              </li>
            </ul>
            <div className="buttonupdate">
              <Link to="/account/update">
                <button className="updateInformations" type="button">
                  Modifier mes informations
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="MSProfileRightContainer">
          <div className="myBiography">
            <h2 className="myBiographyTitle">Ma bio ✏️</h2>
            <p className="textBiography">{userInfo.biography}</p>
            <div className="buttonupdate">
              <Link to="/account/update">
                <button className="updateIBio" type="button">
                  Modifier ma bio
                </button>
              </Link>
            </div>
          </div>
          <div className="myResearch">
            <h2 className="myResearchTitle">Ma recherche d'emploi 🔍</h2>
            <div className="checkboxContainer">
              <div className="checkbox1">
                <input type="checkbox" id="check1" name="check1" />
                <label htmlFor="scales">En recherche active</label>
              </div>
              <div className="checkbox2">
                <input type="checkbox" id="check0" name="check0" />
                <label htmlFor="scales">En recherche passive</label>
              </div>
            </div>
            <div className="buttonupdate">
              <Link to="/account/update">
                <button className="updateResearch" type="button">
                  Modifier ma recherche
                </button>
              </Link>
            </div>
          </div>
          <div className="myCV">
            <h2 className="myCVTitle">Mon CV 📄</h2>
            <div className="buttonupdate">
              <Link to="/account/update">
                <button className="updateResearch" type="button">
                  Importer mon CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
