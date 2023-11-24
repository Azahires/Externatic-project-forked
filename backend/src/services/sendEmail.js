const transporter = require("./mailer");

const sendApplicationMail = (req, res) => {
  const { userInfo, consultant, offer } = req.body;
  const searchType = userInfo.activeSearch ? "active" : "passive";
  const [CVExtension] = userInfo.CV.split(".").slice(-1);
  transporter.sendMail(
    {
      from: "externatic59@gmail.com",
      to: "romain.haddad@gmail.com",
      subject: `Nouvelle candidature sur l'offre ${offer.title}`,
      text: `Bonjour ${consultant.firstname} ${consultant.name}, une nouvelle candidature a été envoyée pour l'offre ${offer.title} publiée le ${offer.publication_date}, localisée à ${offer.location}. Vous trouverez ci-dessous les informations concernant le candidat et son CV en pièce jointe. Si son profil correspond au besoin de l'entreprise, nous vous invitons à prendre contact avec le candidat pour poursuivre le process de candidature.
      Nom: ${userInfo.lastname}
      Prénom: ${userInfo.firstname}
      Mail: ${userInfo.email}
      Tél: ${userInfo.phonenumber}
      Ville: ${userInfo.postalcode} - ${userInfo.city}
      Lien LinkedIn: ${userInfo.linkedinlink}
      Lien Github: ${userInfo.githublink}
      Statut: En recherche ${searchType}
      Biographie: ${userInfo.biography}
      Bonne journée.
      Ceci est un message automatique généré par la plateforme de recrutement Externatic, merci de ne pas répondre.
      `,

      html: `<!DOCTYPE html>
      <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>  
            p {
              margin: 1.2rem 0;
              font-size: 1rem;
            }
            a {
              text-decoration: none;
            }
            a:hover{
                text-decoration: underline;
            }
            .candidateinfo {
              margin: 0.5rem;
              padding: 0 1rem;
              border: 1px dotted #c91961;
              border-bottom: 1px dotted #c91961;
            }
            li {
              margin: 0.8rem 0;
              list-style-type : none;           
            }
            strong {
              font-weight: bold;
              color: #c91961;
            }
            .sociallogo {
              width: 3rem;
            }
            .emaillink {
              color: black;
            }
            .signature {
              margin-top: 2rem;
              display: flex;
              align-items: center;
              width: 60%;
            }
            .signature ul {
              margin-left: 0.6rem;
              margin-top:0;
            }
            .signature img {
              height: 2.5rem;
              border: 2px solid #c91961;
              padding: 0.8rem;
            }
            .sender {
              font-weight: bold;
              color: #c91961;
              margin: 0.2rem 0;
            }
            .senderInfo {
              margin: 0.2rem 0;
              font-style: italic;
              font-size: 0.9rem;
            }</style>
            </head>
            <body>
            <div>
            <p>
              Bonjour ${consultant.firstname} ${consultant.name},
            </p>
            <p>
              Une nouvelle candidature a été envoyée pour l'offre
              <strong>${offer.title}</strong> publiée le
              <strong>${offer.publication_date}</strong> et localisée à
              <strong>${offer.location}</strong>.
            </p>
            <p>
              Vous trouverez ci-dessous les informations concernant le candidat et
              son CV en pièce jointe.
            </p>
            <ul class="candidateinfo">
              <li>
                <strong>Nom: </strong>
                ${userInfo.lastname}
              </li>
              <li>
                <strong>Prénom:</strong> ${userInfo.firstname}
              </li>
              <li>
                <strong>Mail:</strong>
                <a class="emaillink" href="mailto:${userInfo.email}">
                  ${userInfo.email}
                </a>
              </li>
              <li>
                <strong>Tél:</strong> ${userInfo.phonenumber}
              </li>
              <li>
                <strong>Ville:</strong> ${userInfo.postalcode} - ${userInfo.city}
              </li>
      
              <li>
                <strong>Statut:</strong> En recherche ${searchType}
              </li>
              <li>
                <strong>Biographie:</strong> ${userInfo.biography}
              </li>
              <li>
                <a href=${userInfo.linkedinlink} target="_blank" rel="noreferrer">
                  <img
                    class="sociallogo"
                    src="cid:logolinkedin@nodemailer.com"
                    alt="logo linkedin"
                  />
                </a>
                <a href=${userInfo.githublink} target="_blank" rel="noreferrer">
                  <img class="sociallogo" src="cid:logogithub@nodemailer.com" alt="logo github" />
                </a>
              </li>
            </ul>
            <p>
              Si ce profil correspond au besoin de l'entreprise, nous vous invitons
              à prendre contact avec le candidat pour poursuivre le process de
              candidature.
            </p>
            <p>Bonne journée. </p>
            <div class="signature">
              <img
                class="logoexternatic"
                src="cid:logoexternatic@nodemailer.com"
                alt="logo externatic"
              >
              <ul>
                <li class="sender">Plateforme de recrutement Externatic</li>
                <li class="senderInfo">Message généré automatiquement</li>
                <li class="senderInfo">Merci de ne pas y répondre</li>
              </ul>
            </div>
          </div>
          </body>
          </html>
      `,
      attachments: [
        {
          filename: "externatic.jpg",
          path: `http://localhost:${process.env.APP_PORT}/assets/images/externatic.jpg`,
          cid: "logoexternatic@nodemailer.com", // same cid value as in the html img src
        },
        {
          filename: "github.jpg",
          path: `http://localhost:${process.env.APP_PORT}/assets/images/github.jpg`,
          cid: "logogithub@nodemailer.com", // same cid value as in the html img src
        },
        {
          filename: "logo-linkedin-pink.jpg",
          path: `http://localhost:${process.env.APP_PORT}/assets/images/logo-linkedin-pink.jpg`,
          cid: "logolinkedin@nodemailer.com", // same cid value as in the html img src
        },
        {
          filename: `${userInfo.firstname} ${userInfo.lastname} - CV`,
          path: `http://localhost:${process.env.APP_PORT}/assets/connecteduserfiles/userCV.${CVExtension}`, // stream this file
        },
      ],
    },
    (err) => {
      if (err) console.error(err);
      else {
        res.sendStatus(200);
      }
    }
  );
};

