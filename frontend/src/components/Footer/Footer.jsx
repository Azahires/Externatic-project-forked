import Contact from "./Contact/Contact";
import Copyrigth from "./Copyright/Copyrigth";
import Description from "./Description/Description";
import Infos from "./Infos/Infos";
import Social from "./Social/Social";
import Styles from "./style";

export default function Footer() {
  return (
    <Styles>
      <div>
        <Description />
        <Infos />
        <Contact />
        <Social />
        <Copyrigth />
      </div>
    </Styles>
  );
}
