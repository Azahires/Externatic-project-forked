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
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2022/10/Decath-tech.png" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2021/03/allovoisins-1.png" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2021/03/showroom-1.png" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2021/03/IKKS-1.png" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2021/03/manitou.png" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2021/03/mdm-1.png" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2021/03/iadvize.png" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2021/03/lengow-1.png" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2022/08/klaxoon-.jpg" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2022/08/groupama.jpg" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2022/08/maincare.jpg" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2022/08/lumiplan.jpg" />
        <PartnersSlider url="https://www.externatic.fr/wp-content/uploads/2022/03/GIE-iris.png" />
      </Carousel>
    </div>
  );
}

export default Partners;
