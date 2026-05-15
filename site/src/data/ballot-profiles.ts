import type { BallotCategory } from '../types/ballot-types';

export const DEFAULT_BALLOT_ZIP = '92126';

export const BALLOT_ZIP_OPTIONS: { zip: string; label: string }[] = [
  { zip: '92126', label: '92126 — Mira Mesa, San Diego' },
  { zip: '95765', label: '95765 — Rocklin, Placer County' },
];

/** Races that only appear on the San Diego (92126) sample ballot. */
export const SAN_DIEGO_ONLY_RACE_IDS = new Set([
  'boe-d4',
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
    excludeRaceIds: PLACER_ONLY_RACE_IDS,
  },
  '95765': {
    zip: '95765',
    scopeLabel: 'Rocklin, Placer County',
    verificationNote:
      'We built this from the companion research ballot for this ZIP. After Prop 50 (2025) redistricting, Roseville and Rocklin moved into CA-06 and SD-06—if a race looks unfamiliar, trust your official sample ballot over us.',
    registrarLabel: 'Placer County voting information',
    registrarUrl: 'https://www.placerelections.com',
    categories: BALLOT_CATEGORIES_PLACER,
    excludeRaceIds: SAN_DIEGO_ONLY_RACE_IDS,
  },
};

export function resolveBallotZip(search: string): string {
  const raw = new URLSearchParams(search).get('zip')?.trim();
  if (raw && raw in BALLOT_PROFILES) return raw;
  return DEFAULT_BALLOT_ZIP;
}
