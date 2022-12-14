import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Style, {
  BurgerMenuContainer,
  LeftSection,
  MiddleSection,
  RightSection,
} from "./style";
import externaticLogo from "../../assets/externatic.svg";

export default function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };
  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <BurgerMenuContainer>
      <LeftSection>
        <Style>
          <Menu
            left
            width="50vw"
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            <button
              type="button"
              onClick={() => {
                closeSideBar();
              }}
            >
              Accueil
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
              }}
            >
              S'inscrire
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
              }}
            >
              Se connecter
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
              }}
            >
              Nos offres d'emploi
            </button>
            <button
              type="button"
              onClick={() => {
                closeSideBar();
              }}
            >
              Qui sommes-nous ?
            </button>
          </Menu>
        </Style>
      </LeftSection>
      <MiddleSection>
        <a href="/">
          <img src={externaticLogo} alt="Logo" />
        </a>
      </MiddleSection>
      <RightSection>
        <button type="button" className="S'inscrire">
          S'inscrire
        </button>
        <button type="button" className="Se connecter">
          Se connecter
        </button>
      </RightSection>
    </BurgerMenuContainer>
  );
}