const sendFavoriteMail = (req, res) => {
  const { userInfo, consultant, offer } = req.body;
  const searchType = userInfo.activeSearch ? "active" : "passive";
  transporter.sendMail(
    {
      from: "externatic59@gmail.com",
      to: "romain.haddad@gmail.com",
      subject: `Ajout favoris - ${offer.title}`,
      text: `Bonjour ${consultant.firstname} ${consultant.name}, un utilisateur de la plateforme de recrutement Externatic a ajouté l'offre ${offer.title} publiée le ${offer.publication_date} et localisée à ${offer.location} à ses favoris. Vous trouverez ci-dessous les informations concernant le candidat.
      Nom: ${userInfo.lastname}
      Prénom: ${userInfo.firstname}
      Mail: ${userInfo.email}
      Tél: ${userInfo.phonenumber}
      Ville: ${userInfo.postalcode} - ${userInfo.city}
      Lien LinkedIn: ${userInfo.linkedinlink}
      Lien Github: ${userInfo.githublink}
      Statut: En recherche ${searchType}
      Biographie: ${userInfo.biography}
      Bonne journée.
      Ceci est un message automatique généré par la plateforme de recrutement Externatic, merci de ne pas répondre.
      `,

      html: `<!DOCTYPE html>
      <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>  
            p {
              margin: 1.2rem 0;
              font-size: 1rem;
            }
            a {
              text-decoration: none;
            }
            a:hover{
                text-decoration: underline;
            }
            .candidateinfo {
              margin: 0.5rem;
              padding: 0 1rem;
              border: 1px dotted #c91961;
              border-bottom: 1px dotted #c91961;
            }
            li {
              margin: 0.8rem 0;
              list-style-type : none;           
            }
            strong {
              font-weight: bold;
              color: #c91961;
            }
            .sociallogo {
              width: 3rem;
            }
            .emaillink {
              color: black;
            }
            .signature {
              margin-top: 2rem;
              display: flex;
              align-items: center;
              width: 60%;
            }
            .signature ul {
              margin-left: 0.6rem;
              margin-top:0;
            }
            .signature img {
              height: 2.5rem;
              border: 2px solid #c91961;
              padding: 0.8rem;
            }
            .sender {
              font-weight: bold;
              color: #c91961;
              margin: 0.2rem 0;
            }
            .senderInfo {
              margin: 0.2rem 0;
              font-style: italic;
              font-size: 0.9rem;
            }</style>
            </head>
            <body>
            <div>
            <p>
              Bonjour ${consultant.firstname} ${consultant.name},
            </p>
            <p>
            Un utilisateur de la plateforme de recrutement Externatic a ajouté l'offre
              <strong>${offer.title}</strong> publiée le
              <strong>${offer.publication_date}</strong> et localisée à
              <strong>${offer.location}</strong> à ses favoris.
            </p>
            <p>
              Vous trouverez ci-dessous les informations concernant le candidat.
            </p>
            <ul class="candidateinfo">
              <li>
                <strong>Nom: </strong>
                ${userInfo.lastname}
              </li>
              <li>
                <strong>Prénom:</strong> ${userInfo.firstname}
              </li>
              <li>
                <strong>Mail:</strong>
                <a class="emaillink" href="mailto:${userInfo.email}">
                  ${userInfo.email}
                </a>
              </li>
              <li>
                <strong>Tél:</strong> ${userInfo.phonenumber}
              </li>
              <li>
                <strong>Ville:</strong> ${userInfo.postalcode} - ${userInfo.city}
              </li>
      
              <li>
                <strong>Statut:</strong> En recherche ${searchType}
              </li>
              <li>
                <strong>Biographie:</strong> ${userInfo.biography}
              </li>
              <li>
                <a href=${userInfo.linkedinlink} target="_blank" rel="noreferrer">
                  <img
                    class="sociallogo"
                    src="cid:logolinkedin@nodemailer.com"
                    alt="logo linkedin"
                  />
                </a>
                <a href=${userInfo.githublink} target="_blank" rel="noreferrer">
                  <img class="sociallogo" src="cid:logogithub@nodemailer.com" alt="logo github" />
                </a>
              </li>
            </ul>
            <p>Bonne journée. </p>
            <div class="signature">
              <img
                class="logoexternatic"
                src="cid:logoexternatic@nodemailer.com"
                alt="logo externatic"
              >
              <ul>
                <li class="sender">Plateforme de recrutement Externatic</li>
                <li class="senderInfo">Message généré automatiquement</li>
                <li class="senderInfo">Merci de ne pas y répondre</li>
              </ul>
            </div>
          </div>
          </body>
          </html>
      `,
      attachments: [
        {
          filename: "externatic.jpg",
          path: `http://localhost:${process.env.APP_PORT}/assets/images/externatic.jpg`,
          cid: "logoexternatic@nodemailer.com", // same cid value as in the html img src
        },
        {
          filename: "github.jpg",
          path: `http://localhost:${process.env.APP_PORT}/assets/images/github.jpg`,
          cid: "logogithub@nodemailer.com", // same cid value as in the html img src
        },
        {
          filename: "logo-linkedin-pink.jpg",
          path: `http://localhost:${process.env.APP_PORT}/assets/images/logo-linkedin-pink.jpg`,
          cid: "logolinkedin@nodemailer.com", // same cid value as in the html img src
        },
      ],
    },
    (err) => {
      if (err) console.error(err);
      else {
        res.sendStatus(200);
      }
    }
  );
};
module.exports = { sendApplicationMail, sendFavoriteMail };
