# 🌤 Consuming an API Lab — Weather App

## 🧠 What This Project Is

We are building a small Express server that:

1. Shows a web page
2. Lets the user enter a ZIP code
3. Calls the OpenWeather API
4. Displays real weather data

This project teaches how:
- The browser talks to a server
- A server talks to an API
- Data flows from API → server → webpage

---

# 🪜 Step-by-Step Learning Log

---

## Step 1 — Project Setup

### What We Did
- Created a Node project (`npm init`)
- Installed dependencies:
  - express
  - ejs
  - dotenv

### Why We Did It

Node needs a `package.json` file to:
- Track dependencies
- Define project identity

Think of `package.json` like:
> 📦 The project’s ID card.

Installing dependencies means:
> “Give my project tools.”

Example:
- express = builds the server
- ejs = creates dynamic HTML
- dotenv = safely loads secrets

---

## Step 2 — Environment Variables (Security)

### What We Did
- Created `.env`
- Created `.env.example`
- Added `.env` to `.gitignore`

### Why We Did It

API keys are like passwords 🔑

We never:
- Put them in code
- Push them to GitHub
- Share them publicly

`.env`
= holds the real secret key (private)

`.env.example`
= shows what variable is required (safe template)

Example:

.env:


---

## Step 3 — Basic Express Server

### What We Did
- Created `server.js`
- Started an Express server
- Made it listen on port 3000
- Sent a test response

### Why We Did It

When you visit:


Your browser:
- Sends a request
- The server responds

It is NOT reading a file.

It is a conversation:

Browser → Server → Browser

If the server is off, the page fails.

---

## Step 4 — Setting Up EJS (Template Engine)

### What We Did
- Set `view engine` to EJS
- Created a `views/` folder
- Created `views/index.ejs`
- Replaced `res.send()` with `res.render()`

### Why We Did It

`res.send()` sends plain text.

`res.render("index")`:
- Takes `index.ejs`
- Turns it into HTML
- Sends it to the browser

EJS lets us:
- Inject real data into HTML
- Create dynamic pages

Example:

Instead of hardcoding:


