import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSProfile() {
  const { userInfo } = useContext(Context);

  return (
    <Style>
      <h1>
        Hello {userInfo.firstname} {userInfo.lastname}{" "}
      </h1>
      <Link to="/account/update">Modifier le profil</Link>
    </Style>
  );
}
