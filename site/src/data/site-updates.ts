/**
 * Changelog for the header “what changed in this build” section.
 * Newest build first. Keep `dateLabel` in sync with `BALLOT_META.lastContentUpdated`.
 */
export interface SiteUpdatePanel {
  summary: string;
  body?: string;
  bullets?: string[];
}

export interface SiteUpdateBuild {
  dateLabel: string;
  lede: string;
  panels: SiteUpdatePanel[];
}

export const SITE_UPDATE_BUILDS: SiteUpdateBuild[] = [
  {
    dateLabel: 'May 15, 2026',
    lede:
      'More sample-ballot areas are available (North County San Diego, South Bay Chula Vista, Orange, Hollywood, Murrieta, and Placer’s Rocklin area), with congressional and legislative lines updated for Prop 50, county and school contests where we cover them, and a governor horserace snapshot from Emerson / Inside California Politics.',
    panels: [
      {
        summary: 'Mountain View (94043) — Santa Clara County stack',
        body:
          'Adds 94043 to the ZIP picker with CA-16 (Liccardo jungle), Assembly 26 (Patrick Ahrens vs Tim Gorsulowsky), SCC District Attorney (Rosen vs Chung), uncontested assessor and sheriff lines, and Board of Equalization District 2 shared with our Hayward ballot data. Odd State Senate seats (including SD-13) are off-cycle in June 2026—no Senate line here. Wikipedia portraits fetched for Liccardo and Ahrens.',
      },
      {
        summary: 'Escondido (92026) — inland Senate 40 · Assembly 75',
        body:
          'Adds 92026 to the ZIP picker with the open Senate District 40 field plus Assembly District 75 (Carl DeMaio vs Gerald Boursiquot) instead of coastal AD-78. Countywide contests match other San Diego County ballots we publish, omitting strictly City-of-San-Diego races (Council District 6, Measure A). House.gov warns the ZIP overlaps CA-48 Issa territory and Peters CA-50—this ballot follows Peters CA-50; Issa-sided addresses should follow the registrar printout. Carl DeMaio’s tile uses the Wikipedia assembly portrait we fetched locally.',
      },
      {
        summary: 'Hayward (94544) — Alameda County ballot scope',
        body:
          'The ZIP picker now lists 94544 (Hayward) with companion research for Congress 14, Senate 10, Assembly 20, Board of Equalization District 2, Alameda Supervisor District 2, and Hayward USD Measure G, plus statewide rows. Local Wikipedia portraits were fetched where stable articles exist—Assemblymember Liz Ortega, state Senator Aisha Wahab (running for Congress 14), and incumbent BOE member Sally Lieber. Official county PDFs anchor the parcel-tax question; bordering addresses may pull different trustee areas or Oakland measures—trust your registrar sample ballot when lines split.',
      },
      {
        summary: '“Record vs. change” blurbs on opposed incumbents',
        body:
          'Sitting officeholders in contested primaries now get a short “Record vs. change” callout under the bio when we have copy—what they have delivered and when turnover is likely worth losing seniority or momentum. Methodology explains when it appears; single-candidate and unopposed lines skip it.',
      },
      {
        summary: 'Political “type” colors on the guide',
        body:
          'The blue-to-red spectrum for voter types (progressive through conservative) now uses even steps across the page—chips, key, and category headers match—so it is easier to read at a glance.',
      },
      {
        summary: 'Governor — horserace polling on each card',
        body:
          'Emerson College / Inside California Politics first-choice shares (May 9–10, 2026) appear under each leading candidate’s title line. Matt Mahan replaces Antonio Villaraigosa in the main list because Emerson showed Mahan ahead among the names we feature. Cards are ordered by that poll’s valid-percent ranking.',
      },
      {
        summary: 'New ballot areas in the ZIP menu',
        bullets: [
          '92131 — Scripps Ranch: Senate 40, Assembly 77, county judges, Measure A (not the Mira Mesa City Council or Assembly 78 lines).',
          '92009 — Carlsbad: Congress 49, Senate 38, Assembly 77, plus North County local races we list.',
          '92139 — Paradise Hills: Congress 51, Senate 39, Assembly 80.',
          '91911 — Chula Vista: Congress 52 (Juan Vargas), Senate 18 (Steve Padilla vs Art Hodges), Assembly 80—same countywide San Diego contests and Measure A as other San Diego ZIPs we list, not the Paradise Hills Congress 51 / Senate 39 pairing.',
          '92868 — Orange: Congress 46, Senate 34, Assembly 68, Orange County sheriff; sample-ballot link points to Orange County.',
          '90028 — Hollywood: same Los Angeles County offices as Burbank, but Senate 24 (Ben Allen) and Assembly 52 (Jessica Caloza), not the San Fernando Valley Senate 20 / Assembly 44 pairing.',
          '92562 — Murrieta: Congress 40 (including Ken Calvert and Young Kim), Senate 32, Assembly 71, Board of Equalization District 3, Riverside County assessor–recorder–clerk, Murrieta Valley school board Area 3 special; sample-ballot link points to Riverside County.',
          '92026 — Escondido: inland North County pairing with Senate 40, Assembly 75 (not coastal AD-77/SD-38), county judges and treasurer—but not City of San Diego Council D6 or Measure A. CA-48 vs CA-50 varies by address; modeled as Peters CA-50 here.',
          '94043 — Mountain View: Congress 16, Assembly 26, BoE District 2 (shared module), Santa Clara DA Rosen vs Chung, county assessor/sheriff uncontested on our stack; no Senate 13 line in June even-year cycle.',
        ],
      },
      {
        summary: 'South Bay — Chula Vista candidate photos',
        body: 'Headshots for Congressman Juan Vargas and State Senator Steve Padilla appear on the Chula Vista (91911) ballot.',
      },
      {
        summary: '91501 — Burbank and Los Angeles County',
        body:
          'Pick Burbank to see Laura Friedman’s Congress 30 race, Caroline Menjivar for Senate 20, Nick Schultz for Assembly 44, Board of Equalization District 3, the crowded county sheriff race (including Robert Luna and Alex Villanueva), assessor Jeffrey Prang’s re-election, countywide judge contests, and Measure ER (county sales tax for health services). Other ZIPs keep their own San Diego–only or Placer–only local races.',
      },
      {
        summary: '91501 — deeper candidate cards',
        bullets: [
          'Congress, Legislature, Board of Equalization, sheriff, and assessor candidates include short topic scorecards (housing, public safety, tax fairness, jail oversight, and similar).',
          'Los Angeles Superior Court races note June 2026 LACBA bar ratings where we use them.',
          'Photos added or refreshed for Friedman, Menjivar, Gipson, Villanueva, Schultz, Luna, Prang, and several judicial candidates.',
        ],
      },
      {
        summary: '95765 — Rocklin and south Placer',
        body:
          'Includes Congress 6 (Kevin Kiley and Democratic challengers), Senate 6 (Roger Niello, Sean Frame, Sara Velasco), Assembly 5 (Joe Patterson, Neva Parker), Board of Equalization District 1, Superior Court office 3 (David Bass, Leon Dixson), and county superintendent of schools, assessor, auditor-controller, clerk-recorder-registrar, and treasurer-tax collector. San Diego–only contests (for example Congress 50, Senate 40, Assembly 78, City Council District 6, listed San Diego judges, Measure A) remain on the San Diego sample ballots.',
      },
      {
        summary: 'Choosing your area and registrar',
        bullets: [
          'Use the ZIP menu at the top to switch the whole guide to another sample ballot.',
          'The scope banner and “official sample ballot” link follow your pick (Los Angeles, San Diego, Placer, Orange, or Riverside registrars as applicable).',
        ],
      },
      {
        summary: '95765 — candidate photos',
        bullets: [
          'Photos for Kiley, Pan, Niello, Grove, Patterson, Ho, Tomlinson, Frame, Parker, Bass, Dixson, Esparza, and county superintendent Garbolino-Mojica.',
          'A few uncontested county races still show initials instead of a portrait where we have not added a photo yet.',
        ],
      },
      {
        summary: 'Unopposed races',
        body:
          'Single-candidate races now say “Unopposed” in the race title bar (for example listed San Diego Superior Court offices and several uncontested Placer county offices). Contested races still say whether the seat is open or has an incumbent where we note that.',
      },
      {
        summary: 'Democratic party mark',
        body:
          'The small donkey beside Democratic candidates is slightly larger so it better matches the elephant and other marks.',
      },
    ],
  },
  {
    dateLabel: 'May 14, 2026',
    lede:
      'A focused editorial and UX pass: judicial job lines, official portraits where campaigns publish them, and tighter mobile behavior for wide tables. Open a topic for specifics.',
    panels: [
      {
        summary: 'San Diego Superior Court — current titles on each judge line',
        body:
          'Role blurbs now match day-job titles instead of generic “Candidate” / “Unopposed” where we had a clear source: chief deputy city attorney (Ramirez), civil litigator (Gallo), chief deputy district attorney (Prior, unopposed), assistant chief deputy district attorney (Hauf, unopposed), Superior Court commissioner (Boucek, unopposed), senior deputy attorney general (Cleesattle), administrative law judge with civil-litigation background (Noakes), and estate & family law attorney plus law-school clinical director (D’Ambrogi).',
      },
      {
        summary: 'Campaign headshots in candidate tiles',
        body:
          'Merged-in portrait URLs were refreshed for a long list of races (San Diego judicial primaries, county and city contests, and several statewide nonpartisan lines) so tiles favor each campaign’s primary photo asset when the host allows embedding. If a remote image fails in your browser, it is usually hotlink protection on that host—not a broken build.',
      },
      {
        summary: 'Layout, tables, and notes on phones',
        bullets: [
          'Dropped the old fixed minimum page width so the guide reflows on narrow viewports.',
          'Wrapped wide typology and scorecard tables in horizontal scroll regions so you can pan without squashing text.',
          'Viewport meta uses safe-area insets for notched phones; candidate notes automatically link bare https:// URLs.',
        ],
      },
    ],
  },
];

/** Build whose `dateLabel` matches `BALLOT_META.lastContentUpdated`, else newest. */
export function siteUpdateBuildForDate(lastContentUpdated: string): SiteUpdateBuild {
  return SITE_UPDATE_BUILDS.find((b) => b.dateLabel === lastContentUpdated) ?? SITE_UPDATE_BUILDS[0];
}

export function earlierSiteUpdateBuilds(lastContentUpdated: string): SiteUpdateBuild[] {
  const current = siteUpdateBuildForDate(lastContentUpdated);
  return SITE_UPDATE_BUILDS.filter((b) => b !== current);
}
