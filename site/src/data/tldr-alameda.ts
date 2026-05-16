import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

/** TL;DR rows for races that appear only on the Hayward-area (94544) sample ballot wired in `ballot-profiles.ts`. */
export const TLDR_ROWS_ALAMEDA: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  {
    raceId: 'us-rep-ca14',
    label: 'U.S. Rep, CA-14',
    cells: C({
      PL: 'Hernandez ●',
      EL: 'Wahab ●',
      DM: 'Wahab ◐',
      OL: 'Israni ◐',
      SS: 'Huang ○',
      AR: 'Huang ●',
      PR: 'Chenault ○',
      CC: 'Israni ◐',
      FF: 'Huang ◐',
    }),
  },
  {
    raceId: 'senate-sd10',
    label: 'State Senate, SD-10',
    cells: C({
      PL: 'Kepner ●',
      EL: 'Cohen ●',
      DM: 'Cohen ◐',
      OL: 'Montano ◐',
      SS: 'Liu ○',
      AR: 'Price ●',
      PR: 'Sakakihara ◐',
      CC: 'Cohen ●',
      FF: 'Price ◐',
    }),
  },
  {
    raceId: 'assembly-ad20',
    label: 'State Assembly, AD-20',
    cells: C({
      PL: 'Ortega ●',
      EL: 'Ortega ●',
      DM: 'Ortega ●',
      OL: 'Ortega ●',
      SS: 'Muga ○',
      AR: 'Muga ●',
      PR: 'Muga ◐',
      CC: 'Muga ◐',
      FF: 'Muga ◐',
    }),
  },
  {
    raceId: 'boe-d2',
    label: 'Board of Equalization, D2',
    cells: C({
      PL: 'Lieber ●',
      EL: 'Lieber ●',
      DM: 'Lieber ◐',
      OL: 'Pimentel ◐',
      SS: 'Marymee ○',
      AR: 'Marymee ●',
      PR: 'Marymee ●',
      CC: 'Shireman ◐',
      FF: 'Marymee ◐',
    }),
  },
  {
    raceId: 'alameda-sup-d2',
    label: 'Alameda Co. Supervisor, D2',
    cells: C({
      PL: 'Marquez ●',
      EL: 'Marquez ●',
      DM: 'Ames ◐',
      OL: 'Marfatia ◐',
      SS: 'Marquez ○',
      AR: 'Marfatia ○',
      PR: 'Marquez ◐',
      CC: 'Marfatia ●',
      FF: 'Marquez ◐',
    }),
  },
  {
    raceId: 'measure-hayward-usd-g',
    label: 'Measure G (Hayward USD parcel tax)',
    cells: C({
      PL: 'Yes ●',
      EL: 'Yes ◐',
      DM: 'Yes ◐',
      OL: 'Yes ◐',
      SS: 'No ○',
      AR: 'No ◐',
      PR: 'No ●',
      CC: 'No ◐',
      FF: 'Yes ◐',
    }),
  },
];
