import type { BallotMeta, BallotCategory } from '../types/ballot-types';

export const BALLOT_META: BallotMeta = {
  siteTitle: 'Unofficial 2026 California primary voter guide',
  lastContentUpdated: 'May 10, 2026',
  scopeZip: '92126',
  scopeLabel: 'Mira Mesa, San Diego',
  verificationNote:
    'Modeled on the ballot described for ZIP 92126 in the companion research document. After Prop 50 (2025) boundary shifts, some addresses may differ—confirm contests on your official sample ballot at sdvote.com.',
};

export const BALLOT_CATEGORIES: BallotCategory[] = [
  { id: 'statewide-partisan', label: 'Statewide partisan' },
  { id: 'federal', label: 'Federal' },
  { id: 'state-leg', label: 'State legislative' },
  { id: 'statewide-nonpartisan', label: 'Statewide nonpartisan' },
  { id: 'local-sd', label: 'San Diego County & City' },
  { id: 'measures', label: 'Ballot measures' },
];
