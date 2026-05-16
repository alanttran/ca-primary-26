import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

/** TL;DR rows for races that appear only on the 92562 (Murrieta / Riverside) ballot. BoE D3 row lives in `tldr-la.ts`. */
export const TLDR_ROWS_RIVERSIDE: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  {
    raceId: 'us-rep-ca40',
    label: 'U.S. Rep, CA-40',
    cells: C({
      PL: 'Kerr ●',
      EL: 'Varet ●',
      DM: 'Kerr ●',
      OL: 'Varet ◐',
      SS: 'Linh ○',
      AR: 'Y. Kim ●',
      PR: 'Calvert ●',
      CC: 'Calvert ●',
      FF: 'Y. Kim ●',
    }),
  },
  {
    raceId: 'senate-sd32',
    label: 'State Senate, SD-32',
    cells: C({ PL: 'Tate ●', EL: 'Tate ◐', DM: 'Tate ●', OL: 'Tate ◐', SS: '— —', AR: 'Seyarto ●', PR: 'Seyarto ●', CC: 'Seyarto ●', FF: 'Seyarto ●' }),
  },
  {
    raceId: 'assembly-ad71',
    label: 'State Assembly, AD-71',
    cells: C({ PL: 'Galvez ●', EL: 'Galvez ◐', DM: 'Galvez ●', OL: 'Galvez ◐', SS: '— —', AR: 'Sanchez ●', PR: 'Sanchez ●', CC: 'Sanchez ●', FF: 'Sanchez ●' }),
  },
  {
    raceId: 'rivco-assessor-clerk',
    label: 'RivCo Assessor-Recorder-Clerk',
    cells: C({ PL: 'McBride ◐', EL: 'Aldana ●', DM: 'Aldana ●', OL: 'McBride ◐', SS: '— —', AR: 'Aldana ◐', PR: 'McBride ◐', CC: 'Aldana ●', FF: '— —' }),
  },
  {
    raceId: 'rivco-mvusd-area3',
    label: 'MVUSD Board, Area 3 (special)',
    cells: C({ PL: 'Emmer ●', EL: 'Vandegrift ●', DM: 'Vandegrift ●', OL: 'Emmer ◐', SS: '— —', AR: 'Vandegrift ◐', PR: 'Vandegrift ◐', CC: 'Emmer ◐', FF: 'Vandegrift ◐' }),
  },
];
