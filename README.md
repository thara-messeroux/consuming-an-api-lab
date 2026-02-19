## Step 1 — Setup

What we did:
- Created Node project
- Installed express, ejs, dotenv

Why:
A Node app needs a structure and tools before it can run.

Principles:
- Separation of concerns (server logic separate from HTML)
- Dependency management (track tools in package.json)
- Reproducibility (anyone can run npm install)

---

## Step 2 — Security

What we did:
- Created .env (real key, private)
- Created .env.example (template)
- Added .env to .gitignore

Why:
API keys are secrets. Secrets must never be committed to Git.

Principles:
- Security by default
- Least exposure
- Environment-based configuration (no hardcoded secrets)

---

## Step 3 — Server

What we did:
- Created Express server
- Server listens on port 3000

Why:
The browser needs a server to respond to requests.

Principles:
- Client-server architecture
- Single responsibility (server handles requests)
- Explicit entry point (server.js)

---

## Step 4 — EJS

What we did:
- Set view engine to EJS
- Created views folder
- Rendered index.ejs

Why:
We need dynamic pages that can display real data.

Principles:
- Template rendering
- Separation of logic and presentation
- MVC thinking (server controls data, view displays it)

---

## Step 5 — Form + API Call

What we did:
- Added ZIP code form
- Created /forecast POST route
- Called OpenWeather API using axios

Why:
The app needs user input and real external data.

Principles:
- RESTful routing
- Async programming (async/await)
- External service integration
- Backend as middle layer
- Data flow control (Browser → Server → API → Server → Browser)
