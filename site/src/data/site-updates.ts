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
      'Multi-ZIP ballots: choose 92126 (Mira Mesa) or 95765 (Rocklin) from the header. Placer County local races, CA-06 / SD-06 / AD-05, and BoE District 1 replace the San Diego–specific federal, legislative, and county lines for that ZIP.',
    panels: [
      {
        summary: 'ZIP 95765 — Placer County ballot',
        body:
          'Rocklin and south Placer voters now get CA-06 (Kevin Kiley and Democratic challengers), State Senate SD-06 (Roger Niello vs Sean Frame and Sara Velasco), Assembly AD-05 (Joe Patterson vs Neva Parker), Board of Equalization District 1, Superior Court Office 3 (David Bass vs Leon A. Dixson), and county superintendent, assessor, auditor-controller, clerk-recorder-registrar, and treasurer-tax collector lines. San Diego–only races (CA-50, SD-40, AD-78, city council, SD judicial offices, Measure A) stay on the 92126 ballot only.',
      },
      {
        summary: 'Ballot ZIP selector and registrar links',
        bullets: [
          'Header dropdown switches ballot content; `?zip=95765` or `?zip=92126` in the URL for sharing.',
          'Scope banner and sample-ballot link follow the active ZIP (sdvote.com vs placerelections.com).',
          'Race data lives in `races-placer.ts` and `ballot-profiles.ts`; statewide races are shared across ZIPs.',
        ],
      },
      {
        summary: 'Placer candidate portraits',
        bullets: [
          'Local WebP headshots (Wikipedia) for Kiley, Pan, Niello, Grove, and Patterson.',
          'Campaign-site photos for Ho, Tomlinson, Frame, Parker, Bass, Dixson, Esparza, and county superintendent Garbolino-Mojica.',
          'Unopposed county lines without a public headshot still show initials until we source an image.',
        ],
      },
      {
        summary: 'Unopposed race labels in headers',
        body:
          'Races with only one candidate now show “Unopposed” in the accordion title (San Diego Superior Court offices 11, 18, and 34; Placer county superintendent, assessor, auditor-controller, clerk-recorder, and treasurer-tax collector). Contested seats still use Incumbent / Open seat from the manual map.',
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
