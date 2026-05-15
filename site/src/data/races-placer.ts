import type { CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

/** Federal, state-leg, BoE D1, and Placer County races for ZIP 95765 (Rocklin / south Placer). */
export const RACES_PLACER: Race[] = [
  {
    id: 'boe-d1',
    categoryId: 'statewide-partisan',
    title: 'Board of Equalization, District 1',
    kind: 'candidates',
    stakesParagraphs: [
      'The Board of Equalization hears taxpayer appeals on assessed property values, oversees special tax districts, and weighs in on how utilities and railroads are valued—decisions that flow through to property-tax fairness and local revenue.',
      'District 1 spans most of inland Northern California, including Placer County. At stake is whether the seat goes to a labor-aligned Democrat, a business-oriented Republican, or a low-profile alternative in a low-information contest.',
    ],
    introParagraphs: [
      'Open seat after redistricting reshuffled the map. Five candidates; Nelson Esparza and Shannon Grove lead fundraising and endorsements.',
    ],
    candidates: [
      {
        id: 'esparza',
        name: 'Nelson Esparza',
        party: 'D',
        role: 'Fresno City Councilmember',
        bio: [
          'Teacher and economist; Fresno council member. California Democratic Party and California Labor Federation endorsements. Frames the race as protecting working families on tax fairness.',
        ],
        endorsements: 'California Democratic Party, California Labor Federation, CSEA.',
        redFlags: [],
      },
      {
        id: 'williamson',
        name: 'Donald E. Williamson',
        party: 'D',
        role: 'Equalization board consultant',
        bio: ['BoE staff background; less prominent in regional press than Esparza or Grove.'],
        redFlags: [],
      },
      {
        id: 'grove',
        photoSlug: 'grove',
        name: 'Shannon Grove',
        party: 'R',
        role: 'State Senator (Bakersfield)',
        bio: [
          'Sitting state senator; strongest Republican fundraiser in the field. Reform California and California Republican Assembly endorsements.',
        ],
        endorsements: 'Reform California, California Republican Assembly.',
        redFlags: [],
      },
      {
        id: 'beach',
        name: 'Dusty Beach',
        party: 'R',
        role: 'Retired correctional officer',
        bio: ['Law-enforcement background; lower-profile R alternative to Grove.'],
        redFlags: [],
      },
      {
        id: 'shahatit',
        name: 'Nader F. Shahatit',
        party: 'R',
        role: 'Tax consultant',
        bio: ['Professional tax background; niche down-ballot candidacy.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Esparza', '●', 'Labor-backed D; clearest progressive lane'],
      ['EL', 'Esparza', '●', 'Party-endorsed establishment Democrat'],
      ['DM', 'Esparza', '●', 'Same'],
      ['OL', 'Esparza', '◐', 'Or skip — low salience office'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Grove', '○', 'Most viable R; senator resume'],
      ['PR', 'Grove', '◐', 'Anti-tax R branding'],
      ['CC', 'Grove', '●', 'Standard business R pick'],
      ['FF', 'Grove', '●', 'Same'],
    ]),
    counterArguments: [
      'EL (Esparza ●): Grove’s fundraising edge matters if you weight electability in a sprawling R-leaning district.',
      'CC (Grove ●): Esparza is the labor-D alternative if party control of tax appeals matters more than GOP credentials.',
    ],
  },
  {
    id: 'us-rep-ca6',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-6',
    kind: 'candidates',
    stakesParagraphs: [
      'Your member of Congress votes on federal taxes, immigration, military spending, health programs, climate and infrastructure funding, and oversight of the executive branch.',
      'For south Placer and the Sacramento suburbs, at stake is whether the district keeps a center-right incumbent who left the GOP label or sends a Democrat to a seat that still leans Republican on paper after Prop 50.',
    ],
    introParagraphs: [
      'Incumbent Kevin Kiley (formerly R, now no party preference) faces a crowded Democratic field after Roseville and Rocklin moved into CA-6. Top Democrats by visibility and fundraising include Thien Ho, Richard Pan, and Lauren Babb Tomlinson.',
    ],
    candidates: [
      {
        id: 'kiley',
        photoSlug: 'kiley',
        name: 'Kevin Kiley',
        party: 'NP',
        role: 'Incumbent',
        bio: [
          'Former Assemblymember and 2022 GOP nominee for governor; re-registered as no party preference while seeking re-election. Strong fundraising; frames himself as independent from both parties.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '~ Market-oriented; skeptical of federal housing mandates',
            comparison: 'Dem challengers emphasize affordability and renter protections Kiley does not center.',
          },
          {
            topic: 'Climate',
            position: '~ Moderate R record before party switch; not a climate hawk',
            comparison: 'Pan and Tomlinson run greener platforms; Ho emphasizes prosecutorial accountability over climate.',
          },
          {
            topic: 'Reproductive rights',
            position: '~ Mixed R voting history; post-switch messaging emphasizes independence',
            comparison: 'All major Dems are explicit pro-choice; Kiley is the outlier for abortion-rights voters.',
          },
          {
            topic: 'Trump / House majority',
            position: '~ Center-right vote; no longer on GOP ballot line',
            comparison: 'Dem field competes on who can flip a seat that still tilts R in registration.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'ho',
        name: 'Thien Ho',
        party: 'D',
        role: 'Sacramento County District Attorney',
        bio: [
          'County DA since 2022; former prosecutor. Campaign emphasizes public safety and holding corporations accountable. Strong local name recognition in the Sacramento media market.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Affordability framing; less YIMBY-specific than Tomlinson',
            comparison: 'Tomlinson leads on reproductive-healthcare access; Ho leads on law-enforcement credibility among Dems.',
          },
          {
            topic: 'Climate',
            position: '~ Standard Democratic positioning',
            comparison: 'Pan has longer Sacramento environmental voting record as ex-senator.',
          },
          {
            topic: 'Reproductive rights',
            position: '✓ Pro-choice; pro-Planned Parenthood alignment',
            comparison: 'Tomlinson’s Planned Parenthood leadership is a sharper signal for reproductive voters.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus vote',
            comparison: 'Competes with Pan and Tomlinson for who can persuade crossover and soft-R voters.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'pan',
        photoSlug: 'pan',
        name: 'Richard Pan',
        party: 'D',
        role: 'Former State Senator',
        bio: [
          'Pediatrician and former state senator known for vaccine-policy fights and health-care legislation. Long Sacramento policy résumé; mixed progressive criticism on some education votes.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Pro-affordability; Sacramento housing votes in legislature',
            comparison: 'Less national progressive branding than Tomlinson; more institutional than Ho’s prosecutor frame.',
          },
          {
            topic: 'Climate',
            position: '✓ Stronger environmental record than Ho among Sacramento pols',
            comparison: 'Kiley is the inverse; Tomlinson matches on healthcare-climate coalition politics.',
          },
          {
            topic: 'Reproductive rights',
            position: '✓ Pro-choice; health-care provider background',
            comparison: 'Tomlinson still owns Planned Parenthood executive credentials.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic vote; polarizing on public-health mandates',
            comparison: 'Cross-typology note: vaccine politics may alienate OL/SS voters who otherwise want a D flip.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'tomlinson',
        name: 'Lauren Babb Tomlinson',
        party: 'D',
        role: 'Planned Parenthood Mar Monte executive',
        bio: [
          'Chief public affairs officer for the nation’s largest Planned Parenthood affiliate; Newsom appointee chairing the California Commission on the Status of Women and Girls. Campaign centers affordability, care economy, and reproductive freedom.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Renter protections and first-time buyer programs',
            comparison: 'More explicit economic-populist framing than Ho’s prosecutor brand.',
          },
          {
            topic: 'Climate',
            position: '✓ Healthcare-climate coalition politics',
            comparison: 'Pan has longer legislative environmental votes; Tomlinson has advocacy-network depth.',
          },
          {
            topic: 'Reproductive rights',
            position: '✓✓ Career built on reproductive healthcare access',
            comparison: 'Clearest contrast with Kiley for abortion-rights voters.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Progressive Democratic coalition',
            comparison: 'May be too progressive for crossover voters Ho and Pan court—trade-off for PL/EL reproductive voters.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'guerrero',
        name: 'Martha Guerrero',
        party: 'D',
        role: 'West Sacramento Mayor',
        bio: ['Local mayor; smaller fundraising footprint than Ho, Pan, or Tomlinson.'],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '? Local mayor record; less federal paper trail',
            comparison: 'Long-shot compared with top-funded Dems.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Tomlinson', '◐', 'Strongest reproductive-rights and care-economy lane'],
      ['EL', 'Ho', '◐', 'Electable prosecutor-brand Democrat'],
      ['DM', 'Ho', '●', 'Same'],
      ['OL', 'Tomlinson', '○', 'Or Pan if health-policy record resonates'],
      ['SS', '—', '—', 'Skip if uninformed'],
      ['AR', 'Kiley', '◐', 'Center-right incumbent without GOP label'],
      ['PR', 'Kiley', '◐', 'Anti-establishment framing post-party switch'],
      ['CC', 'Kiley', '●', 'Fiscal conservative default'],
      ['FF', 'Kiley', '●', 'Same'],
    ]),
    counterArguments: [
      'EL (Ho ◐): Tomlinson is the clearer progressive signal if flipping the seat matters more than prosecutor branding.',
      'AR (Kiley ◐): Any Democrat advances party control; Kiley is the non-D option if you distrust the House Democratic caucus.',
      'PL (Tomlinson ◐): Ho may be more competitive in a district that still leans R on registration.',
    ],
  },
  {
    id: 'senate-sd6',
    categoryId: 'state-leg',
    title: 'State Senate, District 6',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators shape the entire state budget, vote on housing, education, criminal justice, and climate law, and control which bills even reach the floor in Sacramento.',
      'SD-6 covers south Placer, parts of Sacramento County, and suburban “purple” territory where a few points of turnout can swing control of competitive legislation.',
    ],
    introParagraphs: [
      'Incumbent Roger Niello (R), former Assemblymember and auto-dealership executive, faces Democrats Sean Frame and Sara Velasco. Niello holds a large fundraising lead.',
    ],
    candidates: [
      {
        id: 'niello',
        photoSlug: 'niello',
        name: 'Roger Niello',
        party: 'R',
        role: 'Incumbent',
        bio: [
          'Businessman; served in the Assembly before winning SD-6 in 2022. Eligible for one more term. Emphasizes fiscal restraint and business climate.',
        ],
        scorecard: [
          {
            topic: 'Housing & land use',
            position: '~ Pro-development business framing; skeptical of state mandates',
            comparison: 'Frame runs explicit housing-affordability and tenant themes Niello does not own.',
          },
          {
            topic: 'Public safety',
            position: '✓ Tough-on-crime Republican caucus positioning',
            comparison: 'Frame is the reform-leaning alternative; Velasco has minimal public record.',
          },
          {
            topic: 'Education',
            position: '~ Standard GOP school-funding votes',
            comparison: 'Frame highlights school-board service; Niello has legislative committee depth.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'frame',
        name: 'Sean Frame',
        party: 'D',
        role: 'Placerville Union School District trustee',
        bio: [
          'Multimedia specialist for Sacramento County Office of Education; progressive Democrat. Prior runs for Congress and Assembly. Campaign stresses no corporate PAC money and housing affordability.',
        ],
        scorecard: [
          {
            topic: 'Housing & land use',
            position: '✓ Affordability and tenant-protection emphasis',
            comparison: 'Clearest D contrast with Niello on housing; Velasco lacks comparable detail.',
          },
          {
            topic: 'Public safety',
            position: '~ Reform-leaning; education-sector background',
            comparison: 'Niello owns law-enforcement alignment; Frame courts labor and educators.',
          },
          {
            topic: 'Education',
            position: '✓ School board experience',
            comparison: 'More education-specific than Velasco’s writer profile.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'velasco',
        name: 'Sara Velasco',
        party: 'D',
        role: 'Writer',
        bio: ['Filed as a Democratic challenger; limited media coverage and fundraising compared with Frame and Niello.'],
        scorecard: [
          {
            topic: 'Housing & land use',
            position: '? Sparse public platform',
            comparison: 'Frame is the viable progressive alternative to Niello.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Frame', '●', 'Progressive housing and labor-adjacent framing'],
      ['EL', 'Frame', '◐', 'Underfunded vs Niello but clearest D lane'],
      ['DM', 'Frame', '●', 'Same'],
      ['OL', 'Frame', '◐', 'Corporate-free campaign pitch'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Niello', '◐', 'Business-moderate R incumbent'],
      ['PR', 'Niello', '◐', 'Anti-tax suburban R'],
      ['CC', 'Niello', '●', 'Same'],
      ['FF', 'Niello', '●', 'Same'],
    ]),
    counterArguments: [
      'EL (Frame ◐): Niello’s incumbency and fundraising are real—vote Niello only if fiscal restraint outweighs party control.',
      'CC (Niello ●): Frame is the housing-affordability vote if you want a check from the left.',
    ],
  },
  {
    id: 'assembly-ad5',
    categoryId: 'state-leg',
    title: 'State Assembly, District 5',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers introduce and amend legislation, vote on the budget line by line, and decide committee outcomes on housing, schools, health care, labor, and the environment.',
      'AD-5 covers most of Placer County and parts of El Dorado County—suburban growth, fire risk, and state–local fights over housing targets are on the ballot here.',
    ],
    introParagraphs: [
      'Rematch: incumbent Republican Joe Patterson vs. Democrat Neva Parker, who lost narrowly in 2024. Patterson holds a large fundraising advantage; Parker has the California Democratic Party endorsement.',
    ],
    candidates: [
      {
        id: 'patterson',
        photoSlug: 'patterson',
        name: 'Joe Patterson',
        party: 'R',
        role: 'Incumbent',
        bio: [
          'Former Rocklin vice mayor; won AD-5 in 2024. Emphasizes public safety, fiscal restraint, and pushback on state housing mandates. Strong GOP and business support.',
        ],
        scorecard: [
          {
            topic: 'Housing & RHNA',
            position: '✗ Skeptical of state housing quotas and local mandate preemption',
            comparison: 'Parker supports more state tools for affordability; Patterson aligns with local-control suburbs.',
          },
          {
            topic: 'Public safety / fire',
            position: '✓ Law-enforcement and fire-prevention emphasis',
            comparison: 'Parker balances education funding; Patterson leads with GOP public-safety coalition.',
          },
          {
            topic: 'Education',
            position: '~ School choice sympathies; skeptical of new education bureaucracy',
            comparison: 'Parker is CTA-aligned; Patterson fits parental-choice and fiscal-conservative voters.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'parker',
        name: 'Neva Parker',
        party: 'D',
        role: 'Challenger',
        bio: [
          '2024 challenger; California Democratic Party endorsement in 2026. Campaign focuses on affordability, public schools, and reproductive rights in a R-leaning seat.',
        ],
        scorecard: [
          {
            topic: 'Housing & RHNA',
            position: '✓ Supports tools to build affordable housing and tenant protections',
            comparison: 'Direct contrast with Patterson’s anti-mandate suburban coalition.',
          },
          {
            topic: 'Public safety / fire',
            position: '~ Mainstream Democratic funding for emergency services',
            comparison: 'Patterson owns “tough on crime” branding; Parker emphasizes schools and services.',
          },
          {
            topic: 'Education',
            position: '✓ Pro public-school funding; labor-education alignment',
            comparison: 'CTA-style Democratic lane vs Patterson’s choice and austerity framing.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Parker', '●', 'Only viable D; housing and reproductive-rights contrast'],
      ['EL', 'Parker', '◐', 'Underdog in R-leaning seat'],
      ['DM', 'Parker', '●', 'Same'],
      ['OL', 'Parker', '◐', 'Rematch after close 2024 loss'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Patterson', '◐', 'Suburban moderate R incumbent'],
      ['PR', 'Patterson', '●', 'Anti-mandate, anti-tax suburban populism'],
      ['CC', 'Patterson', '●', 'Same'],
      ['FF', 'Patterson', '●', 'Same'],
    ]),
    counterArguments: [
      'EL (Parker ◐): Patterson’s 2024 win and fundraising edge are real—vote Patterson if local control on housing outweighs party.',
      'PR (Patterson ●): Parker is the affordability and public-schools vote if you want a Democratic check in the Assembly.',
    ],
  },
  {
    id: 'placer-judge-3',
    categoryId: 'local-placer',
    title: 'Superior Court Judge, Office No. 3',
    kind: 'candidates',
    stakesParagraphs: [
      'Superior Court judges decide criminal sentences, family and custody matters, civil disputes, and restraining orders—often with years of impact and little media coverage.',
      'This contested Placer County race pits an appointed incumbent against a prosecutor-mayor challenger; bar ratings and courtroom temperament matter more than party labels.',
    ],
    introParagraphs: [
      'Contested: appointed incumbent Leon A. Dixson vs. Rocklin Mayor and deputy DA David Bass. Unusual competition—most California judicial seats are unopposed.',
    ],
    candidates: [
      {
        id: 'dixson',
        name: 'Leon A. Dixson',
        party: 'NP',
        role: 'Incumbent (appointed 2024)',
        bio: [
          'Newsom appointee; former Legal Services of Northern California attorney with civil-rights background. Endorsed by sitting Placer Superior Court judges and retired Sheriff Edward Bonner.',
        ],
        scorecard: [
          {
            topic: 'Judicial background',
            position: '✓ Civil-rights and legal-aid career before appointment',
            comparison: 'Bass emphasizes prosecution and law-enforcement support Dixson does not center.',
          },
          {
            topic: 'Public safety framing',
            position: '~ Defense-side and civil-rights experience',
            comparison: 'Bass pitches courtroom toughness and Rocklin public-safety record.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'bass',
        name: 'David Bass',
        party: 'NP',
        role: 'Rocklin Mayor; Sacramento County deputy DA',
        bio: [
          'Prosecutor and Rocklin mayor. Campaign emphasizes public safety, victims’ rights, and law-enforcement support.',
        ],
        scorecard: [
          {
            topic: 'Judicial background',
            position: '✓✓ Prosecutorial trial experience',
            comparison: 'Dixson offers civil-rights and legal-aid depth; Bass offers DA trial pipeline.',
          },
          {
            topic: 'Public safety framing',
            position: '✓✓ Law-enforcement endorsements and mayor record',
            comparison: 'Sharpest contrast for voters who want a prosecution-style bench.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Dixson', '◐', 'Civil-rights bench vs prosecution default'],
      ['EL', 'Dixson', '◐', 'Institutional endorsements from sitting judges'],
      ['DM', 'Dixson', '◐', 'Same'],
      ['OL', 'Dixson', '○', 'Or Bass if you distrust appointee pipeline'],
      ['SS', 'Dixson', '◐', 'Low-info race — read both bar evaluations'],
      ['AR', 'Bass', '◐', 'Prosecutor-mayor “tough but fair” pitch'],
      ['PR', 'Bass', '◐', 'Public-safety populist judicial framing'],
      ['CC', 'Bass', '●', 'Law-enforcement alignment'],
      ['FF', 'Bass', '●', 'Same'],
    ]),
    counterArguments: [
      'CC (Bass ●): Dixson’s civil-rights background may better balance civil cases and family court—Bass is the prosecution-default pick.',
      'PL (Dixson ◐): Bass’s DA and mayor record is a clearer public-safety signal for voters who prioritize enforcement.',
    ],
  },
  {
    id: 'placer-county-superintendent',
    categoryId: 'local-placer',
    title: 'Placer County Superintendent of Schools',
    kind: 'candidates',
    stakesParagraphs: [
      'The county superintendent supports local districts, oversees fiscal solvency reviews, and runs programs for vulnerable students—especially important when districts face enrollment shifts and state funding changes.',
      'At stake is continuity in countywide education leadership and how aggressively the office intervenes when a district struggles financially or academically.',
    ],
    introParagraphs: [
      'Incumbent Gayle Garbolino-Mojica is seeking re-election; filed without a listed opponent as of the March 2026 filing deadline.',
    ],
    candidates: [
      {
        id: 'garbolino-mojica',
        name: 'Gayle Garbolino-Mojica',
        party: 'NP',
        role: 'Incumbent',
        bio: [
          'Long-serving county superintendent; oversees fiscal oversight of Placer districts and county education services.',
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Garbolino-Mojica', '●', 'Unopposed'],
      ['EL', 'Garbolino-Mojica', '●', 'Same'],
      ['DM', 'Garbolino-Mojica', '●', 'Same'],
      ['OL', 'Garbolino-Mojica', '●', 'Same'],
      ['SS', 'Garbolino-Mojica', '●', 'Same'],
      ['AR', 'Garbolino-Mojica', '●', 'Same'],
      ['PR', 'Garbolino-Mojica', '●', 'Same'],
      ['CC', 'Garbolino-Mojica', '●', 'Same'],
      ['FF', 'Garbolino-Mojica', '●', 'Same'],
    ]),
  },
  {
    id: 'placer-assessor',
    categoryId: 'local-placer',
    title: 'Placer County Assessor',
    kind: 'candidates',
    stakesParagraphs: [
      'The assessor values property for tax purposes, administers exemptions, and handles assessment appeals that affect every homeowner and business in the county.',
      'Errors or politicized assessments ripple through school and city budgets that depend on property-tax revenue.',
    ],
    introParagraphs: ['Matthew R. Maynard filed for assessor without a listed opponent as of the March 2026 filing deadline.'],
    candidates: [
      {
        id: 'maynard',
        name: 'Matthew R. Maynard',
        party: 'NP',
        role: 'Candidate',
        bio: ['Professional assessor background per county candidate filings.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Maynard', '●', 'Unopposed'],
      ['EL', 'Maynard', '●', 'Same'],
      ['DM', 'Maynard', '●', 'Same'],
      ['OL', 'Maynard', '●', 'Same'],
      ['SS', 'Maynard', '●', 'Same'],
      ['AR', 'Maynard', '●', 'Same'],
      ['PR', 'Maynard', '●', 'Same'],
      ['CC', 'Maynard', '●', 'Same'],
      ['FF', 'Maynard', '●', 'Same'],
    ]),
  },
  {
    id: 'placer-auditor-controller',
    categoryId: 'local-placer',
    title: 'Placer County Auditor-Controller',
    kind: 'candidates',
    stakesParagraphs: [
      'The auditor-controller audits county spending, processes payroll, and guards against waste and fraud in a department that touches every county program.',
      'At stake is whether financial oversight stays technocratic and low-profile or becomes a political platform.',
    ],
    introParagraphs: ['Andrew C. Sisk filed without a listed opponent as of the March 2026 filing deadline.'],
    candidates: [
      {
        id: 'sisk',
        name: 'Andrew C. Sisk',
        party: 'NP',
        role: 'Candidate',
        bio: ['County financial officer background per candidate filings.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Sisk', '●', 'Unopposed'],
      ['EL', 'Sisk', '●', 'Same'],
      ['DM', 'Sisk', '●', 'Same'],
      ['OL', 'Sisk', '●', 'Same'],
      ['SS', 'Sisk', '●', 'Same'],
      ['AR', 'Sisk', '●', 'Same'],
      ['PR', 'Sisk', '●', 'Same'],
      ['CC', 'Sisk', '●', 'Same'],
      ['FF', 'Sisk', '●', 'Same'],
    ]),
  },
  {
    id: 'placer-clerk-recorder',
    categoryId: 'local-placer',
    title: 'Placer County Clerk-Recorder-Registrar of Voters',
    kind: 'candidates',
    stakesParagraphs: [
      'This office runs elections, records deeds and vital records, and maintains the voter rolls—any breakdown affects trust in election results and property transfers.',
      'At stake is competent election administration in a county that has grown quickly and faces statewide scrutiny of voting systems.',
    ],
    introParagraphs: ['Ryan T. Ronco filed for re-election without a listed opponent as of the March 2026 filing deadline.'],
    candidates: [
      {
        id: 'ronco',
        name: 'Ryan T. Ronco',
        party: 'NP',
        role: 'Incumbent',
        bio: ['County clerk-recorder-registrar; oversees Placer elections and recording.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ronco', '●', 'Unopposed'],
      ['EL', 'Ronco', '●', 'Same'],
      ['DM', 'Ronco', '●', 'Same'],
      ['OL', 'Ronco', '●', 'Same'],
      ['SS', 'Ronco', '●', 'Same'],
      ['AR', 'Ronco', '●', 'Same'],
      ['PR', 'Ronco', '●', 'Same'],
      ['CC', 'Ronco', '●', 'Same'],
      ['FF', 'Ronco', '●', 'Same'],
    ]),
  },
  {
    id: 'placer-treasurer',
    categoryId: 'local-placer',
    title: 'Placer County Treasurer-Tax Collector',
    kind: 'candidates',
    stakesParagraphs: [
      'The treasurer-tax collector bills and collects property taxes, manages county investments, and handles delinquent tax enforcement—touching every homeowner and agency budget.',
      'At stake is reliable revenue collection and prudent investment of county cash in a high-growth suburban county.',
    ],
    introParagraphs: ['Tristan Butcher filed without a listed opponent as of the March 2026 filing deadline.'],
    candidates: [
      {
        id: 'butcher',
        name: 'Tristan Butcher',
        party: 'NP',
        role: 'Candidate',
        bio: ['Treasurer-tax collector candidate per county filings.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Butcher', '●', 'Unopposed'],
      ['EL', 'Butcher', '●', 'Same'],
      ['DM', 'Butcher', '●', 'Same'],
      ['OL', 'Butcher', '●', 'Same'],
      ['SS', 'Butcher', '●', 'Same'],
      ['AR', 'Butcher', '●', 'Same'],
      ['PR', 'Butcher', '●', 'Same'],
      ['CC', 'Butcher', '●', 'Same'],
      ['FF', 'Butcher', '●', 'Same'],
    ]),
  },
];
