import type { CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

/** Alternate San Diego County federal & legislative lines (not on the 92126 Mira Mesa ballot). */
export const RACES_SD_ALT: Race[] = [
  {
    id: 'us-rep-ca49',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-49',
    kind: 'candidates',
    stakesParagraphs: [
      'Your member of Congress votes on federal taxes, immigration, military spending, health programs, climate and infrastructure funding, and oversight of the executive branch.',
      'CA-49 covers coastal North County from Carlsbad through Oceanside after Prop 50. At stake is whether the district keeps a center-left incumbent or sends a Republican challenger in a seat that still leans Democratic on paper.',
    ],
    introParagraphs: [
      'Incumbent Mike Levin (D), five-term. Carlsbad (92009) sits in this district, not CA-50. Top challengers include Republicans with local name recognition in North County.',
    ],
    candidates: [
      {
        id: 'levin',
        name: 'Mike Levin',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former environmental attorney and Encinitas council member; focuses on climate, coastal protection, veterans, and clean energy. Strong labor and environmental endorsements.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Coastal housing and infrastructure votes',
            comparison: 'GOP challengers emphasize deregulation; Levin backs federal tools for affordability.',
          },
          {
            topic: 'Climate',
            position: '✓✓ Career environmental advocate; offshore wind and clean-energy votes',
            comparison: 'Sharpest contrast with Republican field on climate spending.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus vote',
            comparison: 'Incumbent stability vs long-shot R flip in D-leaning seat.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Levin is a five-term Democrat with climate, coastal, and labor branding in a still-blue North County seat. Gunderson is the standard Republican contrast—changing names mostly signals protest because flipping the district in November remains a long shot absent a major partisan wave.',
      },
      {
        id: 'levin-challenger-r',
        name: 'Matt Gunderson',
        party: 'R',
        role: 'Challenger',
        bio: ['Republican challenger in North County; business-oriented campaign per local filings.'],
        scorecard: [
          {
            topic: 'Taxes & regulation',
            position: '✓ Lean-government R framing',
            comparison: 'Levin is the climate-and-labor incumbent; Gunderson is the partisan contrast.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Levin', '●', 'Climate and labor incumbent'],
      ['EL', 'Levin', '●', 'Same'],
      ['DM', 'Levin', '●', 'Same'],
      ['OL', 'Levin', '◐', 'Or protest R vote'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Gunderson', '◐', 'R alternative'],
      ['PR', 'Gunderson', '◐', 'Same'],
      ['CC', 'Gunderson', '●', 'Same'],
      ['FF', 'Gunderson', '●', 'Same'],
    ]),
    counterArguments: ['AR (Gunderson ◐): Levin is the realistic vote if House control matters to you.'],
  },
  {
    id: 'senate-sd38',
    categoryId: 'state-leg',
    title: 'State Senate, District 38',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators shape the entire state budget, vote on housing, education, criminal justice, and climate law, and control which bills even reach the floor in Sacramento.',
      'SD-38 spans coastal North County and south Orange County edges—Carlsbad voters depend on this seat for coastal housing, transportation, and water policy.',
    ],
    introParagraphs: [
      'Incumbent Catherine Blakespear (D), former Encinitas mayor and legislator. Carlsbad (92009) is in SD-38, not SD-40.',
    ],
    candidates: [
      {
        id: 'blakespear',
        name: 'Catherine Blakespear',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former Encinitas mayor; emphasizes coastal resilience, housing, and reproductive rights. Strong Democratic and labor support in the district.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Coastal infill and housing-production framing',
            comparison: 'R challengers run anti-mandate suburban messaging.',
          },
          {
            topic: 'Climate',
            position: '✓✓ Coastal climate and sea-level-rise priority',
            comparison: 'Signature issue vs generic R fiscal skepticism.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Mainstream Democratic caucus',
            comparison: 'Only viable D in a coastal D-leaning seat.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Blakespear', '●', 'Coastal D incumbent'],
      ['EL', 'Blakespear', '●', 'Same'],
      ['DM', 'Blakespear', '●', 'Same'],
      ['OL', 'Blakespear', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Blakespear', '◐', 'If R filed, protest only'],
      ['PR', 'Blakespear', '◐', 'Same'],
      ['CC', 'Blakespear', '◐', 'Same'],
      ['FF', 'Blakespear', '◐', 'Same'],
    ]),
  },
  {
    id: 'assembly-ad77',
    categoryId: 'state-leg',
    title: 'State Assembly, District 77',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers vote on state housing law, education funding, public safety budgets, and taxes that touch every renter and homeowner.',
      'AD-77 covers coastal and inland North County including Carlsbad and Scripps Ranch (92131)—not AD-78 (Mira Mesa / central-coastal SD).',
    ],
    introParagraphs: ['Incumbent Tasha Boerner Horvath (D), former Encinitas mayor. Scripps Ranch and Carlsbad voters use this line, not AD-78.'],
    candidates: [
      {
        id: 'boerner-horvath',
        name: 'Tasha Boerner Horvath',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former Encinitas mayor; focuses on housing affordability, public schools, and coastal communities. CTA and Democratic Party endorsements.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Pro-housing-production Democratic record',
            comparison: 'Ward (AD-78) is a different seat—Boerner Horvath owns North County coastal housing votes.',
          },
          {
            topic: 'Education funding',
            position: '✓ Pro public-school funding',
            comparison: 'Mainstream D vs any R challenger on school funding.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Reliable Democratic vote',
            comparison: 'Only viable D for AD-77 addresses.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Boerner Horvath', '●', 'Housing and schools incumbent'],
      ['EL', 'Boerner Horvath', '●', 'Same'],
      ['DM', 'Boerner Horvath', '●', 'Same'],
      ['OL', 'Boerner Horvath', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Boerner Horvath', '◐', 'Same'],
      ['PR', 'Boerner Horvath', '◐', 'Same'],
      ['CC', 'Boerner Horvath', '◐', 'Same'],
      ['FF', 'Boerner Horvath', '◐', 'Same'],
    ]),
  },
  {
    id: 'assembly-ad75',
    categoryId: 'state-leg',
    title: 'State Assembly, District 75',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers vote on state housing law, school funding formulas, Medi-Cal reimbursement, criminal-justice sentencing baselines, and wildfire-liability regimes—stuff that decides whether Escondido families feel state help on utility rates, commuter highways, inland fire risk, or Palomar College pathways.',
      'Prop 50 (2025) redistricting left AD-75 as the inland northeastern San Diego County seat carving out Escondido, valley communities, and the county’s mountainous east—distinct from coastal AD-77 and from AD-78 (central San Diego coastal core). Wikipedia’s 2026 filed list is a Republican incumbent versus a Democratic veteran challenger.',
    ],
    introParagraphs: [
      'Two-candidate June 2026 primary: incumbent Carl DeMaio (R), former councilmember and radio host elected in 2024, versus Gerald Boursiquot (D), Air Force and Navy veteran. Escondido addresses on the companion ballot use AD-75—not AD-78 (Mira Mesa / Pacific Beach cluster).',
    ],
    candidates: [
      {
        id: 'carl-demaio',
        photoSlug: 'carl-demaio',
        name: 'Carl DeMaio',
        party: 'R',
        role: 'Incumbent Assemblymember',
        bio: [
          'Former San Diego city councilmember; pension-reform and small-government brand; radio host profile. Seeks a second Assembly term after winning in 2024 with a mid-50s share on Wikipedia’s posted results summary.',
        ],
        scorecard: [
          {
            topic: 'Taxes & fees',
            position: '✓✓ Anti-tax, limited-government anchor in the field',
            comparison: 'Boursiquot pitches working-family investment through state programs—opposite default on new revenue.',
          },
          {
            topic: 'Housing & land use',
            position: '~ Market-first framing; skeptical of Sacramento mandates',
            comparison: 'Democrat emphasizes veteran and middle-class stability over deregulation rhetoric.',
          },
          {
            topic: 'Public safety / veterans',
            position: '✓ Law-and-order friendly messaging with media reach',
            comparison: 'Boursiquot owns the military-service biography contrast.',
          },
          {
            topic: 'Climate & infrastructure',
            position: '~ Conservative caucus voting pattern expected',
            comparison: 'Less federal green-spend appetite than typical Democratic challengers.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'DeMaio is the loud fiscal conservative with a recent majority win—keep him if ideological clarity on limiting union power and taxation tops local pork; swap if you resent the partisan entertainment style despite policy alignment.',
      },
      {
        id: 'gerald-boursiquot',
        name: 'Gerald Boursiquot',
        party: 'D',
        role: 'Candidate',
        bio: [
          'Air Force and Navy veteran running as the Democratic challenger in a historically Republican-tilting inland seat.',
        ],
        scorecard: [
          {
            topic: 'Labor & veterans',
            position: '✓✓ Veteran story as moral authority on services and paycheck issues',
            comparison: 'DeMaio is the partisan incumbent with stronger name ID—Boursiquot needs persuasion-heavy voters.',
          },
          {
            topic: 'Housing affordability',
            position: '✓ Middle-class stabilization rhetoric',
            comparison: 'DeMaio favors lighter-touch mandates; contrasts on tenant and subsidy philosophy.',
          },
          {
            topic: 'Caucus pathway',
            position: '? Long-shot unless ticket-splitters dislike incumbent tone',
            comparison: 'Safe protest vote for Democrats who still show up in ZIPs that lean slightly blue on presidential margins.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Boursiquot', '●', 'Only D option; working-family narrative'],
      ['EL', 'DeMaio', '●', 'Incumbent stability for fiscal conservatives'],
      ['DM', 'DeMaio', '◐', 'Pragmatic if you accept GOP vote for lower-tax posture'],
      ['OL', 'Boursiquot', '◐', 'Outsider veteran vs radio-host politics'],
      ['SS', 'DeMaio', '○', 'Low-regulation default'],
      ['AR', 'DeMaio', '●', 'Movement conservative anchor'],
      ['PR', 'DeMaio', '●', 'Populist anti-tax brand'],
      ['CC', 'DeMaio', '●', 'Business-friendly rhetoric'],
      ['FF', 'DeMaio', '◐', 'Social conservatives often bundle with fiscal R slate'],
    ]),
    counterArguments: [
      'PL (Boursiquot ●): But DeMaio if split government and tax posture matter more.',
      'AR (DeMaio ●): But Boursiquot if military-service empathy outweighs party label.',
    ],
  },
  {
    id: 'us-rep-ca51',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-51',
    kind: 'candidates',
    stakesParagraphs: [
      'Your member of Congress votes on federal taxes, immigration, military spending, health programs, climate and infrastructure funding, and oversight of the executive branch.',
      'CA-51 covers much of southern and southeastern San Diego, including Paradise Hills (92139) after Prop 50 remaps. Chula Vista addresses in CA-52 (Juan Vargas) are a different congressional line—use your sample ballot to confirm.',
    ],
    introParagraphs: [
      'Incumbent Sara Jacobs (D). Paradise Hills (92139) is in CA-51; Chula Vista (91911) votes in CA-52 (Juan Vargas)—verify your sample ballot if you live near a district border.',
    ],
    candidates: [
      {
        id: 'jacobs',
        name: 'Sara Jacobs',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Youngest California member when first elected; foreign-policy and progressive-D coalition branding. Strong labor and reproductive-rights endorsements.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Affordability and renter-protection framing',
            comparison: 'Rs emphasize deregulation; Jacobs is progressive-D housing lane.',
          },
          {
            topic: 'Health care',
            position: '✓ Pro-choice; pro-ACA expansion',
            comparison: 'Signature contrast with any Republican challenger.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus vote',
            comparison: 'Incumbent in safe D South Bay seat.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Jacobs', '●', 'Progressive D incumbent'],
      ['EL', 'Jacobs', '●', 'Same'],
      ['DM', 'Jacobs', '●', 'Same'],
      ['OL', 'Jacobs', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Jacobs', '◐', 'Same'],
      ['PR', 'Jacobs', '◐', 'Same'],
      ['CC', 'Jacobs', '◐', 'Same'],
      ['FF', 'Jacobs', '◐', 'Same'],
    ]),
  },
  {
    id: 'senate-sd39',
    categoryId: 'state-leg',
    title: 'State Senate, District 39',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators shape the entire state budget, vote on housing, education, criminal justice, and climate law, and control which bills even reach the floor in Sacramento.',
      'SD-39 covers coastal and central-south San Diego including Paradise Hills—distinct from SD-40 (Mira Mesa / inland North City) and from SD-18 (South Bay / Chula Vista stack).',
    ],
    introParagraphs: ['Incumbent Akilah Weber (D), physician and former Assemblymember. Paradise Hills (92139) is in SD-39; Chula Vista (91911) uses SD-18 instead.'],
    candidates: [
      {
        id: 'akilah-weber',
        name: 'Akilah Weber',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Physician; former AD-79 Assemblymember. Emphasizes health care access, reproductive rights, and South Bay communities.',
        ],
        scorecard: [
          {
            topic: 'Health care',
            position: '✓✓ Physician-legislator; reproductive-rights priority',
            comparison: 'Core contrast with any R challenger on health policy.',
          },
          {
            topic: 'Housing & transit',
            position: '✓ South Bay affordability framing',
            comparison: 'Different geography than SD-40 Elliott race.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Democratic caucus',
            comparison: 'Only viable D in safe South Bay seat.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'A. Weber', '●', 'Health-care D incumbent'],
      ['EL', 'A. Weber', '●', 'Same'],
      ['DM', 'A. Weber', '●', 'Same'],
      ['OL', 'A. Weber', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'A. Weber', '◐', 'Same'],
      ['PR', 'A. Weber', '◐', 'Same'],
      ['CC', 'A. Weber', '◐', 'Same'],
      ['FF', 'A. Weber', '◐', 'Same'],
    ]),
  },
  {
    id: 'assembly-ad80',
    categoryId: 'state-leg',
    title: 'State Assembly, District 80',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers vote on state housing law, education funding, public safety budgets, and taxes that touch every renter and homeowner.',
      'AD-80 covers southern San Diego and South Bay communities including Chula Vista, National City, and Paradise Hills—not AD-78 (central/coastal SD).',
    ],
    introParagraphs: [
      'Incumbent David Alvarez (D), former San Diego City Council president. South Bay field includes Democrat Zenith Khan and Republican Alejandro Galicia—Chula Vista, National City, and Paradise Hills addresses vote here, not AD-78.',
    ],
    candidates: [
      {
        id: 'alvarez',
        name: 'David Alvarez',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former council president from Barrio Logan; emphasizes affordable housing, South Bay higher education, and Tijuana River pollution. Seeking another Assembly term.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Affordable-housing legislation focus',
            comparison: 'Galicia runs business-friendly R frame; Khan is the intra-party alternative.',
          },
          {
            topic: 'Environment',
            position: '✓✓ Tijuana River and border-environment priority',
            comparison: 'Signature South Bay issue vs generic R challenger.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Incumbent Democratic vote',
            comparison: 'Khan competes for change-without-party-switch voters.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Alvarez is the South Bay incumbent with a council-president résumé focused on affordable housing, border pollution, and Democratic caucus votes. Khan is the intra-party change option; Galicia is the Republican lane—replace Alvarez only if their alternatives better match your growth, fee, or party-balance priorities.',
      },
      {
        id: 'khan',
        name: 'Zenith Khan',
        party: 'D',
        role: 'Business owner / mother',
        bio: ['Democratic challenger; business-owner framing in South Bay.'],
        scorecard: [
          {
            topic: 'Caucus / ideology',
            position: '◐ Democratic protest vs Alvarez',
            comparison: 'Alvarez owns incumbency and committee leverage.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'galicia',
        name: 'Alejandro Galicia',
        party: 'R',
        role: 'Business owner / commissioner',
        bio: ['Republican challenger; commissioner background.'],
        scorecard: [
          {
            topic: 'Taxes & fees',
            position: '✓ Business-oriented R framing',
            comparison: 'Alvarez is the realistic D vote in South Bay seat.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Alvarez', '●', 'South Bay housing and environment incumbent'],
      ['EL', 'Alvarez', '●', 'Same'],
      ['DM', 'Alvarez', '●', 'Same'],
      ['OL', 'Khan', '◐', 'Or Alvarez'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Galicia', '◐', 'R alternative'],
      ['PR', 'Galicia', '◐', 'Same'],
      ['CC', 'Galicia', '●', 'Same'],
      ['FF', 'Galicia', '●', 'Same'],
    ]),
    counterArguments: ['OL (Khan ◐): Alvarez has the institutional South Bay record on housing and border pollution.'],
  },
  {
    id: 'us-rep-ca52',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-52',
    kind: 'candidates',
    stakesParagraphs: [
      'Your member of Congress votes on federal taxes, immigration, military spending, health programs, climate and infrastructure funding, and oversight of the executive branch—plus border-adjacent casework on sewage, ports, and military families that dominate South Bay headlines.',
      'CA-52 runs along southeastern San Diego County—Chula Vista, National City, and nearby communities—separate from the CA-51 line to the north after Prop 50. At stake is continued Democratic representation versus any credible Republican challenge in a D-leaning seat.',
    ],
    introParagraphs: [
      'Incumbent Juan Vargas (D), former Assemblymember, Senator, and San Diego councilmember. As of early 2026 filings summarized by Ballotpedia, Vargas is the only listed primary candidate—confirm your official sample ballot for any late additions.',
    ],
    candidates: [
      {
        id: 'vargas',
        photoSlug: 'vargas',
        name: 'Juan Vargas',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Harvard Law graduate; long South Bay legislative record. Financial Services Committee focus areas include consumer protection and community banks; campaigns highlight border sewage, veterans, and working-class economic security.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Affordable-housing and infrastructure earmark experience',
            comparison: 'No same-ballot federal opponent filed in early lists—measure Vargas against your priorities on supply vs. tenant protections.',
          },
          {
            topic: 'Immigration / border-adjacent',
            position: '✓✓ Binational sewage and cross-border environmental advocacy',
            comparison: 'Signature South Bay issue set; compare to generic national messaging in other districts.',
          },
          {
            topic: 'Health care',
            position: '✓ Pro-ACA votes typical of California House Democrats',
            comparison: 'Continuity vote if federal health programs top your card.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus vote',
            comparison: 'Safe-seat seniority pitch vs hypothetical November opponent.',
          },
        ],
        money: 'About $334K raised through late 2025 in summarized FEC tables on Ballotpedia.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Vargas', '●', 'Labor-aligned South Bay Democrat'],
      ['EL', 'Vargas', '●', 'Same'],
      ['DM', 'Vargas', '●', 'Same'],
      ['OL', 'Vargas', '◐', 'Same'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Vargas', '◐', 'Same'],
      ['PR', 'Vargas', '◐', 'Same'],
      ['CC', 'Vargas', '◐', 'Same'],
      ['FF', 'Vargas', '◐', 'Same'],
    ]),
    counterArguments: ['EL (Vargas ●): With only one listed candidate, your vote is mostly a mandate signal—double-check the registrar list before Election Day.'],
  },
  {
    id: 'senate-sd18',
    categoryId: 'state-leg',
    title: 'State Senate, District 18',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators set education funding formulas, housing and climate law floors, criminal-justice policy, and the budget that shapes county social services and cross-border environmental programs.',
      'SD-18 is the South Bay–anchored seat Steve Padilla flipped in 2022—Chula Vista, Imperial County border communities, and related unincorporated pockets depend on this office for Tijuana River pollution pressure and affordable-housing fights.',
    ],
    introParagraphs: [
      'Incumbent Steve Padilla (D), former Chula Vista councilmember and mayor, faces Republican Art Hodges, a Chula Vista pastor and faith-community organizer running on affordability and border issues.',
    ],
    candidates: [
      {
        id: 'padilla-steve',
        photoSlug: 'padilla-steve',
        name: 'Steve Padilla',
        party: 'D',
        role: 'Incumbent State Senator',
        bio: [
          'Former naval officer and police detective; first openly LGBTQ+ person of color elected to the California Senate. Emphasizes cross-border sewage fixes, housing, and civil-rights protections.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ South Bay affordability and infrastructure framing',
            comparison: 'Hodges stresses deregulation and buyer incentives; Padilla carries Democratic housing coalition votes.',
          },
          {
            topic: 'Climate / environment',
            position: '✓✓ Tijuana River and coastal pollution as marquee issues',
            comparison: 'Hodges also talks sewage but pairs it with conservative governance themes.',
          },
          {
            topic: 'Public safety',
            position: '~ Law-enforcement background with progressive caucus votes',
            comparison: 'Hodges runs tougher “faith and freedom” safety rhetoric.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Democratic caucus vote if returned',
            comparison: 'Clearest Sacramento continuity pick for D voters.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Padilla is the sitting senator emphasizing cross-border sewage fixes, housing, and civil-rights protections from a law-enforcement and veteran background. Hodges runs faith-led conservative messaging on affordability—worth turnover only if that tone beats Padilla’s Senate coalition work for your South Bay priorities.',
      },
      {
        id: 'hodges',
        name: 'Art Hodges',
        party: 'R',
        role: 'Pastor / bishop',
        bio: [
          'Pentecostal bishop from Chula Vista; campaign stresses affordability, border drugs and pollution, parental rights, and “Faith Family Freedom Future.” Union-Tribune Q&A highlights first-time buyer incentives and anti-fraud messaging.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Deregulation and first-time buyer incentive pitch',
            comparison: 'Padilla owns incumbent housing votes; Hodges is the property-rights contrast.',
          },
          {
            topic: 'Climate / environment',
            position: '✓ Tijuana sewage as shared local priority',
            comparison: 'Both talk pollution; Hodges pairs with smaller-government delivery skepticism.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Republican caucus contrast vote',
            comparison: 'Only viable R in a D-tilting South Bay seat.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Padilla', '●', 'Labor- and environment-aligned D incumbent'],
      ['EL', 'Padilla', '●', 'Same'],
      ['DM', 'Padilla', '●', 'Same'],
      ['OL', 'Padilla', '◐', 'Or Hodges protest'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Hodges', '●', 'Faith-forward conservative South Bay messenger'],
      ['PR', 'Hodges', '●', 'Anti-tax / anti-regulation branding'],
      ['CC', 'Hodges', '◐', 'Small-business rhetoric'],
      ['FF', 'Hodges', '●', 'Pastor-led “Faith Family Freedom” lane'],
    ]),
    counterArguments: [
      'AR (Hodges ●): Padilla is the only vote aligned with a Democratic Senate supermajority on housing and health care.',
      'FF (Hodges ●): Padilla still carries sewage and veterans credibility without Hodges’ culture-war emphasis.',
    ],
  },
];
