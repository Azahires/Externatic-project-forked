import "reset-css";
import Offers from "@pages/Offers/Offers";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import Offer from "@pages/Offer/Offer";
import Style from "./style";

function App() {
  return (
    <Style>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/:id" element={<Offer />} />
      </Routes>
    </Style>
  );
}

export default App;
