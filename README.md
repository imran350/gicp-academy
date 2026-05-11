# GICP Academy — React Website

Full multi-page React website with:
- React Router (6 pages)
- Supabase database (student applications)
- JazzCash / EasyPaisa / Bank Transfer payment info
- 30-minute online exam with auto-submit & instant results
- Zoom / Google Meet live classes

---

## 📁 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/courses` | All Programs |
| `/course/:id` | Single Program Detail |
| `/admissions` | Apply + Payment |
| `/exam` | Online Exam Demo |
| `/contact` | Contact |

---

## ⚡ Quick Start

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Setup Supabase
1. Go to [supabase.com](https://supabase.com) → Create free account
2. New project → name: `gicp-academy`
3. Go to **SQL Editor** and run:

```sql
create table applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp default now(),
  first_name text not null,
  last_name text,
  whatsapp text not null,
  email text,
  program text not null,
  payment_method text,
  message text,
  status text default 'pending'
);
```

4. Go to **Settings → API**
5. Copy **Project URL** and **anon public key**

### Step 3 — Add environment variables
```bash
cp .env.example .env
```
Open `.env` and paste your Supabase URL and key.

### Step 4 — Run locally
```bash
npx vite --host
```
Opens at [http://localhost:5173](http://localhost:5173)

### Step 5 — Build for production
```bash
npm run build
```
Upload the `dist/` folder to any hosting (Netlify, Vercel, cPanel).

---

## 🌐 Free Hosting (Netlify — Recommended)

1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag & drop the `dist/` folder
3. Add environment variables in **Site settings → Environment variables**
4. Done! Your site is live.

---

## 🗄️ View Student Applications (Supabase Dashboard)

1. Go to [supabase.com](https://supabase.com) → your project
2. Click **Table Editor** → `applications`
3. All student applications appear here in real-time
4. You can export to CSV from here

---

## 📝 Recent Updates
- **v3.2.1**: Home page (evenly distributed stats strip, 10 course cards visible via scroll reveal removal, CPD claims in horizontal layout, standardized hero subtext font style); Programs page (increased top text opacity to 80% for visibility); Course Detail page (removed scholarship fee/Therapy Options, enlarged standard fee to text-5xl font-extrabold, added full course list dropdown, marked all required fields with asterisks, fixed payment method selection via cursor/padding/shadow/gold color enhancements, disabled WhatsApp auto-open with pre-filled link option, updated form input styles for visibility)
- **v3.2**: Fixed all WhatsApp notification links to correct number (+92 301 9753393), removed therapy session field from CourseDetail form, reduced homepage/hero heading sizes, removed Flagship/New Program badges from course cards, added direct WhatsApp session booking cards to Contact page, optimized Claude Code token usage

## 📝 Version History
- **v3.1**: GICP logo addition, fee split (standard/scholarship), payment options, Fees link removal, CourseDetail JSX error fix
- **v3.0**: Navy/Teal/Gold redesign, Exam page, 10 courses
- **v2.1**: Redesigned middle sections
- **v2.0**: Indigo+Orange color scheme, Udemy-style course detail page
- **v1.0**: Baseline (all 5 pages, Supabase form, WhatsApp button)

## 📞 Contact Info (in code)
- WhatsApp: `0301-9753393`
- Email: `gicpacademy@gmail.com`
- Website: `www.gicpacademy.com`

To update contact details, search for `9753393` in the codebase.
