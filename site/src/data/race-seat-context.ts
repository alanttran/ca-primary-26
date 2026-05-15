/**
 * Short race-level seat status for the accordion header (incumbent vs open field).
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
  "us-rep-ca50": "Incumbent",
  "senate-sd40": "Open",
  "assembly-ad78": "Incumbent",
  spi: "Open seat",
  "county-treasurer": "Incumbent (appointed)",
  "city-council-d6": "Incumbent",
};
