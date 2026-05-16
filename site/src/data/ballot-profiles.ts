import type { BallotCategory } from '../types/ballot-types';

export const DEFAULT_BALLOT_ZIP = '92126';

/** ZIP dropdown order: ascending numeric for quick scanning.
 * 91501 (Burbank) is intentionally omitted from the picker for now; profile and `?zip=91501` still work.
 */
export const BALLOT_ZIP_OPTIONS: { zip: string; label: string }[] = [
  { zip: '90028', label: '90028 — Hollywood, Los Angeles County' },
  { zip: '91911', label: '91911 — Chula Vista, San Diego' },
  { zip: '92009', label: '92009 — Carlsbad, San Diego' },
  { zip: '92026', label: '92026 — Escondido, San Diego' },
  { zip: '92126', label: '92126 — Mira Mesa, San Diego' },
  { zip: '92131', label: '92131 — Scripps Ranch, San Diego' },
  { zip: '92139', label: '92139 — Paradise Hills, San Diego' },
  { zip: '92562', label: '92562 — Murrieta, Riverside County' },
  { zip: '92868', label: '92868 — Orange, Orange County' },
  { zip: '94043', label: '94043 — Mountain View, Santa Clara County' },
  { zip: '94544', label: '94544 — Hayward, Alameda County' },
  { zip: '95765', label: '95765 — Rocklin, Placer County' },
];

/** Board of Equalization District 4 — shared by San Diego and Orange County ballots. */
export const BOE_D4_RACE_ID = 'boe-d4';

/** Races that only appear on the Mira Mesa (92126) sample ballot. */
export const SAN_DIEGO_ONLY_RACE_IDS = new Set([
  'us-rep-ca50',
  'senate-sd40',
  'assembly-ad78',
  'county-treasurer',
  'city-council-d6',
  'judge-11',
  'judge-18',
  'judge-31',
  'judge-32',
  'judge-34',
  'measure-a',
]);

/** Alternate San Diego County federal & legislative lines (not on 92126 Mira Mesa). */
export const SAN_DIEGO_ALT_RACE_IDS = new Set([
  'us-rep-ca49',
  'senate-sd38',
  'assembly-ad77',
  'us-rep-ca51',
  'senate-sd39',
  'assembly-ad80',
  'us-rep-ca52',
  'senate-sd18',
]);

/** Inland North County Assembly line (Escondido-area 92026) — exclude everywhere else. */
export const SAN_DIEGO_AD75_ONLY_RACE_IDS = new Set(['assembly-ad75']);

/** LA legislative lines for Hollywood / Westside (not on 91501 Burbank). */
export const LA_EXT_RACE_IDS = new Set(['senate-sd24', 'assembly-ad52']);

/** Races that only appear on the Orange County (92868) sample ballot. */
export const ORANGE_ONLY_RACE_IDS = new Set([
  'us-rep-ca46',
  'senate-sd34',
  'assembly-ad68',
  'oc-sheriff',
]);

/** Races that only appear on the LA County (91501) sample ballot. */
export const LA_ONLY_RACE_IDS = new Set([
  'boe-d3',
  'us-rep-ca30',
  'senate-sd20',
  'assembly-ad44',
  'la-sheriff',
  'la-assessor',
  'la-judge-2',
  'la-judge-14',
  'la-judge-39',
  'la-judge-60',
  'la-judge-64',
  'la-judge-65',
  'la-judge-66',
  'la-judge-81',
  'la-judge-87',
  'la-judge-116',
  'la-judge-131',
  'la-judge-141',
  'la-judge-176',
  'la-judge-181',
  'la-judge-196',
  'measure-er',
]);

/** Races that only appear on the Placer County (95765) sample ballot. */
export const PLACER_ONLY_RACE_IDS = new Set([
  'boe-d1',
  'us-rep-ca6',
  'senate-sd6',
  'assembly-ad5',
  'placer-judge-3',
  'placer-county-superintendent',
  'placer-assessor',
  'placer-auditor-controller',
  'placer-clerk-recorder',
  'placer-treasurer',
]);

/** Races that only appear on the Murrieta (92562) sample ballot. */
export const RIVERSIDE_ONLY_RACE_IDS = new Set([
  'us-rep-ca40',
  'senate-sd32',
  'assembly-ad71',
  'rivco-assessor-clerk',
  'rivco-mvusd-area3',
]);

