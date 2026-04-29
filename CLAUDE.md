# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

There are no lint or test scripts configured.

## Stack

- **Vite 6 + React 18 SPA** — single `index.html`, entry at `src/main.jsx`
- **@vitejs/plugin-react-swc** — SWC-based React transform (replaces the Babel-based `@vitejs/plugin-react`; do NOT switch back — the Babel plugin double-injects the HMR preamble on Node 24 and breaks dev)
- **Tailwind CSS 3** — scans `index.html` and `src/**/*.{js,jsx}`
- **Framer Motion 11** — animations and scroll-driven effects throughout
- **Sonner** — toast notifications
- **Lucide React** — icons

## Architecture

The app is a single-page marketing site for a gym. `App.jsx` composes all sections in order with a timed page loader.

**AnimatePresence pattern** — `<AnimatePresence>` lives in `App.jsx` wrapping `{loading && <PageLoader />}`. `PageLoader` must NOT contain its own `AnimatePresence`; the exit animation (`opacity: 0`) is driven by the parent.

**Sections** (`src/sections/`) render in this order: `Hero → About → Programs → Membership → Gallery → Testimonials → Contact`, followed by `Footer`. Each section has an `id` matching the navbar link (`home`, `about`, `programs`, `membership`, `gallery`, `testimonials`, `contact`).

**Scroll navigation** — all nav links and CTA buttons call a local `go(id)` helper that does `window.scrollTo({ top: el.offsetTop - 72 })`. The 72px offset accounts for the fixed navbar height.

**Google Fonts** — loaded via `<link>` in `index.html`, not via `@import` in CSS (avoids PostCSS processing issues in dev).

## Deployment

`netlify.toml` at the project root configures Netlify: build command `npm run build`, publish dir `dist`, and a catch-all redirect to `index.html` for SPA routing.

The contact form posts to Formspree. Replace `YOUR_FORM_ID` in `src/sections/Contact.jsx` with a real Formspree form ID before going live.
