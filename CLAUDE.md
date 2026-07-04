# CLAUDE.md — Frontend Website Rules

## Always Do First
- Verify production readiness with a non-destructive audit before committing changes

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

# GICP Academy — Project Progress

## Tech Stack
- **React + Vite** (not single HTML — this is a full SPA)
- **Tailwind CSS v3** (PostCSS integration, NOT CDN)
- **React Router v7** for 7 pages (Home, Courses, CourseDetail, Admissions, About, Exam, Contact)
- **Lucide React** for icons
- **Supabase** for admissions form backend
- Dev server: `npx vite --host` (runs on port 5173 by default)

## Brand Theme
- **Page BG:** Dark navy radial gradient `#1e3a8a → #0f172a` (fixed), light slate text — dark glassmorphism theme
- **Primary Accent:** Sky Blue `#0ea5e9` (with light-sky `#7dd3fc`)
- **Secondary Accent:** Gold `#c9a84c` / amber-400 (star ratings, CPD badges)
- **Legacy tokens:** teal `#1a7a6e`, gold, cream are still defined in `tailwind.config.js` and used by `Exam.jsx`'s light cream theme
- **Fonts:** Inter (body + headings, mapped to Tailwind `display`/`body`) + Playfair Display, via Google Fonts
- Tailwind config: `tailwind.config.js` with custom colors, shadows, spring easing

## File Structure
```
gicp-academy/
├── public/favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ✅ Sticky nav + mobile hamburger
│   │   ├── Hero.jsx            ✅ Full-width gradient hero with CTAs + stats (responsive stats strip)
│   │   ├── CourseCard.jsx      ✅ Reusable card with icon, badges, hover lift
│   │   ├── FeeSection.jsx      ✅ "Affordable Excellence" — flexible payment plans card
│   │   ├── FeaturesList.jsx    ✅ 5 features grid
│   │   ├── Footer.jsx          ✅ 4-column footer, Lucide social icons (Facebook/Instagram/WhatsApp/Email)
│   │   ├── WhatsAppButton.jsx  ✅ Floating green button → wa.me/923019753393
│   │   ├── RevealSection.jsx   ✅ Shared scroll-reveal wrapper (useScrollReveal hook, IntersectionObserver)
│   │   └── ErrorBoundary.jsx   ✅ Class component, wraps <Suspense> in App.jsx, "Reload Page" fallback
│   ├── hooks/
│   │   └── useScrollReveal.js  ✅ IntersectionObserver hook → [ref, isVisible]
│   ├── pages/
│   │   ├── Home.jsx            ✅ Hero → CPD → Courses → Testimonials → Fee → Features → Trainers → CTA
│   │   ├── Courses.jsx         ✅ All 14 diploma cards grid
│   │   ├── CourseDetail.jsx    ✅ Single program info + enrollment form
│   │   ├── Admissions.jsx      ✅ Form (name, last name, whatsapp, email, course, payment method)
│   │   ├── About.jsx           ✅ Mission, highlights, expert trainers, careers
│   │   ├── Exam.jsx            ✅ 30-minute online exam with auto-submit (hooks above early returns)
│   │   └── Contact.jsx         ✅ Contact cards + therapy booking + enrollment form
│   ├── data/courses.js         ✅ All 14 courses structured data (dead backgroundImage field removed)
│   ├── lib/supabase.js         ✅ Supabase client (null-safe when no env vars)
│   ├── App.jsx                 ✅ 7 routes + ScrollToTop + ErrorBoundary + Suspense lazy-loading
│   ├── main.jsx                ✅ Entry point
│   └── index.css               ✅ Tailwind directives + custom btn classes + grain texture + reduced-motion
├── .env                        ✅ VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY (real credentials set)
├── .gitignore                  ✅
├── index.html                  ✅ With Google Fonts + SEO meta/OG tags
├── package.json                ✅ All deps installed
├── vite.config.js              ✅ @vitejs/plugin-react (CRITICAL — do not delete)
├── tailwind.config.js          ✅ Custom colors, shadows, spring easing, merged letterSpacing keys
├── postcss.config.js           ✅ tailwindcss + autoprefixer (CRITICAL — do not delete)
└── screenshot.mjs              ✅ Puppeteer screenshot script
```

