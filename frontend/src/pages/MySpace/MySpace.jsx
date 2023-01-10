import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MySpace() {
  const { userInfo } = useContext(Context);
  return (
    <Style>
      <h1>
        Welcome {userInfo.lastname} {userInfo.firstname}
      </h1>
    </Style>
  );
}
