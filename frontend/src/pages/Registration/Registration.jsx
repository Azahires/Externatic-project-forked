import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Style from "./style";

export default function Registration() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("noerror");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post(`http://localhost:5000/users`, data)
      .then(() => {
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
