---
name: 2026 CA primary voter guide
overview: Produce a comprehensive, sourced, shareable 2026 California primary voter guide covering all races on a 92126 (Mira Mesa, San Diego) ballot, with picks across the full Pew political-typology spectrum plus per-candidate topical scorecards, confidence ratings, money flags, and counter-arguments. Delivered as a markdown file ready to paste into Google Docs.
todos:
  - id: fetch_endorsements
    content: Pull current endorsement lists for each top-tier candidate (CDP, CalLabor, SEIU, CTA, CFT, Sierra Club, CalEnviroVoters, Equality CA, Planned Parenthood, major editorial boards; CRP, Howard Jarvis, Reform CA for right-side picks) — directly verifying each link
    status: completed
  - id: gather_records
    content: Collect voting records / bills passed for incumbents (Bonta, Cohen, Weber, Peters, Ward, Lee, Elliott, etc.) and activism/donation history for non-officeholders (Porter, Steyer, Kim, Tubbs, Kellman, Petterson, Powell, etc.)
    status: completed
  - id: narrow_top6
    content: For Governor, Lt Governor, Insurance Commissioner, Superintendent — apply viability filter (polling, cash on hand, major endorsements, incumbency) and lock in the top 6
    status: completed
  - id: red_flag_audit
    content: Run a "red flag" pass across all candidates for scandals, conspiracy/election-denial history, dark-money funding, criminal history; filter low-polling fringe candidates and flag any high-polling problem candidate prominently
    status: completed
  - id: verify_districts
    content: Cover BOTH SD-39 (Akilah Weber Pierson incumbent) AND SD-40 (Elliott/Bruce-Lane/Musgrove) since 92126 boundary is ambiguous post-Prop 50; also verify CA-50, AD-78, City Council D6, Assessor/Recorder/County Clerk, and any school board sub-district for Mira Mesa
    status: completed
  - id: topical_scorecard
    content: Build a topical scorecard for each candidate covering housing, climate, public safety, abortion/reproductive rights, immigration, education, Gaza/Israel position, and Trump-era federal pushback
    status: completed
  - id: money_flags
    content: Pull top donors and independent-expenditure / super-PAC funding flags from Cal-Access and OpenSecrets for every covered candidate; flag any candidate where outside money is a meaningful share of total spending
    status: completed
  - id: judicial_section
    content: Write Superior Court section using SDCBA evaluations as primary signal, plus reporting on contested races (Office 31 Cleesattle vs Noakes; Office 32 three-way including the "Lacking Qualifications" candidate)
    status: completed
  - id: measure_a
    content: Write Measure A analysis with cross-typology recommendation matrix (housing supply, revenue use, exemption design, property-rights concerns)
    status: completed
  - id: typology_matrix
    content: Build the cross-typology recommendation matrix (Progressive Left → Faith and Flag Conservatives) for every race
    status: completed
  - id: write_md_file
    content: Compose voter-guide-2026.md with how-to-use intro, TL;DR matrix, per-race sections with typology picks + red flags, endorsement appendix, and sources; verify clean Google Docs paste rendering
    status: completed
isProject: false
---

## Deliverable

A single shareable markdown file at `voter-guide-2026.md` in the workspace root, written in 3rd person ("For Establishment Liberal voters...") so it's distributable to friends across the political spectrum, structured for clean copy/paste into Google Docs.

## Framing Change (per latest feedback)

