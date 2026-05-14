# 2026 California primary voter guide (92126)

This repository holds a **research-backed voter guide** for the **June 2026 California primary**, scoped to a **92126 (Mira Mesa, San Diego) ballot**: statewide offices, federal and state legislative seats that touch the district, San Diego County and City contests, Superior Court races in the guide, and **Measure A** (empty-homes tax).

**Live site (GitHub Pages):** [https://alanttran.github.io/ca-primary-26/](https://alanttran.github.io/ca-primary-26/)

The guide is built around the **nine [Pew Research political typologies](https://www.pewresearch.org/politics/2021/political-typology/)** (Progressive Left through Faith and Flag Conservatives). It is meant to help friends and neighbors **compare recommendations across worldviews**, not to present a single “correct” slate.

## What’s in the repo

| Piece | Role |
| ----- | ---- |
| **`voter-guide-2026.md`** | Long-form narrative guide (sources, nuance, Google-Docs–friendly prose). Original research deliverable. |
| **`site/`** | Static **Vite + TypeScript + SCSS** web app that turns structured ballot data into a browsable guide: TL;DR matrix, **what’s at stake** blurbs per office, cross-typology pick tables, candidate bios/scorecards, optional headshots, and measure breakdowns. |
| **`2026_ca_primary_voter_guide_*.plan.md`** | Planning notes, coverage rules, and red-flag policy for high-polling controversial candidates. |
| **`site/ATTRIBUTION.md`** | Image credits for candidate portraits (Wikimedia / Wikipedia thumbnails where used). |

## What the site is meant to do

- **Summarize each contest** with stakes-oriented copy (“what’s at stake”) plus short **race context** (polling, field size, endorsements where relevant).
- Show a **TL;DR matrix** of typology-by-race picks and per-race **cross-typology** rows with confidence cues and rationales.
- Present **candidates** with topical scorecards, money/endorsement notes, and **red-flag callouts** when the source guide flags serious issues—especially if someone is still viable in the polls.
- Stay **unofficial**: editorial / educational; voters should verify registration, ballot text, and official sources.

## Local development

```bash
cd site
npm install
npm run dev
```

Production build:

```bash
cd site
npm run build
```

Output is written to **`site/dist/`**. The GitHub Actions workflow **`.github/workflows/deploy-site.yml`** builds that folder and deploys it to **GitHub Pages** on pushes to `main` or `master` (and on manual dispatch). The public URL is [https://alanttran.github.io/ca-primary-26/](https://alanttran.github.io/ca-primary-26/).

## Updating content

- **Narrative or sourcing changes:** edit **`voter-guide-2026.md`** and keep the **`site/src/data/*.ts`** files aligned when races or candidates change.
- **Portraits:** add WebP files under **`site/public/images/candidates/`** and set **`photoSlug`** on the candidate; see **`site/ATTRIBUTION.md`** and optional scripts `npm run fetch-portraits` / `npm run portrait-attribution` in `site/package.json`.

## License / use

Content reflects research for a specific election and ZIP scope; reuse quotes and facts with attention to **fair use**, **campaign disclosure** norms, and **up-to-date** official ballot information from [sos.ca.gov](https://www.sos.ca.gov/) and local election offices.
