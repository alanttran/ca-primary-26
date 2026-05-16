import type { CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

/** Federal, Assembly, and Santa Clara County offices for ZIP 94043 (Mountain View) sample ballot stack. BoE District 2 is shared from `races-alameda.ts`. */
export const RACES_SANTA_CLARA: Race[] = [
  {
    id: 'us-rep-ca16',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-16',
    kind: 'candidates',
    stakesParagraphs: [
      'Your representative votes on Silicon Valley staples—chips/export controls, antitrust scrutiny of Big Tech, student loans, NIH and defense R&D budgets, FAA drone rules over the Peninsula corridor, and oversight of Homeland Security—as well as tax and health policy that feeds through to employer-sponsored coverage here.',
      'Prop 50 (2025) redistricting kept most of northern Santa Clara County inside CA-16 while compressing partisan odds; incumbent Sam Liccardo is the heavy fundraising favorite, but jungle-primary math still rewards knowing the contrast between disciplined moderate governance and challenger lanes.',
    ],
    introParagraphs: [
      'Four-way blanket primary headlined by first-term incumbent Sam Liccardo (D): two Republicans (Kevin Johnson, Peter Soule) and Palo Alto/NP tech attorney Jotham Stein carve the opposition vote. Boundary databases warn a sliver of 94043 can land in neighboring CA-17 (Khanna)—if your official sample differs, trust the registrar printout.',
    ],
    candidates: [
      {
        id: 'sam-liccardo',
        photoSlug: 'sam-liccardo',
        name: 'Sam Liccardo',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former San José mayor elevated to Congress in 2024; Stanford/Harvard law background. Frames the seat around housing supply near transit, wildfire preparedness, FAA noise casework with SJC, and a prosecutor-style skepticism toward tech consolidation without abandoning Silicon Valley competitiveness.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ YIMBY-aligned mayor-era housing agenda; congressional housing votes still early-career',
            comparison:
              'Stein markets deeper tech-policy fluency—Liccardo emphasizes city hall delivery versus white-paper critiques.',
          },
          {
            topic: 'Tech & competition',
            position: '✓ Anti-monopoly instincts paired with constituent tech employers',
            comparison: 'Johnson and Soule run traditional GOP critiques of “Big Tech elites”; Stein pitches attorney nuance.',
          },
          {
            topic: 'Climate',
            position: '✓ Bay Area climate caucus norms; not the loudest Green New Deal messenger',
            comparison: 'Compared with Republicans—clear contrast; versus Stein—both fit blue-district expectation.',
          },
          {
            topic: 'Public safety',
            position: '✓ Mayor tenure during police-reform debates; emphasizes data-driven staffing',
            comparison: 'Johnson’s appeal is outsider law-and-order symbolism separate from SCC jail politics farther north.',
          },
          {
            topic: 'Seniority & casework',
            position: '~ Freshman juggling committee bids versus South Bay constituent load',
            comparison: 'Johnson/Stein bet impatience with “career politician” branding—Liccardo’s counter is airports, flood control, veterans intake.',
          },
        ],
        money: '≈ $3.2M reported receipts versus ≈ $1.25M disbursements as of March 31, 2026 (FEC snapshots summarized by Ballotpedia).',
        redFlags: [],
        recordVsChange:
          'Liccardo brings South Bay mayor-level housing fluency plus new federal casework chops; swapping for Stein trades name recognition + committee ladder for sharper tech-law outsider branding. Johnson or Soule are the ideological flips toward national Republican messaging.',
      },
      {
        id: 'jotham-stein',
        name: 'Jotham Stein',
        party: 'NP',
        role: 'Employment-tech attorney',
        bio: [
          'Palo Alto–based NP employment and executive-compensation lawyer who argues he can steward complex tech-economy issues without caucus polarization. Smaller treasury than Liccardo but enough for mail and debates.',
        ],
        scorecard: [
          {
            topic: 'Tech policy literacy',
            position: '✓✓ Practitioner résumé on contracts, founders, regulators',
            comparison: 'Liccardo knows land use and city finance—Stein’s edge is granular corporate-facing law.',
          },
          {
            topic: 'Progressive optics',
            position: '~ NP avoids partisan primary tag but overlaps tech-centrist donors',
            comparison: 'Not the labor-left lane; competes as technocratic outsider.',
          },
          {
            topic: 'Viability',
            position: '? Mid-five-figure COH bracket per March 31, 2026 FEC rollup',
            comparison: 'Best shot is squeezing past split Rs or catching Liccardo exhaustion—still numerically uphill.',
          },
        ],
        money: '≈ $57k receipts / ≈ $28k cash on hand (March 31, 2026 FEC figures tabulated by Ballotpedia).',
        redFlags: [],
      },
      {
        id: 'kevin-johnson-ca16',
        name: 'Kevin Johnson',
        party: 'R',
        role: 'Tech sales director',
        bio: [
          'Republican challenger positioned as culturally conservative foil in a cobalt-blue seat. Ballotpedia’s March 31, 2026 FEC rollup reports no disbursement activity—assume shoe-leather/low-budget GOTV.',
        ],
        scorecard: [
          {
            topic: 'Partisan signaling',
            position: '✓✓ Only major-party R with surname visibility in FEC naming',
            comparison: 'Soule splits R vote unless one drops out—coordinate with partisan friends if consolidating matters.',
          },
          {
            topic: 'Policy depth',
            position: '? Scarce public dossier versus Liccardo saturation',
            comparison: 'Protest-plus-party-line vote versus executive résumés.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'peter-soule',
        name: 'Peter Soule',
        party: 'R',
        role: 'Candidate',
        bio: [
          'Second Republican filing; Ballotpedia’s March 31, 2026 FEC snapshot lists no disbursements—assume long-shot challenger mirroring statewide GOP messaging on crime and taxes.',
        ],
        scorecard: [
          {
            topic: 'GOP consolidation',
            position: '? Splits jungle math with Kevin Johnson unless media clarifies viability',
            comparison: 'If you dislike Liccardo intensely, whichever R stays above water matters more than ideology nuance.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Liccardo', '●', 'Housing/transit resume + Biden-era Democratic baseline'],
      ['EL', 'Liccardo', '●', 'Incumbent treasury + caucus scaffolding'],
      ['DM', 'Liccardo', '●', 'Pragmatic blue governing story'],
      ['OL', 'Stein', '◐', 'Outsider attorney vs career mayor'],
      ['SS', '—', '—', 'Skip unless airport noise casework dominates'],
      ['AR', 'Johnson', '○', 'R protest vote splits with Soule'],
      ['PR', 'Johnson', '◐', 'Low-info R ballot line'],
      ['CC', 'Johnson', '●', 'Default R pick'],
      ['FF', 'Johnson', '◐', 'No evangelical storyline surfaced'],
    ]),
    counterArguments: [
      'EL (Liccardo ●): Stein is the sharper tech-law contrast if caucus conformity feels stale.',
      'OL (Stein ◐): Liccardo still delivers casework scaffolding freshmen lack.',
      'CC (Johnson ●): Soule spoilers—confirm who is viable before gifting Liccardo-only November paths.',
    ],
  },
  {
    id: 'assembly-ad26',
    categoryId: 'state-leg',
    title: 'State Assembly, District 26',
    kind: 'candidates',
    stakesParagraphs: [
      'AD-26 spans Mountain View alongside Sunnyvale, Cupertino, swaths of northern San José, Santa Clara pockets, plus Foothill–De Anza backstops—in other words semiconductor supply chains, VTA-heavy housing fights, groundwater boards, GHG building mandates, Stanford-adjacent research parks, and the education-to-workforce pipeline your zip codes subsidize.',
      'Votes on housing production incentives, Medi-Cal augmentation, UC/CSU and community-college budgeting, Charter School Act tweaks, CEQA streamlining, and privacy bills born in garages two miles from Castro Street—Mountain View ballots pick the Sunnyvale-aligned incumbent slate here.',
    ],
    introParagraphs: [
      'Ballotpedia’s June 2026 listing is a Democrat-versus-Republican headliner: incumbent Patrick Ahrens versus repeat Republican qualifier Tim Gorsulowsky, who surfaced in Low-era primaries.',
    ],
    candidates: [
      {
        id: 'patrick-ahrens-ad26',
        photoSlug: 'patrick-ahrens-ad26',
        name: 'Patrick Ahrens',
        party: 'D',
        role: 'Incumbent assemblymember',
        bio: [
          'Former Evan Low district director elected in 2024 after a costly primary against Tara Sreekrishnan; Foothill–De Anza trustee president before that; focuses on homelessness-to-college ladders, juvenile-justice tinkering (repealed truancy misdemeanor bill with Newsom ink in 2025), Head Start lobbying, and pushback on CSU administrative bloat headline-making in late 2025.',
        ],
        scorecard: [
          {
            topic: 'Higher education governance',
            position: '✓✓ Foothill–De Anza board presidency + fiery CSU board commentary',
            comparison: 'Gorsulowsky offers GOP fiscal skepticism without CCC governance credentials.',
          },
          {
            topic: 'Housing & affordability',
            position: '✓ Democratic caucus housing votes still early in tenure',
            comparison: 'Challenger warns one-party capitulation—Ahrens cites constituent casework bridging Mountain View renters and Sunnyvale redevelopment fights.',
          },
          {
            topic: 'Labor / education alliances',
            position: '✓ Community-college unions + caucus liberals',
            comparison: 'Gorsulowsky courts tax-weary suburban homeowners wary of dues-heavy coalitions.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Ahrens inherits Evan Low staff fluency plus board-of-trustee fluency across De Anza and Foothill; useful if you crave Sacramento operators who breathe Silicon Valley spreadsheets. Gorsulowsky is ideological counterweight—not an electability favorite in registration reality.',
      },
      {
        id: 'tim-gorsulowsky',
        name: 'Tim Gorsulowsky',
        party: 'R',
        role: 'Challenger — financial consultant',
        bio: [
          'Republican perennial in AD-26 primaries stretching back alongside Evan Low’s tenure; businessman framing around accountability, policing aesthetics, permitting delays, tax load, plus parental-rights shorthand depending on canvass collateral.',
        ],
        scorecard: [
          {
            topic: 'Republican viability',
            position: '✓✓ Highest-name-ID R historically in jungle fields',
            comparison: '2026 matchup is narrower—still steep registration climb.',
          },
          {
            topic: 'Policy contrast',
            position: '~ Standard GOP messaging on affordability and public disorder',
            comparison: 'Serves partisan balance voters more than nuanced housing analysis.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ahrens', '●', 'Housing/education-equity caucus biography'],
      ['EL', 'Ahrens', '●', 'Incumbent party scaffolding'],
      ['DM', 'Ahrens', '●', 'Pragmatic caucus insider'],
      ['OL', 'Gorsulowsky', '◐', 'Outsider R contrast'],
      ['SS', '—', '—', 'Skip unless CSU fracas resonates'],
      ['AR', 'Gorsulowsky', '○', 'Republican lone column'],
      ['PR', 'Gorsulowsky', '◐', 'Low-tax cues'],
      ['CC', 'Gorsulowsky', '●', 'Default R ballot box'],
      ['FF', 'Ahrens', '●', 'Equity-heavy origin story resonates with faith-aligned service groups'],
    ]),
    counterArguments: [
      'EL (Ahrens ●): Gorsulowsky if one-party skepticism dominates despite odds.',
      'CC (Gorsulowsky ●): Ahrens still channels actual committee access for peninsula infrastructure asks.',
    ],
  },
  {
    id: 'scc-da-2026',
    categoryId: 'local-sc',
    title: 'Santa Clara County District Attorney',
    kind: 'candidates',
    stakesParagraphs: [
      'The DA charges felonies/misdemeanors, handles diversion and conviction-integrity workloads, directs specialized domestic-violence and hate-crimes teams, and negotiates plea policy that shapes incarceration rates countywide—with Mountain View arrests flowing through this office just like larger San José caseloads.',
      'Santa Clara debated reform versus enforcement through the turbulent 2020s; this matchup tests whether incumbent Jeff Rosen’s conviction-integrity framing still satisfies voters who watched Bay Area smash-and-grab headlines or jail oversight controversies.',
    ],
    introParagraphs: [
      'Nonpartisan primary: incumbent Jeff Rosen vs. challenger Daniel M. Chung—the two names Ballotpedia lists for June 2, 2026; majority wins outright, otherwise November runoff.',
    ],
    candidates: [
      {
        id: 'jeff-rosen-scc',
        name: 'Jeff Rosen',
        party: 'NP',
        role: 'Incumbent district attorney',
        bio: [
          'County DA since 2011; pioneered conviction-integrity reviews, misdemeanor diversion ladders, Cold Case staffing, domestic-violence family justice hubs, and sexual-assault statute reforms. Critics say high-profile setbacks or jail deaths still haunt office culture—supporters cite data-driven reform pace.',
        ],
        scorecard: [
          {
            topic: 'Criminal justice reform',
            position: '✓✓ Signature conviction-integrity plus diversion scaffolding',
            comparison: 'Chung likely attacks implementation gaps Rosen would frame as media distortion.',
          },
          {
            topic: 'Public safety optics',
            position: '~ Balances reform branding with homicide clearance priorities',
            comparison: 'Chung can claim outsider perspective minus command-staff burnout.',
          },
          {
            topic: 'Institutional depth',
            position: '✓✓ Two-term executive managing 640+ staff cohort',
            comparison: 'Chung must overcome resume asymmetry unless scandal narrative clicks.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Rosen owns the sprawling apparatus—credibility vs fatigue. Keeping him preserves continuity on conviction integrity; swapping for Chung is a gamble on cultural reset if you believe line prosecutors need outsider leadership.',
      },
      {
        id: 'daniel-chung-da',
        name: 'Daniel M. Chung',
        party: 'NP',
        role: 'Former prosecutor / challenger',
        bio: [
          'Harvard A.B.; Columbia Law; veteran violent-crimes prosecutor wired into Silicon Valley juries; finished second (~80k votes) in the 2022 DA jungle and returned for 2026 with “vertical prosecution teams,” diversion-for-misdemeanors planks, corruption probes, victim-rights scaffolding, plus sharp criticism of sitting management—East Bay Times (May 2026) flagged an internal spat where supporters accused the office of sidelining him after policy clashes.',
        ],
        scorecard: [
          {
            topic: 'Prosecutorial craft',
            position: '✓✓ Specialized felony courtroom résumé',
            comparison: 'Rosen anchors managers and infrastructure—Chung pitches trial toughness vs bureaucracy.',
          },
          {
            topic: 'Reform temperament',
            position: '~ Promises nuanced diversion while hammering mismanagement optics',
            comparison: 'Rosen brands conviction integrity—vote on whether insider critique outweighs outsider risk.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Rosen', '●', 'Reform scaffolding + Innocence-aligned talking points'],
      ['EL', 'Rosen', '●', 'Institutional alliances with county policymakers'],
      ['DM', 'Rosen', '◐', 'Mixed labor/public-safety receptions'],
      ['OL', 'Chung', '◐', 'Outsider prosecutor contrast'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Chung', '◐', 'Accountability challenger'],
      ['PR', 'Chung', '●', 'Tough-on-mismanagement vibes without partisan ID'],
      ['CC', 'Chung', '◐', 'Crime skepticism anchored on leadership critique'],
      ['FF', '—', '—', 'Faith angle not surfaced'],
    ]),
    counterArguments: [
      'PL (Rosen ●): Chung if you blame leadership culture for scandal headlines.',
      'OL (Chung ◐): Rosen’s conviction-integrity unit is fragile—disruption risks losing staffing expertise.',
      'PR (Chung ●): Rosen backers argue numbers disprove “chaos prosecutor” caricature.',
    ],
  },
  {
    id: 'scc-assessor-2026',
    categoryId: 'local-sc',
    title: 'Santa Clara County Assessor',
    kind: 'candidates',
    stakesParagraphs: [
      'The assessor sets property valuations that feed schools, firefighters, flood controls, VTA corridors, and every city budget in Silicon Valley—influencing whether homeowners see sudden reassessment shocks and whether big campuses capture fair share.',
      'Even uncontested cycles matter: the assessor’s data science and appeals shop shape Prop 13 implementation for Mountain View condos, North Bayshore office conversions, and Google-adjacent land swaps.',
    ],
    introParagraphs: [
      'Nonpartisan; Ballotpedia lists Assessor Neysa Fligor as the sole filed candidate—expect automatic advancement absent a shock write-in fight.',
    ],
    candidates: [
      {
        id: 'neysa-fligor',
        name: 'Neysa Fligor',
        party: 'NP',
        role: 'Incumbent county assessor',
        bio: [
          'Appointed county assessor after long deputy-assessor tenure; emphasizes valuation fairness, modernization of GIS/appraisal workflows, taxpayer service counters, and commercial-property auditing during tech-campus expansions.',
        ],
        scorecard: [
          { topic: 'Property-tax stewardship', position: '✓✓ Incumbent assessor modernization pitch' },
          {
            topic: 'Tech-campus assessments',
            position: '✓ Stresses equitable treatment of campuses vs homeowners',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Fligor', '●', 'Unopposed; reform-friendly assessor modernization'],
      ['EL', 'Fligor', '●', 'Institutional incumbent'],
      ['DM', 'Fligor', '●', 'Same'],
      ['OL', 'Fligor', '●', 'No challenger'],
      ['SS', 'Fligor', '●', 'Low-turnout cushion ok'],
      ['AR', 'Fligor', '●', 'Data-driven valuation story'],
      ['PR', 'Fligor', '●', 'Neutral technocrat'],
      ['CC', 'Fligor', '●', 'Property-owner trust vector'],
      ['FF', 'Fligor', '●', 'No faith contrast'],
    ]),
    counterArguments: [
      'SS (Fligor ●): Unopposed—skip researching beyond validating title if time is scarce.',
    ],
  },
  {
    id: 'scc-sheriff-2026',
    categoryId: 'local-sc',
    title: 'Santa Clara County Sheriff',
    kind: 'candidates',
    stakesParagraphs: [
      'The sheriff runs the main jail complex, oversees patrol contracts with smaller cities (where applicable), and sets use-of-force training that radiates countywide—even as incorporated Mountain View retains its municipal police department, jail policy and ICE-notification fights still ripple through activism here.',
      'Ballotpedia and local reporters describe Sheriff Bob Jonsen filing alone for June 2026—still worth reading annual oversight reports before rubber-stamping another term.',
    ],
    introParagraphs: [
      'Nonpartisan; incumbent Bob Jonsen listed as solitary filer ahead of June 2026—subject to cancellations if law changes.',
    ],
    candidates: [
      {
        id: 'bob-jonsen-scc',
        name: 'Bob Jonsen',
        party: 'NP',
        role: 'Incumbent county sheriff',
        bio: [
          'Former Palo Alto chief elected sheriff after reform-flavored campaigning; emphasizes mental-health co-responders, body-worn cameras, recruitment challenges, jail healthcare oversight partnerships, and diffusing courtroom controversies leftover from predecessor era.',
        ],
        scorecard: [
          {
            topic: 'Jails & oversight',
            position: '✓ Reform messaging + contested real-world scrutiny',
            comparison: 'Unopposed vote is confidence signal—inspect Civil Grand Jury follow-ups independently.',
          },
          {
            topic: 'Labor & staffing',
            position: '~ Deputies guild dynamics shape policy as much as campaign promises',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Jonsen', '●', 'Reform-incumbent sheriff story'],
      ['EL', 'Jonsen', '●', 'Institutional alliances'],
      ['DM', 'Jonsen', '◐', 'Labor + reform tension'],
      ['OL', 'Jonsen', '●', 'No ballot opponent'],
      ['SS', 'Jonsen', '●', 'Low salience protest impossible'],
      ['AR', 'Jonsen', '●', 'Accountability optics depend on audits'],
      ['PR', 'Jonsen', '●', 'Center technocrat policing'],
      ['CC', 'Jonsen', '●', 'Default continuity'],
      ['FF', 'Jonsen', '●', 'No faith challenger'],
    ]),
    counterArguments: [
      'SS (Jonsen ●): Unopposed—but still skim jail oversight dashboards if you withhold enthusiasm.',
    ],
  },
];
