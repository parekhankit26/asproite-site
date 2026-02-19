# Asproite Cloud and Consultancy Ltd - Dynamic Website

A fully dynamic, responsive business website with:

- Multi-page frontend: Home, About, Services (with dropdown), Portfolio, Contact
- Dynamic menu and content sections from database
- Lead capture form + AI lead assistant chat
- Dynamic backend APIs for settings, services, menu, portfolio, and leads
- Admin dashboard (`/admin`) to manage key content and view leads

## Tech Stack

- Next.js (App Router)
- Prisma ORM
- SQLite (easy local setup; switch to PostgreSQL for production)
- Tailwind CSS

## Setup

```bash
npm install
copy .env.example .env
npx prisma migrate dev
npm run seed
npm run dev
```

Open:
- Website: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`

## API Endpoints

- `GET /api/content`
- `GET/POST /api/menu`
- `GET/POST /api/services`
- `GET/POST /api/portfolio`
- `GET/PUT /api/settings`
- `GET/POST /api/leads`
- `POST /api/chat`

## Production Note

For production deployment, use PostgreSQL and set `DATABASE_URL` accordingly.
