# Stralynn Backend (Contact Form + Admin Panel)

Standalone Node.js/Express + MongoDB backend. Lives in `/backend`, completely
separate from the Lovable-managed frontend in `/src`. Nothing in this folder
touches the frontend build.

## What's included

- `POST /api/contact` — public endpoint the website's contact form submits to.
  Rate-limited (5 requests / 15 min / IP) and validated.
- `POST /api/admin/login` — admin login, returns a JWT.
- `GET /api/admin/submissions` — paginated, searchable, filterable list (JWT protected).
- `PATCH /api/admin/submissions/:id/status` — update status (new / in_progress / resolved).
- `DELETE /api/admin/submissions/:id` — delete a submission.
- `GET /api/admin/submissions/export/excel` — downloads all submissions as `.xlsx`.
- `/admin` — a plain HTML/CSS/JS admin panel (no build step) served directly
  by this same Express app: login screen + table view with search, status
  filter, pagination, and an "Download Excel" button.

## 1. Local setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:

- `MONGO_URI` — your MongoDB Atlas connection string (create a free cluster at
  mongodb.com/atlas if you don't have one; add your IP or `0.0.0.0/0` to the
  Network Access list, and create a database user).
- `JWT_SECRET` — any long random string (e.g. `openssl rand -hex 32`).
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — credentials for your first admin user.
- `CORS_ORIGINS` — comma-separated list of frontend URLs allowed to call the
  API (your local dev URL + your production domain).

Create the first admin user (run once, or again later to reset the password):

```bash
npm run create-admin
```

Start the backend:

```bash
npm run dev      # with nodemon, auto-restarts on changes
# or
npm start
```

The API is now at `http://localhost:5000` and the admin panel at
`http://localhost:5000/admin`.

## 2. Connect the frontend to it (local dev)

In the **repo root** (not inside `/backend`), copy the example env file:

```bash
cp .env.example .env
```

It already points `VITE_API_BASE_URL` at `http://localhost:5000`. Run the
frontend as usual (`npm run dev` from the repo root) and submit the contact
form — the submission will land in MongoDB and appear in `/admin`.

## 3. Deploying to production

The backend is deployed **separately** from the Lovable frontend. Pick any
Node host — Render, Railway, Fly.io, an EC2/VPS, etc. Render's free/low-cost
web service tier is the fastest path:

1. Push this repo to GitHub (the `backend` folder is already inside it).
2. On Render: New → Web Service → connect the repo.
   - **Root directory:** `backend`
   - **Build command:** `npm install`
   - **Start command:** `npm start`
3. Add the same environment variables from `.env` (MONGO_URI, JWT_SECRET,
   ADMIN_EMAIL, ADMIN_PASSWORD, CORS_ORIGINS, PORT is provided by Render).
4. After the first deploy, run `npm run create-admin` once — either via
   Render's shell tab, or temporarily via `render.yaml`/a one-off job, or by
   running it locally against the production `MONGO_URI`.
5. Set `CORS_ORIGINS` to your real frontend domain(s), e.g.
   `https://stralynn.com,https://www.stralynn.com`.
6. Note the deployed backend URL, e.g. `https://stralynn-backend.onrender.com`.

Then, in whatever platform hosts/builds the Lovable frontend (Lovable itself,
Vercel, Netlify, etc.), set the environment variable:

```
VITE_API_BASE_URL=https://stralynn-backend.onrender.com
```

Redeploy the frontend. The contact form will now POST to the live backend,
and submissions will show up at `https://stralynn-backend.onrender.com/admin`.

## 4. Page Content (Insights / Case Studies) editor

The admin panel now has a second sidebar tab, **Page Content**, alongside
**Contact Submissions**. It lets you pick any of the six pages (Home,
Healthcare, Financial Services, Private Equity, Public Sector, Technology)
and add, edit, delete, and reorder the Insights / Case Study cards shown on
that page — changes go live on the actual site immediately after you click
Save, no redeploy needed.

**One-time setup — seed it with today's existing copy:**

```bash
cd backend
npm run seed-content
```

This copies the case-study/insight text that's currently hardcoded in the
frontend into MongoDB, so the admin panel and the live site start populated
instead of empty. Safe to run more than once (it overwrites, doesn't
duplicate).

**How it works technically:**
- New model: `backend/src/models/PageContent.js` — one document per
  `(pageKey, sectionKey)` pair, holding an array of `{ tag, icon, title, description }` items.
- Public read endpoint: `GET /api/content/:pageKey` — no auth, used by the live site.
- Admin endpoints (JWT protected): `GET /api/admin/content/pages` (list of
  editable pages), `GET /api/admin/content/:pageKey` (current items),
  `PUT /api/admin/content/:pageKey` (replace items array).
- Frontend: `src/hooks/use-page-content.ts` fetches from
  `/api/content/:pageKey` and falls back to the original hardcoded array if
  the backend is unreachable or nothing's been saved yet — so the site never
  shows a broken or empty section, even before you've touched the admin panel.
- Every page component (`src/routes/index.tsx`,
  `src/routes/industries.*.tsx`) was updated to call this hook instead of
  rendering a hardcoded array directly. That's the only frontend change this
  feature required beyond the earlier contact-form wiring.

**Adding a new editable page later:** add an entry to `PAGE_REGISTRY` in
`backend/src/controllers/content.controller.js` (pageKey, label, sectionKey,
sectionLabel) and add `"your-page-key"` to `PAGE_KEYS` in
`backend/src/models/PageContent.js`. It'll show up in the admin sidebar's
page picker automatically — no other backend changes needed.

## 5. Security notes

- Admin panel and API are protected by JWT (7-day expiry by default).
- Passwords are hashed with bcrypt; there is no default/seeded password —
  you set `ADMIN_PASSWORD` yourself before running `create-admin`.
- The `/admin` path is not linked from the public site and is marked
  `noindex, nofollow`, but it is not secret — access control is the JWT login,
  not obscurity. Consider adding IP allowlisting at the host level for extra
  safety.
- Rate limiting is applied to both the contact form and the login endpoint.
- Rotate `JWT_SECRET` and admin password if you ever suspect they leaked.
