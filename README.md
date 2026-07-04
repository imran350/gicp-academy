# GICP Academy — Professional Diploma Programs

> **Live site:** [gicpacademy.com](https://www.gicpacademy.com)

Full-stack React SPA for the **Global Institute of Clinical Psychology** — offering CPD-accredited diploma programs in clinical psychology, therapy, and healthcare. Features online enrollment forms backed by Supabase, a 30-minute auto-submit exam portal, expert trainer profiles, and a dark glassmorphism design system.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite 6 |
| Styling | Tailwind CSS v3 (PostCSS integration — **NOT CDN**) |
| Routing | React Router v7 (lazy-loaded routes) |
| Icons | Lucide React |
| Backend | Supabase (null-safe client) |
| Deployment | Vercel (connected to GitHub repo) |

---

## Brand Theme

- **Page BG:** Dark navy radial gradient `#1e3a8a → #0f172a` (fixed background, dark glassmorphism)
- **Primary Accent:** Sky Blue `#0ea5e9` (light variant `#7dd3fc`)
- **Secondary Accent:** Gold `#c9a84c` / amber-400 (CPD badges, star ratings)
- **Fonts:** Inter (body) + Playfair Display (headings) via Google Fonts
- **Tailwind config:** `tailwind.config.js` — custom colors, layered shadows, spring easing

---

## Pages (7 Routes)

| Route | Description |
|-------|-------------|
| `/` | Home — Hero → CPD Accreditation → Courses → Testimonials → Fee → Features → Trainers → CTA |
| `/courses` | All 14 diploma programs grid |
| `/course/:id` | Single program detail + enrollment form |
| `/admissions` | Full application form + payment options |
| `/about` | Mission, highlights, expert trainers, careers |
| `/exam` | 30-minute auto-submit online exam |
| `/contact` | Contact cards + therapy booking + enrollment form |

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env` and fill in your Supabase credentials:
```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```
> Without these, the app runs fine — forms will show a submission error but nothing crashes.

### 3. Supabase Table Setup
Run this SQL in your Supabase **SQL Editor** to create the applications table:
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

### 4. Run Dev Server
```bash
npm run dev
# or with network access:
npx vite --host
```
Access at [http://localhost:5173](http://localhost:5173)

### 5. Production Build
```bash
npm run build
npx vite preview   # preview on port 4173
```
Deploy the `dist/` folder to Vercel (or connect the GitHub repo for auto-deploy).

---

## Project Structure

```
gicp-academy/
├── public/
│   ├── favicon.svg
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav + mobile hamburger
│   │   ├── Hero.jsx            # Full-width hero with CTAs + responsive stats strip
│   │   ├── CourseCard.jsx      # Reusable card with icon, badges, hover lift
│   │   ├── FeeSection.jsx      # "Affordable Excellence" — flexible payment plans
│   │   ├── FeaturesList.jsx    # 5 key features grid
│   │   ├── Footer.jsx          # 4-column footer with Lucide social icons
│   │   ├── WhatsAppButton.jsx  # Floating WhatsApp button → wa.me/923019753393
│   │   ├── RevealSection.jsx   # Shared scroll-reveal wrapper (IntersectionObserver)
│   │   └── ErrorBoundary.jsx   # Class component crash boundary around lazy routes
│   ├── hooks/
│   │   └── useScrollReveal.js  # [ref, isVisible] IntersectionObserver hook
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── Admissions.jsx
│   │   ├── About.jsx
│   │   ├── Exam.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── courses.js          # All 14 courses structured data
│   ├── lib/
│   │   └── supabase.js         # Null-safe Supabase client
│   ├── App.jsx                 # Router + ErrorBoundary + Suspense
│   ├── main.jsx
│   └── index.css               # Tailwind directives + grain texture + reduced-motion
├── .env                        # Supabase credentials (not committed)
├── index.html                  # Entry HTML + Google Fonts + SEO meta/OG tags
├── vite.config.js              # ⚠️ CRITICAL — do not delete
├── tailwind.config.js
├── postcss.config.js           # ⚠️ CRITICAL — do not delete
├── package.json
└── screenshot.mjs              # Puppeteer screenshot helper
```

> **⚠️ Warning:** Never delete `vite.config.js` or `postcss.config.js`. Removing either breaks the entire dev server — React JSX won't compile and Tailwind won't process.

---

## Key Features

- **CPD-Accredited Programs** — 14 diploma programs across psychology and therapy
- **3 Enrollment Forms** — CourseDetail, Admissions, and Contact all write to Supabase
- **Expert Trainer Profiles** — Tuba Shahid, Sumaira, Dr. Nida
- **Student Testimonials** — Real reviews from enrolled students
- **30-Minute Exam Portal** — Auto-submit with Supabase auth
- **Accessibility** — `prefers-reduced-motion`, `aria-hidden`, keyboard-focusable radio groups
- **SEO** — Meta tags, Open Graph, sitemap.xml
- **Mobile-first responsive** — No horizontal overflow, touch-friendly form controls

---

## Deployment

- **Platform:** Vercel (auto-deploy from GitHub)
- **Live URL:** [https://www.gicpacademy.com](https://www.gicpacademy.com)
- **GitHub:** https://github.com/imran350/gicp-academy

---

## Contact

- **WhatsApp:** 0301-9753393 → [wa.me/923019753393](https://wa.me/923019753393)
- **Email:** globalinstituteofpsychology@gmail.com
- **Website:** [www.gicpacademy.com](https://www.gicpacademy.com)

---

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
