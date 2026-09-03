# LaunchDraft — Session Handoff

Internal notes for continuing this project in a future Claude Code session.
This file is named with a leading underscore so GitHub Pages (Jekyll) does NOT
publish it; it stays in the repo but is not reachable on launchdraft.net.

Note on style: the founder strongly dislikes em dashes. Do not use the long dash
anywhere in site copy, docs, or commit messages. Use commas, periods, or
parentheses instead. (This file follows that rule.)

---

## What LaunchDraft is
- A solo web service: designs, builds, hosts, and maintains simple websites for
  small businesses across the US. Tagline: "From Draft to Launch." Site: launchdraft.net.
- Founder: Douglas Harvey (about 15, works solo). Business inbox:
  douglas.launchdraft@gmail.com. Leads arrive there from the Start form (via FormSubmit).
- Responsible adult: Teresa Harvey (guardian), South Carolina, USA. She is the legal
  party on contracts, the PayPal account, the bank account, and the Namecheap account,
  because Douglas is a minor. Douglas does all the actual work.

## Repo and deploy
- GitHub: Sweet-Shots/launchdraft. There is ONLY ONE branch:
  `claude/web-version-skills-9rn7l5`. There is no `main`. Develop and push to that branch.
- GitHub Pages serves that branch to launchdraft.net (custom domain; CNAME file in repo).
  Deploys confirmed working (edits show up live after a Pages rebuild + hard refresh).
- Domain launchdraft.net is on Namecheap: A records @ to 185.199.108-111.153,
  CNAME www to sweet-shots.github.io. Working.
- Commit footer required on every commit:
  `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
  then a `Claude-Session: https://claude.ai/code/session_01XKAzdg22BS4pCZGGYyUdaG` line.
- Push with `git push -u origin claude/web-version-skills-9rn7l5`. Never push to another branch.

## File map
- index.html (home), pricing/index.html, start/index.html, privacy/index.html,
  terms/index.html, 404.html
- styles.css (main stylesheet; custom navy scrollbar lives at the bottom),
  main.js (nav hamburger, scroll reveals, footer year)
- demos/{landscaper,bakery,salon}/index.html: self-contained demo sites used as the
  Examples/portfolio. Each has its own inline CSS/JS, its own favicon, and the sticky
  "This is a demo built by LaunchDraft" banner + noindex.
- assets/ (favicon.svg + PNGs, apple-touch-icon on white, og.png, demo screenshots),
  launchdraft_logo.svg
- .claude/skills/start-draft/SKILL.md (repo skill), .claude/skills/web-designer/ (plugin)

## Brand
- Palette: cream #faf6f0, ink/navy #17223b, orange #e0501c (darker accent-ink #a8380c).
- Fonts: Quicksand (logo wordmark), Bricolage Grotesque (display/headings),
  Hanken Grotesk (body).
- Logo: orange paper plane. SVG path (main body):
  `M265,42 L4,130 L80,165 L208,83 L109,176 L96,233 L144,197 L201,222 Z`
  fold: `M109,176 L96,233 L144,197 Z`.
- Favicon: clean paper plane on transparent (assets/favicon.svg is primary; PNGs match;
  apple-touch is the plane on a white tile).
- Custom scrollbar: navy pill on warm-cream track, orange on hover (styles.css bottom).

## Pricing and business model (CURRENT, locked)
- Standard: $26/mo + $154 one-time setup. Professional: $51/mo + $360 setup.
  (Displayed prices already bake in the ~2.9% + 30c card fee, so they net roughly
  $25/$49 monthly and $149/$349 setup.) No Enterprise tier (removed).
- Plans include: a free custom domain, hosting, security, and monthly edits
  (Standard up to 2/mo, Professional up to 5/mo). The FREE homepage draft is the hook:
  the client sees a real draft before paying anything.
- Payments: PayPal ONLY for the recurring monthly (under Teresa's PayPal Business
  account). Zelle is fine for the one-time setup fee. Money flow: client to Teresa's
  PayPal/bank to Douglas's Founders debit card.
- Domain model: LaunchDraft buys and holds each client's domain on its own Namecheap
  account (keep auto-renew ON). It is transferable to the client's own account ANY TIME
  on request (they cover the ~$15 transfer/renewal cost). If they leave without asking,
  it lapses at its next annual renewal. IMPORTANT: domain renewal is ANNUAL, not monthly,
  so a missed monthly payment does NOT immediately drop the domain.
