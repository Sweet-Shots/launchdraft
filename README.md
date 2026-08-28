# LaunchDraft

Marketing website for **LaunchDraft** — a startup that builds, hosts, and maintains
professional websites for local businesses. Tagline: **From Draft to Launch.**

Static site, ready to deploy on **GitHub Pages**.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The full one-page site (nav, hero, process, features, pricing, FAQ, footer) |
| `styles.css` | All styling — design tokens, layout, components, responsive rules |
| `launchdraft_logo.svg` | The paper-plane brand mark (used in nav, footer, favicon, hero) |
| `assets/logo.svg` | Duplicate of the brand mark for asset reference |
| `.claude/skills/web-designer/` | Vendored [web-designer](https://github.com/MickeyAlton33/web-designer-plugin) skill (MIT) |

## Design

- **Palette:** warm cream `#faf6f0` · deep ink `#17223b` · orange accent `#e0501c` (matched to the logo)
- **Type:** Quicksand (logo) · Bricolage Grotesque (display) · Hanken Grotesk (body)
- **Signature:** the hero tagline where *Draft* is a sketched/outlined state and *Launch* snaps to solid orange, with a paper-plane echo of the logo

## Deploy to GitHub Pages

1. Push to your GitHub repo.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Choose the branch and `/root` folder, then **Save**.
4. When you have `launchdraft.net`, add it under **Custom domain** and commit a `CNAME`
   file containing `launchdraft.net`.

## Logo

The paper-plane mark (`launchdraft_logo.svg`) is wired into the nav, footer, hero
accent, and favicon, paired with the **Quicksand** wordmark. To change it, replace
`launchdraft_logo.svg` (and `assets/logo.svg`) — the markup references it by path.

## Contact placeholder

CTA buttons link to `hello@launchdraft.net`. Update that address in `index.html`
once your real inbox is set up.
