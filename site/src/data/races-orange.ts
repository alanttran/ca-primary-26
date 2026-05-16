import type { CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

/** Orange County federal, state-leg, and county races for ZIP 92868 and similar. */
export const RACES_ORANGE: Race[] = [
  {
    id: 'us-rep-ca46',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-46',
    kind: 'candidates',
    stakesParagraphs: [
      'Your member of Congress votes on federal taxes, immigration, military spending, health programs, climate and infrastructure funding, and oversight of the executive branch.',
      'CA-46 covers central Orange County including Orange and Anaheim after Prop 50. At stake is whether Lou Correa keeps a safe Democratic seat or faces a credible Republican challenge.',
    ],
    introParagraphs: ['Incumbent Lou Correa (D), former supervisor and state legislator. 92868 is in CA-46.'],
    candidates: [
      {
        id: 'correa',
        name: 'Lou Correa',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Long-serving Orange County Democrat; emphasizes Medicare, immigration, and working-class Latino communities in central OC.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Affordability framing for OC suburbs',
            comparison: 'R challengers emphasize deregulation; Correa is establishment D.',
          },
          {
            topic: 'Immigration',
            position: '✓ Pro-immigrant-rights voting record',
            comparison: 'Core OC Latino-community credential.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus vote',
            comparison: 'Safe D seat; R challengers are long shots.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Correa', '●', 'Latino working-family D incumbent'],
      ['EL', 'Correa', '●', 'Same'],
      ['DM', 'Correa', '●', 'Same'],
      ['OL', 'Correa', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Correa', '◐', 'Same'],
      ['PR', 'Correa', '◐', 'Same'],
      ['CC', 'Correa', '◐', 'Same'],
      ['FF', 'Correa', '◐', 'Same'],
    ]),
  },
  {
    id: 'senate-sd34',
    categoryId: 'state-leg',
    title: 'State Senate, District 34',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators shape the entire state budget, vote on housing, education, criminal justice, and climate law, and control which bills even reach the floor in Sacramento.',
      'SD-34 spans northern and central Orange County—92868 (Orange) voters use this seat, not LA or San Diego districts.',
    ],
    introParagraphs: ['Incumbent Tom Umberg (D), former Assemblymember and federal prosecutor. Orange (92868) is in SD-34.'],
    candidates: [
      {
        id: 'umberg-sd34',
        name: 'Tom Umberg',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former federal prosecutor and Army colonel; also ran for Board of Equalization. Emphasizes public safety and veterans in central Orange County.',
        ],
        scorecard: [
          {
            topic: 'Public safety',
            position: '✓ Prosecutor-military credentials',
            comparison: 'Different from LA sheriff race—statewide policy lever.',
          },
          {
            topic: 'Housing & transit',
            position: '~ Mainstream D on OC housing',
            comparison: 'R challengers run anti-mandate suburban messaging.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Democratic caucus',
            comparison: 'Incumbent in D-leaning OC seat.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Umberg', '●', 'Veteran-prosecutor D incumbent'],
      ['EL', 'Umberg', '●', 'Same'],
      ['DM', 'Umberg', '●', 'Same'],
      ['OL', 'Umberg', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Umberg', '◐', 'Same'],
      ['PR', 'Umberg', '◐', 'Same'],
      ['CC', 'Umberg', '◐', 'Same'],
      ['FF', 'Umberg', '◐', 'Same'],
    ]),
  },
  {
    id: 'assembly-ad68',
    categoryId: 'state-leg',
    title: 'State Assembly, District 68',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers vote on state housing law, education funding, public safety budgets, and taxes that touch every renter and homeowner.',
      'AD-68 covers Anaheim, Orange, and central OC—92868 voters use this line.',
    ],
    introParagraphs: ['Incumbent Avelino Valencia (D), former Anaheim councilmember.'],
    candidates: [
      {
        id: 'valencia',
        name: 'Avelino Valencia',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former Anaheim City Council member; emphasizes housing affordability, immigrant communities, and OC working families.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ OC affordability and tenant framing',
            comparison: 'R challengers emphasize local control and taxes.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Democratic caucus',
            comparison: 'Only viable D in AD-68 for most 92868 addresses.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Valencia', '●', 'OC working-family D incumbent'],
      ['EL', 'Valencia', '●', 'Same'],
      ['DM', 'Valencia', '●', 'Same'],
      ['OL', 'Valencia', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Valencia', '◐', 'Same'],
      ['PR', 'Valencia', '◐', 'Same'],
      ['CC', 'Valencia', '◐', 'Same'],
      ['FF', 'Valencia', '◐', 'Same'],
    ]),
  },
  {
    id: 'oc-sheriff',
    categoryId: 'local-orange',
    title: 'Orange County Sheriff-Coroner',
    kind: 'candidates',
    stakesParagraphs: [
      'The Orange County Sheriff runs patrol, jails, and coroner services for most of the county—budget, use of force, and jail conditions are perennial issues.',
      'At stake is whether Don Barnes keeps the seat amid reform debates or a challenger gains traction in June.',
    ],
    introParagraphs: ['Incumbent Don Barnes (R) faces challengers in the June primary; majority vote can win outright.'],
    candidates: [
      {
        id: 'barnes',
        name: 'Don Barnes',
        party: 'R',
        role: 'Incumbent',
        bio: [
          'Two-term sheriff; emphasizes public safety, jail reforms, and opposition to sanctuary policies in campaign materials.',
        ],
        scorecard: [
          {
            topic: 'Public safety',
            position: '✓ Law-and-order incumbent framing',
            comparison: 'Challengers pitch reform or alternative command experience.',
          },
          {
            topic: 'Jails & conditions',
            position: '◐ Claims reform progress; critics disagree',
            comparison: 'Key voter litmus for OC progressives.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Barnes', '◐', 'Incumbent stability'],
      ['EL', 'Barnes', '◐', 'Same'],
      ['DM', 'Barnes', '◐', 'Same'],
      ['OL', '—', '—', 'Research challengers'],
      ['SS', 'Barnes', '◐', 'Low-info default'],
      ['AR', 'Barnes', '●', 'Law-and-order R'],
      ['PR', 'Barnes', '●', 'Same'],
      ['CC', 'Barnes', '●', 'Same'],
      ['FF', 'Barnes', '●', 'Same'],
    ]),
  },
];
