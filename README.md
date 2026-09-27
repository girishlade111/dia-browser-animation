# Dia Browser Animation

An interactive UI concept that recreates the signature **Dia browser "ask anything" animation** — a glowing, lightning-like pulse that sweeps around the search box while the background floats upward. Built with Next.js, Tailwind CSS, and hand-crafted SVG + CSS keyframe animations.

Originally prototyped with [v0.app](https://v0.app).

## What it does

- Renders a dark, Dia-browser-inspired "Ask anything..." search box centered on screen (logo, input, mic/send buttons).
- A **Play Animation** button triggers a ~1s animation sequence:
  - A radial-gradient light pulse sweeps around the search box border via an SVG border mask (two glowing orbs traveling along the outline with blur + drop-shadow).
  - Background artwork floats upward behind the search box (`animate-float-up`).
- Animation resets automatically after ~1 second; the button is disabled while playing.
- Purely visual/presentational — the search input is decorative (no backend query).

## Features

- SVG masked border-lightning animation (radial gradients, border mask, blur filters)
- CSS keyframe float-up background layer
- Dark theme (`#1a1a1a` canvas, `#2a2a2a` card) with theme-provider support
- Loading state (`app/loading.tsx`)
- Responsive, centered layout; works on mobile and desktop

## Tech stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS, custom CSS keyframes
- **Icons:** `lucide-react`
- **Theming:** `next-themes`
- Fully client-side — no API routes, no database

## Quick start

```bash
npm install        # or: pnpm install
npm run dev        # open http://localhost:3000, click "Play Animation"
```

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        Root layout, theme provider
  page.tsx          The animated search-box scene (SVG pulse + floating background)
  loading.tsx       Loading state
  globals.css       Global styles + animation keyframes
components/
  theme-provider.tsx
lib/
  utils.ts          Classname helpers
public/images/      Artwork (logo, background pieces)
```

## Environment variables

None required. The app is fully client-side.

## Deployment

- **Static export ready:** no API routes or server actions, so it can be built as a static site. Set `output: "export"` in `next.config.mjs` and run `npm run build` to produce an `out/` directory.
- **GitHub Pages:** this repo ships with a `gh-pages` branch hosting the static export at `https://girishlade111.github.io/dia-browser-animation/`.
- **Vercel:** also deployable as a standard Next.js app.

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
