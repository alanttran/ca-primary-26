import type { TypologyCode } from '../types/ballot-types';

const C = (cells: Record<TypologyCode, string>) => cells;

export const TLDR_ROWS: { raceId: string; label: string; cells: Record<TypologyCode, string> }[] = [
  { raceId: 'governor', label: 'Governor', cells: C({ PL: 'Porter ●', EL: 'Becerra ●', DM: 'Becerra ◐', OL: 'Steyer ◐', SS: 'Mahan ○', AR: 'Hilton ◐', PR: 'Bianco ◐', CC: 'Hilton ◐', FF: 'Bianco ●' }) },
  { raceId: 'lt-governor', label: 'Lt. Governor', cells: C({ PL: 'Tubbs ●', EL: 'Ma ●', DM: 'Ma ◐', OL: 'Tubbs ◐', SS: '— —', AR: 'Romero ○', PR: 'Jones ◐', CC: 'Jones ◐', FF: 'Jones ●' }) },
  { raceId: 'secretary-state', label: 'Secretary of State', cells: C({ PL: 'Weber ●', EL: 'Weber ●', DM: 'Weber ●', OL: 'Weber ◐', SS: '— —', AR: 'Wagner ○', PR: 'Wagner ◐', CC: 'Wagner ●', FF: 'Wagner ●' }) },
  { raceId: 'controller', label: 'Controller', cells: C({ PL: 'Cohen ◐', EL: 'Cohen ●', DM: 'Cohen ●', OL: 'Adams ○', SS: '— —', AR: 'Morgan ○', PR: 'Morgan ◐', CC: 'Morgan ●', FF: 'Morgan ●' }) },
  { raceId: 'treasurer', label: 'Treasurer', cells: C({ PL: 'Vazquez ◐', EL: 'Kounalakis ●', DM: 'Kounalakis ◐', OL: 'Caballero ○', SS: '— —', AR: 'Hawks ○', PR: 'Hawks ◐', CC: 'Hawks ◐', FF: 'Hawks ◐' }) },
  { raceId: 'attorney-general', label: 'Attorney General', cells: C({ PL: 'Bonta ●', EL: 'Bonta ●', DM: 'Bonta ●', OL: 'Mikels ○', SS: '— —', AR: 'Bonta ○', PR: 'Gates ●', CC: 'Gates ●', FF: 'Gates ●' }) },
  { raceId: 'insurance-commissioner', label: 'Insurance Commissioner', cells: C({ PL: 'Kim ●', EL: 'Allen ●', DM: 'Bradford ●', OL: 'Kim ◐', SS: '— —', AR: 'Farren ◐', PR: 'Howell ◐', CC: 'Howell ●', FF: 'Howell ◐' }) },
  { raceId: 'boe-d4', label: 'Board of Equalization, D4', cells: C({ PL: 'Petterson ●', EL: 'Umberg ●', DM: 'Umberg ●', OL: 'Petterson ◐', SS: '— —', AR: 'Bilodeau ○', PR: 'Bilodeau ◐', CC: 'Bilodeau ●', FF: 'Bilodeau ●' }) },
  { raceId: 'us-rep-ca50', label: 'U.S. Rep, CA-50', cells: C({ PL: 'Mitra ◐', EL: 'Peters ●', DM: 'Peters ●', OL: 'Arnous ○', SS: '— —', AR: 'Peters ◐', PR: 'Huntington ◐', CC: 'Huntington ◐', FF: 'Huntington ●' }) },
  { raceId: 'senate-sd40', label: 'State Senate, SD-40', cells: C({ PL: 'Elliott ●', EL: 'Elliott ●', DM: 'Elliott ●', OL: 'Elliott ◐', SS: '— —', AR: 'Bruce-Lane ○', PR: 'Musgrove ◐', CC: 'Bruce-Lane ◐', FF: 'Bruce-Lane ◐' }) },
  { raceId: 'assembly-ad78', label: 'State Assembly, AD-78', cells: C({ PL: 'Ward ●', EL: 'Ward ●', DM: 'Ward ●', OL: 'Ward ◐', SS: '— —', AR: 'Galvez ○', PR: 'Galvez ◐', CC: 'Galvez ◐', FF: 'Salguero ○' }) },
  { raceId: 'spi', label: 'Superintendent of Public Instruction', cells: C({ PL: 'Lara ●', EL: 'Muratsuchi ●', DM: 'Barrera ●', OL: 'Lara ◐', SS: 'Newman ○', AR: 'Newman ○', PR: 'Mattammal ◐', CC: 'Mattammal ●', FF: 'Shaw ●' }) },
  { raceId: 'county-treasurer', label: 'County Treasurer-Tax Collector', cells: C({ PL: 'Cohen ◐', EL: 'Cohen ●', DM: 'Cohen ●', OL: 'Roy ○', SS: '— —', AR: 'Anderson ◐', PR: 'Anderson ●', CC: 'Anderson ●', FF: 'Anderson ●' }) },
  { raceId: 'city-council-d6', label: 'City Council, D6', cells: C({ PL: 'Lee ●', EL: 'Lee ●', DM: 'Lee ●', OL: 'Lee ◐', SS: '— —', AR: 'Powell ◐', PR: 'Powell ●', CC: 'Powell ●', FF: 'Powell ●' }) },
  { raceId: 'judge-11', label: 'Superior Court, Office 11', cells: C({ PL: 'Boucek ●', EL: 'Boucek ●', DM: 'Boucek ●', OL: 'Boucek ●', SS: 'Boucek ●', AR: 'Boucek ●', PR: 'Boucek ●', CC: 'Boucek ●', FF: 'Boucek ●' }) },
  { raceId: 'judge-18', label: 'Superior Court, Office 18', cells: C({ PL: 'Prior ●', EL: 'Prior ●', DM: 'Prior ●', OL: 'Prior ●', SS: 'Prior ●', AR: 'Prior ●', PR: 'Prior ●', CC: 'Prior ●', FF: 'Prior ●' }) },
  { raceId: 'judge-31', label: 'Superior Court, Office 31', cells: C({ PL: 'Cleesattle ●', EL: 'Cleesattle ●', DM: 'Cleesattle ●', OL: 'Cleesattle ●', SS: 'Cleesattle ◐', AR: 'Cleesattle ◐', PR: 'Noakes ◐', CC: 'Noakes ◐', FF: 'Noakes ◐' }) },
  { raceId: 'judge-32', label: 'Superior Court, Office 32', cells: C({ PL: 'Ramirez ●', EL: 'Ramirez ●', DM: 'Ramirez ●', OL: 'Ramirez ◐', SS: 'Ramirez ○', AR: 'Ramirez ◐', PR: 'Ramirez ○', CC: 'Ramirez ○', FF: 'Gallo ○' }) },
  { raceId: 'judge-34', label: 'Superior Court, Office 34', cells: C({ PL: 'Hauf ●', EL: 'Hauf ●', DM: 'Hauf ●', OL: 'Hauf ●', SS: 'Hauf ●', AR: 'Hauf ●', PR: 'Hauf ●', CC: 'Hauf ●', FF: 'Hauf ●' }) },
  { raceId: 'measure-a', label: 'Measure A — Empty Homes Tax', cells: C({ PL: 'Yes ●', EL: 'Yes ◐', DM: 'Yes ◐', OL: 'Yes ◐', SS: 'No ○', AR: 'No ◐', PR: 'No ●', CC: 'No ●', FF: 'No ◐' }) },
];
