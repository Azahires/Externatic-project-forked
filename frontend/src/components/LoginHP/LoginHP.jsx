import Style from "./style";

export default function LoginHP() {
  return (
    <Style>
      <div className="loginhpContainer" id="scroll">
        <h1 className>Rejoignez-nous ! 🚀</h1>
        <p className="loginhpText">
          Accédez <em>rapidement</em> et <em>gratuitement</em> à notre réseau de
          plus de 300 entreprises et commencez à postuler dés maintenant ! Vous
          bénéficierez également d'un accompagnement personnalisé sans fin !
        </p>
        <a className="loginhpButton" href="/signin">
          <span>Créer mon compte</span>
        </a>
      </div>
    </Style>
  );
}
