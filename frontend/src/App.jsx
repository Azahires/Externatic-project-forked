import Offers from "@pages/Offers/Offers";
import "reset-css";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import Offer from "@pages/Offer/Offer";
import Whoweare from "@pages/Whoweare/Whoweare";
import Registration from "@pages/Registration/Registration";
import Connexion from "@pages/Connexion/Connexion";
import BurgerMenu from "@components/BurgerMenu/BurgerMenu";
import MySpace from "@pages/MySpace/MySpace";
import { useContext } from "react";
import { Context } from "./contexts/Context";
import Style from "./style";

export default function App() {
  const { userInfo } = useContext(Context);
  return (
    <Style>
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/about" element={<Whoweare />} />
        <Route path="/signin" element={<Registration />} />
        <Route path="/login" element={<Connexion />} />
        <Route
          path="/account"
          element={userInfo.email ? <MySpace /> : <Connexion />}
        />
      </Routes>
    </Style>
  );
}
