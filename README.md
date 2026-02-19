# Asproite Cloud and Consultancy Ltd - Dynamic Website

A modern, responsive, dynamic business website with:

- Premium hero + services + testimonials sections
- Lead capture form
- AI lead assistant chat widget
- Dynamic backend with Prisma + SQLite
- Admin leads dashboard (`/admin`)

## 1) Install

```bash
npm install
```

## 2) Configure env

```bash
cp .env.example .env
```

(Optional) Add `OPENAI_API_KEY` for live AI responses.

## 3) Prepare database

```bash
npx prisma migrate dev --name init
npm run seed
```

## 4) Start

```bash
npm run dev
```

Open:
- Website: `http://localhost:3000`
- Leads dashboard: `http://localhost:3000/admin`

## API

- `POST /api/leads` - submit lead
- `GET /api/leads` - list leads
- `POST /api/chat` - AI assistant chat
