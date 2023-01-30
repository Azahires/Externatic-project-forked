Exemple de code pour récupérer la logitude et latitude d'une ville via un appel API data.gouv

const [offerCoordinates, setOfferCoordinates] = useState({
latitude: null,
longitude: null,
});

useEffect(() => {
axios
.get(`https://api-adresse.data.gouv.fr/search/?q=${location}`)
.then(({ data }) => {
const location = data.features.find(
(element) => element.properties.type === "municipality"
);
const coordinates = location.geometry.coordinates;
const [lng, lat] = coordinates;
setOfferCoordinates({
latitude: lat,
longitude: lng,
});
});
}, [location]);
