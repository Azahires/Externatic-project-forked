import PropTypes from "prop-types";
import Style from "./style";

export default function OfferCard({
  title,
  contracttype,
  publicationdate,
  location,
}) {
  return (
    <Style>
      <h2>{title}</h2>
      <p>
        {contracttype} - {location}
      </p>
      <p>Date de publication: {publicationdate}</p>
      <p>En savoir plus</p>
    </Style>
  );
}

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  contracttype: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  publicationdate: PropTypes.string.isRequired,
};
