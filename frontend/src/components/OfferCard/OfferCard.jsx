import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Style from "./style";

export default function OfferCard({
  title,
  contracttype,
  publicationdate,
  location,
  id,
  applicationdate,
}) {
  const applicationdate2 = new Date(applicationdate).toLocaleDateString();
  return (
    <Style>
      <Link to={`/offers/${id}`}>
        <div className="offerCardContainer">
          <div className="titleOfferCardContainer">
            <h2 className="titleOfferCard">
              {title}{" "}
              {applicationdate ? (
                <p className="applicationDate">
                  Date candidature: {applicationdate2}
                </p>
              ) : (
                ""
              )}
            </h2>
          </div>
          <div className="informationOfferCardContainer">
            <div className="contractType">
              <h3>📝 Contrat</h3>
              <p className="textContractType">{contracttype}</p>
            </div>
            <div className="location">
              <h3>📍 Localisation</h3>
              <p className="textLocation">{location}</p>
            </div>
          </div>
          <div className="publicationDateContainer">
            <h3>🗓️ Date de publication :</h3>
            <p className="textPublicationDate">{publicationdate}</p>
          </div>
          <div className="moreInformationContainer">
            <p className="textMoreInformation">En savoir plus</p>
          </div>
        </div>
      </Link>
    </Style>
  );
}

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  contracttype: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  publicationdate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  applicationdate: PropTypes.string,
};

OfferCard.defaultProps = {
  applicationdate: "",
};
