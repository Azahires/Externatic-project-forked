import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSProfile() {
  const { mySpace } = useContext(Context);
  return (
    <Style className={mySpace === "profile" ? "visible" : "hidden"}>
      MSProfile
    </Style>
  );
}
