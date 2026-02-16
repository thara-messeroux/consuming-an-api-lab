# Consuming an API Lab (OpenWeather)

## What this project is
A small Express server that will ask the user for a ZIP code and then fetch weather data from the OpenWeather API.

## Step log (learning notes)

### Step 1 — Project setup + dependencies
- Created a Node project (`package.json`)
- Installed dependencies: `express`, `ejs`, `dotenv`

### Step 2 — Environment variables (security)
- `.env` holds the real API key locally (never pushed)
- `.env.example` shows what variables are needed (safe to push)
- `.gitignore` prevents committing secrets and `node_modules`

### Step 3 — Server basics
- `server.js` starts an Express server
- The server listens on port 3000
- Visiting `http://localhost:3000` sends a response from the server

### Step 4 — EJS setup (template engine)
- `app.set("view engine", "ejs")` tells Express to use EJS templates
- Soon we will use `res.render()` to render `.ejs` files from the `views/` folder
