import type { CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

/** Federal, state-leg, BoE D2, and select Alameda County races for ZIP 94544 (Hayward / south East Bay lines). */
export const RACES_ALAMEDA: Race[] = [
  {
    id: 'us-rep-ca14',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-14',
    kind: 'candidates',
    stakesParagraphs: [
      'Your member votes on Medicare, Medi-Cal oversight, immigrant rights, guns, abortion access, tariffs, Pentagon spending, FAA and housing programs, oversight of Homeland Security—and casework tied to FAA flight paths over the corridor, groundwater, seismic retrofits for older housing stock, tech layoffs shifting East Bay commuter patterns, and public-health funding hitting community clinics.',
      'Prop 50 (2025) redistricting tightened the partisan lean but left Congress 14 anchored in Fremont/Hayward/Union City and nearby communities. Democrat Eric Swalwell filed for re-election early in the cycle, then withdrew, opening a rare top-two scramble in a reliably blue seat. Who replaces him shapes caucus ideology and local access to federal infrastructure dollars.',
    ],
    introParagraphs: [
      'Nine-way blanket primary. Former State Senator Aisha Wahab and tech attorney Rakhi Israni lead early visibility and cash; six other Democrats, one Republican, and one no-party-preference candidate round out the field. Two listed candidates later withdrew (Swalwell, Abrar Qadir) but remain on some historical filings—trust the county’s certified list on your official ballot.',
    ],
    candidates: [
      {
        id: 'rakhi-israni',
        name: 'Rakhi Israni',
        party: 'D',
        role: 'Attorney; former Google product counsel',
        bio: [
          'Patent litigator and policy attorney framing the race as technocratic problem-solving on housing, climate, and democratic institutions. Pitches cross-sector experience versus career politicians.',
        ],
        scorecard: [
          {
            topic: 'Housing / infrastructure',
            position: '✓ Supply and permitting rhetoric with legal-process fluency',
            comparison:
              'Wahab brings elected budget votes; Hernandez fields labor endorsements—Israni bets resume depth over sacramental incumbency.',
          },
          {
            topic: 'Climate',
            position: '✓ Pro clean-energy framing consistent with Silicon Valley donor base',
            comparison: 'Less union-driven “just transition” storyline than Hernandez; more market-transition language than socialist lane.',
          },
          {
            topic: 'Democratic establishment',
            position: '~ Outsider-vs-insider positioning',
            comparison: 'FEC summaries showed the largest receipts among active filers in early 2026—advantage is air wars, disadvantage is caricature as tech-money candidate.',
          },
          {
            topic: 'Public safety',
            position: '~ Standard Democratic primary spectrum',
            comparison: 'Not a sheriff-centric pitch; overlaps with caucus liberals more than moderation lane.',
          },
        ],
        money: 'Roughly $2.1M in reported receipts versus ≈ $88k disbursements as of March 31, 2026 (FEC via Ballotpedia tabulation).',
        redFlags: [],
      },
      {
        id: 'aisha-wahab',
        photoSlug: 'aisha-wahab',
        name: 'Aisha Wahab',
        party: 'D',
        role: 'State Senator (SD-10); former Hayward councilmember',
        bio: [
          'First Afghan American elected to the California Senate; former Hayward councilmember. Campaign stresses housing affordability, renter protections, healthcare access, and continuing her legislative work in Washington.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓✓ Budget and bill votes on tenant protections and local housing finance',
            comparison: 'Strongest “I already moved money in Sacramento” story in the field—Israni and Hernandez contest whether that record matches their preferred pace.',
          },
          {
            topic: 'Climate',
            position: '✓ Democratic climate votes in Senate',
            comparison: 'Comparable to other major Democrats; edge is committee floor record versus newcomers’ promises.',
          },
          {
            topic: 'Immigration / civil rights',
            position: '✓✓ Public profile on refugee and civil-liberties issues',
            comparison: 'Most consistent through-line versus business-law résumés—also draws predictable attack-mail vulnerability in a crowded primary.',
          },
          {
            topic: 'Seniority gamble',
            position: '~ Freshman senator seeking federal leap',
            comparison: 'If you prized her for SD-10 votes, picking her advances a national messenger but vacates her Senate seat concurrently.',
          },
        ],
        money: 'Roughly $252k receipts / $229k cash on hand as of March 31, 2026 filings (FEC via Ballotpedia tabulation).',
        redFlags: [],
        recordVsChange:
          'Wahab converts visible Senate tenancy and housing votes into federal lane—worth it if you want East Bay immigrant-rights amplification in DC; questionable if you wanted her finishing a full Sacramento term.',
      },
      {
        id: 'melissa-hernandez',
        name: 'Melissa Hernandez',
        party: 'D',
        role: 'Policy director; AFSCME member',
        bio: [
          'Labor-aligned operative positioning as a working-class contrast to tech-and-trial resumes. Highlights union roots and constituency service over donor-class optics.',
        ],
        scorecard: [
          {
            topic: 'Labor vs business',
            position: '✓✓ Explicit union credibility',
            comparison: 'Cleaner labor lane than Israni; narrower institutional CV than Wahab’s senate votes.',
          },
          {
            topic: 'Housing affordability',
            position: '✓ Renter-heavy messaging',
            comparison: 'Contends wage-and-benefits policy—not tech wealth—is the hinge for affordability.',
          },
          {
            topic: 'Climate',
            position: '~ Inherited Democratic baseline',
            comparison: 'Less specificity than senators with environmental committee votes.',
          },
        ],
        money: 'Roughly $231k receipts / $136k cash on hand as of March 31, 2026 filings (FEC via Ballotpedia tabulation).',
        redFlags: [],
      },
      {
        id: 'wendy-huang',
        name: 'Wendy Huang',
        party: 'R',
        role: 'Candidate',
        bio: [
          'Republican contender in an overwhelmingly Democratic seat—the viable path is sneaking through the jungle with a fractured Democratic pile-up or consolidating late cross-over.',
        ],
        scorecard: [
          {
            topic: 'Partisan positioning',
            position: '✓✓ Only major-party Republican filing',
            comparison: 'If two Democrats deadlock, Huang could slip into November; otherwise functions as partisan protest vote.',
          },
          {
            topic: 'Resources',
            position: '~ Smaller treasury than Democratic front-runners',
            comparison: '≈ $7.5k cash on hand in late-Q1 FEC summaries per Ballotpedia roll-up.',
          },
        ],
        money: 'Roughly $31k receipts reported through March 31, 2026 (FEC tabulation summarized by Ballotpedia).',
        redFlags: [],
      },
      {
        id: 'carin-elam',
        name: 'Carin Elam',
        party: 'D',
        role: 'Candidate',
        bio: [
          'Lower-treasury Democratic filing seeking progressive votes without blockbuster fundraising.',
        ],
        scorecard: [
          {
            topic: 'Campaign scale',
            position: '? Narrower donor pool than Hernandez / Wahab / Israni',
            comparison: 'Protest-choice lane against big-money names.',
          },
        ],
        money: '≈ $29k receipts through March 31, 2026 (FEC summaries via Ballotpedia).',
        redFlags: [],
      },
      {
        id: 'matt-ortega-ca14',
        name: 'Matt Ortega',
        party: 'D',
        role: 'Candidate',
        bio: [
          'Democratic contender without top-tier FEC footprint in published March 31, 2026 summaries.',
        ],
        scorecard: [
          {
            topic: 'Viability',
            position: '? Long-shot treasury versus front-runners',
            comparison: 'Vote here if rejecting major-money leaders matters more than win probability.',
          },
        ],
        money: 'FEC summaries show tens of thousands in receipts—not in the millions tier (March 31, 2026).',
        redFlags: [],
      },
      {
        id: 'victor-aguilar',
        name: 'Victor Aguilar',
        party: 'D',
        role: 'Candidate',
        bio: [
          'Listed Democratic candidate with negligible reported receipts/disbursements in March 31, 2026 FEC aggregates referenced by Ballotpedia.',
        ],
        scorecard: [
          {
            topic: 'Resources',
            position: '? No significant cash signal in early disclosures',
            comparison: 'Symbolically rejects big-money contestants.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'dena-maldonado',
        name: 'Dena Maldonado',
        party: 'R',
        role: 'Candidate',
        bio: [
          'Second Republican filing alongside Huang; treasury empty in summarized March disclosures.',
        ],
        scorecard: [
          {
            topic: 'Viability',
            position: '? Splits scarce Republican vote with Huang',
            comparison: 'Strategic complication for GOP voters chasing a miracle top-two.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'suzanne-chenault',
        name: 'Suzanne Chenault',
        party: 'NP',
        role: 'No party preference',
        bio: [
          'Independent-label option listed without meaningful March 2026 cash-on-hand signals in Ballotpedia’s FEC excerpts.',
        ],
        scorecard: [
          {
            topic: 'Protest positioning',
            position: '~ NPP skepticism toward both major-party narratives',
            comparison: 'If you crave major-party nominees, Democrats below are sharper instruments.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Hernandez', '●', 'Labor-forward pitch vs finance résumés'],
      ['EL', 'Wahab', '●', 'Elected Sacramento record voters can cite'],
      ['DM', 'Wahab', '◐', 'Experienced—but jumping mid-term sparks tradeoff'],
      ['OL', 'Israni', '◐', 'Technocratic outsider energy'],
      ['SS', 'Huang', '○', 'Only plausible R flag if protesting D pile-up'],
      ['AR', 'Huang', '○', 'GOP ballot home'],
      ['PR', 'Chenault', '○', 'Independent protest'],
      ['CC', 'Israni', '◐', 'Business-litigation nous'],
      ['FF', 'Chenault', '○', 'Religious conservatives likely still vote R—but sparse'],
    ]),
    counterArguments: [
      'PL (Hernandez ●): But consider Wahab if you want bill history, not allied messaging.',
      'EL (Wahab ●): But consider Israni if insider votes feel too incremental.',
      'SS (Huang ○): But Democrats still determine most outcomes—choose a capable D backup.',
    ],
  },
  {
    id: 'senate-sd10',
    categoryId: 'state-leg',
    title: 'State Senator, District 10',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators write the budget that feeds schools and Medi-Cal, set climate mandates, bargaining rules, housing production law, sentencing baselines, and tuition policy—East Bay commuters also care because Capitol moves on VTA/BART interoperability, freeway dollars, housing near BART sites, wildfire mitigation funds, and water projects affecting the Diablo foothills.',
      'District 10 links southern Alameda County cities with Fremont, Milpitas, and northwest Santa Clara suburbia. Senator Wahab is running for Congress, so SD-10 is an open scramble among well-known locals—Santa Clara supervisor David Cohen versus Milpitas Mayor Carmen Montano versus Fremont Councilmember Raymond Liu and others.',
    ],
    introParagraphs: [
      'Six-candidate jungle primary stacked with locals: Cohen (Santa Clara supervisor), trustees and councilmembers from Fremont and Union City, plus a solitary Republican.',
    ],
    candidates: [
      {
        id: 'david-cohen-sd10',
        name: 'David Cohen',
        party: 'D',
        role: 'Santa Clara County supervisor; former San José councilmember',
        bio: [
          'County supervisor stressing transportation, homelessness response, fiscal discipline, and cross-jurisdictional planning with VTA counterparts. Big newspaper endorsements in early race coverage.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓✓ VTA-heavy record; arterial expansion debates',
            comparison: 'More Santa Clara-centric than Union City’s Sakakihara; pairs against Montano’s Milpitas mayor portfolio.',
          },
          {
            topic: 'Public safety / homeless services',
            position: '✓ County budgeting authority',
            comparison: 'Liu cites Fremont police partnership wins; Cohen frames regional shelter investments.',
          },
          {
            topic: 'Climate',
            position: '✓ Electrification and VMT reduction rhetoric',
            comparison: 'Kepner earns enviro nod; Cohen balances labor infrastructure jobs.',
          },
        ],
        endorsements: 'East Bay Times and Mercury News endorsement per June 2026 cycle coverage aggregated on Wikipedia’s race notes.',
        redFlags: [],
      },
      {
        id: 'carmen-montano-sd10',
        name: 'Carmen Montano',
        party: 'D',
        role: 'Mayor of Milpitas',
        bio: [
          'Milpitas mayor highlighting small-city fiscal management and public safety; pitching cross-county familiarity with Fremont/Newark commuter flows.',
        ],
        scorecard: [
          {
            topic: 'Municipal execution',
            position: '✓ Mayor’s office crisis management résumé',
            comparison: 'Cohen oversees larger Silicon Valley basin; Montano emphasizes nimble suburb governance.',
          },
          {
            topic: 'Labor',
            position: '✓ Police and fire organizational support per campaign rollouts',
            comparison: 'Sakakihara banks Teamsters/AC firefighter alliances—overlap with suburban labor families.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'anne-kepner-sd10',
        name: 'Anne Kepner',
        party: 'D',
        role: 'Trustee, West Valley–Mission Community College District',
        bio: [
          'Community college trustee with California Environmental Voters co-endorsement (alongside Cohen) per Wikipedia citations; Moms Demand allyship notes.',
        ],
        scorecard: [
          {
            topic: 'Education funding',
            position: '✓✓ Direct Prop 98 adjacent experience',
            comparison: 'Cohen supervises broader county mandates; Kepner owns classroom infrastructure narrative.',
          },
          {
            topic: 'Climate / gun policy',
            position: '✓ Progressive organizational ties',
            comparison: 'Use if culture-war tail risks matter alongside housing supply.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'raymond-liu-sd10',
        name: 'Raymond Liu',
        party: 'D',
        role: 'Fremont city councilmember',
        bio: [
          'Fremont councilmember arguing largest-city perspective inside the Hayward-centric half of the district; stresses police cooperation and balanced growth.',
        ],
        scorecard: [
          {
            topic: 'Public safety partnerships',
            position: '✓ Fremont CHP/local coordination talking points',
            comparison: 'Contrasts Cohen’s Silicon Valley policing politics with East Bay commuter crime concerns.',
          },
          {
            topic: 'Housing',
            position: '~ Pro-growth with neighborhood pushback reality',
            comparison: 'Montano shares similar inland suburb tension—pick based on freeway geography you identify with.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'scott-sakakihara-sd10',
        name: 'Scott Sakakihara',
        party: 'D',
        role: 'Union City councilmember',
        bio: [
          'Union City councilmember featuring Alameda County firefighter IAFF and Joint Council 7 Teamster backing on Wikipedia endorsement tables.',
        ],
        scorecard: [
          {
            topic: 'Labor vs tech capital',
            position: '✓✓ Blue-collar union lane',
            comparison: 'Cleaner trade-union vibe than Cohen’s Silicon Valley donor mix.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'linda-price-sd10',
        name: 'Linda Price',
        party: 'R',
        role: 'Businesswoman',
        bio: [
          'Sole Republican in a stacked Democratic field—competitive only if conservatives consolidate while Democrats splinter.',
        ],
        scorecard: [
          {
            topic: 'Partisan calculus',
            position: '? Need massive D fragmentation',
            comparison: 'Republicans choose between symbolic vote and tactical blank.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Kepner', '●', 'Environmental + Moms Demand synergy'],
      ['EL', 'Cohen', '●', 'Newspapers + supervisor scale'],
      ['DM', 'Cohen', '◐', 'Moderate pragmatic reputation'],
      ['OL', 'Montano', '◐', 'Mayor outsider energy'],
      ['SS', 'Liu', '○', 'Suburban pragmatism'],
      ['AR', 'Price', '●', 'Only R option'],
      ['PR', 'Sakakihara', '◐', 'Union-coded populism'],
      ['CC', 'Cohen', '●', 'VTA / regional capital planning'],
      ['FF', 'Price', '◐', 'Religious conservatives likely align R'],
    ]),
    counterArguments: [
      'EL (Cohen ●): But consider Sakakihara if labor authenticity tops regional planning.',
      'PL (Kepner ●): But Cohen carries broader transportation funding levers.',
    ],
  },
  {
    id: 'assembly-ad20',
    categoryId: 'state-leg',
    title: 'State Assembly, District 20',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers negotiate the formulas that steer dollars to Medi-Cal reimbursement rates, transitional kindergarten staffing, freeway congestion relief pilots, seismic retrofits on schools, and renter-protection bills—Hayward renters feel those votes directly.',
      'AD-20 is a deep-blue Labor-East Bay seat. Incumbent Liz Ortega routed her 2024 opponent; 2026 is mostly a partisan temperature check versus a GOP appraiser challenger.',
    ],
    introParagraphs: [
      'Two names on the certified primary list: Liz Ortega (D-incumbent) and Patricia Muga (R). Expect Ortega to advance; vote still signals labor vs property-tax skeptic coalitions.',
    ],
    candidates: [
      {
        id: 'liz-ortega',
        photoSlug: 'liz-ortega',
        name: 'Liz Ortega',
        party: 'D',
        role: 'Incumbent Assemblymember',
        bio: [
          'Union organizer-turned-legislator; AFSCME-aligned background. Highlights housing, worker protections, and local infrastructure wins from Sacramento.',
        ],
        scorecard: [
          {
            topic: 'Labor',
            position: '✓✓ Core constituency since before election',
            comparison: 'Muga offers property-sector contrast without union ties.',
          },
          {
            topic: 'Housing / renters',
            position: '✓ Progressive housing votes in caucus',
            comparison: 'GOP challenger argues tax burdens on homeowners.',
          },
        ],
        endorsements: 'California Working Families Party and Our Revolution nods cited on Wikipedia’s AD-20 profile.',
        redFlags: [],
        recordVsChange:
          'Ortega couples labor credibility with caucus pragmatism—keep her if constituent service and union access still beat symbolic protest.',
      },
      {
        id: 'patricia-muga',
        name: 'Patricia Muga',
        party: 'R',
        role: 'Real estate appraiser',
        bio: [
          'Republican challenger pitching property-sector literacy and skepticism toward new fees impacting homeowners.',
        ],
        scorecard: [
          {
            topic: 'Taxes / fees',
            position: '✓✓ Standard GOP anti-tax frame',
            comparison: 'Ortega’s labor voting record is the counterweight.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ortega', '●', 'Incumbent Assembly labor record'],
      ['EL', 'Ortega', '●', 'Caucus-aligned working-family votes'],
      ['DM', 'Ortega', '●', 'Pragmatic labor Democrat default'],
      ['OL', 'Ortega', '●', 'Housing affordability focus'],
      ['SS', 'Muga', '○', 'Symbolic GOP vote in heavy D seat'],
      ['AR', 'Muga', '●', 'Property-tax skeptic lane'],
      ['PR', 'Muga', '◐', 'Populist anti-fee rhetoric'],
      ['CC', 'Muga', '◐', 'Real-estate-sector contrast'],
      ['FF', 'Muga', '◐', 'Cultural conservatives still likely vote R'],
    ]),
    counterArguments: [
      'AR (Muga ●): But Ortega still represents most housing-voucher families in district reality.',
      'PL (Ortega ●): Vote Muga only if signalling frustration with Sacramento spending.',
    ],
  },
  {
    id: 'boe-d2',
    categoryId: 'statewide-partisan',
    title: 'Board of Equalization, District 2',
    kind: 'candidates',
    stakesParagraphs: [
      'The Board hears property-assessment appeals, regulates certain tax appraisals on utilities and railroad properties, and can shift how aggressively counties pursue commercial reassessments—touching fairness for homeowners confronting sudden reassessments and big-box retailers alike.',
      'District 2’s coastal arc sweeps Oregon-border counties down through the Bay Area and Central Coast pockets before Ventura—Alameda ballots include this race alongside federal and legislative lines.',
    ],
    introParagraphs: [
      'Incumbent Sally Lieber faces intra-party challenger John Pimentel (community-college trustee politics Bay Area voters know from other races) plus four Republicans carving the GOP vote—a recipe for Lieber-heavy top-two projections unless cross-party coalitions reshuffle.',
    ],
    candidates: [
      {
        id: 'sally-lieber',
        photoSlug: 'sally-lieber',
        name: 'Sally Lieber',
        party: 'D',
        role: 'Incumbent BOE Member',
        bio: [
          'Former Assemblymember and incumbent BOE member running with California Democratic Party and major labor federation support per Wikipedia sourcing.',
        ],
        scorecard: [
          {
            topic: 'Tax fairness',
            position: '✓✓ Incumbent appellate experience',
            comparison: 'Pimentel pitches fresh eyes; GOP field argues overreach.',
          },
          {
            topic: 'Progressive alliances',
            position: '✓ Stonewall, Harvey Milk LGBTQ club, Planned Parenthood nods cited on Wikipedia endorsement stack',
            comparison: 'No Republican matches that coalition breadth.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Lieber anchors continuity on complex assessment dockets—useful if churn worries you more than ideological refresh.',
      },
      {
        id: 'john-pimentel-boe',
        name: 'John Pimentel',
        party: 'D',
        role: 'San Mateo County Community College District trustee',
        bio: [
          'Democratic challenger from the mid-Peninsula education world arguing for customer-service orientation at BOE.',
        ],
        scorecard: [
          {
            topic: 'Technocratic contrast',
            position: '✓ Education-governance résumé',
            comparison: 'Less statewide tax jurisprudence than Lieber’s tenure.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'bill-shireman-boe',
        name: 'Bill Shireman',
        party: 'R',
        role: 'Founder, Future 500',
        bio: [
          'Republican environmental-business voice—unusual branding for a GOP BOE hopeful; targets cross-party reformers.',
        ],
        scorecard: [
          {
            topic: 'Climate / business bridge',
            position: '✓ Market-environmentalist résumé',
            comparison: 'Traditional GOP voters may prefer Marymee-style populism.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'j-brett-marymee-boe',
        name: 'J. Brett Marymee',
        party: 'R',
        role: 'Small business owner',
        bio: [
          'Republican aligned with Reform California / Republican Assembly flank per endorsement notes on Wikipedia.',
        ],
        scorecard: [
          {
            topic: 'Anti-tax populism',
            position: '✓ Movement-conservative validators',
            comparison: 'Simpler partisan signal than Shireman’s hybrid pitch.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'mark-mccomas-boe',
        name: 'Mark McComas',
        party: 'R',
        role: 'Candidate',
        bio: [
          'GOP contender with scarce media footprint—Republican splitter risk alongside Marymee/Zaruka.',
        ],
        scorecard: [{ topic: 'Viability', position: '? Splits shrinking R numerator', comparison: 'Strategic complication only.' }],
        redFlags: [],
      },
      {
        id: 'john-zaruka-boe',
        name: 'John Zaruka',
        party: 'R',
        role: 'Candidate',
        bio: [
          'Additional Republican filing in a multi-way race; expect low single-digit ceiling unless niche endorsements appear.',
        ],
        scorecard: [{ topic: 'Protest', position: '?', comparison: 'Vote if rejecting both Democrats matters.' }],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Lieber', '●', 'Labor + progressive endorsement stack'],
      ['EL', 'Lieber', '●', 'Institutional incumbent stability'],
      ['DM', 'Lieber', '◐', 'Experienced appellate hand'],
      ['OL', 'Pimentel', '◐', 'Democratic challenger energy'],
      ['SS', 'Marymee', '○', 'Low-info conservative default'],
      ['AR', 'Marymee', '●', 'Reform-California messaging'],
      ['PR', 'Marymee', '●', 'Anti-tax grassroots populism'],
      ['CC', 'Shireman', '◐', 'Hybrid business-environment pitch'],
      ['FF', 'Marymee', '◐', 'Faith-aligned voters often bundle with GOP'],
    ]),
    counterArguments: [
      'EL (Lieber ●): But Pimentel if you want non-incumbent Democratic energy.',
      'AR (Marymee ●): But Shireman if climate-business nuance matters.',
    ],
  },
  {
    id: 'alameda-sup-d2',
    categoryId: 'local-ac',
    title: 'Alameda County Supervisor, District 2',
    kind: 'candidates',
    stakesParagraphs: [
      'Supervisors set the county budget that funds public health clinics, jails, unincorporated fire services, social safety net programs, and land-use near the Bay shoreline—Hayward, Union City, Newark, and slices of Fremont sit in District 2, so housing projects on unincorporated islands and countywide criminal-justice policy hit this race directly.',
      'Appointed incumbent Elisa Marquez seeks a first full term after moving from Hayward council; BART director Liz Ames and entrepreneur Rohan Marfatia want to realign transportation and economic growth priorities.',
    ],
    introParagraphs: [
      'Three-candidate field covered in spring 2026 Bay Area dailies: Marquez with supervisor-mayor endorsements, Ames emphasizing transit expertise, Marfatia pitching business growth.',
    ],
    candidates: [
      {
        id: 'elisa-marquez',
        name: 'Elisa Marquez',
        party: 'D',
        role: 'Incumbent supervisor (appointed 2023); former Hayward councilmember',
        bio: [
          'Former Hayward councilmember elevated to the board in 2023; campaign highlights renter protections, hospital stabilization efforts, and Russell City redress work noted in spring 2026 reporting.',
        ],
        scorecard: [
          {
            topic: 'Housing & equity',
            position: '✓ Continuity on renter and environmental-justice priorities',
            comparison: 'Ames spotlights regional mobility; Marfatia stresses business climate.',
          },
          {
            topic: 'Institutional backing',
            position: '✓✓ Full board + major city mayors per Local News Matters / SFGate summaries',
            comparison: 'Insider seal of approval vs outsider hunger.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Marquez threads Hayward council experience into countywide dollars—worth keeping if you value recently negotiated community benefits; worth swapping if you want a BART-level voice on capital projects.',
      },
      {
        id: 'liz-ames',
        name: 'Liz Ames',
        party: 'D',
        role: 'BART director',
        bio: [
          'BART board member pitching transit fluency for a district bisected by rail and congested highway bridges.',
        ],
        scorecard: [
          {
            topic: 'Transportation',
            position: '✓✓ Only candidate with regional rail voting record',
            comparison: 'Weaker on non-transit county portfolios than sitting supervisor.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'rohan-marfatia',
        name: 'Rohan Marfatia',
        party: 'D',
        role: 'Businessman',
        bio: [
          'Private-sector candidate arguing county hall should speed housing and small-business investment.',
        ],
        scorecard: [
          {
            topic: 'Economic development',
            position: '✓ Business-growth emphasis',
            comparison: 'Less public-sector management history than Marquez or Ames.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Marquez', '●', 'Equity-forward county housing record'],
      ['EL', 'Marquez', '●', 'Unified supervisor + mayor backing'],
      ['DM', 'Ames', '◐', 'Transit technocrat pragmatism'],
      ['OL', 'Marfatia', '◐', 'Growth-oriented outsider tone'],
      ['SS', 'Marquez', '○', 'Prefer stability insider'],
      ['AR', 'Marfatia', '○', 'Business-first county hall'],
      ['PR', 'Marquez', '◐', 'Labor-adjacent policy continuity'],
      ['CC', 'Marfatia', '●', 'Developer-speed pitch'],
      ['FF', 'Marquez', '◐', 'Congregational service ties often favor incumbent supervisors'],
    ]),
    counterArguments: [
      'EL (Marquez ●): But Ames if capital projects trump social-service continuity.',
      'DM (Ames ◐): But Marquez if labor/housing coalitions still trust her council record.',
    ],
  },
  {
    id: 'measure-hayward-usd-g',
    categoryId: 'measures',
    title: 'Measure G — Hayward Unified School District parcel tax',
    kind: 'measure',
    stakesParagraphs: [
      'Parcel taxes can keep specific programs like arts, counseling, or technology staffing out of the general fund roulette—voters trade higher property bills for predictability in classrooms.',
      'Hayward USD families feel whether libraries stay open, campuses stay safe, and counselors stay funded; opposition usually centers on fixed-income homeowners and skepticism that district leadership spends wisely.',
    ],
    introParagraphs: [
      'June 2, 2026 Alameda County ballot measure placed by Hayward Unified (official question text, rate, and duration are in the county PDF—read it before voting).',
    ],
    candidates: [],
    measure: {
      question:
        'Shall Hayward Unified School District levy a qualified special tax on parcels to fund district programs, with citizen oversight and the rate/term specified in the measure text?',
      voterConnection: [
        'Homeowners within the district boundary pay the annual parcel charge on the tax bill; exact dollars and escalators are spelled out in the county’s measure summary.',
        'Renters do not receive the bill directly, though landlords sometimes pass costs through—ask your lease if curious.',
        'Parents weighing Yes are betting classroom stability beats the tax line item; No voters often cite cost-of-living stress or distrust in district administration.',
      ],
      mechanismBullets: [
        'Qualified special taxes require two-thirds voter approval under Prop 13 / Prop 218 rules—this is a high bar.',
        'Funds are restricted to the purposes listed in the measure text; compare against the district’s budget narrative in the sample ballot.',
        'Typical oversight promises include a citizen committee and annual reports—verify deadlines and reporting channels in the official filing.',
      ],
      argumentsFor: [
        'You want Hayward classrooms to keep specific programs that general fund dollars keep cutting first.',
        'You trust the district’s fiscal guardrails and oversight language more than the risk of losing staff mid-year.',
      ],
      argumentsAgainst: [
        'You cannot absorb another property-tax line item, especially on fixed incomes.',
        'You want broader county or state revenue fixes instead of parcel-by-parcel charges.',
      ],
      readingLinks: [
        {
          label: 'Alameda County — Measure G (Hayward USD parcel tax) official text (PDF)',
          url: 'https://acvote.alamedacountyca.gov/acvote-assets/02_election_information/PDFs/20260602/hayward_usd_pacel_tax_measure.pdf',
        },
        {
          label: 'Alameda County Registrar — June 2, 2026 election information hub',
          url: 'https://acvote.alamedacountyca.gov/election-information/elections?id=259',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Classroom equity spend'],
      ['EL', 'Yes', '◐', 'Service delivery > tax aversion'],
      ['DM', 'Yes', '◐', 'If oversight language is credible'],
      ['OL', 'Yes', '◐', 'Local schools > abstraction'],
      ['SS', 'No', '○', 'Tax fatigue default'],
      ['AR', 'No', '◐', 'Property-rights hesitance'],
      ['PR', 'No', '●', 'Anti-tax populism'],
      ['CC', 'No', '◐', 'Business property owners balk'],
      ['FF', 'Yes', '◐', 'Congregations often back school taxes—verify your leadership'],
    ]),
    counterArguments: [
      'PL (Yes ●): But No if distrust in district financial management outweighs program love.',
      'PR (No ●): But Yes if your kids’ programs truly hang in balance.',
    ],
  },
];