- Site = a SERVICE, not owned outright. Buyout: a client can buy a complete working copy
  of their finished site any time for a one-time fee equal to 12 MONTHS of their plan;
  on buyout they also get the domain transferred. Their own content (text/logo/photos)
  is always theirs. Our internal reusable templates/tools are never handed over.
- Non-payment: about 7 days grace to fix a failed payment, then the site goes offline.
- After a site goes offline (cancel OR non-payment): files are kept 30 days (during which
  they can restart, buy out, or transfer the domain), then permanently deleted and no
  buyout is possible after that.
- Client-site hosting plan (not set up yet): Cloudflare Pages + a private GitHub repo per
  client, deploy via git push. The marketing site stays on GitHub Pages. Draft previews
  can use the free clientname.pages.dev URL.

## Legal
- /privacy/ and /terms/ are live. Operated by Teresa Harvey, South Carolina. AI use is
  disclosed. PayPal is the only processor named. Terms use citable sub-point numbering
  (3.A, 4.B, etc.). "Last updated: September 3, 2026."
- Word service agreement is generated by scratchpad/make_agreement.js (docx-js). It is
  BLACK AND WHITE, with fill-in [brackets], and matches the Terms (buyout = 12 months,
  non-payment grace, 30-day retention, domain transfer on request, PayPal/Zelle).
  Regenerate: `cd <scratchpad>/ && node make_agreement.js` (docx package installed there).
  The .docx has been sent to the user via SendUserFile several times.
- Not a lawyer; a real attorney should review the auto-renewal terms, the minor+parent
  setup, and sole-prop-vs-LLC before the first paying client. Teresa is the adult to loop in.

## Private Claude artifacts already built (user's account)
- Lead Pipeline: https://claude.ai/code/artifact/ce5731d0-bd32-4f58-973e-9b4d7e5fe1e3
- Control Room (ops how-to hub): https://claude.ai/code/artifact/cbfea81d-bb1a-4153-9db7-d352fa15297c
- Service Agreement HTML preview: https://claude.ai/code/artifact/2cb1d32e-abc7-4361-8876-bf8d54b0dbc1
(To update an artifact: action "read" its url first, then republish with that url.)

## /start-draft skill
- Repo skill at .claude/skills/start-draft/. Gathers a prospect's business details, then
  builds ONE homepage draft via the web-designer skill following LaunchDraft demo
  conventions (self-contained file, demo banner, noindex, graceful image fallbacks), then
  asks "Continue to the full design?" before building more.

## Open items and to-dos
- ACTION (user): activate FormSubmit once (submit the live Start form, click the
  activation email) so leads actually deliver to the inbox.
- ACTION (user): set up the PayPal Business account under Teresa (was "tomorrow").
- Optional Terms tweak offered but not yet decided: add a one-line note that the domain
  lapses at its ANNUAL renewal, not immediately, to prevent client confusion.
- Testimonials section on index.html is COMMENTED OUT (it held placeholder "Sample"
  quotes). Restore it (delete the comment wrapper) once there is ONE real client quote.
  Getting that first real quote is the highest-value non-cosmetic task.
- Local AI advisor team: the user has a handoff PROMPT to build a local Ollama + Obsidian
  "advisor vault" on their own machine (not in this repo, built entirely offline). They
  decided against cloud AI advisors and against a full local build for now.
- Deferred/decided: Cloudflare not set up yet; dark mode decided AGAINST; scrollbar and
  favicon done; nationwide copy uses "small businesses" (not "local").

## Recent copy/quality work (do not undo)
- An "AI-slop" audit was applied: cut repeated section overlines, de-triaded copy,
  renamed plans to "The Starter Site" / "The Growth Site", added an honest AI-use line in
  the About section. Keep the human signals (senior-style code comments, custom
  Draft-to-Launch wordmark, real odd pricing, accessibility, no fake reviews).

## How to work with this founder
- Beginner solo founder. Explain plainly, be honest and calibrated (say when something is
  overblown or a bad idea), do not overwhelm, and keep steering him toward getting client #1.
- No fake testimonials/reviews, ever. No em dashes, ever.
- Marketing assets already drafted in chat: a cold outreach email + a 4-day follow-up
  (sign as "Douglas," lead with the free draft link, PayPal, "small businesses").

## Best next actions for the business
1. Activate FormSubmit and set up PayPal.
2. Land client #1: warm circle, "walk-in" free drafts for local businesses with no site,
   and the cold outreach emails already written.
3. On the first happy client: capture a real quote and un-comment the testimonials section.
