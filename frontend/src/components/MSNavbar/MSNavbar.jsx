import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSNavbar() {
  const { setMySpace } = useContext(Context);
  return (
    <Style>
      <nav>
        <button
          type="button"
          onClick={() => {
            setMySpace("profile");
          }}
        >
          Profil
        </button>
        <button
          type="button"
          onClick={() => {
            setMySpace("favorites");
          }}
        >
          Favoris
        </button>
        <button
          type="button"
          onClick={() => {
            setMySpace("applications");
          }}
        >
          Candidatures
        </button>
      </nav>
    </Style>
  );
}
