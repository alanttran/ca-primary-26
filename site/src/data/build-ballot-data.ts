import type { BallotData } from '../types/ballot-types';
import { BALLOT_META } from './meta';
import { mergeRaceDerivedFields } from './merge-races';
import { BALLOT_PROFILES, DEFAULT_BALLOT_ZIP, type BallotProfile } from './ballot-profiles';
import { RACES_PLACER } from './races-placer';
import { RACES_REST } from './races-rest';
import { RACES_STATEWIDE } from './races-statewide';
import { TLDR_ROWS } from './tldr-data';
import { TLDR_ROWS_PLACER } from './tldr-placer';
import { TYPOLOGIES } from './typologies-data';

const ALL_RACES = mergeRaceDerivedFields([...RACES_STATEWIDE, ...RACES_REST, ...RACES_PLACER]);

export function getBallotProfile(zip: string): BallotProfile {
  return BALLOT_PROFILES[zip] ?? BALLOT_PROFILES[DEFAULT_BALLOT_ZIP];
}

/** Assembles statewide + ZIP-specific races, categories, and TL;DR rows for one ballot profile. */
export function buildBallotData(zip: string): BallotData {
  const profile = getBallotProfile(zip);
  const races = ALL_RACES.filter((race) => !profile.excludeRaceIds.has(race.id));
  const raceIds = new Set(races.map((r) => r.id));
  const tldrRows = [...TLDR_ROWS, ...TLDR_ROWS_PLACER].filter((row) => raceIds.has(row.raceId));
  const categoryIds = new Set(races.map((r) => r.categoryId));
  const categories = profile.categories.filter((c) => categoryIds.has(c.id));

  return {
    meta: {
      ...BALLOT_META,
      scopeZip: profile.zip,
      scopeLabel: profile.scopeLabel,
      verificationNote: profile.verificationNote,
      registrarLabel: profile.registrarLabel,
      registrarUrl: profile.registrarUrl,
    },
    typologies: TYPOLOGIES,
    categories,
    tldrRows,
    races,
  };
}
