import { useSelector } from "react-redux";
import Style from "./style";

export default function MySpace() {
  const profile = useSelector((state) => state);
  return (
    <Style>
      <h1>
        Welcome {profile.user.firstname} {profile.user.lastname}
      </h1>
    </Style>
  );
}
