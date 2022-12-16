import React from "react";
import PropTypes from "prop-types";
import Styles from "./PartnersSliderStyle";

export default function PartnersSlider({ url }) {
  return (
    <Styles className="card">
      <img className="img-card" src={url} alt="Partner logo" />
    </Styles>
  );
}

PartnersSlider.propTypes = {
  url: PropTypes.string.isRequired,
};