/** Hayward-area Alameda lines that do not apply to Mountain View ballots; voters there still receive Board of Equalization District 2. */
export const ALAMEDA_HAYWARD_EXCLUSIVE_RACE_IDS = new Set([
  'us-rep-ca14',
  'senate-sd10',
  'assembly-ad20',
  'alameda-sup-d2',
  'measure-hayward-usd-g',
]);

/** Races that only appear on the Hayward-area (94544) ballot along with statewide rows — includes BoE D-2. */
export const ALAMEDA_ONLY_RACE_IDS = new Set([
  ...ALAMEDA_HAYWARD_EXCLUSIVE_RACE_IDS,
  'boe-d2',
]);

/** Races wired only for Santa Clara Mountain View ballots (ZIP 94043); BoE District 2 is shared (`boe-d2` lives in races-alameda). */
export const SANTA_CLARA_ONLY_RACE_IDS = new Set([
  'us-rep-ca16',
  'assembly-ad26',
  'scc-da-2026',
  'scc-assessor-2026',
  'scc-sheriff-2026',
]);

/** BoE seats other than District 2 (used on Alameda East Bay ballots). */
export const BOE_IDS_EXCEPT_D2 = new Set<string>(['boe-d1', 'boe-d3', BOE_D4_RACE_ID]);

/** LA County judge/measure lines that do not apply outside LA; excludes `boe-d3`, which Inland Empire ballots also vote on. */
export const LA_COUNTY_LOCAL_RACE_IDS = new Set([...LA_ONLY_RACE_IDS].filter((id) => id !== 'boe-d3'));

export const BALLOT_CATEGORIES_SD: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-sd', label: 'San Diego County & City' },
  { id: 'measures', label: 'Ballot measures' },
];

export const BALLOT_CATEGORIES_PLACER: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-placer', label: 'Placer County' },
];

export const BALLOT_CATEGORIES_LA: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-la', label: 'Los Angeles County' },
  { id: 'measures', label: 'Ballot measures' },
];

export const BALLOT_CATEGORIES_ORANGE: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-orange', label: 'Orange County' },
];

export const BALLOT_CATEGORIES_RIVERSIDE: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-rivco', label: 'Riverside County & schools' },
];

export const BALLOT_CATEGORIES_ALAMEDA: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-ac', label: 'Alameda County & schools' },
  { id: 'measures', label: 'Ballot measures' },
];

export const BALLOT_CATEGORIES_SC: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-sc', label: 'Santa Clara County' },
];

function unionSets(...sets: Set<string>[]): Set<string> {
  return new Set(sets.flatMap((s) => [...s]));
}

export interface BallotProfile {
  zip: string;
  scopeLabel: string;
  verificationNote: string;
  registrarLabel: string;
  registrarUrl: string;
  categories: BallotCategory[];
  excludeRaceIds: Set<string>;
}

