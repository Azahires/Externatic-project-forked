import { useContext, useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import useApi from "../../services/useApi";
import { Context } from "../../contexts/Context";
import Style from "./style";
import Avatar from "../../assets/avatar.svg";
import LinkedIn from "../../assets/linkedin.svg";
import GitHub from "../../assets/github.svg";

export default function MSProfile() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("noerror");
  const api = useApi();
  const { userInfo, setUserInfo, mySpace } = useContext(Context);
  const avatarRef = useRef();
  const CVRef = useRef();
  const [avatarUrl, setAvatarUrl] = useState();
  const [CVurl, setCVurl] = useState();
  const [formVisibility, setFormVisibility] = useState(false);
  const [bioVisibility, setBioVisibility] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [CVVisibility, setCVVisibility] = useState(false);
  const [inputCVVisibility, setinpuCVVisibility] = useState(false);

  const hChange = (evt) => {
    const { name, value } = evt.target;
    const newValue = value;
    setUserInfo({ ...userInfo, [name]: newValue });
    setError("noerror");
  };

  const onFormSubmit = (form) => {
    const formData = {
      ...form,
      postalcode: parseInt(form.postalcode, 10) || 0,
    };
    api
      .put(`/users/${userInfo.id}`, formData)
      .then(() => {
        if (avatarRef.current.files[0]) {
          const avatarform = new FormData();
          avatarform.append("avatar", avatarRef.current.files[0]);
          api
            .put(`/avatar/${userInfo.id}`, avatarform)
            .then(({ data }) => {
              setUserInfo({ ...userInfo, avatar: data });
              setFormVisibility(!formVisibility);
            })
            .catch(() => {
              setError("error");
            });
        } else {
          setFormVisibility(!formVisibility);
        }
      })
      .catch(() => {
        setError("error");
      });
  };

  const onBioSubmit = (form) => {
    api
      .put(`/users/${userInfo.id}`, form)
      .then(() => {
        setBioVisibility(!bioVisibility);
      })
      .catch(() => {
        setError("error");
      });
  };

  const onSearchSubmit = (form) => {
    const formData = {
      ...userInfo,
      activeSearch: parseInt(form.activeSearch, 10),
    };
    api
      .put(`/users/${userInfo.id}`, formData)
      .then(() => {
        setSearchVisibility(false);
      })
      .catch(() => {
        setError("error");
      });
  };

  const onCVSubmit = () => {
    if (CVRef.current.files[0]) {
      const CV = new FormData();
      CV.append("CV", CVRef.current.files[0]);
      api
        .put(`/cv/${userInfo.id}`, CV)
        .then(({ data }) => {
          setUserInfo({ ...userInfo, CV: data });
          setCVVisibility(false);
        })
        .catch(() => {
          setError("error");
        });
    }
  };

  const hash = Date.now();
  useEffect(() => {
    if (userInfo.avatar) {
      const [avatarExtension] = userInfo.avatar.split(".").slice(-1);
      fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/assets/connecteduserfiles/useravatar.${avatarExtension}`
      )
        .then((res) => {
          setAvatarUrl(res.url);
        })
        .catch((err) => {
          throw err;
        });
    }
    if (userInfo.CV) {
      const [CVExtension] = userInfo.CV.split(".").slice(-1);
      fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/assets/connecteduserfiles/userCV.${CVExtension}`
      )
        .then(async (res) => {
          await setCVurl(`${res.url}?${hash}`);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [userInfo]);
  const avatar = new Image();
  avatar.src = `${avatarUrl}?${hash}`;

  return (
    <Style className={mySpace === "profile" ? "visible" : "hidden"}>
      <div className="MSProfileContainer">
        <div
          className="MSProfileLeftContainer"
          id={formVisibility ? "hidden" : "visible"}
        >
          <div className="avatarContainer">
            <div className="UserAvatar">
              {userInfo.avatar ? (
                <p>
                  <img className="AvatarImg" src={avatar.src} alt="Avatar" />
                </p>
              ) : (
                <img className="AvatarImg" src={Avatar} alt="Avatar" />
              )}
            </div>
            <div className="socialMediaContainer">
              {userInfo.linkedinlink ? (
                <a
                  href={userInfo.linkedinlink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="buttonSocialMediaLinkedin" type="button">
                    <img
                      className="linkedinLogo"
                      src={LinkedIn}
                      alt="Linkedin logo"
                    />
                    LinkedIn
                  </button>
                </a>
              ) : (
                ""
              )}
              {userInfo.githublink ? (
                <a href={userInfo.githublink} target="_blank" rel="noreferrer">
                  <button className="buttonSocialMediaGitHub" type="button">
                    <img
                      className="githubLogo"
                      src={GitHub}
                      alt="GitHub logo"
                    />
                    GitHub
                  </button>
                </a>
              ) : (
                ""
              )}
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
              <button
                className="updateInformations"
                type="button"
                id={formVisibility ? "hidden" : "visible"}
                onClick={() => {
                  setFormVisibility(!formVisibility);
                }}
              >
                Modifier mes informations
              </button>
            </div>
          </div>
        </div>
        <form
          className="formPart"
          id={!formVisibility ? "hidden" : "visible"}
          onSubmit={handleSubmit(onFormSubmit)}
          encType="multipart/form-data"
        >
          <label htmlFor="avatar" className="avatarlabel">
            Ajouter un avatar :
          </label>
          <input
            type="file"
            name="avatar"
            placeholder="Votre photo"
            ref={avatarRef}
          />
          <input
            type="text"
            placeholder="Nom"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("lastname")}
            value={userInfo.lastname || ""}
            onChange={hChange}
          />
          <input
            type="text"
            placeholder="Prénom"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("firstname")}
            value={userInfo.firstname || ""}
            onChange={hChange}
          />
          <input
            type="text"
            placeholder="Email"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("email")}
            value={userInfo.email || ""}
            onChange={hChange}
          />
          <input
            type="text"
            placeholder="Téléphone (format \'06XXXXXXXX\')"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("phonenumber")}
            value={userInfo.phonenumber || ""}
            onChange={hChange}
          />
          <input
            type="text"
            placeholder="Ville"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("city")}
            value={userInfo.city || ""}
            onChange={hChange}
          />
          <input
            type="number"
            placeholder="Code postal"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("postalcode")}
            value={userInfo.postalcode || 0}
            onChange={hChange}
          />
          <input
            type="text"
            placeholder="Lien LinkedIn"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("linkedinlink")}
            value={userInfo.linkedinlink || ""}
            onChange={hChange}
          />
          <input
            type="text"
            placeholder="Lien GitHub"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("githublink")}
            value={userInfo.githublink || ""}
            onChange={hChange}
          />
          <button className="updateInformations" type="submit">
            Valider mes informations
          </button>
          <p className={error}>
            Une erreur est survenue, veuillez vérifier les champs et vous
            assurez que vous n'avez pas encore de compte utilisateur.
          </p>
        </form>
        <div className="MSProfileRightContainer">
          <div className="myBiography">
            <h2 className="myBiographyTitle">Ma bio ✏️</h2>
            <p
              className="textBiography"
              id={bioVisibility ? "hidden" : "visible"}
            >
              {userInfo.biography}
            </p>
            <div
              className="buttonupdate"
              id={bioVisibility ? "hidden" : "visible"}
            >
              <button
                className="updateIBio"
                type="button"
                onClick={() => {
                  setBioVisibility(!bioVisibility);
                }}
              >
                Modifier ma bio
              </button>
            </div>
            <form
              className="bioPart"
              onSubmit={handleSubmit(onBioSubmit)}
              id={!bioVisibility ? "hidden" : "visible"}
            >
              <textarea
                type="textarea"
                placeholder="Courte biographie"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("biography", { required: false })}
                value={userInfo.biography || ""}
                onChange={hChange}
              />
              <button className="updateInformations" type="submit">
                Valider ma bio
              </button>
            </form>
          </div>
          <div className="myResearch">
            <form
              className="biopart"
              onSubmit={handleSubmit(onSearchSubmit)}
              encType="multipart/form-data"
            >
              <fieldset>
                <h2 className="myResearchTitle">Ma recherche d'emploi 🔍</h2>
                <div className="checkboxContainer">
                  <div className="checkbox1">
                    <input
                      type="radio"
                      id="activeSearch"
                      name="activeSearch"
                      value="1"
                      onClick={() => {
                        setUserInfo({ ...userInfo, activeSearch: 1 });
                        setSearchVisibility(true);
                      }}
                      checked={userInfo.activeSearch === 1}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register("activeSearch", { required: false })}
                    />
                    <label htmlFor="activeSearch">En recherche active</label>
                  </div>
                  <div className="checkbox2">
                    <input
                      type="radio"
                      id="passiveSearch"
                      name="activeSearch"
                      value="0"
                      onClick={() => {
                        setUserInfo({ ...userInfo, activeSearch: 0 });
                        setSearchVisibility(true);
                      }}
                      checked={userInfo.activeSearch === 0}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register("activeSearch", { required: false })}
                    />
                    <label htmlFor="passiveSearch">En recherche passive</label>
                  </div>
                </div>
              </fieldset>
              <button
                className="updateInformations searchbutton"
                type="submit"
                id={!searchVisibility ? "hidden" : "visible"}
              >
                Valider mon statut
              </button>
            </form>
          </div>
          <div className="myCV">
            {CVurl ? (
              <h2 className="myCVTitle">
                <a href={CVurl} target="_blank" rel="noreferrer">
                  Mon CV
                </a>{" "}
                📄
              </h2>
            ) : (
              ""
            )}
            <div className="buttonupdate">
              <input
                className="input-cv"
                id={CVVisibility ? "visible" : "hidden"}
                type="file"
                name="CV"
                placeholder="Votre CV"
                ref={CVRef}
                onChange={() => {
                  setinpuCVVisibility(true);
                }}
              />
              <button
                className="updateResearch"
                type="button"
                onClick={() => {
                  setCVVisibility(true);
                }}
                id={!userInfo.CV && !CVVisibility ? "visible" : "hidden"}
              >
                Ajouter un CV
              </button>
              <button
                className="updateResearch"
                type="button"
                onClick={onCVSubmit}
                id={CVVisibility && inputCVVisibility ? "visible" : "hidden"}
              >
                Importer mon CV
              </button>
              <button
                className="updateResearch"
                type="button"
                onClick={() => {
                  setCVVisibility(true);
                }}
                id={userInfo.CV && !CVVisibility ? "visible" : "hidden"}
              >
                Modifier mon CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
