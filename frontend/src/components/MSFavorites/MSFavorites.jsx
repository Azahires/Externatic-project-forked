import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSFavorites() {
  const { mySpace } = useContext(Context);
  return (
    <Style className={mySpace === "favorites" ? "visible" : "hidden"}>
      MSFavorites
    </Style>
  );
}
