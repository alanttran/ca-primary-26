---
name: add-ballot-zip
description: >-
  Adds a new sample-ballot ZIP to the ca-primary-26 voter guide with the same
  depth as 92126 (Mira Mesa): topical candidate scorecards, portraits, ballot
  profile wiring, TL;DR rows, and build changelog. Use when adding a ZIP code,
  county ballot, or new regional race file.
---

# Add a ballot ZIP (template: 92126)

Use **92126** (`site/src/data/races-rest.ts` + `races-statewide.ts` + `ballot-profiles.ts`) as the quality bar—not the thinner first-pass Placer/LA stubs.

Also read `.cursor/skills/site-build-changelog/SKILL.md` and update the changelog in the same session.

## 1. Confirm ballot scope

1. **ZIP → districts** — Senate Office of Demographics zip directories, official sample ballot, or [lavote.gov](https://lavote.gov) / county registrar lookup.
2. **List every race** on that sample ballot: statewide (shared), federal, state leg, BoE district, county/city, judicial offices, measures.
3. **Prop 50** — Note if congressional lines changed; say so in `verificationNote`.

Record: ZIP, scope label, registrar URL, CA/US House #, SD #, AD #, BoE #, county-only race ids.

## 2. File layout

| File | Purpose |
|------|---------|
| `site/src/data/races-{region}.ts` | ZIP-only races (e.g. `races-placer.ts`, `races-la.ts`) |
| `site/src/data/tldr-{region}.ts` | TL;DR rows for those race ids only |
| `site/src/data/ballot-profiles.ts` | `{REGION}_ONLY_RACE_IDS`, categories, profile object, `BALLOT_ZIP_OPTIONS` |
| `site/src/data/build-ballot-data.ts` | Import and merge `{REGION}` races + TL;DR |
| `site/src/data/race-seat-context.ts` | `Incumbent` / `Open seat` for contested lines |
| `site/scripts/wiki-portrait-map.mjs` | Wikipedia titles for `photoSlug` |
| `site/src/data/candidate-extras.ts` | `campaignUrl`, `headshotUrl` when no wiki |

**Shared statewide races** stay in `races-statewide.ts` / `races-rest.ts`—do not duplicate.

**Exclusion sets:** each profile’s `excludeRaceIds` = union of every *other* region’s `*_ONLY_RACE_IDS` (see `92126`, `95765`, `91501`).

## 3. Race object template (match 92126)

```typescript
{
  id: 'assembly-ad78',           // kebab-case, stable forever
  categoryId: 'state-leg',       // must exist in profile categories
  title: 'State Assembly, District 78',
  kind: 'candidates',            // or 'measure'
  stakesParagraphs: [            // 2 paragraphs: office power + what's at stake locally
    '...',
    '...',
  ],
  introParagraphs: [             // 1–2: field size, who leads, local hook
    '...',
  ],
  candidates: [ /* see §4 */ ],
  crossTypology: ct([...]),       // 9 Pew codes; use helper `ct()` at top of file
  counterArguments: [            // 1–3 strings: "EL (X ●): But consider Y because..."
    '...',
  ],
}
```

**Measures** — copy structure from `measure-a` in `races-rest.ts`: `measure` block with `question`, `voterConnection`, `mechanismBullets`, `argumentsFor` / `argumentsAgainst`, `readingLinks`, typology picks for Yes/No.

## 4. Candidate template (match 92126)

Every **serious** candidate gets the same card shape as `ward` / `peters` in `races-rest.ts`:

```typescript
{
  id: 'ward',                    // unique globally; drives extras + portraits
  photoSlug: 'ward',             // optional: local public/images/candidates/{slug}.webp
  name: 'Chris Ward',
  party: 'D',
  role: 'Incumbent',             // ballot designation or job title
  bio: [                         // 1–3 strings; record, endorsements summary
    '...',
  ],
  scorecard: [                   // REQUIRED for contested races — topical rows
    {
      topic: 'Housing & transit',
      position: '✓✓ AB 2097 parking reform; YIMBY-credible incumbent record',
      comparison: 'One sentence vs leading opponents in this race.',
    },
    // 4–6 topics typical for leg/federal/county executive
  ],
  endorsements: '...',           // when known
  money: '...',                  // optional fundraising note
  redFlags: [],                  // or RedFlagBullet[] with sources
  notes: [],                     // FYI, not scandal tier
}
```

### Scorecard topics by office

| Office | Topics (pick 4–6) |
|--------|-------------------|
| U.S. House | Housing (federal), Climate, Health care, Immigration/border-adjacent, Trump / House majority, Seniority / district clout |
| State Senate / Assembly | Housing & transit, Climate, Education funding, Public safety, Taxes & fees, Caucus / ideology |
| BoE | Tax fairness, Labor vs business, Technocratic credentials, Property-owner appeals |
| County sheriff | Jails & conditions, Use of force / oversight, Crime trends, Recruitment, Reform vs status quo |
| County assessor | Assessment fairness, Transparency / corruption, Housing & data, Homeowner relief / Prop 13 |
| Superior Court | LACBA/SDCBA rating, Bench background (prosecutor/defense/civil), Ethics/discipline flags, Temperament/docket |

**Long shots** — still include `scorecard`, but use `?` positions and honest comparisons (see `arnous` in `us-rep-ca50`).

**Unopposed judges** — one row: `{ topic: 'Bar rating', position: '✓✓ Exceptionally Qualified' }` plus `notes` with bar association packet URL.

**Judicial intro** — cite evaluator: `LACBA June 2026` (LA) or `SDCBA June 2026` (SD); link in first candidate `notes` or race intro.

## 5. Portraits

1. **`photoSlug`** on candidate + matching key in `wiki-portrait-map.mjs` when English Wikipedia title is correct.
2. Else **`candidate-extras.ts`**: `campaignUrl`, `headshotUrl` (embeddable campaign asset).
3. Fetch locals: `cd site && ONLY=id1,id2 npm run fetch-portraits` then `npm run portrait-attribution`.
4. Mention new faces in `site-updates.ts` if voters will notice.

Never hotlink Wikipedia in `headshotUrl`—use fetch script for wiki images.

## 6. TL;DR + profile + changelog

**`tldr-{region}.ts`** — one row per ZIP-only race id; labels match accordion titles; cells match `crossTypology` picks.

**`ballot-profiles.ts`**

```typescript
'99xxx': {
  zip: '99xxx',
  scopeLabel: 'City, County',
  verificationNote: '...Prop 50 / district caveat...',
  registrarLabel: 'County sample ballot',
  registrarUrl: 'https://...',
  categories: BALLOT_CATEGORIES_{REGION},
  excludeRaceIds: new Set([...SAN_DIEGO_ONLY_RACE_IDS, ...PLACER_ONLY_RACE_IDS, ...LA_ONLY_RACE_IDS]),
},
```

**Changelog** — prepend panel naming ZIP, districts, major races; sync `meta.ts` `lastContentUpdated`.

## 7. Verification checklist

```
- [ ] ZIP in BALLOT_ZIP_OPTIONS; ?zip= works
- [ ] ALL_RACES includes new file; exclude sets keep other ZIPs clean
- [ ] Every contested race: stakesParagraphs, introParagraphs, crossTypology, counterArguments
- [ ] Every listed candidate: bio + scorecard (thin ok for long shots)
- [ ] race-seat-context for incumbents/open seats; unopposed auto-label ok for single-candidate
- [ ] TLDR_ROWS_{REGION} complete for ZIP-only ids
- [ ] Portraits: photoSlug+wiki and/or candidate-extras; fetch-portraits run
- [ ] npm run build in site/
- [ ] site-updates.ts + meta.ts dateLabel match
```

## 8. Reference paths (92126)

| Pattern | Example |
|---------|---------|
| Full contested leg race | `races-rest.ts` → `assembly-ad78` |
| Full federal race | `races-rest.ts` → `us-rep-ca50` |
| County executive | `races-rest.ts` → `county-treasurer`, `city-council-d6` |
| Contested judge | `races-rest.ts` → `judge-31`, `judge-32` |
| Unopposed judge | `races-rest.ts` → `judge-11` |
| Measure | `races-rest.ts` → `measure-a` |
| Second ZIP wiring | `races-placer.ts`, `ballot-profiles.ts` (`95765`) |

## 9. When to skip scorecards

Never skip for contested races voters are meant to compare. Only acceptable: genuinely empty public record—use `?` rows and say so in `comparison`.
