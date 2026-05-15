import type { BallotMeta } from '../types/ballot-types';
import { BALLOT_CATEGORIES_SD } from './ballot-profiles';

export const BALLOT_META: BallotMeta = {
  siteTitle: 'Unofficial 2026 California primary voter guide',
  lastContentUpdated: 'May 15, 2026',
  scopeZip: '92126',
  scopeLabel: 'Mira Mesa, San Diego',
  verificationNote:
    'We built this from the companion research ballot for this ZIP. After Prop 50 (2025) redistricting, a few addresses see a slightly different lineup than before—if a race looks unfamiliar, trust your official sample ballot over us.',
  registrarLabel: 'San Diego County sample ballot',
  registrarUrl: 'https://www.sdvote.com',
};

/** @deprecated Use ballot profile categories via `buildBallotData`. */
export const BALLOT_CATEGORIES = BALLOT_CATEGORIES_SD;
