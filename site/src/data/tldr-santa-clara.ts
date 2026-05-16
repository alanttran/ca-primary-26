import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

/** TL;DR rows for ZIP 94043 (Mountain View / Santa Clara County) wired in `ballot-profiles.ts`. */
export const TLDR_ROWS_SANTA_CLARA: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  {
    raceId: 'us-rep-ca16',
    label: 'U.S. Rep, CA-16',
    cells: C({
      PL: 'Liccardo ●',
      EL: 'Liccardo ●',
      DM: 'Liccardo ●',
      OL: 'Stein ◐',
      SS: '— —',
      AR: 'Johnson ○',
      PR: 'Johnson ◐',
      CC: 'Johnson ◐',
      FF: 'Stein ●',
    }),
  },
  {
    raceId: 'assembly-ad26',
    label: 'State Assembly, AD-26',
    cells: C({
      PL: 'Ahrens ●',
      EL: 'Ahrens ●',
      DM: 'Ahrens ●',
      OL: 'Ahrens ●',
      SS: '— —',
      AR: 'Gorsulowsky ◐',
      PR: 'Gorsulowsky ◐',
      CC: 'Gorsulowsky ◐',
      FF: 'Ahrens ◐',
    }),
  },
  {
    raceId: 'scc-da-2026',
    label: 'Santa Clara Co. DA',
    cells: C({
      PL: 'Rosen ●',
      EL: 'Rosen ●',
      DM: 'Rosen ◐',
      OL: 'Chung ◐',
      SS: '— —',
      AR: 'Chung ●',
      PR: 'Chung ●',
      CC: 'Chung ●',
      FF: 'Rosen ●',
    }),
  },
  {
    raceId: 'scc-assessor-2026',
    label: 'Santa Clara Co. Assessor',
    cells: C({
      PL: 'Fligor ●',
      EL: 'Fligor ●',
      DM: 'Fligor ●',
      OL: 'Fligor ●',
      SS: 'Fligor ●',
      AR: 'Fligor ●',
      PR: 'Fligor ●',
      CC: 'Fligor ●',
      FF: 'Fligor ●',
    }),
  },
  {
    raceId: 'scc-sheriff-2026',
    label: 'Santa Clara Co. Sheriff',
    cells: C({
      PL: 'Jonsen ●',
      EL: 'Jonsen ●',
      DM: 'Jonsen ●',
      OL: 'Jonsen ●',
      SS: 'Jonsen ●',
      AR: 'Jonsen ●',
      PR: 'Jonsen ●',
      CC: 'Jonsen ●',
      FF: 'Jonsen ●',
    }),
  },
];
