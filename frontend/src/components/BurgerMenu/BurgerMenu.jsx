import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import useApi from "@services/useApi";
import { Context } from "../../contexts/Context";
import Style, {
  BurgerMenuContainer,
  LeftSection,
  MiddleSection,
  RightSection,
} from "./style";
import externaticLogo from "../../assets/externatic.svg";

export default function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const { userInfo, setUserInfo } = useContext(Context);
  const api = useApi();
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };
  const closeSideBar = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const hLogOut = () => {
    api.defaults.headers.authorization = null;
    setUserInfo({
      lastname: null,
      firstname: null,
      email: null,
      id: null,
    });
    navigate("/");
  };

  return (
    <BurgerMenuContainer>
      <LeftSection>
        <Style>
          <Menu
            left
            width="25vw"
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            <button
              type="button"
              onClick={() => {
                closeSideBar();
                navigate("/");
              }}
            >
              Accueil
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
                navigate("/account");
              }}
              className={userInfo.email ? "visible" : "hidden"}
            >
              Mon espace
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
                navigate("/signin");
              }}
              className={!userInfo.email ? "visible" : "hidden"}
            >
              S'inscrire
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
                navigate("/login");
              }}
              className={!userInfo.email ? "visible" : "hidden"}
            >
              Se connecter
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
                navigate("/offers");
              }}
            >
              Nos offres d'emploi
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
                navigate("/team");
              }}
            >
              Notre équipe
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
                navigate("/about");
              }}
            >
              Qui sommes-nous ?
            </button>
          </Menu>
        </Style>
      </LeftSection>
      <MiddleSection>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={externaticLogo} alt="Logo" />
        </button>
      </MiddleSection>
      <RightSection>
        <p className={userInfo.email ? "visible" : "hidden"}>
          Connecté en tant que {userInfo.firstname} {userInfo.lastname}{" "}
        </p>
        <button
          type="button"
          className={!userInfo.email ? "visible" : "hidden"}
          onClick={() => {
            navigate("/signin");
          }}
        >
          S'inscrire
        </button>
        <button
          type="button"
          className={!userInfo.email ? "visible" : "hidden"}
          onClick={() => {
            navigate("/login");
          }}
        >
          Se connecter
        </button>
        <button
          type="button"
          className={userInfo.email ? "visible" : "hidden"}
          onClick={hLogOut}
        >
          Deconnexion
        </button>
      </RightSection>
    </BurgerMenuContainer>
  );
}
