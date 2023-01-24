import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSProfile() {
  const { userInfo } = useContext(Context);
  const { mySpace } = useContext(Context);
  const [avatarUrl, setAvatarUrl] = useState();
  const [CVurl, setCVurl] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/assets/connecteduserfiles/useravatar.png")
      .then((res) => {
        setAvatarUrl(res.url);
      })
      .catch((err) => {
        throw err;
      });
    fetch("http://localhost:5000/assets/connecteduserfiles/userCV.pdf")
      .then((res) => {
        setCVurl(res.url);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const avatar = new Image();
  avatar.src = avatarUrl;

  return (
    <Style className={mySpace === "profile" ? "visible" : "hidden"}>
      <h1>
        Hello {userInfo.firstname} {userInfo.lastname}{" "}
      </h1>
      {userInfo.avatar ? (
        <p>
          <img src={avatar.src} alt="avatar" />
        </p>
      ) : (
        ""
      )}
      {userInfo.CV ? (
        <p>
          <a href={CVurl} target="_blank" rel="noreferrer">
            Accéder au CV
          </a>
        </p>
      ) : (
        ""
      )}
      <Link to="/account/update">Modifier le profil</Link>
    </Style>
  );
}
