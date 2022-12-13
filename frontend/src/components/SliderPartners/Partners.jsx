import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PartnersSlider from "./PartnersSlider";

function Partners() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
        <PartnersSlider />
      </Carousel>
    </div>
  );
}

export default Partners;
