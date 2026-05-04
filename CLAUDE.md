# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

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
- **React Router v6** for 5 pages
- **Lucide React** for icons
- **Supabase** for admissions form backend
- Dev server: `npx vite --host` (runs on port 5173 by default)

## Brand Theme
- **Primary:** Deep Teal `#0F766E`
- **Accent:** Warm Amber `#D97706`
- **Fonts:** Inter (body) + Playfair Display (headings) via Google Fonts
- Tailwind config: `tailwind.config.js` with custom colors, shadows, spring easing

## File Structure
```
gicp-academy/
├── public/favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ✅ Sticky nav + mobile hamburger
│   │   ├── Hero.jsx            ✅ Full-width gradient hero with CTAs + stats
│   │   ├── CourseCard.jsx      ✅ Reusable card with icon, badges, hover lift
│   │   ├── FeeSection.jsx      ✅ Standard 55K vs Scholarship 35K cards
│   │   ├── FeaturesList.jsx    ✅ 5 features grid
│   │   ├── Footer.jsx          ✅ 3-column footer with contact info
│   │   └── WhatsAppButton.jsx  ✅ Floating green button → wa.me/923019753393
│   ├── pages/
│   │   ├── Home.jsx            ✅ Hero → Featured → Fee → Features → CTA
│   │   ├── Courses.jsx         ✅ All 9 diploma cards grid
│   │   ├── Admissions.jsx      ✅ Form (name, father, phone, email, course, msg)
│   │   ├── About.jsx           ✅ Mission, highlights, careers
│   │   └── Contact.jsx         ✅ Contact cards + map placeholder
│   ├── data/courses.js         ✅ All 9 courses structured data
│   ├── lib/supabase.js         ✅ Supabase client (null-safe when no env vars)
│   ├── App.jsx                 ✅ Router with 5 routes + ScrollToTop
│   ├── main.jsx                ✅ Entry point
│   └── index.css               ✅ Tailwind directives + custom btn classes + grain texture
├── .env                        ✅ VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY (placeholder)
├── .gitignore                  ✅
├── index.html                  ✅ With Google Fonts
├── package.json                ✅ All deps installed
├── vite.config.js              ✅
├── tailwind.config.js          ✅
├── postcss.config.js           ✅
└── screenshot.mjs              ✅ Puppeteer screenshot script
```

## Completed
- [x] Project scaffolded (React + Vite + Tailwind)
- [x] All 7 components built
- [x] All 5 pages built
- [x] Routing configured
- [x] Production build passes (`npm run build`)
- [x] All 5 pages verified via screenshots
- [x] Supabase client set up (null-safe, won't crash without env vars)
- [x] Website confirmed working on localhost:5173

## Pending (Next Session)
- [ ] **Supabase setup** — User needs to:
  1. Create free Supabase project at supabase.com
  2. Run SQL to create `admissions` table (SQL provided in previous chat)
  3. Paste `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` into `.env`
  4. Test form submission
- [ ] **Design comparison with MedicPro** — User shared reference: https://medicprointernationalacademy.co.uk/
  - Possible additions: Director's Message, Mission & Vision sections, "Who We Serve" section
  - Waiting for user direction on what to adopt
- [ ] **Deploy to Vercel** — Push to GitHub, connect Vercel, configure domain

## Key Notes
- `.env` has placeholder values — Supabase won't work until real credentials are added
- Supabase client is null-safe: app works fine without Supabase, form just shows error on submit
- WhatsApp number: 0301-9753393 (links to wa.me/923019753393)
- The `frontend-design` skill doesn't exist in this environment — skip it
