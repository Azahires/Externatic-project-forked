## Concept

Ce template est le résultat du troisième projet qui a été développé durant une session de formation Développeurs web de la Wild Code School, qui a eu lieu de septembre 2022 à février 2023.

Le but de ce projet était de développer une application full stack, en suivant la stack React-Node-MySQL telle qu'enseignée à la Wild Code School. Ce projet a été développé par quatre étudiants, en partenariat avec un cabinet de recrutement spécialisé dans l'IT, Externatic.

Le résultat du projet est un jobboard qui permet aux candidats de découvrir les offres publiées par Externatic et de créer un compte personnel sur l'application.

En utilisant ce compte, les candidats peuvent mettre à jour leurs informations personnelles et télécharger un CV ainsi qu'un avatar. Ce faisant, les candidats connectés peuvent directement postuler aux offres en ligne.

Cette dernière action déclenche l'envoi d'un email au consultant en charge de l'annonce, qui peut ensuite contacter le candidat si son profil correspond aux besoins de l'entreprise. 

### Pour commencer un projet

- Sur VSCode, installer les plugins **Prettier - Code formatter** et **ESLint** et les configurer
- Cloner ce dépôt, se rendre à l'intérieur
- Lancer la commande `npm run setup`
- _NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans `backend/.env.sample`_
- Lancer la commande ` npm run migrate` si vous souhaitez accéder à la base de données pré configurée

### Liste des commandes et signification

- `setup` : Initialisation du frontend et du backend ainsi que des outils
- `migrate` : Lance le script de migration de la base de données
- `dev` : Démarrage des deux serveurs (frontend + backend) dans un même terminal
- `dev-front` : Démarrage d'un serveur React pour le frontend
- `dev-back` : Démarrage d'un serveur Express pour le backend
- `lint` : Exécute des outils de validation de code (sera exécutée automatiquement à chaque _commit_)
- `fix` : Fixe les erreurs de formatage (à lancer si `lint` ne passe pas)


### Listing des outils utilisés

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

## Team

Cette application a été développée par:
- Nedim AMAJOUD - https://github.com/Soocom
- Florian BARTIER - https://github.com/FlorianBartier
- Romain HADDAD - https://github.com/Azahires
- Hervé SWIERGIEL - https://github.com/hswiergiel
