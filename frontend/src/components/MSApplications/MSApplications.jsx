import { useContext, useEffect, useState } from "react";
import useApi from "@services/useApi";
import OfferCard from "@components/OfferCard/OfferCard";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSApplications() {
  const { mySpace } = useContext(Context);
  const [userOffers, setUserOffers] = useState();
  const api = useApi();

  useEffect(() => {
    api
      .get("/offers")
      .then(({ data: offersdata }) => {
        const data2 = offersdata;
        for (let i = 0; i < data2.length; i += 1) {
          data2[i].publication_date = new Date(
            data2[i].publication_date
          ).toLocaleDateString("fr");
        }
        api
          .get("/applications")
          .then(({ data: applicationdata }) => {
            setUserOffers(
              offersdata
                .filter((offer) =>
                  applicationdata
                    .map((application) => application.offer_id)
                    .includes(offer.id)
                )
                .map((offer) => {
                  return {
                    ...offer,
                    applicationdate: applicationdata
                      .filter(
                        (application) => application.offer_id === offer.id
                      )
                      .map((application) => application.application_date),
                  };
                })
            );
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Style className={mySpace === "applications" ? "visible" : "hidden"}>
      {userOffers &&
        userOffers
          .sort((a, b) => {
            return (
              Date.parse(a.publication_date) - Date.parse(b.publication_date)
            );
          })
          .reverse()
          .map((offer) => {
            return (
              <OfferCard
                title={offer.title}
                contracttype={offer.contract_type}
                publicationdate={offer.publication_date}
                location={offer.location}
                id={offer.id}
                key={offer.id}
                applicationdate={offer.applicationdate}
              />
            );
          })}
    </Style>
  );
}
