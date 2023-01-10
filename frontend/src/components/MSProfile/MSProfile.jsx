import { useForm } from "react-hook-form";
import { useState, useContext, useRef } from "react";
import useApi from "@services/useApi";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSProfile() {
  const { mySpace } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("noerror");
  const api = useApi();
  const { userInfo, setUserInfo } = useContext(Context);
  const inputRef = useRef();
  const [modification, setModification] = useState("nomodification");
  const hChange = (evt) => {
    const { name, value } = evt.target;
    const newValue = value;
    setUserInfo({ ...userInfo, [name]: newValue });
    setError("noerror");
    setModification("nomodification");
  };

  const onSubmit = (form) => {
    api
      .put(`/users/${userInfo.id}`, form)
      .then(() => {
        setModification("modification");
      })
      .catch(() => {
        setError("error");
      });
  };

  return (
    <Style
      onSubmit={handleSubmit(onSubmit)}
      className={mySpace === "profile" ? "visible" : "hidden"}
      encType="multipart/form-data"
    >
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
      <input type="file" name="CV" placeholder="Votre CV" ref={inputRef} />
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
