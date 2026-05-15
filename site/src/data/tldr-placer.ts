import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

/** TL;DR rows for races that appear only on the 95765 (Placer) ballot. */
export const TLDR_ROWS_PLACER: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  { raceId: 'boe-d1', label: 'Board of Equalization, D1', cells: C({ PL: 'Esparza ●', EL: 'Esparza ●', DM: 'Esparza ●', OL: 'Esparza ◐', SS: '— —', AR: 'Grove ○', PR: 'Grove ◐', CC: 'Grove ●', FF: 'Grove ●' }) },
  { raceId: 'us-rep-ca6', label: 'U.S. Rep, CA-6', cells: C({ PL: 'Tomlinson ◐', EL: 'Ho ◐', DM: 'Ho ●', OL: 'Tomlinson ○', SS: '— —', AR: 'Kiley ◐', PR: 'Kiley ◐', CC: 'Kiley ●', FF: 'Kiley ●' }) },
  { raceId: 'senate-sd6', label: 'State Senate, SD-6', cells: C({ PL: 'Frame ●', EL: 'Frame ◐', DM: 'Frame ●', OL: 'Frame ◐', SS: '— —', AR: 'Niello ◐', PR: 'Niello ◐', CC: 'Niello ●', FF: 'Niello ●' }) },
  { raceId: 'assembly-ad5', label: 'State Assembly, AD-5', cells: C({ PL: 'Parker ●', EL: 'Parker ◐', DM: 'Parker ●', OL: 'Parker ◐', SS: '— —', AR: 'Patterson ◐', PR: 'Patterson ●', CC: 'Patterson ●', FF: 'Patterson ●' }) },
  { raceId: 'placer-judge-3', label: 'Superior Court, Office 3', cells: C({ PL: 'Dixson ◐', EL: 'Dixson ◐', DM: 'Dixson ◐', OL: 'Dixson ○', SS: 'Dixson ◐', AR: 'Bass ◐', PR: 'Bass ◐', CC: 'Bass ●', FF: 'Bass ●' }) },
  { raceId: 'placer-county-superintendent', label: 'County Superintendent of Schools', cells: C({ PL: 'Garbolino-Mojica ●', EL: 'Garbolino-Mojica ●', DM: 'Garbolino-Mojica ●', OL: 'Garbolino-Mojica ●', SS: 'Garbolino-Mojica ●', AR: 'Garbolino-Mojica ●', PR: 'Garbolino-Mojica ●', CC: 'Garbolino-Mojica ●', FF: 'Garbolino-Mojica ●' }) },
  { raceId: 'placer-assessor', label: 'County Assessor', cells: C({ PL: 'Maynard ●', EL: 'Maynard ●', DM: 'Maynard ●', OL: 'Maynard ●', SS: 'Maynard ●', AR: 'Maynard ●', PR: 'Maynard ●', CC: 'Maynard ●', FF: 'Maynard ●' }) },
  { raceId: 'placer-auditor-controller', label: 'County Auditor-Controller', cells: C({ PL: 'Sisk ●', EL: 'Sisk ●', DM: 'Sisk ●', OL: 'Sisk ●', SS: 'Sisk ●', AR: 'Sisk ●', PR: 'Sisk ●', CC: 'Sisk ●', FF: 'Sisk ●' }) },
  { raceId: 'placer-clerk-recorder', label: 'Clerk-Recorder-Registrar', cells: C({ PL: 'Ronco ●', EL: 'Ronco ●', DM: 'Ronco ●', OL: 'Ronco ●', SS: 'Ronco ●', AR: 'Ronco ●', PR: 'Ronco ●', CC: 'Ronco ●', FF: 'Ronco ●' }) },
  { raceId: 'placer-treasurer', label: 'Treasurer-Tax Collector', cells: C({ PL: 'Butcher ●', EL: 'Butcher ●', DM: 'Butcher ●', OL: 'Butcher ●', SS: 'Butcher ●', AR: 'Butcher ●', PR: 'Butcher ●', CC: 'Butcher ●', FF: 'Butcher ●' }) },
];
