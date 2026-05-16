import type { BallotData } from '../types/ballot-types';
import { BALLOT_META } from './meta';
import { mergeRaceDerivedFields } from './merge-races';
import { BALLOT_PROFILES, DEFAULT_BALLOT_ZIP, type BallotProfile } from './ballot-profiles';
import { RACES_ALAMEDA } from './races-alameda';
import { RACES_LA } from './races-la';
import { RACES_LA_EXT } from './races-la-ext';
import { RACES_ORANGE } from './races-orange';
import { RACES_PLACER } from './races-placer';
import { RACES_RIVERSIDE } from './races-riverside';
import { RACES_REST } from './races-rest';
import { RACES_SANTA_CLARA } from './races-santa-clara';
import { RACES_SD_ALT } from './races-sd-alt';
import { RACES_STATEWIDE } from './races-statewide';
import { TLDR_ROWS_ALAMEDA } from './tldr-alameda';
import { TLDR_ROWS } from './tldr-data';
import { TLDR_ROWS_LA } from './tldr-la';
import { TLDR_ROWS_LA_EXT } from './tldr-la-ext';
import { TLDR_ROWS_ORANGE } from './tldr-orange';
import { TLDR_ROWS_PLACER } from './tldr-placer';
import { TLDR_ROWS_RIVERSIDE } from './tldr-riverside';
import { TLDR_ROWS_SANTA_CLARA } from './tldr-santa-clara';
import { TLDR_ROWS_SD_ALT } from './tldr-sd-alt';
import { TYPOLOGIES } from './typologies-data';

const ALL_RACES = mergeRaceDerivedFields([
  ...RACES_STATEWIDE,
  ...RACES_REST,
  ...RACES_SD_ALT,
  ...RACES_PLACER,
  ...RACES_LA,
  ...RACES_LA_EXT,
  ...RACES_ORANGE,
  ...RACES_RIVERSIDE,
  ...RACES_ALAMEDA,
  ...RACES_SANTA_CLARA,
]);

export function getBallotProfile(zip: string): BallotProfile {
  return BALLOT_PROFILES[zip] ?? BALLOT_PROFILES[DEFAULT_BALLOT_ZIP];
}

/** Assembles statewide + ZIP-specific races, categories, and TL;DR rows for one ballot profile. */
export function buildBallotData(zip: string): BallotData {
  const profile = getBallotProfile(zip);
  const races = ALL_RACES.filter((race) => !profile.excludeRaceIds.has(race.id));
  const raceIds = new Set(races.map((r) => r.id));
  const tldrRows = [
    ...TLDR_ROWS,
    ...TLDR_ROWS_SD_ALT,
    ...TLDR_ROWS_PLACER,
    ...TLDR_ROWS_LA,
    ...TLDR_ROWS_LA_EXT,
    ...TLDR_ROWS_ORANGE,
    ...TLDR_ROWS_RIVERSIDE,
    ...TLDR_ROWS_ALAMEDA,
    ...TLDR_ROWS_SANTA_CLARA,
  ].filter((row) => raceIds.has(row.raceId));
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
