openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
openssl rsa -in keytmp.pem -out key.pem
"start": "export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start",




/// Eslint prettier

npm install eslint --save-dev
npx eslint --init
npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
"lint": "eslint .",
"lint:fix": "eslint --fix",
"format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"


### Deploying

- NgRok
    Download
    Add auth `ngrok authtoken <token>`
    `ngrok http 3000`

- Github pages
    `npm i -D gh-pages`
    "homepage": "https://rachit1994.github.io/devsnest-social",
    "scripts": {
        ....,
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }

- Heroku
    