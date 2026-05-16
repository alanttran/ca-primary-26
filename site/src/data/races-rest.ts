import type { CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

export const RACES_REST: Race[] = [
  {
    id: 'insurance-commissioner',
    categoryId: 'statewide-partisan',
    title: 'Insurance Commissioner',
    kind: 'candidates',
    stakesParagraphs: [
      'The commissioner regulates one of the largest insurance markets on earth—home, auto, health, and wildfire coverage—balancing consumer premiums against insurer solvency when disasters strike.',
      'At stake is who gets rate relief versus who sees non-renewals, how aggressively climate and equity goals are written into rules, and whether the office pushes public options, tighter oversight, or a lighter touch on industry.',
    ],
    introParagraphs: [
      'Lara termed out. Massive race regulating the largest U.S. insurance market. Top six by viability in the source guide: Allen, Bradford, Kim, Wolff, Howell, Farren.',
    ],
    candidates: [
      {
        id: 'allen',
        photoSlug: 'allen',
        name: 'Ben Allen',
        party: 'D',
        role: 'State Senator, SD-24',
        bio: [
          'Termed out. Lawyer. Authored SB 54 (plastic pollution), SB 867 ($10B climate bond), and other environmental bills. 99% lifetime CA Environmental Voters score; takes no oil money.',
        ],
        endorsements:
          'Senate Pres. Pro Tem Limón, Asm. Speaker Rivas, Sens. Schiff and Padilla, 24+ state lawmakers, former IC Dave Jones.',
        redFlags: [],
      },
      {
        id: 'bradford',
        photoSlug: 'bradford',
        name: 'Steven Bradford',
        party: 'D',
        role: 'Former State Senator, ex-SoCal Edison executive',
        bio: ['Long Black Caucus career; reparations bills; insurance pitch emphasizes public-private risk sharing.'],
        endorsements: 'Reps. Adam Gray and Luz Rivas, Treasurer Fiona Ma, SoS Shirley Weber, Teamsters California, State Building & Construction Trades.',
        notes: ['Former utility-executive background.'],
      },
      {
        id: 'kim',
        photoSlug: 'kim',
        name: 'Jane Kim',
        party: 'D',
        role: 'Lawyer, former SF Supervisor, head of CA Working Families Party',
        bio: ['Public-option insurance proposals including disaster insurance modeled on New Zealand; public auto option; Medicare for Kids.'],
        endorsements: 'Sen. Bernie Sanders, Rep. Ro Khanna, SEIU California, CTA, UFCW Western States Council.',
        notes: ['No insurance-industry background; long-shot proposals need legislative buy-in.'],
      },
      {
        id: 'wolff',
        name: 'Patrick Wolff',
        party: 'D',
        role: 'Financial analyst, self-funder',
        bio: ['$600K self-funded. Insurer report cards, telematics for auto, life-insurance complaint dashboard. Technocratic.'],
        redFlags: [],
      },
      {
        id: 'howell',
        name: 'Robert Howell',
        party: 'R',
        role: 'Cybersecurity exec; won 2022 R primary',
        bio: ['"Insurance payers\' bill of rights"; tie market participation to access.'],
        redFlags: [],
      },
      {
        id: 'farren',
        name: 'Merritt Farren',
        party: 'R',
        role: 'Former Amazon/Disney exec, Palisades fire victim',
        bio: ['"CAL Reinsure" — state-backed reinsurance fund. Came to politics as a State Farm rate-hike intervenor.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Kim', '●', 'Sanders/CTA/SEIU; most ambitious public-option agenda'],
      ['EL', 'Allen', '●', 'SB 54 record; broadest establishment + Schiff/Padilla coalition'],
      ['DM', 'Bradford', '●', 'Strongest Black-caucus + labor coalition'],
      ['OL', 'Kim', '◐', 'Disruptive proposals; Wolff self-funding may concern OL'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Farren', '◐', 'Fire-victim / consumer framing; less ideological than Howell'],
      ['PR', 'Howell', '◐', 'Industry-friendly + 2022 R-primary winner'],
      ['CC', 'Howell', '●', 'Same'],
      ['FF', 'Howell', '◐', 'No strong religious angle; Howell is the safe R'],
    ]),
    counterArguments: [
      'EL (Allen ●): But consider Kim for bolder reform; or Bradford for labor-tied moderation.',
      'PL (Kim ●): But consider Allen — SB 54 proves he can pass major legislation.',
      'DM (Bradford ●): But consider Allen if environmental bill volume matters more than labor-utility balance.',
      'PR (Howell ◐): But consider Farren if wildfire-victim consumer narrative beats generic industry R.',
    ],
  },
  {
    id: 'boe-d4',
    categoryId: 'statewide-partisan',
    title: 'Board of Equalization, District 4',
    kind: 'candidates',
    stakesParagraphs: [
      'The Board of Equalization hears taxpayer appeals on assessed property values, oversees special tax districts, and weighs in on how utilities and railroads are valued—decisions that flow through to property-tax fairness and local revenue.',
      'At stake is whether assessments tilt toward homeowners, businesses, or public utilities, and whether the board is staffed with technocrats or partisans when billions in taxable value are on the line.',
    ],
    introParagraphs: [
      'Advises county assessors, sets values for utilities/railroads, hears taxpayer appeals. Five candidates; three serious Dems split the field.',
    ],
    candidates: [
      {
        id: 'umberg',
        photoSlug: 'umberg',
        name: 'Tom Umberg',
        party: 'D',
        role: 'State Senator (Orange County)',
        bio: [
          'State Sen. since 2018, ex-Asm., ex-DOJ federal prosecutor (Clinton admin), retired Army colonel. Most experienced.',
        ],
        endorsements:
          'SEIU California, CTA, Equality California, CA Labor Federation, CPF, UFW, Newsom, Sens. Schiff and ret. Boxer, AG Bonta, plus multiple congressmembers and SD County electeds.',
        redFlags: [],
      },
      {
        id: 'petterson',
        name: 'Cody Petterson',
        party: 'D',
        role: 'Equalization Boardmember Deputy; SDUSD board',
        bio: ['Educator/policy person; deputy to current BoE-4 member Mike Schaefer. Strong climate/equity framing.'],
        endorsements: 'Rep. Juan Vargas, BoE Member Mike Schaefer.',
        redFlags: [],
      },
      {
        id: 'arias',
        name: 'Martín Arias',
        party: 'D',
        role: '"Taxpayer Advocate"',
        bio: ['Less prominent in media coverage.'],
        redFlags: [],
      },
      {
        id: 'bilodeau',
        name: 'Denis Bilodeau',
        party: 'R',
        role: 'Taxpayer Association president',
        bio: ['CRP, Howard Jarvis Taxpayers Association, Reform California endorsed.'],
        redFlags: [],
      },
      {
        id: 'osborne',
        name: 'Gardner C. Osborne',
        party: 'L',
        role: 'Enrolled agent',
        bio: ['Libertarian in a low-information down-ballot contest.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Petterson', '●', 'Climate/equity framing; Schaefer endorsement signals inside work'],
      ['EL', 'Umberg', '●', 'Strongest establishment-Dem coalition'],
      ['DM', 'Umberg', '●', 'Same'],
      ['OL', 'Petterson', '◐', 'Outsider-ish among Dems; or skip given low salience'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Bilodeau', '○', 'Only competitive R'],
      ['PR', 'Bilodeau', '◐', 'Howard Jarvis stamp; populist anti-tax'],
      ['CC', 'Bilodeau', '●', 'Standard R pick'],
      ['FF', 'Bilodeau', '●', 'Same'],
    ]),
    counterArguments: [
      'PL (Petterson ●): Umberg may move compromises faster with broader labor and caucus ties.',
      'EL (Umberg ●): Petterson is a clearer climate-accountability signal if you vote issue over resume.',
      'OL (Petterson ◐): Umberg still fits OL pragmatists who distrust insider BoE ladders.',
    ],
  },
  {
    id: 'us-rep-ca50',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-50',
    kind: 'candidates',
    stakesParagraphs: [
      'Your member of Congress votes on federal taxes, immigration, military spending, health programs, climate and infrastructure funding, and oversight of the executive branch—plus casework that can unblock veterans’ benefits, passports, and federal agencies for constituents.',
      'At stake is San Diego’s voice in a closely divided House: which bills move, how military and border communities are funded, and whether the district aligns with the president’s party or provides a check.',
    ],
    introParagraphs: [
      'Incumbent Scott Peters (D), seven-term. CA-50 centers on coastal/inland North County San Diego including Mira Mesa after boundary shifts.',
    ],
    candidates: [
      {
        id: 'peters',
        photoSlug: 'peters',
        name: 'Scott Peters',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Votes with party 96–98% of the time in recent Congress; mixed on housing votes but sponsored Build More Housing Near Transit Act 2025 and related bills. Moderate-pragmatist reputation.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Sponsored transit-oriented supply bills; mixed older votes',
            comparison:
              'Seniority buys committee work; Mitra attacks incrementalism—Peters stresses deliverable federal housing tools.',
          },
          {
            topic: 'Climate',
            position: '✓ Committee leverage on clean energy; not the loudest climate messenger',
            comparison:
              'Mitra runs a clearer climate-accountability contrast; Huntington is the inverse on federal climate spending.',
          },
          {
            topic: 'Health care',
            position: '✓ ACA expansion defender; Energy & Commerce health subcommittee work',
            comparison:
              'Institutionalist lane vs Arnous’ unknowns and Huntington’s repeal-and-replace party default.',
          },
          {
            topic: 'Oversight & seniority',
            position: '✓✓ Seven terms; Energy & Commerce seat for SD priorities',
            comparison:
              'Cross-typology counter: Mitra would reset seniority—Peters’ pitch is clout, not purity.',
          },
          {
            topic: 'Immigration / border-adjacent district',
            position: '~ Pro-Dreamer votes; pragmatic border-security coalition votes',
            comparison:
              'More moderate than progressive primary ideal; still far from Huntington’s enforcement-first framing.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus vote; check on GOP trifecta if House flips',
            comparison:
              'Huntington aligns with national R; Arnous and Mitra compete for who replaces Peters’ seat if he lost.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Peters brings seven terms of Energy & Commerce seniority, ACA-centric health work, and a pragmatic blue-district record. Swapping for Mitra trades committee clout for sharper climate and tenant-protection signaling; Arnous is mostly outsider symbolism; Huntington is the real ideological flip to the Republican column.',
      },
      {
        id: 'arnous',
        name: 'Tim Arnous',
        party: 'D',
        role: 'Challenger',
        bio: ['Limited public profile; sparse media coverage.'],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '? No detailed housing legislative record surfaced',
            comparison:
              'Cannot contrast bills with Peters’ transit-housing work or Mitra’s tenant-protection emphasis.',
          },
          {
            topic: 'Climate',
            position: '? Unclear platform depth in public sources',
            comparison:
              'Mitra owns the climate lane among challengers; Peters has committee record.',
          },
          {
            topic: 'Health care',
            position: '? Sparse policy paper trail',
            comparison:
              'Symbolic outsider vote vs incumbent’s ACA-defense résumé.',
          },
          {
            topic: 'Oversight & seniority',
            position: '✗ Would enter as freshman without Peters’ committee seats',
            comparison:
              'Guide’s OL pick trades away Energy & Commerce leverage for an unknown alternative.',
          },
          {
            topic: 'Immigration / border-adjacent district',
            position: '? No distinct border-district narrative in coverage',
            comparison:
              'Peters and Mitra have clearer Democratic positioning; Huntington occupies the R pole.',
          },
          {
            topic: 'Trump / House majority',
            position: '~ Standard Democratic ballot if elected; viability very low',
            comparison:
              'Protest against insider politics more than a policy fork from Peters on outcomes.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'mitra',
        name: 'Aishwarya Mitra',
        party: 'D',
        role: 'Challenger',
        bio: ['Progressive challenger; stronger climate and tenant-protection lane.'],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Tenant protection + anti-corporate-landlord emphasis',
            comparison:
              'Sharper left contrast to Peters’ supply-plus-pragmatism mix in the same party primary.',
          },
          {
            topic: 'Climate',
            position: '✓✓ Strongest climate-accountability signal in the field',
            comparison:
              'Cross-typology note: sacrifices Peters’ seniority for clearer progressive climate branding.',
          },
          {
            topic: 'Health care',
            position: '✓ Progressive Medicare-expansion sympathies in line with national left',
            comparison:
              'Peters is the ACA-steward incumbent; Mitra aligns more with House Progressive Caucus energy.',
          },
          {
            topic: 'Oversight & seniority',
            position: '✗ Would reset committee seniority for the district',
            comparison:
              'Main practical trade against Peters—same party, different theory of power in a D+18 seat.',
          },
          {
            topic: 'Immigration / border-adjacent district',
            position: '✓ Pro-immigrant rights framing typical of progressive primary challengers',
            comparison:
              'More activist tone than Peters’ pragmatic border votes; Huntington is the enforcement contrast.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic vote; would join caucus resistance if in majority',
            comparison:
              'Ideologically closer to Peters than to Huntington; difference is intensity and issue emphasis.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'huntington',
        name: 'Adam Huntington',
        party: 'R',
        role: 'Challenger',
        bio: ['Standard R challenger in a D+18 district; uphill.'],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '~ Anti-regulation rhetoric; skeptical of federal housing mandates',
            comparison:
              'Opposite of Peters’ transit-housing bills and Mitra’s tenant-protection lane.',
          },
          {
            topic: 'Climate',
            position: '✗ Party-line skepticism of major federal climate spending',
            comparison:
              'Farthest from Mitra and Peters on green investment and enforcement.',
          },
          {
            topic: 'Health care',
            position: '✗ Repeal-and-replace party default; ACA skeptic',
            comparison:
              'Stark contrast with both viable Democrats on coverage expansion.',
          },
          {
            topic: 'Oversight & seniority',
            position: '~ Freshman R would be in superminority if elected',
            comparison:
              'No substitute for Peters’ committee gavel—only competitive R in a blue district.',
          },
          {
            topic: 'Immigration / border-adjacent district',
            position: '✓ Enforcement-first alignment with national GOP',
            comparison:
              'Sharpest split from Peters/Mitra on Dreamers and border policy in this race.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Would vote with a Republican House leadership on partisan splits',
            comparison:
              'AR voters weighing competence-vs-party: Peters is the check; Huntington is the alignment vote.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Mitra', '◐', 'Most progressive; Peters likely advances regardless'],
      ['EL', 'Peters', '●', 'Pragmatic incumbent; Energy & Commerce leverage'],
      ['DM', 'Peters', '●', 'Same'],
      ['OL', 'Arnous', '○', 'Symbolic outsider — sparse record'],
      ['SS', '—', '—', 'Skip if uninformed'],
      ['AR', 'Peters', '◐', 'Moderate-D incumbent closest to non-MAGA option'],
      ['PR', 'Huntington', '◐', 'Only competitive R'],
      ['CC', 'Huntington', '◐', 'Same'],
      ['FF', 'Huntington', '●', 'Same'],
    ]),
    counterArguments: [
      'PL (Mitra ◐): Peters’ Energy & Commerce seat is valuable; Mitra would lose seniority.',
      'AR (Peters ◐): Or vote Huntington as conventional R depending on party vs individual weight.',
      'EL (Peters ●): But consider Mitra if you want a cleaner climate-and-tenants record despite seniority loss.',
      'DM (Peters ●): Mitra is a long-shot; vote Peters if House majority leverage is your top weight.',
    ],
  },
  {
    id: 'senate-sd40',
    categoryId: 'state-leg',
    title: 'State Senate, District 40',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators shape the entire state budget, vote on housing, education, criminal justice, and climate law, and control which bills even reach the floor in Sacramento.',
      'For inland San Diego County, this seat decides regional leverage on water, transportation, public safety funding, and local priorities when those issues require state dollars or enabling legislation.',
    ],
    introParagraphs: [
      'SD-40 covers Mira Mesa (92126), San Marcos, Escondido, Scripps Ranch, Sorrento Valley, Santee, Poway, Ramona, and Alpine. Brian Jones termed out; three candidates.',
    ],
    candidates: [
      {
        id: 'elliott',
        photoSlug: 'elliott',
        name: 'Mara Elliott',
        party: 'D',
        role: 'Former San Diego City Attorney (2016–2024)',
        bio: [
          'Two-term city attorney. Sued Airbnb over STRs, defended vacation-rental ordinance, prosecuted ghost-gun cases. Broad labor and Democratic endorsements.',
        ],
        scorecard: [
          {
            topic: 'Housing & land use',
            position: '✓ STR enforcement; local housing-law litigation experience',
            comparison:
              'Contrasts with Musgrove’s council land-use votes and Bruce-Lane’s lighter housing record—Elliott’s pitch is courtroom-tested regulation.',
          },
          {
            topic: 'Climate / water / transport',
            position: '✓ Democratic mainstream on climate bills; regional transport alignment',
            comparison:
              'Rs pitch fiscal restraint over green spending—Elliott matches statewide Dem caucus on implementation fights.',
          },
          {
            topic: 'Public safety',
            position: '✓ Ghost-gun prosecutions; labor-backed public-safety coalition',
            comparison:
              'Bruce-Lane emphasizes victim services; Musgrove emphasizes municipal law enforcement—Elliott is prosecutor-shaped.',
          },
          {
            topic: 'Labor coalition',
            position: '✓✓ Broad union endorsements (CTA, SEIU, building trades)',
            comparison:
              'Strongest labor alignment in the field vs GOP candidates’ business and taxpayer-group pitches.',
          },
          {
            topic: 'State budget & taxes',
            position: '✓ Supports progressive revenue where caucus agrees',
            comparison:
              'Republicans run anti-tax simplicity; Elliott is the Sacramento-majority default if elected.',
          },
          {
            topic: 'Sacramento readiness',
            position: '✓✓ Citywide elected executive experience vs first-time legislators',
            comparison:
              'Musgrove has sitting council cred on the R side; Bruce-Lane’s nonprofit resume differs from Elliott’s legal portfolio.',
          },
        ],
        endorsements:
          'Rep. Sara Jacobs, State Sens. Blakespear and Padilla, multiple Asms. and council members; AFSCME DC 36, CFT, CTA, CSEA, IBEW 569, LIUNA 89, Operating Engineers, SEIU California, UFCW; Democrats for Equality, San Diegans for Gun Violence Prevention.',
        redFlags: [],
      },
      {
        id: 'bruce-lane',
        name: 'Kristie Bruce-Lane',
        party: 'R',
        role: 'Domestic-violence nonprofit founder',
        bio: ['Founded The Thumbprint Project Foundation. Previous Asm. candidate.'],
        scorecard: [
          {
            topic: 'Housing & land use',
            position: '~ Pro-local-control framing; limited housing-policy paper trail',
            comparison:
              'Musgrove can point to council votes; Elliott has city attorney housing litigation.',
          },
          {
            topic: 'Climate / water / transport',
            position: '~ Skeptical of costly mandates; standard inland-R tone',
            comparison:
              'Both Rs pitch affordability over climate spending vs Elliott’s labor-environmental coalition.',
          },
          {
            topic: 'Public safety',
            position: '✓✓ Victim-services narrative; CC-friendly credibility',
            comparison:
              'Different emotional center than Musgrove’s “sitting elected official” law-and-order pitch.',
          },
          {
            topic: 'Labor coalition',
            position: '✗ Weak union crossover vs Elliott’s stacked labor list',
            comparison:
              'Musgrove may pick up some municipal employee sympathy; Bruce-Lane’s base is more issue-charity than labor.',
          },
          {
            topic: 'State budget & taxes',
            position: '✓ Anti-tax, lean-government rhetoric',
            comparison:
              'Overlaps Musgrove; differentiation is biography (nonprofit vs councilmember) more than spreadsheet.',
          },
          {
            topic: 'Sacramento readiness',
            position: '~ First-time state legislator if elected; nonprofit executive background',
            comparison:
              'Musgrove sells incumbency at city hall; Elliott sells prosecutorial citywide scale.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'musgrove',
        name: 'Ed Musgrove',
        party: 'R',
        role: 'San Marcos City Councilmember',
        bio: ['Sitting elected official on the R side; more institutionally credible R.'],
        scorecard: [
          {
            topic: 'Housing & land use',
            position: '✓ Votes on North County growth, fees, and services tradeoffs',
            comparison:
              'Concrete council record vs Bruce-Lane’s issue advocacy and Elliott’s citywide legal role.',
          },
          {
            topic: 'Climate / water / transport',
            position: '~ Pragmatic suburban infrastructure focus',
            comparison:
              'Less culture-war than some statewide Rs; still to the right of Elliott on mandate-driven climate policy.',
          },
          {
            topic: 'Public safety',
            position: '✓ Municipal law enforcement budgets and staffing votes',
            comparison:
              '“Sitting official” contrast with Bruce-Lane’s nonprofit safety story and Elliott’s prosecution office.',
          },
          {
            topic: 'Labor coalition',
            position: '~ Some municipal-employee overlap possible; no CTA/SEIU stack',
            comparison:
              'Elliott dominates union paper; Musgrove vs Bruce-Lane is which R suburban voters trust operationally.',
          },
          {
            topic: 'State budget & taxes',
            position: '✓ Fiscal conservative; skeptical of new statewide fees',
            comparison:
              'Shared R lane with Bruce-Lane; Musgrove emphasizes governing experience delivering services.',
          },
          {
            topic: 'Sacramento readiness',
            position: '✓ Sitting councilmember “knows the pothole file” pitch',
            comparison:
              'Cross-typology PR pick over Bruce-Lane when voters weight elected experience over issue biography.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Elliott', '●', 'Strong Dem coalition; only viable Dem'],
      ['EL', 'Elliott', '●', 'Same'],
      ['DM', 'Elliott', '●', 'Same'],
      ['OL', 'Elliott', '◐', 'Anti-prosecutor OL voters might skip; otherwise Elliott'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Bruce-Lane', '○', 'Nonprofit-founder framing > pure-party R'],
      ['PR', 'Musgrove', '◐', 'Sitting councilmember; populist municipal pitch'],
      ['CC', 'Bruce-Lane', '◐', 'Domestic-violence nonprofit cred is a CC asset'],
      ['FF', 'Bruce-Lane', '◐', 'Same'],
    ]),
  },
  {
    id: 'assembly-ad78',
    categoryId: 'state-leg',
    title: 'State Assembly, District 78',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers introduce and amend legislation, vote on the budget line by line, and decide committee outcomes on housing, schools, health care, labor, and the environment.',
      'At stake is who carries coastal San Diego’s priorities in the lower house—district services, alignment with the speaker’s agenda, and votes that can override or sustain gubernatorial vetoes when counts are tight.',
    ],
    introParagraphs: [
      'AD-78 covers Mira Mesa, University City, Pacific Beach, La Jolla, Coronado, and downtown San Diego. Three candidates.',
    ],
    candidates: [
      {
        id: 'ward',
        photoSlug: 'ward',
        name: 'Chris Ward',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Asm. since 2020; former SD City Council. Sponsored AB 2097 (2022) ending parking minimums near major transit. Chairs Asm. Arts/Entertainment/Sports/Tourism and select biotech committee. A+ Courage California; ~93/100 vote-with-caucus index.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓✓ AB 2097 parking reform; YIMBY-credible incumbent record',
            comparison:
              'Clearest pro-supply contrast with Galvez’s sparse record and Salguero’s property-rights libertarian frame.',
          },
          {
            topic: 'Climate & coastal district',
            position: '✓ Strong environmental votes; coastal AD priorities',
            comparison:
              'Galvez cannot match voting record depth; Salguero is skeptical of climate mandates.',
          },
          {
            topic: 'Education funding',
            position: '✓ Pro public-school funding; caucus mainstream',
            comparison:
              'Salguero pushes choice and charters more aggressively; Galvez offers little differentiated education agenda.',
          },
          {
            topic: 'Public safety',
            position: '~ Progressive caucus with pragmatic police-funding votes',
            comparison:
              'Galvez runs more “back the blue” tone; Salguero emphasizes individual rights over department growth.',
          },
          {
            topic: 'Taxes & fees',
            position: '~ Supports targeted fees for housing/climate where party agrees',
            comparison:
              'Both challengers lean lower-tax; Ward carries majority-maker responsibility in supermajority era.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Reliable Democratic vote; speaker-aligned',
            comparison:
              'Salguero is the only non-D economic-liberty protest; Galvez is the conventional R contrast to Ward’s PL/EL/DM fit.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Ward pairs AB 2097–style housing supply moves with a mainstream Democratic voting record and strong endorsements in a coastal seat. Galvez is the conventional Republican contrast; Salguero is a libertarian protest—neither matches Ward’s bill history unless you deliberately want to reject that policy stack.',
      },
      {
        id: 'galvez',
        name: 'Payton Galvez',
        party: 'R',
        role: 'Constituent Services Manager',
        bio: ['Sparse media profile.'],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '~ Generic pro-development rhetoric without Ward-level bill record',
            comparison:
              'Ward owns AB 2097; Salguero argues for deregulation from a different ideological corner.',
          },
          {
            topic: 'Climate & coastal district',
            position: '~ Skeptical of costly coastal climate mandates',
            comparison:
              'Farthest from Ward on green spending; Salguero agrees on skepticism but for libertarian reasons.',
          },
          {
            topic: 'Education funding',
            position: '~ Standard Republican school-choice sympathies',
            comparison:
              'Thin policy résumé—mostly contrasts with Ward’s fully documented education votes, not a second detailed R plan.',
          },
          {
            topic: 'Public safety',
            position: '✓ Law-and-order branding typical of CA GOP challengers',
            comparison:
              'Ward balances labor and reform; Galvez is the partisan contrast without Salguero’s libertarian nuance.',
          },
          {
            topic: 'Taxes & fees',
            position: '✓ Anti-fee, lean-government pitch',
            comparison:
              'Overlaps Salguero on smaller government; Ward is the revenue-for-services vote.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Republican caucus minority member if elected',
            comparison:
              'Only competitive R vs Ward’s majority-party leverage; Salguero is a third-party protest.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'salguero',
        name: 'Antonio Salguero',
        party: 'L',
        role: 'Business owner',
        bio: ['Libertarian; housing and property-rights focus.'],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Property-rights deregulation; skeptical of parking/transit mandates',
            comparison:
              'Overlaps Ward on “cut red tape” soundbite but rejects state activism Ward uses to force local housing.',
          },
          {
            topic: 'Climate & coastal district',
            position: '✗ Skeptical of climate mandates and fee-driven programs',
            comparison:
              'Opposite environmental pole from Ward; closer to Galvez on skepticism but with anti-state framing.',
          },
          {
            topic: 'Education funding',
            position: '~ School choice and parental discretion over district monopoly',
            comparison:
              'Further right on markets than Ward; less institutionally specific than major-party SPI candidates elsewhere.',
          },
          {
            topic: 'Public safety',
            position: '~ Individual rights over expansive policing budgets',
            comparison:
              'Different from Galvez’s “tough on crime” default and from Ward’s labor-police coalition endorsements.',
          },
          {
            topic: 'Taxes & fees',
            position: '✓✓ Broad tax skepticism; core libertarian brand',
            comparison:
              'Galvez shares anti-tax tone inside major-party infrastructure; Ward funds services progressives want.',
          },
          {
            topic: 'Caucus / ideology',
            position: '~ No caucus power; protest / messaging vote',
            comparison:
              'FF pick in matrix is symbolic—Ward and Galvez split realistic governance paths.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ward', '●', 'Genuine YIMBY + climate + reproductive rights record'],
      ['EL', 'Ward', '●', 'Same'],
      ['DM', 'Ward', '●', 'Same'],
      ['OL', 'Ward', '◐', 'Establishment Dem, but AB 2097 disrupted NIMBY status quo'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Galvez', '○', 'Only competitive R'],
      ['PR', 'Galvez', '◐', 'Same'],
      ['CC', 'Galvez', '◐', 'Same'],
      ['FF', 'Salguero', '○', 'Libertarian — limited fit but only non-D non-conventional-R'],
    ]),
  },
  {
    id: 'spi',
    categoryId: 'statewide-nonpartisan',
    title: 'Superintendent of Public Instruction',
    kind: 'candidates',
    stakesParagraphs: [
      'The SPI leads the California Department of Education, implements laws passed for K–12 schools, steers billions in state and federal education dollars, and sets tone on literacy, mental health, charter oversight, and culture-war flashpoints in classrooms.',
      'At stake is whether policy tilts toward union priorities, charter and parental-choice expansions, or a middle path—and how quickly districts get help on absenteeism, learning loss, and teacher recruitment.',
    ],
    introParagraphs: [
      'Nonpartisan ballot; eight candidates in the field. Guide narrowed to six by viability: Barrera, Muratsuchi, Newman, Henderson, Lara, Mattammal (+ Shaw flagged for FF alignment).',
    ],
    candidates: [
      {
        id: 'barrera',
        name: 'Richard Barrera',
        party: 'NP',
        role: 'President, San Diego Unified School District Board',
        bio: ['SDUSD president since 2008; educator housing plan. CTA endorsement elevated statewide profile.'],
        scorecard: [
          {
            topic: 'Union partnerships',
            position: '✓✓ CTA flagship endorsement; labor-first bargaining posture',
            comparison:
              'Strongest CTA lane vs Muratsuchi’s CFT/CSEA stack and Lara’s rank-and-file UESF socialism.',
          },
          {
            topic: 'Charter / choice',
            position: '~ Traditional district governance; skeptical of charter expansion',
            comparison:
              'Opposite pole from Mattammal; Shaw uses choice rhetoric from a parental-rights angle.',
          },
          {
            topic: 'Culture-war / LGBTQ+ students',
            position: '✓ SDUSD-aligned inclusive policies vs notification mandates',
            comparison:
              'Contrasts sharply with Shaw; Newman and Muratsuchi stress calmer “follow the law” centrism.',
          },
          {
            topic: 'Literacy & accountability',
            position: '✓ District-level literacy and equity initiatives from board seat',
            comparison:
              'Mattammal sells tutoring-market accountability; Muratsuchi has statewide bill history.',
          },
          {
            topic: 'Facilities / bonds (e.g. Prop 2)',
            position: '✓ Co-implemented district use of state facility dollars',
            comparison:
              'Muratsuchi and Newman co-authored Prop 2—Barrera’s edge is running a large urban district, not the Asm. pen.',
          },
          {
            topic: 'Coalition / electability',
            position: '✓✓ DM darling with statewide labor and Latino elected support',
            comparison:
              'Lara is pure protest left; Shaw is pure protest right—Barrera competes with Muratsuchi for institutional Dems.',
          },
        ],
        endorsements: 'CTA, United Domestic Workers, Rep. Juan Vargas, multiple SoCal admin associations.',
        redFlags: [],
      },
      {
        id: 'muratsuchi',
        photoSlug: 'muratsuchi',
        name: 'Al Muratsuchi',
        party: 'NP',
        role: 'State Asm. (LA South Bay)',
        bio: ['Former Asm. Education chair; co-author Prop 2 school-facilities bond.'],
        scorecard: [
          {
            topic: 'Union partnerships',
            position: '✓ CFT + CSEA + ACSA triple endorsement; legislative labor ties',
            comparison:
              'Cross-typology tension with Barrera’s CTA crown—both are union-heavy; Newman pulls trades/CCPOA.',
          },
          {
            topic: 'Charter / choice',
            position: '~ Regulatory oversight lane; not Mattammal’s expansion pitch',
            comparison:
              'More statute-writing credibility than Barrera on statewide charter rules; less choice-friendly than Mattammal/Shaw.',
          },
          {
            topic: 'Culture-war / LGBTQ+ students',
            position: '~ Follow statute and AG guidance; avoids Shaw-style flashpoints',
            comparison:
              'EL voters may prefer this steadiness over Shaw or Lara’s movement energy.',
          },
          {
            topic: 'Literacy & accountability',
            position: '✓ Education committee record on assessments and transparency',
            comparison:
              'Mattammal markets private tutoring metrics; Barrera has board-level implementation stories.',
          },
          {
            topic: 'Facilities / bonds (e.g. Prop 2)',
            position: '✓✓ Named co-author of Prop 2; bond implementation experience',
            comparison:
              'Shared credit with Newman; beats Lara on insider facility finance, loses purity to Lara’s spending ambitions.',
          },
          {
            topic: 'Coalition / electability',
            position: '✓✓ Broad establishment-education coalition (EL matrix pick)',
            comparison:
              'Newman competes for centrists; Barrera competes for CTA-first voters in the same primary math.',
          },
        ],
        endorsements:
          'CFT, CSEA, Association of CA School Administrators, CA Federation of Labor, Equality California, Rep. Ted Lieu, Treasurer Fiona Ma.',
        redFlags: [],
      },
      {
        id: 'newman',
        name: 'Joshua Newman',
        party: 'NP',
        role: 'Former state senator (Orange County)',
        bio: ['Army veteran; co-author Prop 2. Big building-trades coalition including CCPOA.'],
        scorecard: [
          {
            topic: 'Union partnerships',
            position: '✓ Building trades + CCPOA + veteran-labor crossover',
            comparison:
              'More law-enforcement union flavor than Barrera/Muratsuchi—AR matrix bridge pick.',
          },
          {
            topic: 'Charter / choice',
            position: '~ Pragmatic centrist; not Mattammal’s charter boosterism',
            comparison:
              'Shaw captures parental-rights intensity; Newman offers peace-officer and suburban credibility without Shaw’s controversies.',
          },
          {
            topic: 'Culture-war / LGBTQ+ students',
            position: '~ Avoids Shaw-style notification fights; “implement law neutrally” tone',
            comparison:
              'Lara attacks police-in-schools; Newman occupies middle ground that frustrates activists on both sides.',
          },
          {
            topic: 'Literacy & accountability',
            position: '~ Veteran “discipline and service” framing vs educator-led plans',
            comparison:
              'Contrasts with Henderson’s classroom biography and Barrera’s board equity work.',
          },
          {
            topic: 'Facilities / bonds (e.g. Prop 2)',
            position: '✓ Co-author Prop 2 with Muratsuchi',
            comparison:
              'Same bond résumé as Muratsuchi; differentiation is CCPOA/trades coalition vs educator associations.',
          },
          {
            topic: 'Coalition / electability',
            position: '✓ Suburban swing coalition; SS matrix nod',
            comparison:
              'Mattammal and Shaw pull opposite wings; Newman tries to glue center-left and center-right education voters.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'henderson',
        name: 'Nichelle Henderson',
        party: 'NP',
        role: 'LA Community College District trustee, former teacher',
        bio: ['Endorsements from CA Democratic Legislative Women’s Caucus and Legislative Black Caucus.'],
        scorecard: [
          {
            topic: 'Union partnerships',
            position: '✓ Educator and caucus endorsements; classroom union sympathy',
            comparison:
              'Less CTA/CFT paper than Barrera/Muratsuchi; stronger “teacher in the room” biography than Newman.',
          },
          {
            topic: 'Charter / choice',
            position: '~ District-first; skeptical of for-profit charter models',
            comparison:
              'Mattammal is the clearest choice expansionist; Henderson aligns with traditional public systems.',
          },
          {
            topic: 'Culture-war / LGBTQ+ students',
            position: '✓ Inclusive district policies; emphasizes student safety and belonging',
            comparison:
              'Opposite Shaw; less confrontational than Lara’s police-out-of-schools linkage.',
          },
          {
            topic: 'Literacy & accountability',
            position: '✓ Community-college access and remediation focus',
            comparison:
              'Different level of government than K–12 SPI, but credentialing story contrasts with Mattammal’s private sector.',
          },
          {
            topic: 'Facilities / bonds (e.g. Prop 2)',
            position: '~ Supports bond programs; lighter Prop 2 author credit than Asm. co-authors',
            comparison:
              'Muratsuchi/Newman own the bond pen; Henderson sells trustee execution experience.',
          },
          {
            topic: 'Coalition / electability',
            position: '~ Identity-forward coalition; narrower statewide donor ceiling',
            comparison:
              'Barrera and Muratsuchi dwarf on establishment lists; Henderson’s lane is representation + educator authenticity.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'lara',
        name: 'Frank Lara',
        party: 'NP',
        role: 'Elementary teacher, exec VP of United Educators of San Francisco',
        bio: ['Self-described democratic socialist. Police-out-of-schools, free childcare/pre-K agenda.'],
        scorecard: [
          {
            topic: 'Union partnerships',
            position: '✓ Rank-and-file UESF leadership; socialist labor alignment',
            comparison:
              'Ideologically left of CTA’s Barrera endorsement machine; competes for OL/PL hearts vs Muratsuchi’s breadth.',
          },
          {
            topic: 'Charter / choice',
            position: '✗ Skeptical of charter growth and privatized services',
            comparison:
              'Farthest from Mattammal; Shaw uses choice rhetoric from the political right, Lara from the left.',
          },
          {
            topic: 'Culture-war / LGBTQ+ students',
            position: '✓ Solidarity with student-led inclusion; police divestment linked to safety debates',
            comparison:
              'Sharpest break from Shaw; more movement-left than Henderson’s inclusive trustee tone.',
          },
          {
            topic: 'Literacy & accountability',
            position: '✓✓ Universal pre-K / childcare as education foundation',
            comparison:
              'Biggest structural spending ask in the field—contrasts with Newman’s fiscal-centrist caution.',
          },
          {
            topic: 'Facilities / bonds (e.g. Prop 2)',
            position: '✓ Would push aggressive facility equity tied to revenue hikes',
            comparison:
              'Muratsuchi/Newman carry insider bond cred; Lara argues dollars must follow underserved zip codes first.',
          },
          {
            topic: 'Coalition / electability',
            position: '✓✓ PL matrix pick; protest viability, not establishment favorite',
            comparison:
              'Useful if you want maximum distance from Shaw without voting Mattammal’s charter lane.',
          },
        ],
        endorsements: 'Peace and Freedom Party, Green Party.',
        redFlags: [],
      },
      {
        id: 'mattammal',
        name: 'Gus Mattammal',
        party: 'NP',
        role: 'Tutoring company founder',
        bio: ['Pro-charter, pro-homeschool alternatives.'],
        scorecard: [
          {
            topic: 'Union partnerships',
            position: '✗ Weak traditional union alignment; market-oriented staffing vision',
            comparison:
              'Opposite coalition from Barrera/Muratsuchi; Newman still picks up some union locals.',
          },
          {
            topic: 'Charter / choice',
            position: '✓✓ Strongest charter + homeschool expansion voice in viable field',
            comparison:
              'FF matrix alternative to Shaw—choice without Shaw-tier national culture-war baggage (per guide counter-args).',
          },
          {
            topic: 'Culture-war / LGBTQ+ students',
            position: '~ Parental prerogative framing without Shaw’s lawsuit-headline record',
            comparison:
              'Shaw is the lightning rod; Mattammal competes for CC/PR voters who want charters first.',
          },
          {
            topic: 'Literacy & accountability',
            position: '✓ Metrics and tutoring-market solutions; entrepreneur lens',
            comparison:
              'Contrasts with educator-credential stories from Henderson, Lara, and Barrera.',
          },
          {
            topic: 'Facilities / bonds (e.g. Prop 2)',
            position: '~ Less legislative bond authorship; emphasizes flexible facility use',
            comparison:
              'Muratsuchi/Newman own Prop 2 co-authorship; Mattammal sells private-sector delivery speed.',
          },
          {
            topic: 'Coalition / electability',
            position: '~ CC/PR bridge against Shaw for choice voters',
            comparison:
              'If Shaw is disqualifying but charters still matter, Mattammal is the pressure-release valve.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'shaw',
        name: 'Sonja Shaw',
        party: 'NP',
        role: 'Chino Valley USD board president',
        bio: ['Led parental-rights / anti-trans-policy movement; Christian-nationalist-aligned national controversies.'],
        scorecard: [
          {
            topic: 'Union partnerships',
            position: '✗ Opposes CTA-style bargaining priorities on social policy',
            comparison:
              'Farthest from Barrera/Muratsuchi labor stacks; Newman still courts some law-enforcement locals.',
          },
          {
            topic: 'Charter / choice',
            position: '✓ Pro parental opt-outs and private alternatives to district monopoly',
            comparison:
              'Overlaps Mattammal on choice energy; Shaw adds national culture-war visibility Mattammal avoids.',
          },
          {
            topic: 'Culture-war / LGBTQ+ students',
            position: '✓ Parental-notification mandates; AG Bonta sued her district (2023)',
            comparison:
              'Defining contrast with every non-FF candidate—especially Lara and Barrera on student privacy vs notification.',
          },
          {
            topic: 'Literacy & accountability',
            position: '~ “Transparency to parents” framing vs equity-office metrics',
            comparison:
              'Mattammal sells numeracy markets; Shaw sells political accountability to conservative parents.',
          },
          {
            topic: 'Facilities / bonds (e.g. Prop 2)',
            position: '~ Skeptical of bond-driven social programming; local-control emphasis',
            comparison:
              'Muratsuchi/Newman are bond insiders; Shaw’s brand is fighting Sacramento and AG enforcement.',
          },
          {
            topic: 'Coalition / electability',
            position: '✓✓ FF matrix pick; high-salience for faith-and-family voters',
            comparison:
              'Mattammal is the off-ramp if Shaw’s controversies are too hot but choice still matters.',
          },
        ],
        redFlags: [
          {
            text: 'As Chino Valley USD board president, she spearheaded a 2023 policy requiring staff to notify parents when a student requests gender-identity-related changes at school; Attorney General Rob Bonta sued the district the same summer. Coverage frames the fight as a flashpoint in national debates over LGBTQ+ students and parental notification.',
            sources: [
              { label: 'KQED', url: 'https://www.kqed.org/news/11959323/california-sues-southern-california-school-district-over-transgender-notification-policy' },
              {
                label: 'California Attorney General (press release)',
                url: 'https://oag.ca.gov/news/press-releases/attorney-general-bonta-announces-lawsuit-challenging-chino-valley-unified-school',
              },
              { label: 'EdSource', url: 'https://edsource.org/2026/sonja-shaw-california-superintendent-candidate/756133' },
            ],
          },
        ],
        redFlagCallout: true,
      },
    ],
    crossTypology: ct([
      ['PL', 'Lara', '●', 'Genuinely socialist platform; only PL fit'],
      ['EL', 'Muratsuchi', '●', 'CFT/CSEA/ACSA triple-stamp; legislative track record'],
      ['DM', 'Barrera', '●', 'CTA endorsement huge in DM circles; SDUSD leadership cred'],
      ['OL', 'Lara', '◐', 'OL might prefer Newman if labor coalition matters more than ideology'],
      ['SS', 'Newman', '○', 'Veteran/centrist signaling; broad coalition'],
      ['AR', 'Newman', '○', 'Closest to non-MAGA option; Newman has CCPOA'],
      ['PR', 'Mattammal', '◐', 'Charter/homeschool agenda'],
      ['CC', 'Mattammal', '●', 'Same'],
      ['FF', 'Shaw', '●', 'Parental-rights/anti-trans agenda; clear FF fit'],
    ]),
    counterArguments: [
      'EL (Muratsuchi ●): But consider Barrera if you weight CTA over CFT.',
      'DM (Barrera ●): But consider Muratsuchi for legislative impact.',
      'SS (Newman ○): Newman is the guide’s centrist bridge pick; Lara still aligns better if you want maximal labor-left contrast with Shaw.',
      'FF (Shaw ●): But consider Mattammal if you want charter pressure without Shaw-tier national controversies.',
    ],
  },
  {
    id: 'county-treasurer',
    categoryId: 'local-sd',
    title: 'San Diego County Treasurer–Tax Collector',
    kind: 'candidates',
    stakesParagraphs: [
      'The office bills and collects roughly $9B in annual property taxes, manages an investment pool on the order of tens of billions, and runs the county’s banking and debt-service operations—errors or politicized decisions hit every homeowner and public agency that depends on timely revenue.',
      'At stake is whether collections stay predictable and customer-friendly, how aggressively fees and penalties are scrutinized, and who voters trust with cash management when interest rates and real-estate markets swing.',
    ],
    introParagraphs: [
      'Nonpartisan in name only — political attacks in the race. Four candidates; oversees ~$9.1B property taxes and ~$18B investment pool.',
    ],
    candidates: [
      {
        id: 'cohen-larry',
        name: 'Larry Cohen',
        party: 'D',
        role: 'Appointed incumbent',
        bio: [
          'Sworn in November 2025 after Board of Supervisors appointment. Former Chief of Staff to Rep. Juan Vargas; House Financial Services senior policy adviser; biotech executive.',
        ],
        endorsements: 'Rep. Juan Vargas, Supervisors Lawson-Remer / Aguirre / Montgomery Steppe (appointers), community leaders.',
        redFlags: [],
        recordVsChange:
          'Cohen is a fresh appointee with House financial-policy experience and the supervisors who picked him. Anderson offers elected experience and anti-fee populism but would vacate a Board seat; Nakawatase is the purer GOP-line treasurer alternative without that vacancy trade.',
      },
      {
        id: 'anderson',
        photoSlug: 'anderson',
        name: 'Joel Anderson',
        party: 'R',
        role: 'County Supervisor (East County)',
        bio: [
          'Reform-mission framing: junk-fee review, customer service, transparency. Notable union crossover endorsements. If Anderson wins, Supervisor seat opens early (special election).',
        ],
        endorsements:
          'IBEW Local 569, Cal Fire Firefighters Local 2881, Carpenters Union Local 619, Deputy Sheriffs Association, Howard Jarvis Taxpayers Association.',
        redFlags: [],
      },
      {
        id: 'nakawatase',
        name: 'Shirley Nakawatase',
        party: 'R',
        role: 'CPA, ex–Imperial Beach mayoral candidate',
        bio: ['Endorsed by Republican Party of San Diego County.'],
        redFlags: [],
      },
      {
        id: 'roy',
        name: 'Victor Roy',
        party: 'NP',
        role: 'Former Oceanside City Treasurer',
        bio: ['Municipal finance outsider framing.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Cohen', '◐', 'Only Dem; standard establishment fit, no PL champion'],
      ['EL', 'Cohen', '●', 'Establishment-D incumbent; SD Dem coalition'],
      ['DM', 'Cohen', '●', 'Same'],
      ['OL', 'Roy', '○', 'Outsider muni-treasurer; symbolic protest'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Anderson', '◐', 'Most experienced; bipartisan-tinged endorsements'],
      ['PR', 'Anderson', '●', 'Anti-junk-fee populism'],
      ['CC', 'Anderson', '●', 'Sitting elected R with finance background'],
      ['FF', 'Anderson', '●', 'Alternative Nakawatase for SD GOP stamp'],
    ]),
    counterArguments: [
      'PR (Anderson ●): But consider Nakawatase if the SD GOP stamp matters more than supervisor crossover union endorsements.',
      'EL (Cohen ●): But consider Anderson only if anti-incumbent county audit energy outweighs partisan affiliation.',
      'CC (Anderson ●): Nakawatase is the purer CPA-party-line alternative without triggering a Board vacancy special election.',
    ],
  },
  {
    id: 'city-council-d6',
    categoryId: 'local-sd',
    title: 'San Diego City Council, District 6 (Mira Mesa)',
    kind: 'candidates',
    stakesParagraphs: [
      'City councilmembers set land-use rules that decide whether housing gets built, vote on police and fire budgets, negotiate labor contracts, and direct local services from libraries to potholes in your neighborhood.',
      'For District 6, at stake is how fast Mira Mesa and nearby communities add homes near jobs, how the city balances climate and transportation projects with taxes and fees, and who has leverage when the mayor and council split.',
    ],
    introParagraphs: ['Two-candidate race — clear ideological split. Kent Lee (D, incumbent) vs. Mark Powell (R).'],
    candidates: [
      {
        id: 'lee',
        photoSlug: 'lee',
        name: 'Kent Lee',
        party: 'D',
        role: 'Incumbent — Council President Pro Tem',
        bio: [
          'Chairs Land Use & Housing; lives in Mira Mesa. 101 Ash affordable conversion, STR impact fee, community plan updates, permitting reforms. Rare coalition: BIA + Planned Parenthood + major labor.',
        ],
        scorecard: [
          {
            topic: 'Housing & infill',
            position: '✓✓ Land Use chair; 101 Ash conversion, community plan updates',
            comparison:
              'YIMBY-credible incumbent record Powell cannot match—Powell runs on slowing fees and growth-linked costs.',
          },
          {
            topic: 'Transport / climate',
            position: '✓ Bike lanes, transit-oriented growth, climate fees where adopted',
            comparison:
              'Powell explicitly targets “underused” bike lanes—starkest mobility/climate split in the race.',
          },
          {
            topic: 'Public safety',
            position: '✓ POA + firefighter endorsements with progressive housing coalition',
            comparison:
              'Unusual cross-endorsement stack vs Powell’s austerity + pension-reform framing.',
          },
          {
            topic: 'Fees & taxes',
            position: '~ Supports STR impact fees and targeted infrastructure fees',
            comparison:
              'Powell promises trash-tax relief and no new taxes—direct pocketbook contrast.',
          },
          {
            topic: 'Services & growth',
            position: '✓ Balances growth with library, parks, and permitting staff investments',
            comparison:
              'Powell emphasizes competitive bidding and leaner government delivery models.',
          },
          {
            topic: 'Mayor / council leverage',
            position: '✓ Council President Pro Tem—insider leverage when mayor splits',
            comparison:
              'Powell would be minority opposition voice; Lee already holds leadership gavel for D6 priorities.',
          },
        ],
        endorsements:
          'SD County Democratic Party, SD & Imperial Counties Labor Council, MEA, AFSCME 127, SDPOA, SD Firefighters 145, SD Lifeguards, SEIU 221, Planned Parenthood Action Fund, BIA, numerous state/federal endorsements.',
        redFlags: [],
        recordVsChange:
          'Lee already chairs Land Use & Housing and holds Council President Pro Tem leverage—101 Ash, community plans, and fee-backed growth are his résumé. Powell is the pocketbook and lean-government counter; change buys slower fee-driven growth and different mobility priorities only if that trade beats keeping Lee’s coalition and gavel.',
      },
      {
        id: 'powell',
        name: 'Mark Powell',
        party: 'R',
        role: 'Former SDUSD / County Board of Education member',
        bio: [
          'Platform: free Balboa Park parking; reduce trash tax; oppose new taxes; remove "underused" bike lanes; pension reform; competitive bidding. SD Union-Tribune editorial endorsement (opinion).',
        ],
        scorecard: [
          {
            topic: 'Housing & infill',
            position: '~ Skeptical of fee-driven growth; emphasizes homeowner pocketbook',
            comparison:
              'Lee carries BIA + YIMBY wins; Powell pitches relief for residents taxed by growth infrastructure.',
          },
          {
            topic: 'Transport / climate',
            position: '✗ Remove underused bike lanes; less priority on climate-oriented street redesign',
            comparison:
              'Mirror opposite of Lee’s multimodal lane work—biggest visible quality-of-life fork.',
          },
          {
            topic: 'Public safety',
            position: '✓ Pension reform + competitive bidding pitched as safer core services',
            comparison:
              'Different toolkit than Lee’s union-negotiated labor contracts; both claim safer outcomes.',
          },
          {
            topic: 'Fees & taxes',
            position: '✓✓ Anti–trash-tax, anti–new-tax, free Balboa Park parking pledges',
            comparison:
              'Purest fiscal-populist contrast with Lee’s fee-supported housing and climate programs.',
          },
          {
            topic: 'Services & growth',
            position: '✓ Competitive bidding and outsourcing rhetoric for efficiency',
            comparison:
              'Lee invests in staffing permitting reform; Powell stresses market discipline on contracts.',
          },
          {
            topic: 'Mayor / council leverage',
            position: '✗ Minority-party councilmember if elected—protest leverage, not gavel',
            comparison:
              'Lee already runs Land Use & Housing; Powell’s path is voice-of-opposition unless council flips.',
          },
        ],
        endorsements: 'SD U-T editorial board (opinion), Republican Party of San Diego County.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Lee', '●', 'YIMBY-credible incumbent; 101 Ash conversion'],
      ['EL', 'Lee', '●', 'Establishment Dem; broad coalition'],
      ['DM', 'Lee', '●', 'Same'],
      ['OL', 'Lee', '◐', 'Police-union endorsement may complicate for some OL voters'],
      ['SS', '—', '—', 'Skip if uninformed'],
      ['AR', 'Powell', '◐', 'Fiscal restraint without overt MAGA branding; U-T endorsement'],
      ['PR', 'Powell', '●', 'Anti-tax, anti-bike-lane populist branding'],
      ['CC', 'Powell', '●', 'Standard fiscal-conservative R'],
      ['FF', 'Powell', '●', 'Only R option'],
    ]),
    counterArguments: [
      'AR (Powell ◐): But consider Lee if you want a Republican-friendly Dem who already has BIA + YIMBY housing wins.',
      'PL (Lee ●): Powell is the protest vote for fee and bike-lane backlash; Lee still leads on tenant and climate enforcement.',
      'FF (Powell ●): Lee’s police- and labor-backed coalition is an imperfect social-conservative fit—Powell is the only R.',
    ],
  },
  {
    id: 'judge-11',
    categoryId: 'local-sd',
    title: 'Superior Court Judge, Office No. 11',
    kind: 'candidates',
    stakesParagraphs: [
      'Superior Court judges decide criminal bail and sentences, restraining orders, eviction and consumer cases, family-custody disputes, and multi-million-dollar civil trials—often with little day-to-day press coverage but years of impact on the people before them.',
      'Even in an unopposed race, the seat matters for courtroom backlog, treatment of victims and defendants, and consistency with statewide rules on diversion, mental health, and sentencing reform.',
    ],
    introParagraphs: [
      'Nonpartisan race; SDCBA June 2026 judicial evaluations (see packet for rating definitions).',
    ],
    candidates: [
      {
        id: 'boucek',
        name: 'Leah Boucek',
        party: 'NP',
        role: 'Superior Court commissioner — unopposed',
        bio: [
          'SDCBA (June 2026): Exceptionally Qualified.',
          'Superior Court commissioner; campaign materials stress long family-law practice and broad judicial endorsements.',
          'Unopposed for Office No. 11.',
        ],
        scorecard: [{ topic: 'Bar rating', position: '✓✓ Exceptionally Qualified' }],
        notes: ['SDCBA packet: https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Boucek', '●', 'Unopposed; Exceptionally Qualified'],
      ['EL', 'Boucek', '●', 'Same'],
      ['DM', 'Boucek', '●', 'Same'],
      ['OL', 'Boucek', '●', 'Same'],
      ['SS', 'Boucek', '●', 'Same'],
      ['AR', 'Boucek', '●', 'Same'],
      ['PR', 'Boucek', '●', 'Same'],
      ['CC', 'Boucek', '●', 'Same'],
      ['FF', 'Boucek', '●', 'Same'],
    ]),
    counterArguments: [
      'SS (Boucek ●): Low-salience race — ok to skip if you do not research beyond the bar rating.',
    ],
  },
  {
    id: 'judge-18',
    categoryId: 'local-sd',
    title: 'Superior Court Judge, Office No. 18',
    kind: 'candidates',
    stakesParagraphs: [
      'Superior Court judges decide criminal bail and sentences, restraining orders, eviction and consumer cases, family-custody disputes, and multi-million-dollar civil trials—often with little day-to-day press coverage but years of impact on the people before them.',
      'Even in an unopposed race, the seat matters for courtroom backlog, treatment of victims and defendants, and consistency with statewide rules on diversion, mental health, and sentencing reform.',
    ],
    introParagraphs: [
      'Nonpartisan; SDCBA June 2026 judicial evaluations.',
    ],
    candidates: [
      {
        id: 'prior',
        name: 'Tracy Prior',
        party: 'NP',
        role: 'Chief deputy district attorney — unopposed',
        bio: [
          'SDCBA (June 2026): Exceptionally Qualified.',
          'Chief Deputy District Attorney — campaign cites decades as a prosecutor, complex felony jury trials, DA leadership, Family Justice Center operations, and a large bench endorsement list.',
          'Unopposed for Office No. 18.',
        ],
        scorecard: [{ topic: 'Bar rating', position: '✓✓ Exceptionally Qualified' }],
        notes: ['SDCBA packet: https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Prior', '●', 'Unopposed; Exceptionally Qualified'],
      ['EL', 'Prior', '●', 'Same'],
      ['DM', 'Prior', '●', 'Same'],
      ['OL', 'Prior', '●', 'Same'],
      ['SS', 'Prior', '●', 'Same'],
      ['AR', 'Prior', '●', 'Same'],
      ['PR', 'Prior', '●', 'Same'],
      ['CC', 'Prior', '●', 'Same'],
      ['FF', 'Prior', '●', 'Same'],
    ]),
    counterArguments: [
      'SS (Prior ●): Unopposed — ok to skip if you do not read beyond the bar rating.',
    ],
  },
  {
    id: 'judge-31',
    categoryId: 'local-sd',
    title: 'Superior Court Judge, Office No. 31',
    kind: 'candidates',
    stakesParagraphs: [
      'Superior Court judges decide criminal bail and sentences, restraining orders, eviction and consumer cases, family-custody disputes, and multi-million-dollar civil trials—often with little day-to-day press coverage but years of impact on the people before them.',
      'In a contested bench race, at stake is whether the bench tilts toward prosecution-style enforcement, defense-leaning discretion, or a centrist balance—and how quickly complex cases move when courtrooms are already full.',
    ],
    introParagraphs: [
      'Contested: Cleesattle vs. Noakes. Compare SDCBA June 2026 ratings and campaign sites.',
    ],
    candidates: [
      {
        id: 'cleesattle',
        name: 'Jodi Cleesattle',
        party: 'NP',
        role: 'Senior deputy attorney general',
        bio: [
          'SDCBA (June 2026): Exceptionally Qualified.',
          'Senior deputy attorney general — California DOJ civil enforcement, regulatory, and appellate work; campaign highlights bench and elected endorsements.',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '✓✓ Exceptionally Qualified' },
          {
            topic: 'Career emphasis',
            position: '✓ State civil / appellate / enforcement',
            comparison: 'Noakes: administrative law judge and civil litigator — contested agency hearings and written decisions.',
          },
        ],
        notes: ['SDCBA packet: https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations'],
        redFlags: [],
      },
      {
        id: 'noakes',
        name: 'Adam Noakes',
        party: 'NP',
        role: 'Administrative law judge — civil litigator',
        bio: [
          'SDCBA (June 2026): Well Qualified.',
          'California administrative law judge; campaign cites 1,100+ decided cases, prior civil litigation, Army infantry / Old Guard service, law-enforcement endorsements, and impartiality without “activism or ideology.”',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '✓ Well Qualified' },
          {
            topic: 'Career emphasis',
            position: '✓ ALJ + civil litigator',
            comparison: 'Cleesattle: statewide DOJ civil and appellate leadership.',
          },
        ],
        notes: ['SDCBA packet: https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Cleesattle', '●', 'Higher SDCBA rating; AG-side experience'],
      ['EL', 'Cleesattle', '●', 'Same'],
      ['DM', 'Cleesattle', '●', 'Same'],
      ['OL', 'Cleesattle', '●', 'Same'],
      ['SS', 'Cleesattle', '◐', 'Highest rating'],
      ['AR', 'Cleesattle', '◐', 'SDCBA wins; or Noakes for prosecutor tilt'],
      ['PR', 'Noakes', '◐', 'Prosecutorial appeal; both qualified'],
      ['CC', 'Noakes', '◐', 'Same'],
      ['FF', 'Noakes', '◐', 'Same'],
    ]),
    counterArguments: [
      'PR (Noakes ◐): But consider Cleesattle if SDCBA “Exceptionally Qualified” over ALJ / litigator biography is decisive.',
      'AR (Cleesattle ◐): Noakes may read closer to law-enforcement-aligned values via endorsements even though both carry strong SDCBA ratings.',
    ],
  },
  {
    id: 'judge-32',
    categoryId: 'local-sd',
    title: 'Superior Court Judge, Office No. 32',
    kind: 'candidates',
    stakesParagraphs: [
      'Superior Court judges decide criminal bail and sentences, restraining orders, eviction and consumer cases, family-custody disputes, and multi-million-dollar civil trials—often with little day-to-day press coverage but years of impact on the people before them.',
      'This contested field includes a candidate rated “Lacking Qualifications” by the county bar—at stake is not only ideology but basic courtroom readiness and public confidence in the judiciary.',
    ],
    introParagraphs: [
      'SDCBA (June 2026) rated one candidate in this field Lacking Qualifications — see that candidate’s card and the official packet.',
    ],
    candidates: [
      {
        id: 'ramirez',
        name: 'Tia Ramirez',
        party: 'NP',
        role: 'Chief deputy city attorney',
        bio: [
          'SDCBA (June 2026): Qualified — the only Office No. 32 candidate with a positive merits rating.',
          'City Attorney leader (gun-violence restraining order work); former administrative law judge; past leadership in domestic violence and sex-crimes units; campaign promises a “firm, fair, and compassionate” bench and lists extensive judge and law-enforcement endorsements.',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '✓ Qualified' },
          { topic: 'Career emphasis', position: '✓ City Attorney trial leader; past ALJ' },
        ],
        notes: ['SDCBA packet: https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations'],
        redFlags: [],
      },
      {
        id: 'dambrogi',
        name: "Nicole D'Ambrogi",
        party: 'NP',
        role: 'Estate & family law attorney; clinical director (law school)',
        bio: [
          'SDCBA (June 2026): Lacking Qualifications — bar’s lowest evaluated tier.',
          'Attorney concentrating on probate, trusts, conservatorships, and family law; directs clinical programs at Thomas Jefferson School of Law; Navy veteran. Campaign stresses fair justice and protecting vulnerable clients.',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '✗ Lacking Qualifications' },
          { topic: 'Practice focus', position: '~ Fiduciary and family; law teaching / clinics' },
        ],
        notes: ['SDCBA packet: https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations'],
        redFlags: [
          {
            text: 'San Diego County Bar Association rated this candidate “Lacking Qualifications”—its lowest evaluation category for the June 2026 primary (professional ability, temperament, and readiness).',
            sources: [
              {
                label: 'San Diego County Bar Association (2026 evaluations)',
                url: 'https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations',
              },
            ],
          },
        ],
        redFlagCallout: true,
      },
      {
        id: 'gallo',
        name: 'David Gallo',
        party: 'NP',
        role: 'Civil litigator',
        bio: [
          'SDCBA (June 2026): Unable to Evaluate — no published merits score.',
          'Civil litigator; public-facing web presence is the law practice at davidgallolaw.com rather than a separate judge-only campaign site.',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '? Unable to Evaluate' },
          { topic: 'Practice', position: '~ Civil litigation (self-described)' },
        ],
        notes: ['SDCBA packet: https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ramirez', '●', 'Only positively rated candidate'],
      ['EL', 'Ramirez', '●', 'Same'],
      ['DM', 'Ramirez', '●', 'Same'],
      ['OL', 'Ramirez', '◐', 'Same'],
      ['SS', 'Ramirez', '○', 'Qualified is baseline; consider skipping'],
      ['AR', 'Ramirez', '◐', 'Same'],
      ['PR', 'Ramirez', '○', 'Avoid D’Ambrogi; FF/CC might prefer Gallo if they distrust bar associations'],
      ['CC', 'Ramirez', '○', 'Same'],
      ['FF', 'Gallo', '○', 'Same nuance as CC/PR in guide'],
    ]),
    counterArguments: [
      'FF (Gallo ○): Some distrust bar ratings; Ramirez remains the only positively rated candidate.',
      'OL (Ramirez ◐): Gallo is a “none of the above” valve—Ramirez still matches OL accountability instincts on published facts.',
    ],
  },
  {
    id: 'judge-34',
    categoryId: 'local-sd',
    title: 'Superior Court Judge, Office No. 34',
    kind: 'candidates',
    stakesParagraphs: [
      'Superior Court judges decide criminal bail and sentences, restraining orders, eviction and consumer cases, family-custody disputes, and multi-million-dollar civil trials—often with little day-to-day press coverage but years of impact on the people before them.',
      'Even in an unopposed race, the seat matters for courtroom backlog, treatment of victims and defendants, and consistency with statewide rules on diversion, mental health, and sentencing reform.',
    ],
    introParagraphs: [
      'Unopposed. SDCBA (June 2026): Exceptionally Qualified.',
    ],
    candidates: [
      {
        id: 'hauf',
        name: 'Laurie Hauf',
        party: 'NP',
        role: 'Assistant chief deputy DA — unopposed',
        bio: [
          'SDCBA (June 2026): Exceptionally Qualified.',
          'Long-serving San Diego County deputy district attorney — campaign cites substantial felony trial experience, North County division leadership, and endorsements from elected officials and law-enforcement labor.',
          'Unopposed for Office No. 34.',
        ],
        scorecard: [{ topic: 'Bar rating', position: '✓✓ Exceptionally Qualified' }],
        notes: ['SDCBA packet: https://www.sdcba.org/?pg=PR-4-27-2026-Judicial-Candidate-Evaluations'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Hauf', '●', 'Unopposed; Exceptionally Qualified'],
      ['EL', 'Hauf', '●', 'Same'],
      ['DM', 'Hauf', '●', 'Same'],
      ['OL', 'Hauf', '●', 'Same'],
      ['SS', 'Hauf', '●', 'Same'],
      ['AR', 'Hauf', '●', 'Same'],
      ['PR', 'Hauf', '●', 'Same'],
      ['CC', 'Hauf', '●', 'Same'],
      ['FF', 'Hauf', '●', 'Same'],
    ]),
  },
  {
    id: 'measure-a',
    categoryId: 'measures',
    title: 'Measure A — Non-Primary Homes (Empty Homes) Tax',
    kind: 'measure',
    stakesParagraphs: [
      'Most voters do not own a second home sitting empty half the year—but everyone helps pick the city’s rules. This measure asks whether San Diego should tax a narrow slice of non-primary homes that are vacant 183+ days/year, to nudge those units toward renters or buyers and to raise general-fund revenue.',
      'Tradeoffs: supporters see a targeted lever in a housing crunch; opponents cite legal risk (similar taxes challenged elsewhere), fairness for part-year owners and heirs, enforcement burden, and the fact that revenue is not earmarked for affordable housing.',
    ],
    introParagraphs: [
      'June 2, 2026 City of San Diego ballot measure (council vote 8–1 to place it). Read the “Why you’re voting on this” box first—it explains who actually pays—then the dollar amounts and rules.',
    ],
    candidates: [],
    measure: {
      question:
        'Should San Diego tax homes that are not the owner’s primary residence and are vacant for 183+ days per year?',
      voterConnection: [
        'If the place you sleep most nights is your only home—and you’re not leaving a second San Diego home empty most of the year—this tax almost certainly does not apply to you. You’re still voting because it changes city policy and revenue, not because you’ll get a bill under typical one-home lifestyles.',
        'Renters: you don’t own the unit, so you won’t pay the tax directly. A Yes is partly a bet that taxing long vacancies might free up a few more homes and/or pay for city services you use; a No says that bet isn’t worth the downsides.',
        'Trying to buy someday: same indirect logic—more turnover could modestly help supply; there’s no guarantee of cheaper prices.',
        'You might care if you own a non-primary home here (inheritance, “snowbird” second home, investment LLC): read exemptions carefully—some situations waive the tax, but part-year use patterns can still matter.',
        'Corporate or LLC ownership pays a higher stacked surcharge than individual owners if the property is taxed—supporters highlight that as aiming at investor vehicles more than a family cottage.',
      ],
      mechanismBullets: [
        'What gets taxed: residential property that is not the owner’s primary residence and is “empty” 183+ days in a calendar year (exact definitions and exemptions are in the ordinance and city ballot materials).',
        'Tax amount: $8,000 per qualifying unit in 2027; $10,000 per year from 2028 onward, with annual inflation adjustments starting in 2029.',
        'Corporate surcharge: +$4,000 in 2027 and +$5,000 from 2028 on top of the base tax for qualifying corporate-owned property.',
        'Common exemptions include primary homes, active long-term rentals, military orders, disasters, probate, hardship, and other cases listed in official materials—check the fine print if you have edge cases.',
        'Revenue goes to the city general fund (not locked to housing). The Independent Budget Analyst estimates about $9.2M–$21.4M in year one depending on exemptions and compliance.',
        'If passed, collection is intended to begin January 1, 2027, per the fiscal impact statement.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'You want a targeted nudge: make leaving investor-owned units vacant for most of the year expensive so more owners rent or sell, without raising sales or income taxes on everyone.',
        'You’re fine with new money landing in the general fund—libraries, public safety, infrastructure, debt—rather than legally earmarking every dollar to housing bonds.',
        'You like the extra corporate surcharge as a way to focus the pain on LLC/investor ownership more than a typical family’s second home (exemptions still matter).',
        'You believe the city should try this tool now—other places have experimented with vacancy taxes—while accepting that courts could still weigh in (see SF litigation in the reading list).',
      ],
      argumentsAgainst: [
        'You oppose new taxes on principle, especially when you won’t personally benefit in a visible way, or you worry this is the start of a slippery scope even if you don’t own a second home today.',
        'You want housing dollars legally earmarked: general-fund deposits don’t bind future councils to build affordable units, so “housing crisis” messaging may not match spending.',
        'You’re skeptical on legality or cost: industry and taxpayer groups cite a trial court striking San Francisco’s vacancy tax; you don’t want the city tied up in expensive litigation for uncertain revenue.',
        'Fairness worries: snowbirds, inherited homes, or house-rich/cash-poor heirs might get caught in gray areas despite exemptions—you don’t trust administration to be painless.',
        'Privacy / enforcement: vacancy counting may mean self-reporting, audits, or data matching—you’d rather not expand that footprint.',
      ],
      readingLinks: [
        {
          label: 'KPBS — Measure A explainer (question, rates, exemptions overview)',
          url: 'https://www.kpbs.org/news/politics/2026/04/20/2026-primary-election-measure-a-non-primary-homes-tax-empty-homes',
        },
        {
          label: 'City of San Diego — Independent Budget Analyst fiscal impact statement (PDF)',
          url: 'https://www.sandiego.gov/sites/default/files/2026-03/fiscal-impact-statement-measure-a-empty-homes-tax_0.pdf',
        },
        {
          label: 'City of San Diego — City Clerk elections hub (official filings & dates)',
          url: 'https://www.sandiego.gov/city-clerk/elections',
        },
        {
          label: 'KPBS — Opponents cite San Francisco court loss on similar vacancy tax',
          url: 'https://www.kpbs.org/news/politics/2026/04/07/as-san-diegans-consider-empty-homes-tax-opponents-point-to-a-san-francisco-court-loss',
        },
        {
          label: 'San Diego County Taxpayers Association — opposition position',
          url: 'https://www.sdcta.org/policy-reports-main/2026/3/3/taxpayers-opposes-city-of-san-diego-empty-homes-tax-ordinance',
        },
        {
          label: 'NBC 7 San Diego — supporters and opponents clash (balanced field reporting)',
          url: 'https://www.nbcsandiego.com/news/local/supporters-opponents-clash-over-measure-a-san-diego-vacant-home-tax-referendum/4023997/',
        },
        {
          label: 'California Apartment Association — industry opposition (legal & policy arguments)',
          url: 'https://caanet.org/san-diego-council-sends-empty-homes-tax-to-june-ballot-over-legal-objections/',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Pro-supply + redistributive tax on wealth'],
      ['EL', 'Yes', '◐', 'Modest bigger-government values; general-fund earmark concern'],
      ['DM', 'Yes', '◐', 'Modest revenue with reasonable exemptions'],
      ['OL', 'Yes', '◐', 'Pro-affordability; skepticism revenue reaches housing crisis'],
      ['SS', 'No', '○', "Don't add taxes default"],
      ['AR', 'No', '◐', 'Property-rights; enforcement complexity'],
      ['PR', 'No', '●', 'Standard anti-tax populist'],
      ['CC', 'No', '●', 'Same'],
      ['FF', 'No', '◐', 'Same'],
    ]),
    counterArguments: [
      'EL (Yes ◐): But consider No if lack of earmark concerns you.',
      'AR/FF (No ◐): But consider Yes if you accept behavioral lever (rentals) more than revenue.',
      'PL (Yes ●): But consider No if you think vacancy taxes are theater without bonded housing spend.',
    ],
  },
];
