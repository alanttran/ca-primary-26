import type { CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

/** LA County legislative lines not on the 91501 Burbank ballot (Hollywood / Westside). */
export const RACES_LA_EXT: Race[] = [
  {
    id: 'senate-sd24',
    categoryId: 'state-leg',
    title: 'State Senate, District 24',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators shape the entire state budget, vote on housing, education, criminal justice, and climate law, and control which bills even reach the floor in Sacramento.',
      'SD-24 covers Westside and coastal LA including Hollywood (90028)—not SD-20 (San Fernando Valley / Burbank).',
    ],
    introParagraphs: ['Incumbent Ben Allen (D), former Santa Monica mayor. Hollywood voters are in SD-24, not Menjivar’s SD-20.'],
    candidates: [
      {
        id: 'allen-sd',
        name: 'Ben Allen',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former Santa Monica school board president and mayor; chairs Senate education committee. Emphasizes public schools, climate, and Westside housing.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Westside housing and transit coalition politics',
            comparison: 'Menjivar (SD-20) is a different geography—Allen owns Westside record.',
          },
          {
            topic: 'Education funding',
            position: '✓✓ Senate education chair; public-school priority',
            comparison: 'Signature credential vs any R challenger.',
          },
          {
            topic: 'Climate',
            position: '✓ Strong environmental voting record',
            comparison: 'Mainstream D vs R anti-mandate framing.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Allen', '●', 'Education and climate incumbent'],
      ['EL', 'Allen', '●', 'Same'],
      ['DM', 'Allen', '●', 'Same'],
      ['OL', 'Allen', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Allen', '◐', 'Same'],
      ['PR', 'Allen', '◐', 'Same'],
      ['CC', 'Allen', '◐', 'Same'],
      ['FF', 'Allen', '◐', 'Same'],
    ]),
  },
  {
    id: 'assembly-ad52',
    categoryId: 'state-leg',
    title: 'State Assembly, District 52',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers vote on state housing law, education funding, public safety budgets, and taxes that touch every renter and homeowner.',
      'AD-52 includes Hollywood, Echo Park, and Northeast LA—not AD-44 (Burbank / east Valley).',
    ],
    introParagraphs: ['Incumbent Jessica Caloza (D). Hollywood (90028) uses AD-52, not Nick Schultz’s AD-44.'],
    candidates: [
      {
        id: 'caloza',
        name: 'Jessica Caloza',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former LA City planning commissioner and civil-rights attorney; emphasizes affordable housing, reproductive freedom, and homelessness response.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓✓ Affordable housing and tenant-protection focus',
            comparison: 'Schultz (AD-44) is a different seat—Caloza owns Hollywood-area housing politics.',
          },
          {
            topic: 'Reproductive rights',
            position: '✓ Explicit pro-choice incumbent',
            comparison: 'Core progressive credential in AD-52.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Democratic caucus',
            comparison: 'Only viable D for most 90028 addresses.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Caloza', '●', 'Housing and reproductive-rights incumbent'],
      ['EL', 'Caloza', '●', 'Same'],
      ['DM', 'Caloza', '●', 'Same'],
      ['OL', 'Caloza', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Caloza', '◐', 'Same'],
      ['PR', 'Caloza', '◐', 'Same'],
      ['CC', 'Caloza', '◐', 'Same'],
      ['FF', 'Caloza', '◐', 'Same'],
    ]),
  },
];
