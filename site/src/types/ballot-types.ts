/** Pew-derived typology codes used in the guide */
export type TypologyCode = 'PL' | 'EL' | 'DM' | 'OL' | 'SS' | 'AR' | 'PR' | 'CC' | 'FF';

export interface TypologyDefinition {
  code: TypologyCode;
  name: string;
  description: string;
}

export interface ScorecardRow {
  topic: string;
  position: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  role: string;
  /** Filename under `public/images/candidates/` without extension; omit for placeholder */
  photoSlug?: string;
  bio: string[];
  scorecard?: ScorecardRow[];
  money?: string;
  endorsements?: string;
  redFlags?: string[];
  redFlagCallout?: boolean;
}

export interface CrossTypologyRow {
  typology: TypologyCode;
  pick: string;
  confidence: '●' | '◐' | '○' | '—';
  rationale: string;
}

export interface MeasureBlock {
  question: string;
  mechanismBullets: string[];
  argumentsFor: string[];
  argumentsAgainst: string[];
}

export type RaceKind = 'candidates' | 'measure';

export interface Race {
  id: string;
  categoryId: string;
  title: string;
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
}

export interface BallotData {
  meta: BallotMeta;
  typologies: TypologyDefinition[];
  categories: BallotCategory[];
  tldrRows: { raceId: string; label: string; cells: Record<TypologyCode, string> }[];
  races: Race[];
}
