import { useForm } from "react-hook-form";
import Style from "./style";

export default function Connexion() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => data;

  return (
    <Style onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("Mot de passe", { required: true, max: 50, min: 8 })}
      />
      <input className="btn-1" type="submit" value="Se connecter" />
    </Style>
  );
}
