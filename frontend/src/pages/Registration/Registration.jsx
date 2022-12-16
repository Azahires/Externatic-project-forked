import { useForm } from "react-hook-form";
import Style from "./style";

export default function Registration() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => data;

  return (
    <Style onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        {...register("Mot de passe", { required: true, max: 50, min: 8 })}
      />
      <input className="btn" type="submit" value="S'enregistrer" />
    </Style>
  );
}
