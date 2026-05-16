/** Pew-derived typology codes used in the guide */
export type TypologyCode = 'PL' | 'EL' | 'DM' | 'OL' | 'SS' | 'AR' | 'PR' | 'CC' | 'FF';

/** TL;DR / cross-table confidence glyph (matches legend SVGs). */
export type ConfidenceSymbol = '●' | '◐' | '○' | '—';

export interface TypologyDefinition {
  code: TypologyCode;
  name: string;
  description: string;
  /** Pew Research Center 2021 Political Typology chapter for this group */
  pewChapterUrl: string;
}

export interface ScorecardRow {
  topic: string;
  position: string;
  /**
   * One sentence: how this stance differs from a termed-out predecessor, the incumbent,
   * or other leading candidates in the same race (shown under the position line).
   */
  comparison?: string;
}

export interface RedFlagSource {
  /** Publication or organization name shown as the link text */
  label: string;
  /** HTTPS URL to reporting, a primary document, or an official evaluation */
  url: string;
}

/** One serious caveat; use `sources` to point readers to reporting or official records. */
export type RedFlagBullet =
  | string
  | {
      text: string;
      sources?: RedFlagSource[];
    };

/** One cited horserace snapshot for a candidate profile (manually maintained; must link to source). */
export interface CandidateHorseRacePoll {
  /** Vote share as published by the pollster (e.g. `"19%"`). */
  firstChoiceDisplay: string;
  /** Short contest phrase (e.g. California governor primary). */
  contestLabel: string;
  /** Pollster attribution line as you want it shown to readers. */
  pollsterCredit: string;
  /** Human-readable dates or release timing (not parsed). */
  fieldDatesLabel: string;
  /** HTTPS URL to the pollster’s write-up or methodology page. */
  sourceUrl: string;
  /** Optional link to primary tabulations (e.g. publisher spreadsheet export). */
  fullResultsUrl?: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  role: string;
  /** Filename under `public/images/candidates/` without extension; omit for placeholder */
  photoSlug?: string;
  /** Remote headshot when no local `photoSlug` asset (e.g. official portrait URL). */
  headshotUrl?: string;
  /** Campaign or official voter-facing site; used to link the role line. */
  campaignUrl?: string;
  bio: string[];
  scorecard?: ScorecardRow[];
  money?: string;
  endorsements?: string;
  /** Optional independent horserace number with citation (shown under endorsements). */
  recentPolling?: CandidateHorseRacePoll;
  /** Serious caveats voters may weigh heavily (shown under “Red flags” with a flag icon). */
  redFlags?: RedFlagBullet[];
  /** FYI context—background or perspective, not the same weight as red flags (shown under “Notes”). */
  notes?: string[];
  /**
   * For sitting officeholders in contested primaries: one short paragraph on what they have
   * actually delivered in the role and when replacing them is (or is not) likely worth losing
   * seniority, committee fit, or institutional momentum. Shown only when the race has more than
   * one candidate and the role reads as an incumbent (not “unopposed”).
   */
  recordVsChange?: string;
  /** Highlight the whole card when red-flag severity is especially high. */
  redFlagCallout?: boolean;
}

export interface CrossTypologyRow {
  typology: TypologyCode;
  pick: string;
  confidence: ConfidenceSymbol;
  rationale: string;
}

export interface MeasureReadingLink {
  /** Short label shown as link text */
  label: string;
  /** HTTPS URL */
  url: string;
}

export interface MeasureBlock {
  question: string;
  /**
   * Short bullets tying the measure to the reader (who pays, who doesn’t, why it still matters).
   * Shown after the ballot question.
   */
  voterConnection?: string[];
  mechanismBullets: string[];
  argumentsFor: string[];
  argumentsAgainst: string[];
  /** Defaults: “Arguments for” / “Arguments against”. */
  argumentsForHeading?: string;
  argumentsAgainstHeading?: string;
  /** News explainers, official fiscal analysis, and major campaign / opposition filings */
  readingLinks?: MeasureReadingLink[];
}

export type RaceKind = 'candidates' | 'measure';

export interface Race {
  id: string;
  categoryId: string;
  title: string;
  /**
   * Short seat status shown in the race header, e.g. `Open (term limits)` or `Incumbent`.
   * Distinct from ballot designation on candidate cards.
   */
  seatContext?: string;
  /** Why this office matters: powers, consequences for voters (shown under “What’s at stake”). */
  stakesParagraphs?: string[];
  introParagraphs: string[];
  kind: RaceKind;
  candidates: Candidate[];
  measure?: MeasureBlock;
  crossTypology: CrossTypologyRow[];
  counterArguments?: string[];
}

export interface BallotCategory {
  id: string;
  label: string;
}

export interface BallotMeta {
  siteTitle: string;
  lastContentUpdated: string;
  scopeZip: string;
  scopeLabel: string;
  verificationNote: string;
  registrarLabel: string;
  registrarUrl: string;
}

export interface BallotData {
  meta: BallotMeta;
  typologies: TypologyDefinition[];
  categories: BallotCategory[];
  tldrRows: { raceId: string; label: string; cells: Record<TypologyCode, string> }[];
  races: Race[];
}
