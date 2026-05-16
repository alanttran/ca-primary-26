import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

/** TL;DR rows for races that appear only on the 91501 (Burbank / LA County) ballot. */
export const TLDR_ROWS_LA: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  { raceId: 'boe-d3', label: 'Board of Equalization, D3', cells: C({ PL: 'Gipson ●', EL: 'Gipson ●', DM: 'Gipson ●', OL: 'Sukaton ◐', SS: '— —', AR: 'Portela ○', PR: 'Portela ◐', CC: 'Portela ●', FF: 'Portela ●' }) },
  { raceId: 'us-rep-ca30', label: 'U.S. Rep, CA-30', cells: C({ PL: 'Friedman ◐', EL: 'Friedman ●', DM: 'Friedman ●', OL: 'Friedman ◐', SS: '— —', AR: 'Meyers ◐', PR: 'Meyers ◐', CC: 'Meyers ●', FF: 'Meyers ●' }) },
  { raceId: 'senate-sd20', label: 'State Senate, SD-20', cells: C({ PL: 'Menjivar ●', EL: 'Menjivar ●', DM: 'Menjivar ●', OL: 'La Carra ◐', SS: '— —', AR: 'Menjivar ◐', PR: 'Menjivar ◐', CC: 'Menjivar ◐', FF: 'Menjivar ◐' }) },
  { raceId: 'assembly-ad44', label: 'State Assembly, AD-44', cells: C({ PL: 'Schultz ●', EL: 'Schultz ●', DM: 'Schultz ●', OL: 'Schultz ◐', SS: '— —', AR: 'Daniels ◐', PR: 'Daniels ◐', CC: 'Daniels ●', FF: 'Daniels ●' }) },
  { raceId: 'la-sheriff', label: 'LA County Sheriff', cells: C({ PL: 'White ◐', EL: 'Luna ●', DM: 'Luna ●', OL: 'Luna ◐', SS: 'Luna ◐', AR: 'Luna ◐', PR: 'Villanueva ◐', CC: 'Luna ●', FF: 'Luna ◐' }) },
  { raceId: 'la-assessor', label: 'LA County Assessor', cells: C({ PL: 'Newland ◐', EL: 'Prang ●', DM: 'Prang ●', OL: 'Adamus ◐', SS: 'Prang ◐', AR: 'Prang ◐', PR: 'Adamus ◐', CC: 'Prang ●', FF: 'Prang ◐' }) },
  { raceId: 'la-judge-2', label: 'Superior Court, Office 2', cells: C({ PL: 'Valbuena ◐', EL: 'Valbuena ●', DM: 'Valbuena ●', OL: 'Valbuena ●', SS: 'Valbuena ◐', AR: 'Valbuena ◐', PR: 'Valbuena ◐', CC: 'Valbuena ●', FF: 'Valbuena ◐' }) },
  { raceId: 'la-judge-14', label: 'Superior Court, Office 14', cells: C({ PL: 'Irene Lee ◐', EL: 'Irene Lee ●', DM: 'Irene Lee ●', OL: 'Irene Lee ◐', SS: 'Irene Lee ◐', AR: 'Irene Lee ●', PR: 'Irene Lee ◐', CC: 'Irene Lee ●', FF: 'Irene Lee ●' }) },
  { raceId: 'la-judge-39', label: 'Superior Court, Office 39', cells: C({ PL: 'Dang ●', EL: 'Dang ●', DM: 'Dang ●', OL: 'Dang ●', SS: 'Dang ●', AR: 'Dang ●', PR: 'Dang ●', CC: 'Dang ●', FF: 'Dang ●' }) },
  { raceId: 'la-judge-60', label: 'Superior Court, Office 60', cells: C({ PL: 'Maurer ●', EL: 'Maurer ●', DM: 'Maurer ●', OL: 'Maurer ●', SS: 'Maurer ●', AR: 'Maurer ●', PR: 'Maurer ●', CC: 'Maurer ●', FF: 'Maurer ●' }) },
  { raceId: 'la-judge-64', label: 'Superior Court, Office 64', cells: C({ PL: 'Haymon ◐', EL: 'Ghobadi ●', DM: 'Ghobadi ●', OL: 'Haymon ◐', SS: 'Ghobadi ◐', AR: 'Ghobadi ●', PR: 'Haymon ◐', CC: 'Ghobadi ●', FF: 'Ghobadi ●' }) },
  { raceId: 'la-judge-65', label: 'Superior Court, Office 65', cells: C({ PL: 'Clayton ◐', EL: 'Reitano ◐', DM: 'Reitano ◐', OL: 'Clayton ◐', SS: 'Reitano ○', AR: 'Reitano ◐', PR: 'Clayton ◐', CC: 'Reitano ◐', FF: 'Reitano ◐' }) },
  { raceId: 'la-judge-66', label: 'Superior Court, Office 66', cells: C({ PL: 'Turner ◐', EL: 'Forer ●', DM: 'Forer ●', OL: 'Turner ◐', SS: 'Forer ◐', AR: 'Forer ●', PR: 'Forer ◐', CC: 'Forer ●', FF: 'Forer ●' }) },
  { raceId: 'la-judge-81', label: 'Superior Court, Office 81', cells: C({ PL: 'Kapelovitz ◐', EL: 'Walgren ●', DM: 'Walgren ●', OL: 'Kapelovitz ◐', SS: 'Walgren ●', AR: 'Walgren ●', PR: 'Kapelovitz ◐', CC: 'Walgren ●', FF: 'Walgren ●' }) },
  { raceId: 'la-judge-87', label: 'Superior Court, Office 87', cells: C({ PL: 'Bayne ●', EL: 'Bayne ●', DM: 'Bayne ●', OL: 'Bayne ◐', SS: 'Bayne ●', AR: 'Gordon ◐', PR: 'Bayne ◐', CC: 'Gordon ◐', FF: 'Bayne ◐' }) },
  { raceId: 'la-judge-116', label: 'Superior Court, Office 116', cells: C({ PL: 'Thompson ◐', EL: 'Connolly ◐', DM: 'Connolly ◐', OL: 'Thompson ◐', SS: 'Connolly ◐', AR: 'Thompson ◐', PR: 'Thompson ◐', CC: 'Connolly ◐', FF: 'Thompson ◐' }) },
  { raceId: 'la-judge-131', label: 'Superior Court, Office 131', cells: C({ PL: 'Tryfman ◐', EL: 'Dammeier ◐', DM: 'Dammeier ◐', OL: 'Ross ◐', SS: 'Dammeier ○', AR: 'Dammeier ◐', PR: 'Tryfman ◐', CC: 'Dammeier ◐', FF: 'Dammeier ◐' }) },
  { raceId: 'la-judge-141', label: 'Superior Court, Office 141', cells: C({ PL: 'Torres ●', EL: 'Torres ●', DM: 'Torres ●', OL: 'Torres ●', SS: 'Torres ●', AR: 'Torres ●', PR: 'Torres ●', CC: 'Torres ●', FF: 'Torres ●' }) },
  { raceId: 'la-judge-176', label: 'Superior Court, Office 176', cells: C({ PL: 'Smith ◐', EL: 'Marin ●', DM: 'Marin ●', OL: 'Smith ◐', SS: 'Marin ◐', AR: 'Marin ●', PR: 'Smith ◐', CC: 'Marin ●', FF: 'Marin ●' }) },
  { raceId: 'la-judge-181', label: 'Superior Court, Office 181', cells: C({ PL: 'Dibble ●', EL: 'Dibble ●', DM: 'Dibble ●', OL: 'Dibble ●', SS: 'Dibble ●', AR: 'Dibble ●', PR: 'Dibble ●', CC: 'Dibble ●', FF: 'Dibble ●' }) },
  { raceId: 'la-judge-196', label: 'Superior Court, Office 196', cells: C({ PL: 'Henry ●', EL: 'Henry ●', DM: 'Henry ●', OL: 'Henry ●', SS: 'Henry ●', AR: 'Henry ●', PR: 'Henry ●', CC: 'Henry ●', FF: 'Henry ●' }) },
  { raceId: 'measure-er', label: 'Measure ER — County health sales tax', cells: C({ PL: 'Yes ●', EL: 'Yes ◐', DM: 'Yes ◐', OL: 'Yes ◐', SS: 'No ○', AR: 'No ◐', PR: 'No ●', CC: 'No ●', FF: 'No ◐' }) },
];
