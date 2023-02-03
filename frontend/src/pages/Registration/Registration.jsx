import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import useApi from "../../services/useApi";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function Registration() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("noerror");
  const navigate = useNavigate();
  const api = useApi();
  const { setUserInfo } = useContext(Context);

  const onSubmit = (form) => {
    api
      .post("/users", form)
      .then(({ data }) => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        setUserInfo(user);
        navigate("/account");
      })
      .catch(() => {
        setError("error");
      });
  };

  const hchange = () => {
    setError("noerror");
  };

  return (
    <Style>
      <form onSubmit={handleSubmit(onSubmit)} onChange={hchange}>
        <input
          type="text"
          placeholder="Prénom"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("lastname", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Nom"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("firstname", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Email"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("password", { required: true, max: 50, min: 8 })}
        />
        <input className="btn" type="submit" value="S'enregistrer" />
        <p className={error}>
          Une erreur est survenue, veuillez vérifier les champs et vous assurez
          que vous n'avez pas encore de compte utilisateur.
        </p>
      </form>
      <p className="RGPD">
        Les informations recueillies vous concernant font l’objet d’un
        traitement informatique destiné à l'inscription sur la plateforme de
        recrutement Externatic ayant pour but de vous accompagner dans la
        recherche d'un emploi. A ce titre, les données à caractère personnel
        suivantes vous concernant sont collectées : Nom, prénom, n° de
        téléphone, adresse mail ainsi que les lien LinkedIn et lien GitHub si
        vous choisissez de les partager.
      </p>
      <p className="RGPD">
        Conformément aux articles 15 à 23 du Règlement Général sur la Protection
        des données, vous bénéficiez d’un droit d’accès, de rectification aux
        informations qui vous concernent. Vous pouvez également, pour des motifs
        légitimes, vous opposer au traitement des données vous concernant (sauf
        si ce droit a été écarté par une disposition législative), vous opposer
        au profilage et demander la limitation du traitement. Enfin vous pouvez
        introduire une réclamation auprès d'une autorité de contrôle (En France
        : CNIL : 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07 -
        Téléphone : 01.53.73.22.22. www.cnil.fr).
      </p>
    </Style>
  );
}
