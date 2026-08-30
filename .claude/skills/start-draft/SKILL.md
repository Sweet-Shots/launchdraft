---
name: start-draft
description: Build a free homepage draft for a prospective LaunchDraft client. Use when the user runs /start-draft or wants to start a new client website draft. Collects the business details (name, location, style, services), builds ONE polished homepage in the LaunchDraft demo style using the web-designer skill, previews it, then asks whether to continue to the full multi-page site.
---

# Start a Draft

You are building a **free homepage draft** for a prospective LaunchDraft client — the "draft" in "From Draft to Launch." LaunchDraft designs, builds, hosts, and maintains simple websites for local businesses (landscapers, bakeries, salons, plumbers, etc.). The free homepage draft is the sales hook: the prospect sees a real page built for their business *before* they pay a cent.

**The one rule that defines this skill: build the HOMEPAGE ONLY first. Then stop and ask before doing anything else.** A strong homepage is all it takes to earn the "yes." The full site is built only after they agree and pay.

Follow these four steps in order.

## Step 1 — Intake

Collect what you need to build a homepage that feels like *their* business, not a template. If the user already gave you some of this, use it and only ask for what's missing. Ask in one friendly batch, not one question at a time.

Gather:
- **Business name** and **what they do** (in one line).
- **Location / service area** (city, region, "serves the whole valley," etc.).
- **Style / vibe** they want (modern, cozy, bold, elegant, playful, rugged…) and any **color leanings**.
- **Key services or offerings** (3–6 of them).
- **Contact info** to show (phone, email, address, hours) — or note if none yet.
- **Assets:** do they have a **logo** and **photos**, or none? (If none, you'll design a text wordmark and use tasteful free-stock photos.)
- **Anything they specifically want** (online booking, a menu, a gallery, a deadline).
- Which **plan** they're leaning toward (Standard or Professional) — optional, just context.

If the user says "just build it" or gives minimal info, make sensible, tasteful choices and note the assumptions you made so they can correct you.

## Step 2 — Build the homepage

**Invoke the `web-designer` skill** and design a genuinely great homepage. This is a portfolio-quality piece, not a wireframe. Match the design to the *client's* business — choose fonts, colors, and layout that fit *them* (like the three demos in `demos/` each have their own distinct look). Do **not** use LaunchDraft's own orange/navy brand for the client's site; that brand only appears in the demo banner.

Study `demos/landscaper/index.html`, `demos/bakery/index.html`, and `demos/salon/index.html` as structural references. Follow these **LaunchDraft conventions** exactly:

**Technical must-haves**
- **One self-contained HTML file** — all CSS in a `<style>` block, all JS in a `<script>` block, fonts via a Google Fonts `<link>`. No build step, no external CSS/JS files.
- Add `<meta name="robots" content="noindex" />` in the head — this is a private draft, keep it out of Google.
- **Responsive** and mobile-first; add a hamburger menu if the nav needs it.
- **Scroll-reveal animations** via IntersectionObserver, gated behind a `js` class so content still shows if JS fails, and wrapped in `prefers-reduced-motion` so it respects that setting.
- **Photos:** use free-stock image URLs (Unsplash, Pexels, or similar) that match the business, each with a graceful fallback — `onerror="this.remove()"` over a CSS gradient panel — so a blocked image never breaks the layout. If they sent real photos, use those instead.
- Save the file at `drafts/<clientname>/index.html` (create the folder).

**The demo banner (required, at the very top of `<body>`)** — this is how the prospect knows LaunchDraft made it, and it's how you get more leads:
```html
<div class="demobar"><svg viewBox="0 0 270 270" fill="currentColor"><path d="M265,42 L4,130 L80,165 L208,83 L109,176 L96,233 L144,197 L201,222 Z"/></svg><span>This is a demo site built by <a href="https://launchdraft.net">LaunchDraft</a>. See what we can build for your business.</span><svg viewBox="0 0 270 270" fill="currentColor"><path d="M265,42 L4,130 L80,165 L208,83 L109,176 L96,233 L144,197 L201,222 Z"/></svg></div>
```
Style `.demobar` sticky at the top (`position:sticky; top:0; z-index:21; display:flex; align-items:center; justify-content:center; gap:.6rem`) on a dark bar that fits the site, with `.demobar svg{width:1.2rem;height:1.2rem}`, and make the sticky nav sit just below it (`header.nav{position:sticky; top:2.4rem; ...}`).

**Homepage section checklist** (adapt names to the business):
- Sticky demo banner, then a sticky nav with the business name/logo and section links.
- A hero with a strong headline, one-line value promise, and a clear call to action (call / book / contact).
- Services or offerings (3–6 cards).
- A short "about / why us" section.
- A gallery or highlights strip with photos.
- One testimonial — clearly written as a **sample/placeholder**, never a fake real review.
- A contact / CTA section with the phone, hours, and area.
- A footer that credits LaunchDraft (`https://launchdraft.net`) and, if the business is made-up for the demo, a small line saying it's a demo of a fictional business.

Then **preview it**: publish the file as an Artifact so the user can see it instantly. Note in your message that external stock photos only appear once the file is deployed (in the Artifact preview they fall back to gradients, which is expected), and that the real draft link for the client comes from deploying this file to `clientname.pages.dev` on Cloudflare Pages.

## Step 3 — Hand it back

Give the user the preview and a one-line summary of the choices you made (palette, fonts, vibe) so they can request tweaks. Make any changes they ask for.

## Step 4 — Ask before going further

Once they're happy with the homepage, ask **exactly this and nothing more**:

> **Continue to the full design?**

- If they say **yes** → build out the rest of the site (About, Services, Contact, and any pages the business needs) in the same style, as self-contained pages under `drafts/<clientname>/`, keeping the demo banner and `noindex` on every page until launch.
- If they say **no** (or not yet) → stop here. The homepage draft is the deliverable. Do not build more.

Never skip this question and never continue to the full build on your own — the homepage-only draft is the whole point of this stage.
