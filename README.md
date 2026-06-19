# SelfOWN Portfolio — Backend

> REST API powering the SelfOWN personal portfolio website. Built with Node.js, Express, and MySQL — deployed on Railway.

---

## Live API

**Base URL:** `https://amused-harmony-production-dfe6.up.railway.app`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check — returns `"Backend Running"` |
| GET | `/api/blogs` | Returns all blog posts from the database |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express 5 |
| Database | MySQL (via mysql2) |
| ORM/Query | Raw SQL |
| Dev Tool | Nodemon |
| Deployment | Railway |

---

## Project Structure

```
Backend/
├── server.js       # Express app, middleware, routes
├── db.js           # MySQL connection setup
├── .env            # Environment variables (not committed)
├── package.json
└── package-lock.json
```

---

## Getting Started Locally

### Prerequisites

- Node.js 20+
- MySQL database (local or Railway)

### Installation

```bash
# Clone the repo
git clone https://github.com/SamiyaFazal/Selfown-Portfolio.git
cd Selfown-Portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
PORT=5000
```

### Run the Server

```bash
# Development (auto-restarts on file change)
npm run dev

# Production
npm start
```

Server will start at `http://localhost:5000`

---

## Database Schema

```sql
CREATE TABLE Blog (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(255)  NOT NULL,
  image       VARCHAR(500),
  authorName  VARCHAR(100),
  authorImage VARCHAR(500),
  publishDate DATE
);
```

---

## Deployment (Railway)

1. Push this repo to GitHub
2. Create a new project on [Railway](https://railway.app)
3. Connect your GitHub repository
4. Add a MySQL plugin inside Railway
5. Set the following environment variable in Railway → Variables:

```
DATABASE_URL=your_railway_mysql_connection_string
```

Railway automatically sets `PORT` — no need to add it manually.

---

## Frontend

The frontend (React + Vite) lives in the main project repository and fetches data from this API.

> Frontend repo: [SelfOWN Portfolio Frontend](https://github.com/SamiyaFazal/Selfown-Portfolio)

---

## Author

**Samiya Fazal**
- GitHub: [@SamiyaFazal](https://github.com/SamiyaFazal)

---

> Built with focus, consistency, and a love for clean code.
