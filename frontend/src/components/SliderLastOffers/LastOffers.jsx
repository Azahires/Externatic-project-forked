import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OffersSlider from "./OffersSlider";

function LastOffers() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
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
        <OffersSlider />
        <OffersSlider />
        <OffersSlider />
        <OffersSlider />
        <OffersSlider />
        <OffersSlider />
      </Carousel>
    </div>
  );
}
export default LastOffers;
