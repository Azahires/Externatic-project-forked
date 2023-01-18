import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import useApi from "@services/useApi";
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
    <Style onSubmit={handleSubmit(onSubmit)} onChange={hchange}>
      <input
        type="text"
        placeholder="Last name"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("lastname", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="First name"
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
    </Style>
  );
}
