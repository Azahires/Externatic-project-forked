import { useForm } from "react-hook-form";
import { useState, useContext, useRef } from "react";
import useApi from "@services/useApi";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/Context";

import Style from "./style";

export default function UpdateAccount() {
  const navigate = useNavigate();
  const { mySpace } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("noerror");
  const [modifValidation, setModifValidation] = useState(true);
  const api = useApi();
  const { userInfo, setUserInfo } = useContext(Context);
  const avatarRef = useRef();
  const CVRef = useRef();
  const [modification, setModification] = useState("nomodification");
  const hChange = (evt) => {
    const { name, value } = evt.target;
    const newValue = value;
    setUserInfo({ ...userInfo, [name]: newValue });
    setError("noerror");
    setModification("nomodification");
  };
  const onSubmit = (form) => {
    const formData = {
      ...form,
      postalcode: parseInt(form.postalcode, 10),
      activeSearch: parseInt(form.activeSearch, 10),
    };
    api
      .put(`/users/${userInfo.id}`, formData)
      .then(({ data }) => {
        setModification("modification");
        setUserInfo({ ...userInfo, activeSearch: data });
      })
      .catch(() => {
        setError("error");
        setModifValidation(false);
      });
    if (avatarRef.current.files[0]) {
      const avatarform = new FormData();
      avatarform.append("avatar", avatarRef.current.files[0]);
      api
        .post("/avatar", avatarform)
        .then(({ data }) => {
          setModification("modification");
          setUserInfo({ ...userInfo, avatar: data });
        })
        .catch(() => {
          setError("error");
          setModifValidation(false);
        });
    }
    if (CVRef.current.files[0]) {
      const CV = new FormData();
      CV.append("CV", CVRef.current.files[0]);
      api
        .post("/cv", CV)
        .then(({ data }) => {
          setModification("modification");
          setUserInfo({ ...userInfo, CV: data });
        })
        .catch(() => {
          setError("error");
          setModifValidation(false);
        });
    }
    if (modifValidation) {
      navigate("/account");
    }
  };

  return (
    <Style
      onSubmit={handleSubmit(onSubmit)}
      className={mySpace === "profile" ? "visible" : "hidden"}
      encType="multipart/form-data"
    >
      <p>Ajouter un avatar:</p>
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
        {...register("lastname", { required: true, maxLength: 100 })}
        value={userInfo.lastname || ""}
        onChange={hChange}
      />
      <input
        type="text"
        placeholder="Prénom"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("firstname", { required: true, maxLength: 80 })}
        value={userInfo.firstname || ""}
        onChange={hChange}
      />
      <input
        type="text"
        placeholder="Email"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        value={userInfo.email || ""}
        onChange={hChange}
      />
      <input
        type="text"
        placeholder="Téléphone (format \'06XXXXXXXX\')"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("phonenumber", { required: false, maxLength: 10 })}
        value={userInfo.phonenumber || ""}
        onChange={hChange}
      />
      <input
        type="text"
        placeholder="Ville"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("city", { required: false, maxLength: 80 })}
        value={userInfo.city || ""}
        onChange={hChange}
      />
      <input
        type="number"
        placeholder="Code postal"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("postalcode", { required: false, maxLength: 80 })}
        value={userInfo.postalcode || ""}
        onChange={hChange}
      />
      <input
        type="text"
        placeholder="Lien LinkedIn"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("linkedinlink", { required: false, maxLength: 80 })}
        value={userInfo.linkedinlink || ""}
        onChange={hChange}
      />
      <input
        type="text"
        placeholder="Lien GitHub"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("githublink", { required: false, maxLength: 80 })}
        value={userInfo.githublink || ""}
        onChange={hChange}
      />
      <fieldset>
        <legend>Vous êtes:</legend>
        <div>
          <input
            type="radio"
            id="activeSearch"
            name="activeSearch"
            value="1"
            onClick={() => {
              setUserInfo({ ...userInfo, activeSearch: true });
            }}
            checked={userInfo.activeSearch}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("activeSearch", { required: false })}
          />
          <label htmlFor="activeSearch">En recherche active d'un poste</label>
        </div>
        <div>
          <input
            type="radio"
            id="passiveSearch"
            name="activeSearch"
            value="0"
            onClick={() => {
              setUserInfo({ ...userInfo, activeSearch: false });
            }}
            checked={!userInfo.activeSearch}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("activeSearch", { required: false })}
          />
          <label htmlFor="passiveSearch">Ouvert aux opportunités</label>
        </div>
      </fieldset>
      <textarea
        type="textarea"
        placeholder="Courte biographie"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("biography", { required: false })}
        value={userInfo.biography || ""}
        onChange={hChange}
      />
      <p>Télécharger un CV:</p>
      <input
        type="file"
        name="CV"
        placeholder="Votre CV"
        ref={CVRef}
        classeName="btn-files"
      />
      <input className="btn" type="submit" value="Modifier son profil" />
      <p className={error}>
        Une erreur est survenue, veuillez vérifier les champs et vous assurez
        que vous n'avez pas encore de compte utilisateur.
      </p>
      <p className={modification}>
        Vos modifications ont bien été enregistrées.
      </p>
    </Style>
  );
}