This is no longer "my picks" — it is a **balanced, cross-typology voter guide** built around the [Pew political typology](https://www.pewresearch.org/politics/2021/political-typology/). Each race gets a recommendation per typology, plus a clearly labeled "Originally built for an Establishment Liberal voter in ZIP 92126" preamble.

### The 9 Pew typologies covered

Left-of-center:

- **Progressive Left** — young, secular, very liberal, pro-systemic-change
- **Establishment Liberals** — pro-compromise Biden-style liberals (the original requester)
- **Democratic Mainstays** — older, more religious, more racially diverse moderate Dems
- **Outsider Left** — young, frustrated, less party-loyal liberals

Middle:

- **Stressed Sideliners** — disengaged, politically mixed, financially anxious

Right-of-center:

- **Ambivalent Right** — moderate Republicans, anti-Trump-leaning
- **Populist Right** — working-class, anti-elite, MAGA-adjacent
- **Committed Conservatives** — traditional Reagan-Republican business conservatives
- **Faith and Flag Conservatives** — religious, MAGA core

Each race gets a compact recommendation row across all 9, with rationale only in cases where the pick is non-obvious.

## Red-Flag Policy (per latest feedback)

- Candidates with serious red flags (election denial, fraud convictions, well-documented scandals, conspiracy theories) are **excluded from the per-race narrative by default**.
- **Exception**: if such a candidate is polling in the top 2 (i.e., realistically viable), they get a prominent "RED FLAG" callout with specifics and links to corroborating reporting — so voters can make an informed choice rather than be surprised.
- This applies most notably to Governor (e.g., Chad Bianco's election-related statements, Steve Hilton's Fox News background) and any others that emerge during research.

## Race Coverage (in ballot order)

For each contest with >6 candidates, narrowed to the **top 6 by viability** (polling, fundraising, major endorsements, incumbency). Races with fewer candidates get full coverage.

### Statewide partisan (top-two open primary, June 2, 2026)

- **Governor** — narrow 61 candidates to 6. Likely Bianco (R), Hilton (R), Becerra (D), Porter (D), Villaraigosa (D), Steyer (D) or Mahan (D). Source: [CalMatters](https://calmatters.org/california-voter-guide-2026/governor/) / [Ballotpedia](<https://ballotpedia.org/California_gubernatorial_election,_2026_(June_2_top-two_primary)>)
- **Lieutenant Governor** — narrow ~13 to top 6 including Fiona Ma (D), Josh Fryday (D), Michael Tubbs (D), Janelle Kellman (D), Gloria Romero (R), Brian Jones (R). Source: [LA Times](https://www.latimes.com/california/story/2026-05-01/california-lieutenant-governor-election-voter-guide)
- **Secretary of State** — 4 candidates (Weber incumbent D; Wagner R; 2 Green). Source: [CalMatters](https://calmatters.org/california-voter-guide-2026/secretary-of-state/)
- **Controller** — 3 candidates (Cohen D incumbent, Morgan R, Adams PF). Source: [CalMatters](https://calmatters.org/california-voter-guide-2026/controller/)
- **Treasurer** — 6 candidates: Caballero (D), Kounalakis (D), Vazquez (D), Hawks (R) plus minor. Source: [CalMatters](https://calmatters.org/california-voter-guide-2026/treasurer/)
- **Attorney General** — 3 candidates: Bonta (D incumbent), Gates (R), Mikels (Green). Source: [CalMatters](https://calmatters.org/california-voter-guide-2026/attorney-general/)
- **Insurance Commissioner** — narrow 7 to top 6: Allen (D), Bradford (D), Kim (D), Wolff (D), Howell (R), Farren (R). Source: [CalMatters](https://calmatters.org/california-voter-guide-2026/insurance-commissioner/)
- **Board of Equalization, District 4** — 5 candidates: Arias (D), Petterson (D), Umberg (D), Bilodeau (R), Osborne (L). Source: [CalMatters](https://calmatters.org/california-voter-guide-2026/board-of-equalization/)

### Federal

- **U.S. Representative, CA-50** — Peters (D incumbent) + Arnous (D), Mitra (D), Huntington (R). Source: [Ballotpedia](https://ballotpedia.org/California%27s_50th_Congressional_District_election,_2026)

### State legislative

- **State Senate, District 39** (Mira Mesa likely falls here post-Prop 50) — Akilah Weber Pierson (D, incumbent) + any challengers; see [sd39.senate.ca.gov](https://sd39.senate.ca.gov/)
- **State Senate, District 40** (covered as backup in case 92126 falls here) — Mara Elliott (D), Kristie Bruce-Lane (R), Ed Musgrove (R). Source: [Coast News](https://thecoastnews.com/three-candidates-vying-for-40th-state-senate-seat-in-2026/) — guide will clearly mark which race applies to which boundary
- **State Assembly, District 78** — Ward (D incumbent), Galvez (R), Salguero (L). Source: [Ballotpedia](https://ballotpedia.org/California_State_Assembly_District_78)

### Statewide nonpartisan

- **Superintendent of Public Instruction** — narrow ~8 to top 6: Barrera, Henderson, Lara, Mattammal, Muratsuchi, Newman. Source: [CalMatters](https://calmatters.org/california-voter-guide-2026/superintendent-of-public-instruction/)

### Local San Diego

- **County Treasurer-Tax Collector** — Joel Anderson (R), Larry Cohen (D incumbent appointee), Shirley Nakawatase (R), Victor Roy. Source: [KPBS](https://www.kpbs.org/news/politics/2026/04/29/primary-2026-san-diego-county-treasurer-tax-collector-race-explainer)
- **San Diego City Council, District 6** — **Kent Lee (D, incumbent) vs. Mark Powell** per [Patch](https://patch.com/california/san-diego/san-diego-county-voter-guide-whats-june-2-ballot). Will cover Lee's Land Use & Housing chair record and Powell's background (former SDUSD board member).
- **Superior Court Judge, Office 11** — Leah Boucek (unopposed, SDCBA: Exceptionally Qualified)
- **Superior Court Judge, Office 18** — Tracy Prior (unopposed, Exceptionally Qualified)
- **Superior Court Judge, Office 31** — Jodi Cleesattle (Exceptionally Qualified) vs. Adam Noakes (Well Qualified)
- **Superior Court Judge, Office 32** — Nicole D'Ambrogi (**Lacking Qualifications** — red flag), David Gallo (Unable to Evaluate), Tia Ramirez (Qualified)
- **Superior Court Judge, Office 34** — Laurie Hauf (unopposed, Exceptionally Qualified)

Source: [SDCBA Judicial Evaluations](https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations)

### Ballot measure

- **Measure A — Non-Primary Homes (Empty Homes) Tax** — $8K-$10K/yr tax on vacant non-primary residences, est. $9-24M/yr to general fund. Cross-typology Yes/No recommendations. Source: [KPBS](https://www.kpbs.org/news/politics/2026/04/20/2026-primary-election-measure-a-non-primary-homes-tax-empty-homes)

### Items explicitly NOT covered (verified off-ballot)

- District Attorney (Stephan's term runs to 2029)
- Sheriff (not up in 2026)
- Board of Supervisors D2 / D4 (D4 primary canceled; D2 not up this cycle)
- SD Unified School Board Sub-District C (coastal — outside 92126)

### Items to verify against the user's sample ballot

- County Assessor/Recorder/County Clerk
- Six statewide propositions (the user said they will handle these separately — guide will mention they exist with a one-line pointer to [Ballotpedia](https://ballotpedia.org/California_2026_ballot_propositions) but no analysis)
- Any 92126-specific community college board / special district contests

## Per-Candidate Standard Format

- **Header**: Name (Party) — current role
- **Background paragraph** (1 paragraph): career arc; for officeholders include 2-3 notable bills/votes (e.g., Bonta: 50+ anti-Trump lawsuits, criminal-justice record; Ward: AB 2097 parking reform, housing bills); for non-officeholders include activism / donations / nonprofit work
- **Topical scorecard** (compact 8-row table): position on **Housing, Climate, Public Safety, Abortion, Immigration, Education, Gaza/Israel, Trump Pushback** — using symbols (✓ supports / ✗ opposes / ~ mixed / ? unclear) with one-phrase clarifier
- **Money flags**: top 3 donor sectors / individuals, total raised, any independent-expenditure committee shadows (sourced from [Cal-Access](https://cal-access.sos.ca.gov/) for state and [OpenSecrets](https://www.opensecrets.org/) for federal)
- **Endorsements bullets**: Top 3-5 union/party/advocacy/editorial-board endorsements
- **Red flags** (if any): bullet list with sources

## Per-Race Recommendation Format

At the end of each race, a compact recommendation block:

- **Cross-typology pick row**: 9-cell row for Progressive Left → Faith and Flag Conservatives, each cell shows the recommended candidate plus a **confidence dot** (● HIGH / ◐ MEDIUM / ○ LOW)
- **Strongest counter-argument** (1 line per pick where confidence is not HIGH): "But consider: [steelman of the alternative]" — keeps the guide honest and helps readers think independently

## Output Structure of `voter-guide-2026.md`

1. **Title & origin note** ("Originally built for an Establishment Liberal voter in 92126; designed to be useful across the political spectrum")
2. **How to use this guide** — methodology, Pew typology link, source hierarchy, red-flag policy, caveats
3. **TL;DR matrix** — big table: rows = races, columns = typologies, cells = recommended pick + confidence dot
4. **Detailed race sections** in ballot order (with cross-typology mini-table at the bottom of each)
5. **Measure A** with cross-typology Yes/No table
6. **Red flags appendix** — every flagged candidate in one place
7. **Endorsement cheat-sheet appendix** — grouped by endorsing org (CDP, CalLabor, SEIU, CTA/CFT, Sierra Club/CEV, Equality CA, Planned Parenthood, CRP, Howard Jarvis, Reform CA, major editorial boards) showing who they backed in each race
8. **Sources & methodology**

## Source Hierarchy (listed in the doc)

1. **Primary/official**: CA Secretary of State, San Diego Registrar (sdvote.com), SDCBA judicial evaluations, candidate filings
2. **Campaign finance**: [Cal-Access](https://cal-access.sos.ca.gov/) for state races, [OpenSecrets](https://www.opensecrets.org/) for federal, [FollowTheMoney.org](https://www.followthemoney.org/) for cross-checks, [San Diego City Clerk](https://www.sandiego.gov/city-clerk/elections) for local
3. **News/journalism (non-opinion)**: CalMatters, LAist, KPBS, San Diego Union-Tribune (news side), [Times of San Diego](https://timesofsandiego.com/), LA Times (news), Sacramento Bee (news), Voice of San Diego, inewsource, Coast News, AP, Reuters
4. **Reference**: Ballotpedia, Wikipedia (cross-checked)
5. **Endorsement databases (left)**: CDP, CalLabor, SEIU CA, CTA, CFT, Sierra Club CA, California Environmental Voters, Equality California, Planned Parenthood Affiliates of CA
6. **Endorsement databases (right)**: CA Republican Party, Howard Jarvis Taxpayers Assoc, Reform California, CA Republican Assembly
7. **Editorial board endorsements** (cited as informative opinion, clearly labeled): **San Diego Union-Tribune editorial board** (especially for local SD races — their endorsements include written rationale), LA Times, Sacramento Bee, SF Chronicle where relevant
8. **Excluded**: Fox News opinion, single-source partisan blogs, candidate-self-published claims without corroboration

## Important Caveats Noted in the Document

- Post-Prop 50 mid-decade redistricting (Nov 2025) shifted district boundaries — readers should verify against their official sample ballot
- The six statewide propositions are NOT covered in this guide; readers should refer to the official voter guide or Ballotpedia
- For non-incumbents with sparse records, less data is available — uncertainty is explicit, not papered over
- Endorsements are timestamped (most current as of guide-write date) since they can shift before June 2
- Originally built for an Establishment Liberal voter; cross-typology picks are inferences from each typology's published values, not direct polling of those groups

## Process

After approval, switch to agent mode, fetch additional details from per-race sources (Ballotpedia/CalMatters/KPBS/SDCBA pages cached in agent-tools, plus live endorsement pages, Cal-Access for state campaign finance, OpenSecrets for federal), run the red-flag audit, then write the single markdown file. **Estimated length: ~7,000-9,000 words** (longer than prior plan due to topical scorecards, money flags, counter-arguments, and covering both SD-39 and SD-40).
