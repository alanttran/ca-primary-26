import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

/** TL;DR rows for Orange County (92868) ballot lines. */
export const TLDR_ROWS_ORANGE: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  { raceId: 'us-rep-ca46', label: 'U.S. Rep, CA-46', cells: C({ PL: 'Correa ●', EL: 'Correa ●', DM: 'Correa ●', OL: 'Correa ◐', SS: '— —', AR: 'Correa ◐', PR: 'Correa ◐', CC: 'Correa ◐', FF: 'Correa ◐' }) },
  { raceId: 'senate-sd34', label: 'State Senate, SD-34', cells: C({ PL: 'Umberg ●', EL: 'Umberg ●', DM: 'Umberg ●', OL: 'Umberg ◐', SS: '— —', AR: 'Umberg ◐', PR: 'Umberg ◐', CC: 'Umberg ◐', FF: 'Umberg ◐' }) },
  { raceId: 'assembly-ad68', label: 'State Assembly, AD-68', cells: C({ PL: 'Valencia ●', EL: 'Valencia ●', DM: 'Valencia ●', OL: 'Valencia ◐', SS: '— —', AR: 'Valencia ◐', PR: 'Valencia ◐', CC: 'Valencia ◐', FF: 'Valencia ◐' }) },
  { raceId: 'oc-sheriff', label: 'Orange County Sheriff', cells: C({ PL: 'Barnes ◐', EL: 'Barnes ◐', DM: 'Barnes ◐', OL: '— —', SS: 'Barnes ◐', AR: 'Barnes ●', PR: 'Barnes ●', CC: 'Barnes ●', FF: 'Barnes ●' }) },
];
