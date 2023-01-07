import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useApi from "@services/useApi";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function Connexion() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("noerror");
  const navigate = useNavigate();
  const api = useApi();
  const { setUserInfo } = useContext(Context);

  const onSubmit = (form) => {
    api
      .post(`http://localhost:5000/login`, form)
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

  return (
    <Style onSubmit={handleSubmit(onSubmit)}>
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
      <input className="btn-1" type="submit" value="Se connecter" />
      <p className={error}>
        Veuillez vérifier l'email et/ou le mot de passe saisis.
      </p>
    </Style>
  );
}
