# LaunchDraft

Marketing website for **LaunchDraft** — a startup that designs, builds, hosts, and
maintains professional websites for local businesses. Tagline: **From Draft to Launch.**

Static multi-page site, ready to deploy on **GitHub Pages**.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home (hero, sliding slogan bar, process, what's included, why-not-DIY, examples, testimonials, pricing teaser, about, CTA) |
| `pricing/index.html` | Full pricing (3 plans), "every plan includes", FAQ, CTA |
| `start/index.html` | "Start a draft" intake form (with client-side confirmation) |
| `404.html` | Custom, self-contained 404 page |
| `styles.css` | All styling — design tokens, layout, components, responsive, hover states |
| `main.js` | Nav scroll, hamburger menu, scroll reveals, current year |
| `launchdraft_logo.svg` | The paper-plane brand mark (nav, footer, hero, favicon) |
| `assets/` | `favicon.png`, `favicon-32.png`, `apple-touch-icon.png`, `og.png` (social share image) |
| `robots.txt`, `sitemap.xml` | SEO — allow crawling and list the pages |
| `.claude/skills/web-designer/` | Vendored [web-designer](https://github.com/MickeyAlton33/web-designer-plugin) skill (MIT) |

## Design

- **Palette:** warm cream `#faf6f0` · deep ink `#17223b` · orange accent `#e0501c` (matched to the logo)
- **Type:** Quicksand (logo) · Bricolage Grotesque (display) · Hanken Grotesk (body)
- **Signature:** the hero tagline where *Draft* is a sketched/outlined state and *Launch* snaps to solid orange, with a paper-plane echo of the logo

## Before you go live — replace the placeholders

These are intentionally placeholder and marked with HTML comments in `index.html`:

- **Examples** (`#work`) — swap the three sample cards for real client sites (screenshot + name).
- **Testimonials** (`#reviews`) — replace the sample quotes with real ones, then remove the "Sample" chips. Don't publish invented reviews.
- **About** (`#about`) — write your real story and name, swap the `LD` initials avatar for a photo.
- **Contact email** — the footer links to `douglas.launchdraft@gmail.com`; set that inbox up (or change the address).
- **Intake form** (`start/index.html`) — currently shows a confirmation only. To receive submissions, point the `<form>` at a free service (e.g. FormSubmit or Formspree) once your inbox exists; see the comment above the form.
- **Domain** — meta tags and the sitemap use `https://launchdraft.net`. If you launch elsewhere, update those absolute URLs.

## Deploy to GitHub Pages

1. Push to your GitHub repo.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Choose the branch and `/ (root)` folder, then **Save**.
4. When you have `launchdraft.net`, add it under **Custom domain** and commit a `CNAME`
   file containing `launchdraft.net`. GitHub Pages then serves `404.html` for unknown paths.
