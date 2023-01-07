import { useContext } from "react";
import Style from "./style";
import { Context } from "../../contexts/Context";

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
