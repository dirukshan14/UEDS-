# UEDS Website — Next.js + PostgreSQL

A full-stack rebuild of the Upcountry Education Development Society website: multilingual
(English / Tamil / Sinhala) public site backed by a PostgreSQL database, plus an admin panel
for managing everything without touching code.

## What's included

- **Frontend + backend**: Next.js 14 (App Router), TypeScript, Tailwind CSS (using the original
  design's colours and fonts).
- **Database**: PostgreSQL via Prisma ORM.
- **Languages**: English, Tamil, Sinhala, with a language switcher in the header. Powered by `next-intl`.
- **Public pages**: Home, About Us (Board & Committee members), Projects Done, Projects Needed
  (with funding progress bars), News & Media, Gallery — each list page links to a detail page
  with the full description and extra photos.
- **Donate**: clicking "Donate" opens a modal showing the bank account details stored in Settings.
- **Contact Us**: office details, bank details, embedded map, and a contact form. Submissions are
  saved to the database and emailed to the office address via SMTP.
- **Admin panel** (`/admin`): login, dashboard, and full CRUD for Board/Committee members, all
  four content collections (with main image + extra photo uploads, and English/Tamil/Sinhala
  fields), site settings (bank & office details, map embed), and a view of contact messages.

## Prerequisites

- Node.js 18.18+ (Node 20 LTS recommended)
- npm 9+
- PostgreSQL 14+ (a `docker-compose.yml` is included if you don't have Postgres installed)
- An SMTP account to send contact-form emails (Gmail, Zoho, SendGrid, etc.) — optional for local
  testing; the form still saves messages to the database even if email sending isn't configured.

## 1. Install dependencies

```bash
npm install
```

## 2. Start PostgreSQL

If you already have PostgreSQL running locally, create a database and update `DATABASE_URL` in
the next step. Otherwise, use the included Docker Compose file:

```bash
docker compose up -d
```

This starts Postgres on `localhost:5432` with:
- user: `ueds_user`
- password: `ueds_password`
- database: `ueds_db`

## 3. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in:

- `DATABASE_URL` — already correct if you used the Docker Compose setup above.
- `NEXTAUTH_SECRET` — generate one with `openssl rand -base64 32`.
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the admin login created by the seed script.
- `SMTP_*`, `MAIL_FROM`, `OFFICE_EMAIL` — your email provider's SMTP settings and the office
  address that should receive contact-form messages.

## 4. Set up the database schema and seed data

```bash
npx prisma migrate dev --name init
npm run seed
```

This creates all tables and seeds:
- One admin user (from `ADMIN_EMAIL` / `ADMIN_PASSWORD`)
- Default site settings (bank details, office address — all editable later in the admin panel)
- A few sample Board/Committee members and sample content items so the site isn't empty

## 5. Run the app

```bash
npm run dev
```

- Public site: http://localhost:3000 (redirects to http://localhost:3000/en)
- Admin panel: http://localhost:3000/admin/login

Log in with the `ADMIN_EMAIL` / `ADMIN_PASSWORD` you set in `.env`.

## Everyday admin tasks

- **Board & Committee members**: Admin → Board & Committee → Add board/committee member. Upload
  a photo and fill in name/designation in English, Tamil and Sinhala.
- **Projects Done / Projects Needed / News & Media / Gallery**: each has its own section under
  Admin → [section name]. "Add new" lets you upload a main image, add extra photos, and enter
  the title/summary/description in all three languages. "Projects Needed" also has target/raised
  amount fields that drive the funding progress bar on the public site.
- **Site Settings**: office address, phone, email, bank account details, and the Google Maps
  embed URL used on the Contact page and the Donate modal.
- **Contact Messages**: every contact-form submission is stored here as a backup, in addition to
  being emailed to your office address.

### Getting a Google Maps embed URL

Go to Google Maps → search your office location → Share → Embed a map → copy the `src="..."` URL
from the provided `<iframe>` and paste just that URL into the "Google Maps embed URL" field in
Site Settings.

## Project structure

```
prisma/schema.prisma        Database schema
prisma/seed.ts               Seed script
src/i18n/                    Locale list + next-intl config
src/messages/{en,ta,si}.json UI translation strings
src/middleware.ts             Locale routing
src/app/[locale]/             Public pages (home, about, projects, news, gallery, contact)
src/app/admin/                Admin panel (protected by NextAuth)
src/app/api/contact/          Contact form submission endpoint
src/app/api/auth/             NextAuth endpoint
src/app/api/upload/           Generic image upload endpoint
src/lib/                      Prisma client, auth config, mailer, upload helper
src/lib/actions/              Server Actions used by the admin panel forms
src/components/               Shared UI components
public/uploads/                Uploaded images are stored here
```

## Production notes

- Uploaded images are stored on local disk under `public/uploads`. For a production deployment
  on a platform with an ephemeral filesystem (e.g. Vercel), swap `src/lib/upload.ts` for a cloud
  storage provider (S3, Cloudinary, etc.) — the rest of the app only depends on getting back a URL.
- Set `NEXTAUTH_URL` to your real domain, and use a strong, unique `NEXTAUTH_SECRET`.
- Change the seeded admin password immediately (there's currently no in-app "change password" UI —
  update it directly in the database with a new bcrypt hash, or extend the admin panel).
- Run `npx prisma migrate deploy` (instead of `migrate dev`) when deploying to production.
