# Mini Message Board

## Table of Contents

- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage and Screenshots](#usage-and-screenshots)
- [Technologies Used](#technologies-used)
- [Dependencies and Credits](#dependencies-and-credits)
- [Project Structure](#project-structure)

## Description

This is a mini message board app built using Node.js, Express, and EJS.

## Installation Instructions

1. Clone or fork this repo
2. cd into the project root directory (where the README.md file is located)
3. Run the following in your terminal
    - ``` bash
      npm init -y
      npm install
      ```
    - ``` bash   
      CREATE DATABASE database_name;
      \c database_name
      \q
      code .env
      ```
1. <!-- node --> In the .env file 
   - ``` bash
     NODE_ENV=development
     TEST_DATABASE_URL="your_local_test_database_url"
     DATABASE_URL="your_local_database_url"
     SECRET_KEY="your_secret_key"
     ```
1. Set up the database per [these instructions](https://www.theodinproject.com/lessons/nodejs-using-postgresql)

## Usage and Screenshots

<img src="./public/screenshot.png" alt="screenshot" style="height: 50vh; width: auto;">

To view messge details click on a message. The "Home" button brings you back to the main page, and the "New Message" button lets you create a new message.

- [Link to live preview](https://mini-message-board-arav3n.onrender.com/)

### Features

- Stores messages in a database
- Lets anyone create new messages

## Technologies Used

### Frontend

- <a href="https://ejs.co/"><img src="https://img.icons8.com/?size=100&id=Pxe6MGswB8pX&format=png&color=000000" style="height: 2rem; width: auto; vertical-align: middle;"> EJS </a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style="height: 2rem; width: auto;"> JavaScript</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" style="height: 2rem; width: auto;"> HTML</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" style="height: 2rem; width: auto;"> CSS</a>

### Backend          
- <a href="https://nodejs.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" style="height: 2rem; width: auto;"> Node.js</a>
- <a href="https://expressjs.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" style="height: 2rem; width: auto;"> Express</a>
- <a href="https://www.postgresql.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" style="height: 2rem; width: auto;"/> PostgreSQL</a>

### Development Tools

- <a href="https://code.visualstudio.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" style="height: 24px; width: auto;"/> VS Code</a>
- <a href="https://www.npmjs.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" style="height: 24px; width: auto;"/> NPM</a>
- <a href="https://git-scm.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" style="height: 24px; width: auto;"/> Git</a>

### Hosting

- <a href="https://github.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" style="height: 24px; width: auto;"/> Github</a>
- <a href="https://neon.com/"><img src="https://neon.com/brand/neon-logomark-light-color.svg" style="height: 24px; width: auto;"/> Neon</a>
- <a href="https://render.com/"><img src="https://render.com/icon.svg" style="height: 24px; width: auto;"/> Render</a>


## Dependencies and Credits

### Package Dependencies

- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [pg](https://www.npmjs.com/package/pg)

### Other Credits

- [Devicion](https://devicon.dev/)
- [Skillicons](https://skillicons.dev/)


## Project Structure

```bash
├──controllers/            # Controller files
├──db/                     # JavaScript files to perform CRUD actions on the database
├──models/                 # Link files
├──public/                 # Locally hosted image files
├──routes/                 # Router files
└──views/                  # EJS files
```
