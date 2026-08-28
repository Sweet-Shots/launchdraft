# LaunchDraft

Marketing website for **LaunchDraft** — a startup that builds, hosts, and maintains
professional websites for local businesses. Tagline: **From Draft to Launch.**

Static site, ready to deploy on **GitHub Pages**.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The full one-page site (nav, hero, process, features, pricing, FAQ, footer) |
| `styles.css` | All styling — design tokens, layout, components, responsive rules |
| `assets/` | Brand assets (drop your `logo.svg` here) |
| `.claude/skills/web-designer/` | Vendored [web-designer](https://github.com/MickeyAlton33/web-designer-plugin) skill (MIT) |

## Design

- **Palette:** warm cream `#faf6f0` · deep ink `#17223b` · persimmon accent `#ff5a3c`
- **Type:** Quicksand (logo) · Bricolage Grotesque (display) · Hanken Grotesk (body)
- **Signature:** the hero tagline where *Draft* is a sketched/outlined state and *Launch* snaps to solid persimmon

## Deploy to GitHub Pages

1. Push to your GitHub repo.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Choose the branch and `/root` folder, then **Save**.
4. When you have `launchdraft.net`, add it under **Custom domain** and commit a `CNAME`
   file containing `launchdraft.net`.

## Swapping in your logo

The logo currently uses an inline placeholder mark plus the **Quicksand** wordmark.
When your `logo.svg` is ready:

1. Put the file at `assets/logo.svg`.
2. In `index.html`, replace the inline `<svg class="logo__mark">…</svg>` in the nav
   (and footer) with `<img class="logo__mark" src="assets/logo.svg" alt="LaunchDraft" />`.

## Contact placeholder

CTA buttons link to `hello@launchdraft.net`. Update that address in `index.html`
once your real inbox is set up.
