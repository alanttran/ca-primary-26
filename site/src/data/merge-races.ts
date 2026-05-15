import type { Race } from '../types/ballot-types';
import { CANDIDATE_EXTRAS } from './candidate-extras';
import { RACE_SEAT_CONTEXT } from './race-seat-context';

/** Applies `seatContext` and per-candidate `campaignUrl` / `headshotUrl` overlays. */
export function mergeRaceDerivedFields(races: Race[]): Race[] {
  return races.map((race) => ({
    ...race,
    seatContext: RACE_SEAT_CONTEXT[race.id] ?? race.seatContext,
    candidates: race.candidates.map((c) => {
      const extra = CANDIDATE_EXTRAS[c.id];
      return extra ? { ...c, ...extra } : c;
    }),
  }));
}
