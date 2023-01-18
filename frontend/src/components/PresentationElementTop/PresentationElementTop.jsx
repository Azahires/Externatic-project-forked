import Style from "./style";
import Valuesimg from "../../assets/valuesimg.svg";
import Missionimg from "../../assets/missionimg.svg";
import Engagementsimg from "../../assets/engagementsimg.svg";

export default function PresentationElementTop() {
  return (
    <Style>
      <>
        <h1 className="titlePresentationElementTop">Qui sommes-nous ?</h1>
        <div className="presentationElementTopContainer">
          <div className="presentationElementTop1">
            <div className="imagebloc1">
              <img src={Valuesimg} alt="Nos valeurs" className="Valuesimg" />
            </div>
            <div className="textbloc1">
              <h2>Nos valeurs</h2>
              <p>
                Nous sommes avant tout une équipe d’experts IT, tous animés par
                la même passion des relations humaines. L’intelligence
                émotionnelle et l’éducation cognitive ne peuvent être remplacées
                par des algorithmes. Notre cabinet de recrutement s’appuie sur
                des méthodes authentiques, où l’humain est tout simplement
                indispensable. Depuis 10 ans, externatic a développé un
                savoir-faire sur le recrutement de profils pénuriques. Ces
                compétences nous permettent d’intervenir sur d’autres secteurs
                que l’IT. Notamment l’industrie avec <em>Induseo</em> et la
                cybersécurité avec <em>Underguard</em>.
              </p>
            </div>
          </div>
          <div className="presentationElementTop2">
            <div className="imagebloc2">
              <img
                src={Missionimg}
                alt="Notre mission"
                className="Missionimg"
              />
            </div>
            <div className="textbloc2">
              <h2>Notre mission</h2>
              <p>
                Notre mission de connecter les bonnes personnes, commence avec
                des rencontres. Notre professionnalisme nous permet de
                construire de vraies relations. Nous mettons en place des
                équipes qui représentent les valeurs des entreprises sur le
                long-terme. Notre vocation est de trouver les opportunités
                professionnelles répondant aux “spécifications” de recherche de
                nos candidats. Nous nous positionnons donc comme accompagnateur
                du projet professionnel voire “agents de talents”.
              </p>
            </div>
          </div>
          <div className="presentationElementTop3">
            <div className="imagebloc3">
              <img
                src={Engagementsimg}
                alt="Nos engagements"
                className="Engagementsimg"
              />
            </div>
            <div className="textbloc3">
              <h2 className="titlebloc3">Nos engagements</h2>
              <p>
                - Proposer des postes techniques uniquement auprès des startups,
                éditeurs, DSI, etc. (pas d'ESN).
                <br />
                <br />
                - Présenter des opportunités professionnelles à 360° (style de
                management, projet d'entreprise, retours d'expérience, etc.).
                <br />
                <br />
                - Ne communiquer les informations d'un candidat aux entreprises
                qu'avec son aval.
                <br />
                <br />
                - Cerner au mieux les attentes professionnelles et personnelles
                de nos candidats avant de parler de poste(s).
                <br />
                <br />
                - Faire un retour aux candidats aprés les étapes d'entretien et
                lui donner des clés pour optimiser ses chances de réussite.
                <br />
                <br />
                - Respecter les échéances communiquées aux candidats.
                <br />
                <br />
                - Conseiller le candidat (présentation, salaire, CV, etc.).
                <br />
                <br />
                - Ne proposer que des postes ouverts en CDI (à défaut en stage).
                <br />
                <br />
                - Respecter le principe de confidentialité vis-à-vis de son
                employeur actuel.
                <br />
                <br />
                - Refuser des missions de recrutement ne respectant pas le
                principe de non-discrimination.
                <br />
              </p>
            </div>
          </div>
        </div>
      </>
    </Style>
  );
}
