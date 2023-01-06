import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useApi from "@services/useApi";
import Style from "./style";

export default function Connexion() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("noerror");
  const navigate = useNavigate();
  const api = useApi();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    api
      .post(`http://localhost:5000/login`, data)
      .then(() => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: "USER_LOGIN", payload: { ...user, token } });
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
