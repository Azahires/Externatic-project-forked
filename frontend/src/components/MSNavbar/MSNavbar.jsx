import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSNavbar() {
  const { mySpace, setMySpace } = useContext(Context);
  return (
    <Style>
      <button
        type="button"
        onClick={() => {
          setMySpace("profile");
        }}
        className={mySpace === "profile" ? "active" : "passive"}
      >
        <span>Profil</span>
      </button>
      <button
        type="button"
        onClick={() => {
          setMySpace("favorites");
        }}
        className={mySpace === "favorites" ? "active" : "passive"}
      >
        Favoris
      </button>
      <button
        type="button"
        onClick={() => {
          setMySpace("applications");
        }}
        className={mySpace === "applications" ? "active" : "passive"}
      >
        Candidatures
      </button>
    </Style>
  );
}
