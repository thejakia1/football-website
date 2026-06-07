# FIFA World Cup 2026 — The Ultimate Guide

A fully static, single-page fan website covering everything about the **2026 FIFA World Cup** — the first edition featuring 48 teams across three host nations. Built with vanilla HTML, CSS, and JavaScript; no build tools, no frameworks, no backend.

**Live site:** [fifa-wc-2026.netlify.app](https://fifa-wc-2026.netlify.app/)

---

## Features

| Section | What it does |
|---|---|
| **Hero + Countdown** | Real-time countdown timer to kickoff on June 11, 2026 |
| **Key Stats** | At-a-glance numbers — 48 teams, 12 groups, 104 matches, 16 host cities |
| **Full Match Schedule** | All 104 fixtures with matchday tabs, group badges, venues, and simultaneous match indicators |
| **Knockout Stage** | Round of 32 through the Final (MetLife Stadium, July 19) with bracket-style cards |
| **All 12 Groups** | Every group with team flags, live search to find any nation instantly |
| **Host Cities** | All 16 venues across USA, Mexico & Canada with filterable tabs by nation |
| **Tournament Format** | Visual explainer of the expanded 48-team format |
| **Winner Predictor** | Two-step interactive picker — choose a region, pick a team, get a shareable prediction card |
| **Social Sharing** | Native Web Share API with Facebook fallback; Open Graph + Twitter Card meta tags |

---

## Tech Stack

- **HTML5** — semantic markup, partial-based layout loaded at runtime
- **Tailwind CSS** (CDN) — utility classes for layout and spacing
- **Custom CSS** — design tokens, typography scale, component styles split across `base.css`, `layout.css`, `hero.css`, `components.css`
- **Vanilla JavaScript** — modular scripts per feature: `loader.js`, `schedule.js`, `countdown.js`, `predictor.js`, `search.js`, `share.js`, `scroll.js`
- **Google Fonts** — Bebas Neue (display), Barlow Condensed (UI), Barlow (body)
- **Python** — `gen_banner.py` script to programmatically generate the Open Graph social preview image

---

## Project Structure

```
football-website/
├── index.html              # Shell with named slots; partials injected at runtime
├── partials/               # HTML fragments loaded by loader.js
│   ├── nav.html
│   ├── hero.html
│   ├── stats.html
│   ├── schedule.html
│   ├── groups.html
│   ├── format.html
│   ├── cities.html
│   ├── predictor.html
│   └── footer.html
├── js/
│   ├── loader.js           # Fetches and injects all partials, fires app:ready event
│   ├── schedule.js         # Fixture data (72 group + 32 knockout matches) + renderer
│   ├── countdown.js        # Live countdown to June 11 kickoff
│   ├── predictor.js        # Region → team → shareable result flow
│   ├── search.js           # Team search + city filter
│   ├── share.js            # Web Share API + Facebook share fallback
│   └── scroll.js           # Scroll-to-top / smooth scroll helpers
├── styles/
│   ├── base.css            # CSS custom properties (design tokens), resets
│   ├── layout.css          # Grid systems, section wrappers
│   ├── hero.css            # Hero section, countdown, animated background
│   └── components.css      # Cards, tabs, buttons, badges
├── images/
│   └── og-banner.png       # 1200×630 social preview image
└── gen_banner.py           # Script to regenerate the OG banner image
```

---

## Architecture Highlights

**Partial-based loading** — `index.html` is a thin shell with named `<div id="slot-*">` placeholders. `loader.js` fetches each partial in parallel, injects them into their slots, then dispatches an `app:ready` event that all feature scripts listen for. This keeps the HTML modular without a build step.

**Fixture data as a JS array** — All 104 matches live in `schedule.js` as two structured arrays (`GS` for group stage, `KO` for knockout). The renderer reads active tab state and generates HTML on the fly — no server, no API calls.

**CSS design tokens** — Colors, typography, spacing, and border styles are all defined as CSS custom properties on `:root` in `base.css`, making the dark theme easy to tweak from one place.

---

## Deployment

The site is deployed via **Netlify** from the `main` branch root. Push to `main` and it goes live automatically.

---

## License

Personal portfolio project — feel free to fork and adapt for your own fan site.
