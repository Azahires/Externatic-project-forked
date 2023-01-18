import propTypes from "prop-types";
import Style from "./style";

export default function Centered({ children }) {
  return <Style>{children}</Style>;
}

Centered.propTypes = {
  children: propTypes.shape({}).isRequired,
};
