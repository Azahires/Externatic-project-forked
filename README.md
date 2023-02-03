## Concept

This template is the result of the third project managed during the Wild Code School developers training session, which took place during septembre 2022 and february 2023.

The aim of this project was to develop a full stack web application, following the React-Express-MySQL stack, as learned in Wild Code School. This project was developed by four students in partnership with an IT recruitment agency named Externatic.

The result is a jobboard which enable candidates to discover the offers published by Externatic and create a personnal account on the application. 

By using this account, candidates can update their personnal information and upload a CV and an avatar. By doing so, logged candidates can apply directly to the online offers. 

This last action triggers the sending of an email to the adviser in charge of the offer, who can contact the candidate if his/her profil matches with the entreprise's needs.


### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_
- Run command `npm run migrate` if you want to get acces to the pre-configured database.

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

## Team

This project was developed by:
- Nedim AMAJOUD - https://github.com/Soocom
- Florian BARTIER - https://github.com/FlorianBartier
- Romain HADDAD - https://github.com/Azahires
- Hervé SWIERGIEL - https://github.com/hswiergiel