## Completed
- [x] Project scaffolded (React + Vite + Tailwind)
- [x] All 9 components built (including RevealSection + ErrorBoundary)
- [x] All 7 pages built
- [x] Routing configured (React Router v7, lazy-loaded, wrapped in ErrorBoundary + Suspense)
- [x] Production build passes (`npm run build`)
- [x] All 7 pages verified via screenshots
- [x] Supabase client set up (null-safe, won't crash without env vars) — real credentials active
- [x] Website confirmed working on localhost:5173 and live at gicpacademy.com
- [x] Resolved excessive white background issue (replaced bg-white with bg-brand-cream in all page sections)
- [x] Fixed CourseCard.jsx invalid Tailwind classes
- [x] Updated WhoWeServe.jsx to use current brand color system (navy/teal/gold/cream)
- [x] Softened white card backgrounds with bg-white/80 for better cream page alignment
- [x] Home page: Evenly distributed stats strip, 14 course cards visible, CPD claims horizontal layout
- [x] Programs page: Increased top text opacity to 80% for visibility
- [x] Course Detail page: Removed scholarship fee/Therapy Options, enlarged standard fee, added full course list dropdown, marked required fields with asterisks, fixed payment method selection, encodeURIComponent on WhatsApp link, clipboard null-guard
- [x] Fixed Home page double scrollbar issue (removed redundant layout wrappers/classes)
- [x] Standardized Home page layout to match About/Programs page structure
- [x] Updated Home page admissions banner text to 'Admissions Open for CPD-Accredited Professional Diploma Programs'
- [x] Production SEO updates (meta tags, Open Graph tags, image alt tags, public/sitemap.xml)
- [x] **Section 1 — Critical Hooks/Null bugs fixed:**
  - Exam.jsx: All hooks (useState/useEffect/useCallback) hoisted above both early returns
  - Exam.jsx: Supabase null guard added (`if (!supabase) { setLoading(false); return }`)
  - CourseDetail.jsx: Literal-string className bugs fixed → static `text-brand-teal`
  - CourseDetail.jsx: Success state reset corrected (`program: ''`)
- [x] **Section 2 — Invalid styling tokens fixed:**
  - `to-magenta-600` → `to-fuchsia-600` (CourseDetail, Admissions, Contact)
  - `text-clamp(...)` → `text-[clamp(0.7rem,1.5vw,0.78rem)]` (arbitrary value syntax)
  - `!important` JSX class tokens → `!text-white` (correct Tailwind bang prefix)
  - Invalid CSS in index.css: bare scrollbar props wrapped in `html {}`, invalid `.form-section { padding-y }` removed
  - Duplicate `letterSpacing` key in tailwind.config.js merged (restored `body-wide` token)
- [x] **Section 3 — Mobile responsiveness:**
  - Hero.jsx stats strip: `grid-cols-3` → `grid-cols-1 sm:grid-cols-3`
- [x] **Section 4 — Performance:**
  - `animate-slowFloat` gated: `@media (hover: hover) and (pointer: fine)` (mobile CPU relief)
  - Dead `backgroundImage` field removed from all 14 course objects in courses.js
- [x] **Section 5 — Security:**
  - Removed 3 PII `console.log` calls from Admissions.jsx
  - `encodeURIComponent` on WhatsApp message strings (CourseDetail, Contact)
- [x] **Section 7 — Accessibility:**
  - `@media (prefers-reduced-motion: reduce)` full block added to index.css
  - `navigator.clipboard?.writeText(...).catch(() => {})` null guard (CourseDetail, Admissions)
  - `focus-within:ring-2 focus-within:ring-brand-gold` on payment radio labels (keyboard nav)
  - `aria-hidden="true"` on decorative emoji/icon divs (CourseDetail, Admissions, Contact)
  - `break-all` on long email display text (Footer, Contact)
- [x] **New components added:** `RevealSection.jsx` (shared scroll-reveal), `ErrorBoundary.jsx` (route crash boundary)
- [x] **Student Testimonials section added to Home.jsx** (3 real reviews: Hina, Amna, Ms. Sumaira) between Courses and FeeSection
- [x] **Footer upgraded:** Lucide icons for Facebook/Instagram/WhatsApp replacing emoji; 4-column layout
- [x] **Config files restored after accidental deletion:** `vite.config.js` + `postcss.config.js` (root cause of "React is not defined" + broken Tailwind)

## Pending (Next Session)
- [ ] **Design comparison with MedicPro** — User shared reference: https://medicprointernationalacademy.co.uk/
  - Possible additions: Director's Message, Mission & Vision sections, "Who We Serve" section
  - Waiting for user direction on what to adopt
- [ ] **Domain confirmed live** — gicpacademy.com connected to Vercel ✅
- [ ] **Deferred refactors** (safe-fixes-only was chosen — these are non-urgent):
  - Extract shared `TrainerCard` component (duplicated in Home + About)
  - Extract shared `CPDSection` component (duplicated in Home + About)
  - `useFormValidation` hook (shared between Admissions + Contact)
  - Centralize `paymentMethods.js` data array
  - Standardize Supabase insert payloads across all 3 forms
  - Per-route `<title>` tags (react-helmet or similar)
  - Exam.jsx rework to dark glassmorphism theme (currently uses legacy cream theme)
  - Remove `background-attachment: fixed` on mobile (performance)

## Key Notes
- `.env` has **real** Supabase credentials — all 3 forms writing to `applications` table ✅
- Supabase client is null-safe: app works fine without env vars, form shows error on submit
- WhatsApp number: 0301-9753393 (links to wa.me/923019753393)
- **NEVER delete `vite.config.js` or `postcss.config.js`** — deleting either breaks the entire dev server (React JSX won't compile / Tailwind won't process). Always keep both files.
- The `frontend-design` skill doesn't exist in this environment — skip it
- Bash tool never works in this environment (Linux env stuck) — use Read/Write/Edit/Glob tools only
