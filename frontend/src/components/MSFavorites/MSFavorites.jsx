import { useContext, useEffect, useState } from "react";
import useApi from "@services/useApi";
import OfferCard from "@components/OfferCard/OfferCard";
import { Context } from "../../contexts/Context";
import Style from "./style";

export default function MSFavorites() {
  const { mySpace } = useContext(Context);
  const [userFavOffers, setUserFavOffers] = useState();
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
          .get("/favorites")
          .then(({ data: favoritedata }) => {
            setUserFavOffers(
              offersdata
                .filter((offer) =>
                  favoritedata
                    .map((favorite) => favorite.offer_id)
                    .includes(offer.id)
                )
                .map((offer) => {
                  return {
                    ...offer,
                    favoritedate: favoritedata
                      .filter((favorite) => favorite.offer_id === offer.id)
                      .map((favorite) => favorite.favorite_date),
                  };
                })
            );
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Style className={mySpace === "favorites" ? "visible" : "hidden"}>
      {userFavOffers &&
        userFavOffers
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
              />
            );
          })}
    </Style>
  );
}
