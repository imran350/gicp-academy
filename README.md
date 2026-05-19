# GICP Academy — Professional Diploma Programs

## Project Overview
Full-stack React SPA for a clinical psychology academy offering CPD-accredited diploma programs. Features include online enrollment, 30-minute auto-submit exams, expert trainer profiles, and Supabase-backed application tracking.

## Tech Stack
- **Frontend:** React + Vite + Tailwind CSS v3 (PostCSS integration)
- **Routing:** React Router v6 (6 pages)
- **Icons:** Lucide React
- **Backend:** Supabase (null-safe client)
- **Dev Server:** `npx vite --host` (port 5173 by default)
- **Deployment:** Vercel (connected to GitHub repo)

## Brand Theme
- Primary BG: Navy `#0d1b2a`
- Accent 1: Teal `#1a7a6e`
- Accent 2: Gold `#c9a84c`
- Page BG: Cream `#f7f3ed`
- Fonts: Cormorant Garamond (headings) + DM Sans (body) via Google Fonts

## Core Pages (6 Routes)
| Route | Functionality |
|-------|---------------|
| `/` | Home (Hero → CPD Accreditation → Courses → Trainers → CTA) |
| `/courses` | 10 diploma programs grid |
| `/course/:id` | Single program details + enrollment form |
| `/admissions` | Full application form + payment options |
| `/exam` | 30-minute auto-submit online exam |
| `/contact` | Contact cards + therapy booking |

## Quick Start
### 1. Install Dependencies
```bash
npm install
```

### 2. Supabase Setup
1. Create a free Supabase project at [supabase.com](https://supabase.com)
2. Run this SQL in the **SQL Editor** to create the applications table:
```sql
create table applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp default now(),
  first_name text not null,
  last_name text not null,
  whatsapp text not null,
  email text not null,
  program text not null,
  payment_method text,
  message text,
  status text default 'pending'
);
```
3. Copy **Project URL** and **anon public key** from **Settings → API**
4. Paste into `.env` (replace placeholder values)

### 3. Run Locally
```bash
npx vite --host
```
Access at [http://localhost:5173](http://localhost:5173)

### 4. Production Build
```bash
npm run build
```
Deploy the `dist/` folder to Vercel

## Deployment Status
- [x] Code pushed to GitHub (https://github.com/imran350/gicp-academy)
- [x] Vercel project connected
- [ ] Domain configuration (gicpacademy.com)

## Key Features
- CPD-accredited program validation
- Expert trainer profiles (Tuba Shahid, Sumaira, Dr. Nida)
- 2-second delayed WhatsApp notifications for form submissions
- Auto-scroll to success alerts
- Mobile-responsive layouts (no horizontal overflow)
- SEO-optimized meta tags & sitemap

## Contact Info
- WhatsApp: 0301-9753393 (wa.me/923019753393)
- Email: gicpacademy@gmail.com
- Website: www.gicpacademy.com

## Recent Production Update (2026-05-19)
- Final audit passed (100% stable)
- CPD Accreditation section added to Home page
- Email input overflow fixed with `break-all` class
- All forms standardized with consistent submission logic
- Project-compliant commit pushed to master branch

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
