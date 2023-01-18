import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSApplications() {
  const { mySpace } = useContext(Context);
  return (
    <Style className={mySpace === "applications" ? "visible" : "hidden"}>
      MSApplications
    </Style>
  );
}
