import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

/** TL;DR rows for LA legislative lines outside the 91501 Burbank ballot. */
export const TLDR_ROWS_LA_EXT: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  { raceId: 'senate-sd24', label: 'State Senate, SD-24', cells: C({ PL: 'Allen ●', EL: 'Allen ●', DM: 'Allen ●', OL: 'Allen ◐', SS: '— —', AR: 'Allen ◐', PR: 'Allen ◐', CC: 'Allen ◐', FF: 'Allen ◐' }) },
  { raceId: 'assembly-ad52', label: 'State Assembly, AD-52', cells: C({ PL: 'Caloza ●', EL: 'Caloza ●', DM: 'Caloza ●', OL: 'Caloza ◐', SS: '— —', AR: 'Caloza ◐', PR: 'Caloza ◐', CC: 'Caloza ◐', FF: 'Caloza ◐' }) },
];
