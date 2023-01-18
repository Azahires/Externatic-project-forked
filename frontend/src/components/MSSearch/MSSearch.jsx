import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSSearch() {
  const { mySpace } = useContext(Context);
  return (
    <Style className={mySpace === "search" ? "visible" : "hidden"}>
      MSSearch
    </Style>
  );
}
