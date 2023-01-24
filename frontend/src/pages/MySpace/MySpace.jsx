import MSApplications from "@components/MSApplications/MSApplications";
import MSFavorites from "@components/MSFavorites/MSFavorites";
import MSNavbar from "@components/MSNavbar/MSNavbar";
import MSProfile from "@components/MSProfile/MSProfile";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MySpace() {
  const { mySpace } = useContext(Context);
  return (
    <Style>
      <MSNavbar />
      <MSProfile className={mySpace === "profile" ? "hidden" : "hidden"} />
      <MSFavorites className={mySpace === "favorites" ? "visible" : "hidden"} />
      <MSApplications
        className={mySpace === "applications" ? "visible" : "hidden"}
      />
    </Style>
  );
}