export const BALLOT_PROFILES: Record<string, BallotProfile> = {
  '92126': {
    zip: '92126',
    scopeLabel: 'Mira Mesa, San Diego',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. After Prop 50 (2025) redistricting, a few addresses see a slightly different lineup than before—if a race looks unfamiliar, trust your official sample ballot over us.',
    registrarLabel: 'San Diego County sample ballot',
    registrarUrl: 'https://www.sdvote.com',
    categories: BALLOT_CATEGORIES_SD,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
    ),
  },
  '92131': {
    zip: '92131',
    scopeLabel: 'Scripps Ranch, San Diego',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. Scripps Ranch uses Assembly District 77 and State Senate District 40—not AD-78 or City Council District 6 (Mira Mesa). If a race looks unfamiliar, trust your official sample ballot over us.',
    registrarLabel: 'San Diego County sample ballot',
    registrarUrl: 'https://www.sdvote.com',
    categories: BALLOT_CATEGORIES_SD,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set(['city-council-d6', 'assembly-ad78', 'us-rep-ca49', 'senate-sd38', 'us-rep-ca51', 'senate-sd39', 'assembly-ad80', 'us-rep-ca52', 'senate-sd18']),
    ),
  },
  '92009': {
    zip: '92009',
    scopeLabel: 'Carlsbad, San Diego',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. Carlsbad sits in CA-49, State Senate District 38, and Assembly District 77 after Prop 50—not the Mira Mesa CA-50 / SD-40 / AD-78 lines. If a race looks unfamiliar, trust your official sample ballot over us.',
    registrarLabel: 'San Diego County sample ballot',
    registrarUrl: 'https://www.sdvote.com',
    categories: BALLOT_CATEGORIES_SD,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set(['us-rep-ca50', 'senate-sd40', 'assembly-ad78', 'city-council-d6', 'us-rep-ca51', 'senate-sd39', 'assembly-ad80', 'us-rep-ca52', 'senate-sd18']),
    ),
  },
  '92139': {
    zip: '92139',
    scopeLabel: 'Paradise Hills, San Diego',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. Paradise Hills uses CA-51, State Senate District 39, and Assembly District 80—not the Mira Mesa congressional or legislative lines. Border addresses can split districts; trust your official sample ballot over us.',
    registrarLabel: 'San Diego County sample ballot',
    registrarUrl: 'https://www.sdvote.com',
    categories: BALLOT_CATEGORIES_SD,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set(['us-rep-ca50', 'senate-sd40', 'assembly-ad78', 'city-council-d6', 'us-rep-ca49', 'senate-sd38', 'assembly-ad77', 'us-rep-ca52', 'senate-sd18']),
    ),
  },
  '91911': {
    zip: '91911',
    scopeLabel: 'Chula Vista, San Diego',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. Chula Vista (91911) votes in U.S. House CA-52, State Senate District 18, and Assembly District 80 after Prop 50—not the Paradise Hills CA-51 / SD-39 pairing and not the Mira Mesa CA-50 / SD-40 / AD-78 lines. You still get the same San Diego County offices and Measure A as other county ballots we cover. Border addresses can split districts; trust your official sample ballot over us.',
    registrarLabel: 'San Diego County sample ballot',
    registrarUrl: 'https://www.sdvote.com',
    categories: BALLOT_CATEGORIES_SD,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set(['us-rep-ca50', 'senate-sd40', 'assembly-ad78', 'city-council-d6', 'us-rep-ca49', 'senate-sd38', 'assembly-ad77', 'us-rep-ca51', 'senate-sd39']),
    ),
  },
  '92868': {
    zip: '92868',
    scopeLabel: 'Orange, Orange County',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. Orange (92868) uses CA-46, State Senate District 34, and Assembly District 68 after Prop 50—not San Diego or Los Angeles local lines. If a race looks unfamiliar, trust your official sample ballot over us.',
    registrarLabel: 'Orange County voting information',
    registrarUrl: 'https://www.ocvote.gov',
    categories: BALLOT_CATEGORIES_ORANGE,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      SAN_DIEGO_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      LA_ONLY_RACE_IDS,
      LA_EXT_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
    ),
  },
  '90028': {
    zip: '90028',
    scopeLabel: 'Hollywood, Los Angeles County',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. Hollywood uses CA-30, State Senate District 24, and Assembly District 52—the same countywide LA races as Burbank, but not SD-20 or AD-44 (San Fernando Valley). If a race looks unfamiliar, trust your official sample ballot over us.',
    registrarLabel: 'LA County voting information',
    registrarUrl: 'https://www.lavote.gov',
    categories: BALLOT_CATEGORIES_LA,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      SAN_DIEGO_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set(['senate-sd20', 'assembly-ad44']),
    ),
  },
  '95765': {
    zip: '95765',
    scopeLabel: 'Rocklin, Placer County',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. After Prop 50 (2025) redistricting, Roseville and Rocklin moved into CA-06 and SD-06—if a race looks unfamiliar, trust your official sample ballot over us.',
    registrarLabel: 'Placer County voting information',
    registrarUrl: 'https://www.placerelections.com',
    categories: BALLOT_CATEGORIES_PLACER,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      SAN_DIEGO_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set([BOE_D4_RACE_ID]),
    ),
  },
  '91501': {
    zip: '91501',
    scopeLabel: 'Burbank, Los Angeles County',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. After Prop 50 (2025) redistricting, Burbank sits in CA-30, State Senate District 20, and Assembly District 44—if a race looks unfamiliar, trust your official sample ballot over us.',
    registrarLabel: 'LA County voting information',
    registrarUrl: 'https://lavote.gov',
    categories: BALLOT_CATEGORIES_LA,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      SAN_DIEGO_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set([BOE_D4_RACE_ID]),
    ),
  },
  '92562': {
    zip: '92562',
    scopeLabel: 'Murrieta, Riverside County',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. Murrieta sits in U.S. House CA-40, State Senate District 32, and Assembly District 71 after Prop 50 (2025)—the same primary where two Republican incumbents were drawn together. You also vote on Board of Equalization District 3 (shared with LA/IE), Riverside’s assessor-recorder-county clerk contest, and the Murrieta Valley USD Area 3 special trustee race. Border addresses can split districts; trust your official sample ballot over us.',
    registrarLabel: 'Riverside County voting information',
    registrarUrl: 'https://www.voteinfo.net',
    categories: BALLOT_CATEGORIES_RIVERSIDE,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      SAN_DIEGO_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      LA_EXT_RACE_IDS,
      LA_COUNTY_LOCAL_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set([BOE_D4_RACE_ID]),
    ),
  },
  '92026': {
    zip: '92026',
    scopeLabel: 'Escondido, San Diego County',
    verificationNote:
      'Companion ballot for inland North County after Prop 50: State Senate District 40 and Assembly District 75, plus countywide contests we bundle with other San Diego County profiles. Congressional lines splinter inside the ZIP—house.gov maps list both Issa CA-48 and Peters CA-50; here we modeled the congested Peters CA-50 jungle primary alongside SD-40. You do not vote on City of San Diego Measure A or City Council District 6 sitting on the separate city ballot; border addresses sometimes fall on Issa-side CA-48 or alternate lines—trust your registrar sample ballot if a race looks mismatched.',
    registrarLabel: 'San Diego County sample ballot',
    registrarUrl: 'https://www.sdvote.com',
    categories: BALLOT_CATEGORIES_SD,
    excludeRaceIds: unionSets(
      ALAMEDA_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      new Set(['assembly-ad78', 'city-council-d6', 'measure-a']),
    ),
  },
  '94043': {
    zip: '94043',
    scopeLabel: 'Mountain View, Santa Clara County',
    verificationNote:
      'Companion ballot for Peninsula-side Santa Clara County: Congress 16 and Assembly 26 after Prop 50, statewide rows, Santa Clara District Attorney (Rosen vs Chung), uncontested county assessor/sheriff lines on our research stack, plus Board of Equalization District 2 (same statewide district many Bay Area ballots share—data lives beside our Hayward module). Odd-numbered State Senate districts (including Senate 13) are not scheduled for June 2026—expect no SD-13 line despite living in Becker’s constituency day-to-day. Commercial databases sometimes carve a fringe of Shoreline Boulevard into Congressional District 17 (Khanna); Mountain View supervisors District 1/4 contests on neighboring ballots skip here because Supervisor District 5 is mid-term. School boards, irrigation districts, and city charter items vary by precinct—trust sccvote.org sample PDFs.',
    registrarLabel: 'County of Santa Clara Registrar of Voters sample ballot lookup',
    registrarUrl: 'https://www.sccvote.org/',
    categories: BALLOT_CATEGORIES_SC,
    excludeRaceIds: unionSets(
      SAN_DIEGO_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      BOE_IDS_EXCEPT_D2,
      ALAMEDA_HAYWARD_EXCLUSIVE_RACE_IDS,
    ),
  },
  '94544': {
    zip: '94544',
    scopeLabel: 'Hayward, Alameda County',
    verificationNote:
      'We modeled this ZIP from Hayward-area lines on the companion research ballot stack: Congress 14, Senate 10, Assembly 20, Board of Equalization District 2, Alameda Supervisor District 2, and Hayward USD Measure G alongside statewide contests. Castro Valley USD, Oakland municipal measures, Piedmont parcel taxes, and other county trustee races printed on neighboring addresses are not asserted here—if a race looks unfamiliar, trust your official sample ballot over the Alameda County registrar listings.',
    registrarLabel: 'Alameda County Registrar of Voters sample ballot hub',
    registrarUrl: 'https://acvote.alamedacountyca.gov/',
    categories: BALLOT_CATEGORIES_ALAMEDA,
    excludeRaceIds: unionSets(
      SAN_DIEGO_ONLY_RACE_IDS,
      SAN_DIEGO_ALT_RACE_IDS,
      SAN_DIEGO_AD75_ONLY_RACE_IDS,
      PLACER_ONLY_RACE_IDS,
      LA_ONLY_RACE_IDS,
      LA_EXT_RACE_IDS,
      ORANGE_ONLY_RACE_IDS,
      RIVERSIDE_ONLY_RACE_IDS,
      SANTA_CLARA_ONLY_RACE_IDS,
      BOE_IDS_EXCEPT_D2,
    ),
  },
};

export function resolveBallotZip(search: string): string {
  const raw = new URLSearchParams(search).get('zip')?.trim();
  if (raw && raw in BALLOT_PROFILES) return raw;
  return DEFAULT_BALLOT_ZIP;
}
