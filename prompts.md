FIFA World Cup 2026 — Iteration Plan

Here are the feature prompts, one per commit. Run them in order.

---
Prompt 1 — Foundation: Tailwind + WC2026 Theme

We are converting a football website to a FIFA World Cup 2026 theme.
The project is at /home/jakia/Documents/portfolio-projects/football-website.
There is one file: index.html and styles/style.css.

Task: Set up the foundation.
- Remove the link to styles/style.css from index.html.
- Delete styles/style.css (or clear it completely — no longer needed).
- Add the Tailwind CSS CDN in the <head>: <script src="https://cdn.tailwindcss.com"></script>
- Add a Tailwind config block right after the CDN script that defines these custom colors:
    wc-navy: '#0D1B2A'
    wc-gold: '#C9A84C'
    wc-red: '#BE0000'
    wc-white: '#F5F5F5'
  Also add font-family Poppins via a Google Fonts link in <head>.
- Update the page <title> to: FIFA World Cup 2026
- Keep all existing HTML structure intact — just do the setup.
- Commit with message: "setup: Tailwind CDN + WC2026 color theme"

---
Prompt 2 — Hero Section

We are building a FIFA World Cup 2026 themed website.
Project: /home/jakia/Documents/portfolio-projects/football-website/index.html
Tailwind CSS CDN is already set up with custom colors: wc-navy (#0D1B2A), wc-gold (#C9A84C), wc-red (#BE0000), wc-white (#F5F5F5).

Task: Rebuild the <header> section with WC2026 theme using Tailwind only.
- Full-width dark navy background (wc-navy).
- Left side:
    - Small gold uppercase label: "FIFA WORLD CUP"
    - Large bold white heading: "2026" in very large text
    - Subtitle: "USA • CANADA • MEXICO"
    - Tournament dates line: "June 11 – July 19, 2026"
    - A red CTA button: "Watch Live →"
- Right side: keep the existing banner.png image (images/banner.png), styled to fit well.
- Fully responsive: stack vertically on mobile, side-by-side on md+ screens.
- Keep the existing <nav> or header elements if any — just restyle them.
- Commit: "feat: WC2026 hero section"

---
Prompt 3 — Tournament Stats Bar

We are building a FIFA World Cup 2026 themed website.
Project: /home/jakia/Documents/portfolio-projects/football-website/index.html
Tailwind CSS CDN is set up with custom colors wc-navy, wc-gold, wc-red, wc-white.

Task: Rebuild the stats section (currently .league-container) with WC2026 data using Tailwind.
Replace the old league stats with these 4 World Cup stats: