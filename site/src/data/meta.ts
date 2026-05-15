import type { BallotMeta, BallotCategory } from '../types/ballot-types';

export const BALLOT_META: BallotMeta = {
  siteTitle: 'Unofficial 2026 California primary voter guide',
  lastContentUpdated: 'May 14, 2026',
  scopeZip: '92126',
  scopeLabel: 'Mira Mesa, San Diego',
  verificationNote:
    'We built this from the companion research ballot for this ZIP. After Prop 50 (2025) redistricting, a few addresses see a slightly different lineup than before—if a race looks unfamiliar, trust your official sample ballot over us.',
};

export const BALLOT_CATEGORIES: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-sd', label: 'San Diego County & City' },
  { id: 'measures', label: 'Ballot measures' },
];
