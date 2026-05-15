/**
 * Short race-level seat status for the accordion header (incumbent vs open field).
 * Single-candidate races get `Unopposed` automatically in `merge-races.ts` (judges, county lines).
 * Omitted for measures and races where the distinction is low-salience or unclear.
 */
export const RACE_SEAT_CONTEXT: Record<string, string> = {
  governor: "Open",
  "lt-governor": "Open",
  treasurer: "Open seat",
  "insurance-commissioner": "Open",
  "secretary-state": "Incumbent",
  controller: "Incumbent",
  "attorney-general": "Incumbent",
  "boe-d4": "Open seat",
  "boe-d1": "Open seat",
  "us-rep-ca50": "Incumbent",
  "us-rep-ca6": "Incumbent",
  "senate-sd40": "Open",
  "senate-sd6": "Incumbent",
  "assembly-ad78": "Incumbent",
  "assembly-ad5": "Incumbent",
  "placer-judge-3": "Incumbent (appointed)",
  spi: "Open seat",
  "county-treasurer": "Incumbent (appointed)",
  "city-council-d6": "Incumbent",
};
