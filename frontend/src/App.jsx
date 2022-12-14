import "reset-css";
import Offers from "@pages/Offers/Offers";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import Offer from "@pages/Offer/Offer";
import Whoweare from "@pages/Whoweare/Whoweare";
import Registration from "@pages/Registration/Registration";
import Connexion from "@pages/Connexion/Connexion";
import BurgerMenu from "@components/BurgerMenu/BurgerMenu";
import PresentationHP from "./components/PresentationHP/PresentationHP";
import Style from "./style";

export default function App() {
  return (
    <Style>
      <PresentationHP />
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/about" element={<Whoweare />} />
        <Route path="/signin" element={<Registration />} />
        <Route path="/login" element={<Connexion />} />
      </Routes>
    </Style>
  );
}
