import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSNavbar() {
  const { mySpace, setMySpace } = useContext(Context);
  const { userInfo } = useContext(Context);

  return (
    <Style>
      <div className="MSNavbarContainer">
        <div className="HelloUser">
          <h1>
            Bonjour
            <br />{" "}
            <em className="EMuser">
              {userInfo.firstname} {userInfo.lastname} !
            </em>{" "}
          </h1>
        </div>
        <div className="buttonResponsive">
          <div className="ButtonProfile">
            <button
              type="button"
              onClick={() => {
                setMySpace("profile");
              }}
              className={mySpace === "profile" ? "active" : "passive"}
            >
              <span>Mon profil</span>
            </button>
          </div>
          <div className="ButtonFavorites">
            <button
              type="button"
              onClick={() => {
                setMySpace("favorites");
              }}
              className={mySpace === "favorites" ? "active" : "passive"}
            >
              <span>Mes favoris</span>
            </button>
          </div>
          <div className="ButtonCandidatures">
            <button
              type="button"
              onClick={() => {
                setMySpace("applications");
              }}
              className={mySpace === "applications" ? "active" : "passive"}
            >
              <span>Mes candidatures</span>
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
}
