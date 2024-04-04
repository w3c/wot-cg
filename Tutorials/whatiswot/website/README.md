# What is WoT Tutorial Website

## How to build

- Install dependencies `npm install`
- Set your environment variable for the base URL by creating a file called `.env` with the contents of `baseurl="/"`. This environment variable is set differently by GitHub actions and Netlify.
- Run `npm run start` during development to create a live version of the website
- Run `npm run build` to create the static files to be used in production environments
