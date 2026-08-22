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

## 5. Careers — open roles editor

The admin sidebar now has a third tab, **Careers**, for managing the open
roles shown on the public `/careers` page — add, edit, or delete roles, and
the live site updates immediately, no redeploy needed.

**One-time setup — seed it with today's existing roles:**

```bash
cd backend
npm run seed-jobs
```

Safe to re-run — it skips roles that already exist (matched by role + team)
instead of duplicating them.

**What the admin panel shows per role, and can edit:**
- Role title, category/team, location, employment type (all required)
- **Applicants** — a manually-editable number. There's no live "apply"
  submission flow wired up yet (the public page's Apply link currently just
  points wherever you set `applyUrl`, or nowhere if left blank), so this is
  a counter the admin updates by hand to track interest — editable inline
  directly in the table without opening the full edit form.
- **Posted date** — set automatically when a role is created; shown in the table.
- **Status** — Live / Hidden. Hiding a role keeps it in the admin list (and
  its applicant count) without deleting it or showing it publicly — useful
  for roles that are paused rather than closed for good.
- Optional description and an optional external apply link.

**How it works technically:**
- New model: `backend/src/models/Job.js`.
- Public read endpoint: `GET /api/jobs` — returns only `isActive: true`
  roles, no auth, used by the live site.
- Admin endpoints (JWT protected): `GET /api/admin/jobs` (all roles,
  including hidden), `POST /api/admin/jobs`, `PUT /api/admin/jobs/:id`,
  `DELETE /api/admin/jobs/:id`.
- Frontend: `src/hooks/use-jobs.ts` fetches `/api/jobs` and falls back to
  the original hardcoded list if the backend is unreachable. The category
  filter pills on `/careers` are now generated from whatever teams exist in
  the data, so a brand-new category you add in the admin panel (e.g.
  "Sales") automatically gets its own filter button — no code change needed.
- `src/routes/careers.tsx` was updated to call this hook instead of
  rendering the hardcoded `jobs` array. That's the only frontend file this
  feature touches.

## 6. Admin panel fix: logout button always visible

Previously the sidebar's height was tied to the tallest content on the page,
so on longer views (like Page Content) you had to scroll all the way down to
reach the Log out button. The sidebar is now pinned to the viewport
(`position: sticky` + `height: 100vh`) so Log out — and both nav tabs — stay
visible no matter how long the content next to it is. This was a CSS-only
change in `backend/admin-panel/css/style.css`.

## 7. Email — confirmation on contact form submission, and job applications

Two things now send an automatic confirmation email:
1. **Contact form** — when someone submits `/contact`, they get an email
   confirming their message was received and that someone will reply shortly.
2. **Job applications** (see section 8 below) — applicants get a similar
   confirmation for their specific role.

**Setup — add SMTP credentials to `backend/.env`:**

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=tejashwnijaiswal@gmail.com
SMTP_PASS=your_gmail_app_password_here
MAIL_FROM="Stralynn <tejashwnijaiswal@gmail.com>"
```

If using Gmail, `SMTP_PASS` must be an **App Password**, not the account's
normal login password — Google blocks plain-password SMTP login. Generate
one at https://myaccount.google.com/apppasswords (requires 2-Step
Verification to be turned on for the account first). Once you have a real
`admin@stralynn.com` mailbox, swap in its SMTP details (or its provider's
API-based SMTP relay) the same way — no code changes needed, just env vars.

If these variables are left blank, the backend logs a warning and silently
skips sending email — form submissions and applications still save
correctly either way, so this is safe to leave unconfigured during local
testing.

**How it works:** `backend/src/utils/mailer.js` wraps `nodemailer` with two
helpers, `sendContactConfirmation` and `sendApplicationConfirmation`. Both
are fire-and-forget — a slow or failed email never delays or breaks the
actual form/application submission, it's only logged to the server console.

## 8. Careers: job applications with resume upload

Clicking a role on `/careers` now opens a real application page instead of
doing nothing. Candidates enter name, email, phone, location, LinkedIn/
portfolio URL, an optional note, and upload a resume (PDF or Word, up to
5MB). On submit they get a confirmation email, and the application shows up
in the admin panel immediately.

**In the admin panel:** the Careers tab's **Applicants** column is now a
real, live count (`View (N)`) instead of a manually-typed number. Clicking
it opens every applicant for that role — contact details, note, LinkedIn
link, and a **Download Resume** button — plus a status dropdown per
applicant (New / Reviewed / Shortlisted / Rejected / Hired) so you can track
where each candidate is in the pipeline.

**How it works technically:**
- New model: `backend/src/models/Application.js` — resumes are stored
  directly in MongoDB as binary data (no filesystem writes), which keeps
  this working correctly on hosts with ephemeral/read-only filesystems
  (Render, Railway, etc.) without needing S3 or similar for day one.
- Public endpoint: `POST /api/jobs/:jobId/apply` (multipart/form-data,
  handled by `multer`, memory storage, 5MB limit, PDF/Word only) — rate
  limited to 8 submissions per 15 minutes per IP.
- Admin endpoints (JWT protected): `GET /api/admin/jobs/:jobId/applications`
  (list, resume binary excluded for speed), `PATCH
  /api/admin/applications/:id/status`, `GET
  /api/admin/applications/:id/resume` (streams the file for download).
- `backend/src/controllers/jobs.controller.js` — `listJobsAdmin` now
  computes each job's real applicant count via an aggregation over the
  `Application` collection instead of trusting a manually-typed number.
- Frontend: new route `src/routes/careers.apply.$jobId.tsx` — the
  application form and confirmation screen. `src/routes/careers.tsx` was
  updated so each role links to `/careers/apply/<id>` instead of a dead
  `href="#"`. `src/hooks/use-jobs.ts` gained an `applicantsCount` field.
- If a role is later deleted from the admin panel, its past applications
  are kept (not cascade-deleted) for record-keeping — they're denormalized
  with the role title/team at time of application so they stay meaningful.

## 9. Security notes

- Admin panel and API are protected by JWT (7-day expiry by default).
- Passwords are hashed with bcrypt; there is no default/seeded password —
  you set `ADMIN_PASSWORD` yourself before running `create-admin`.
- The `/admin` path is not linked from the public site and is marked
  `noindex, nofollow`, but it is not secret — access control is the JWT login,
  not obscurity. Consider adding IP allowlisting at the host level for extra
  safety.
- Rate limiting is applied to both the contact form and the login endpoint.
- Rotate `JWT_SECRET` and admin password if you ever suspect they leaked.
