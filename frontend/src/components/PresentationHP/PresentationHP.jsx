import Style from "./style";

export default function PresentationHP() {
  return (
    <Style>
      <div className="presentationContainer">
        <p className="presentationText">
          <em>Externatic</em>, c’est avant tout une équipe d’experts IT qui,
          depuis 10 ans a développé un savoir-faire sur le recrutement
          informatique. Notre cabinet de recrutement s’appuie sur des méthodes
          authentiques, où l’humain est tout simplement indispensable.
        </p>

        <a href="/" className="presentationButton">
          En savoir plus
        </a>
      </div>
    </Style>
  );
}
