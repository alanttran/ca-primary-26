import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

/** TL;DR rows for alternate San Diego County federal & legislative lines. */
export const TLDR_ROWS_SD_ALT: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  { raceId: 'us-rep-ca49', label: 'U.S. Rep, CA-49', cells: C({ PL: 'Levin ●', EL: 'Levin ●', DM: 'Levin ●', OL: 'Levin ◐', SS: '— —', AR: 'Gunderson ◐', PR: 'Gunderson ◐', CC: 'Gunderson ●', FF: 'Gunderson ●' }) },
  { raceId: 'senate-sd38', label: 'State Senate, SD-38', cells: C({ PL: 'Blakespear ●', EL: 'Blakespear ●', DM: 'Blakespear ●', OL: 'Blakespear ◐', SS: '— —', AR: 'Blakespear ◐', PR: 'Blakespear ◐', CC: 'Blakespear ◐', FF: 'Blakespear ◐' }) },
  { raceId: 'assembly-ad77', label: 'State Assembly, AD-77', cells: C({ PL: 'Boerner Horvath ●', EL: 'Boerner Horvath ●', DM: 'Boerner Horvath ●', OL: 'Boerner Horvath ◐', SS: '— —', AR: 'Boerner Horvath ◐', PR: 'Boerner Horvath ◐', CC: 'Boerner Horvath ◐', FF: 'Boerner Horvath ◐' }) },
  { raceId: 'assembly-ad75', label: 'State Assembly, AD-75', cells: C({ PL: 'Boursiquot ●', EL: 'DeMaio ●', DM: 'DeMaio ◐', OL: 'Boursiquot ◐', SS: 'DeMaio ○', AR: 'DeMaio ●', PR: 'DeMaio ●', CC: 'DeMaio ●', FF: 'DeMaio ◐' }) },
  { raceId: 'us-rep-ca51', label: 'U.S. Rep, CA-51', cells: C({ PL: 'Jacobs ●', EL: 'Jacobs ●', DM: 'Jacobs ●', OL: 'Jacobs ◐', SS: '— —', AR: 'Jacobs ◐', PR: 'Jacobs ◐', CC: 'Jacobs ◐', FF: 'Jacobs ◐' }) },
  { raceId: 'senate-sd39', label: 'State Senate, SD-39', cells: C({ PL: 'Weber ●', EL: 'Weber ●', DM: 'Weber ●', OL: 'Weber ◐', SS: '— —', AR: 'Weber ◐', PR: 'Weber ◐', CC: 'Weber ◐', FF: 'Weber ◐' }) },
  { raceId: 'assembly-ad80', label: 'State Assembly, AD-80', cells: C({ PL: 'Alvarez ●', EL: 'Alvarez ●', DM: 'Alvarez ●', OL: 'Khan ◐', SS: '— —', AR: 'Galicia ◐', PR: 'Galicia ◐', CC: 'Galicia ●', FF: 'Galicia ●' }) },
  { raceId: 'us-rep-ca52', label: 'U.S. Rep, CA-52', cells: C({ PL: 'Vargas ●', EL: 'Vargas ●', DM: 'Vargas ●', OL: 'Vargas ◐', SS: '— —', AR: 'Vargas ◐', PR: 'Vargas ◐', CC: 'Vargas ◐', FF: 'Vargas ◐' }) },
  { raceId: 'senate-sd18', label: 'State Senate, SD-18', cells: C({ PL: 'Padilla ●', EL: 'Padilla ●', DM: 'Padilla ●', OL: 'Padilla ◐', SS: '— —', AR: 'Hodges ●', PR: 'Hodges ●', CC: 'Hodges ◐', FF: 'Hodges ●' }) },
];
