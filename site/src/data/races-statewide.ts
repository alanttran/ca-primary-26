import type { Candidate, CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

const govCross = ct([
  ['PL', 'Porter', '●', 'Strongest progressive pop-credibility, anti-Big-Oil/Pharma record, Warren endorsement'],
  ['EL', 'Becerra', '●', 'Establishment-Dem ideal: 122 Trump lawsuits, HHS experience, compromise-oriented'],
  ['DM', 'Becerra', '◐', 'Long Latino-elected-official record; some DM voters may prefer Villaraigosa for labor ties'],
  ['OL', 'Steyer', '◐', 'Outsider-Left tension: he IS a billionaire, but his climate record is genuinely radical'],
  ['SS', 'Mahan', '○', 'San Jose mayor pitches "back to basics" pragmatism; low-info but uncontroversial'],
  ['AR', 'Hilton', '◐', 'Less MAGA-tied than Bianco, but Trump endorsement complicates this'],
  ['PR', 'Bianco', '◐', 'Working-class anti-elite framing; but Oath Keepers history is a flag even for many PR voters'],
  ['CC', 'Hilton', '◐', 'More business-friendly than Bianco; cabinet-style governance pitch'],
  ['FF', 'Bianco', '●', 'Best fit on faith/sheriff/law-and-order branding'],
]);

const governorCandidates: Candidate[] = [
  {
    id: 'becerra',
    photoSlug: 'becerra',
    name: 'Xavier Becerra',
    party: 'D',
    role: 'Former U.S. HHS Secretary, former CA Attorney General',
    bio: [
      'Legacy Democratic establishment pick: 24 years in the U.S. House (1993–2017), CA Attorney General 2017–2021 where he filed 122 lawsuits against the first Trump administration, then HHS Secretary under Biden.',
      'Campaign emphasizes affordability, Medi-Cal expansion, and moving toward universal single-payer. Long conventional Democratic record; critics call him cautious and uninspiring.',
    ],
    scorecard: [
      {
        topic: 'Housing',
        position: '✓ Supply expansion, anti-price-gouging',
        comparison:
          'Newsom’s second term leaned hard into streamlining housing law; Becerra sounds more like a federal regulator promising affordability than a housing-process wonk.',
      },
      {
        topic: 'Climate',
        position: '✓ Standard Dem; pro clean-energy, pro-EV',
        comparison:
          'Biden-administration continuity more than a climate-only messenger—contrast Steyer’s single-issue dominance and Porter’s anti–Big Oil brand.',
      },
      {
        topic: 'Public Safety',
        position: '~ Establishment Dem; pro-prosecution background',
        comparison:
          'Less “tough-on-crime labor mayor” than Villaraigosa/PORAC lane; closer to a cautious statewide-Dem default than a sheriff-style primary pitch.',
      },
      {
        topic: 'Abortion',
        position: '✓ Strong supporter (HHS protected access)',
        comparison:
          'Executive-branch credentials on access mirror Newsom-era CA positioning; not meaningfully to the right of other viable Democrats in the field.',
      },
      {
        topic: 'Immigration',
        position: '✓ Strongly pro-immigrant; sued Trump over family separation',
        comparison:
          'Same defensive-California posture Newsom championed, but Becerra’s résumé is courtroom AG/HHS rather than governor press conferences.',
      },
      {
        topic: 'Education',
        position: '✓ Pro public-school funding',
        comparison:
          'Standard Democratic funding pitch—less tied to Villaraigosa’s LAUSD-takeover history or charter fights than some rivals’ résumés imply.',
      },
      {
        topic: 'Gaza/Israel',
        position: '? Has not made it a campaign issue; conventional Dem position',
        comparison:
          'Keeps the race on executive experience; less daylight for Porter-style ceasefire pressure than candidates who have leaned into the issue.',
      },
      {
        topic: 'Trump pushback',
        position: '✓ Career credentials suing Trump 122 times',
        comparison:
          'Closest continuity with Newsom-era “sue Washington” muscle—more institutional litigation DNA than Porter’s congressional spotlight style.',
      },
    ],
    money: 'Approximately $5M+ raised, broad union and Latino-elected-official base.',
    endorsements:
      'SEIU California (dual with Steyer), UFCW Western States Council, California Faculty Association (dual with Thurmond), CA State Council of Laborers, ILWU, multiple Latino caucuses.',
    notes: ['None significant.'],
  },
  {
    id: 'porter',
    photoSlug: 'porter',
    name: 'Katie Porter',
    party: 'D',
    role: 'Former U.S. Representative (CA-45)',
    bio: [
      'Most prominent national-brand Democrat in the race. Three-term U.S. House member known for whiteboard takedowns of bank executives, Big Pharma, and oil companies. Consumer protection law professor (UC Irvine) and former bankruptcy attorney.',
      'Lost a 2024 U.S. Senate primary, declined the Schiff-vacated seat, and pivoted to governor. Brand: fight Big Money, fight Big Oil.',
    ],
    scorecard: [
      {
        topic: 'Housing',
        position: '✓ Pro-supply, anti-corporate-landlord',
        comparison:
          'Sharper anti–Big Real Estate framing than Newsom’s late-term YIMBY coalition; closer to national progressive messaging than Sacramento dealmaking.',
      },
      {
        topic: 'Climate',
        position: '✓ Strong; CalEnviroVoters endorsed',
        comparison:
          'Brand is less weighed down by Newsom-era oil-permit controversies; more “take on fossil money” energy than a sitting executive balancing agencies.',
      },
      {
        topic: 'Public Safety',
        position: '~ Standard Dem; supports reform plus accountability',
        comparison:
          'More reform-and-accountability framing than Villaraigosa’s PORAC-friendly pitch—still nowhere near GOP sheriff messaging in the same race.',
      },
      {
        topic: 'Abortion',
        position: '✓ Strong supporter; EMILYs List endorsed',
        comparison:
          'Indistinguishable in direction from Becerra/Steyer on access; Porter’s difference is volume of national advocacy, not a novel policy carve-out.',
      },
      {
        topic: 'Immigration',
        position: '✓ Pro-immigrant, pro-DACA',
        comparison:
          'Values align with Newsom-era CA; contrast is emphasis—oversight hearings and populist rhetoric vs Becerra’s litigator résumé.',
      },
      {
        topic: 'Education',
        position: '✓ Pro public school; former teacher (her mother was)',
        comparison:
          'Personal story contrasts with Villaraigosa’s central-office reform fights—both land pro-public-school, but from different political biographies.',
      },
      {
        topic: 'Gaza/Israel',
        position: '~ Has called for ceasefire; criticized for not being more aggressive',
        comparison:
          'Slightly more visible tension with conventional Dem Israel positioning than Newsom’s mostly low-drama executive line.',
      },
      {
        topic: 'Trump pushback',
        position: '✓ Outspoken; use governor powers to push back framing',
        comparison:
          'Same anti-Trump values as Newsom, but Porter sells confrontation through retail politics and oversight hearings—not Becerra’s AG-bench litigation habit.',
      },
    ],
    money: 'Strong national small-donor base; reportedly $4–6M+ raised.',
    endorsements:
      'California Environmental Voters (dual with Steyer), Sen. Elizabeth Warren, EMILYs List, NUHW, Teamsters, UAW, CA Reps. Dave Min and Derek Tran.',
    notes: ['None major. Some staff-treatment complaints from her Senate campaign.'],
  },
  {
    id: 'villaraigosa',
    photoSlug: 'villaraigosa',
    name: 'Antonio Villaraigosa',
    party: 'D',
    role: 'Former Mayor of Los Angeles, former CA Assembly Speaker',
    bio: [
      '"Labor" candidate. LA Mayor 2005–2013, former Assembly Speaker. Ran for governor in 2018 and finished third. Strongest building-trades and law-enforcement union support of any Dem; moderate-pragmatist on public safety.',
    ],
    scorecard: [
      {
        topic: 'Housing',
        position: '✓ Pro-supply, "build, baby, build"; some YIMBY tilt',
        comparison:
          'Closest to Newsom’s “build more” drumbeat among labor-heavy candidates; more developer-facing history than Porter’s anti–corporate-landlord brand.',
      },
      {
        topic: 'Climate',
        position: '~ Standard Dem; not a climate hawk',
        comparison:
          'Clearly to the right of Steyer/Porter on climate salience—more “jobs and power bills” mayor than decarbonization evangelist.',
      },
      {
        topic: 'Public Safety',
        position: '✓ Tough-on-crime tilt; PORAC endorsed',
        comparison:
          'Starkest public-safety contrast in the Democratic pack vs Porter/Becerra—closest to what swing voters remember from his mayoral era.',
      },
      {
        topic: 'Abortion',
        position: '✓ Pro-choice',
        comparison:
          'Same party baseline as the rest of the viable Democrats; not the axis he uses to differentiate from Becerra or Porter.',
      },
      {
        topic: 'Immigration',
        position: '✓ Pro-immigrant rights',
        comparison:
          'Pro-immigrant positioning like other Dems; less defined by federal litigation credentials than Becerra’s AG record.',
      },
      {
        topic: 'Education',
        position: '✓ Past LAUSD takeover; mixed reform record',
        comparison:
          'Unique baggage vs Porter’s classroom narrative—reform fights are the main way his education story diverges from other Dems.',
      },
      {
        topic: 'Gaza/Israel',
        position: '? Has not been vocal',
        comparison:
          'Lower profile on foreign-policy flashpoints than Porter; similar “don’t own the issue” posture to Becerra but from a big-city mayor lens.',
      },
      {
        topic: 'Trump pushback',
        position: '~ Standard Dem rhetoric; less prominent',
        comparison:
          'Weaker “national resistance” brand than Becerra’s 122 suits or Porter’s cable-ready clashes—more Sacramento/LA coalition management.',
      },
    ],
    money: '$3–5M raised, heavy labor and building-trades support.',
    endorsements:
      'California Federation of Labor Unions (2.3M members), State Building & Construction Trades Council (450K), PORAC, Mayor Karen Bass, former Sen. Barbara Boxer.',
    notes: [
      'Past extramarital-affair scandal (2007) is well-documented but old; criticized for cozy developer relationships during LA mayoralty.',
    ],
  },
  {
    id: 'steyer',
    photoSlug: 'steyer',
    name: 'Tom Steyer',
    party: 'D',
    role: 'Climate activist, hedge-fund founder',
    bio: [
      'Self-funder. Founded Farallon Capital, then NextGen America (youth voter mobilization). 2020 presidential bid (dropped out before primaries). Has spent hundreds of millions of his own money on climate and Democratic causes—both asset and liability.',
    ],
    scorecard: [
      {
        topic: 'Housing',
        position: '✓ Pro-supply, pro-affordability',
        comparison:
          'Credible affordability talk, but voters weighing “billionaire who financed housing” against Porter’s anti-corporate frame split on the same bullet.',
      },
      {
        topic: 'Climate',
        position: '✓✓ Strongest credentials in the field; defeated Prop 23, co-chaired Prop 39',
        comparison:
          'Only candidate whose core story is climate capital—overshadows Becerra/Porter on single-issue depth at the cost of Farallon-era skepticism from the left.',
      },
      {
        topic: 'Public Safety',
        position: '~ Standard Dem',
        comparison:
          'Not competing with Villaraigosa’s law-enforcement union lane or Bianco/Hilton on the right—generic Dem median on safety rhetoric.',
      },
      {
        topic: 'Abortion',
        position: '✓ Pro-choice',
        comparison:
          'Matches the field; Steyer’s differentiation is self-funding + climate, not reproductive policy.',
      },
      {
        topic: 'Immigration',
        position: '✓ Pro-immigrant',
        comparison:
          'Standard Democratic values row; less anchored in litigation biography than Becerra’s family-separation suits narrative.',
      },
      {
        topic: 'Education',
        position: '✓ Pro public school',
        comparison:
          'Broad-brush support—less personal contrast with Porter’s teacher-family story or Villaraigosa’s superintendent battles.',
      },
      {
        topic: 'Gaza/Israel',
        position: '? Has not made it a campaign issue',
        comparison:
          'Like Becerra, keeps international conflicts off the marquee; OL voters choosing Steyer are usually buying climate, not foreign policy.',
      },
      {
        topic: 'Trump pushback',
        position: '✓ Founded NextGen specifically to fight Trumpism',
        comparison:
          'Grassroots-mobilization story complements Becerra’s courtroom file—different toolkit than Porter’s oversight-hearing celebrity.',
      },
    ],
    money: 'Substantial self-funding — dominant financial pattern. SEIU dual-endorsed Steyer + Becerra noting hedge-fund history as a question mark for some progressives.',
    endorsements:
      'Sierra Club, NRDC Action Fund, Center for Biological Diversity Action Fund, California Environmental Voters (dual with Porter), SEIU California (dual with Becerra), Climate Action California.',
    notes: [
      'Self-funding billionaire; some progressives view his Farallon era as compromising (ideological flag for left voters, not conspiratorial).',
    ],
  },
  {
    id: 'hilton',
    photoSlug: 'hilton',
    name: 'Steve Hilton',
    party: 'R',
    role: 'Former Fox News host, former UK Cameron adviser',
    bio: [
      'Dual UK–US citizen, former senior adviser to UK PM David Cameron, then Fox News host (*The Next Revolution*, 2017–2023). Trump endorsed April 6, 2026. Platform "Califordable" promises $3 gas, half-price electricity, $100K tax-free income—analysts call several proposals not implementable by a governor. No prior elected experience.',
    ],
    scorecard: [
      {
        topic: 'Housing',
        position: '~ Anti-regulation framing; no specific YIMBY commitments',
        comparison:
          'Opposite of Newsom-era housing-supply politics; more cable-populist deregulation talk than Bianco’s sheriff-focused stump.',
      },
      {
        topic: 'Climate',
        position: '✗ Climate-skeptic Fox-News positioning',
        comparison:
          'Would represent a wholesale break from California’s current climate posture—far from any viable Democrat and sharper than “moderate R” technocrats.',
      },
      {
        topic: 'Public Safety',
        position: '~ Standard tough-on-crime',
        comparison:
          'Tough-on-crime tone without Bianco’s badge biography—more TV-host packaging than sheriff operational credibility.',
      },
      {
        topic: 'Abortion',
        position: '? Has avoided California specifics',
        comparison:
          'Contrast Bianco’s hard anti-abortion row—Hilton is leaving CA-specific reproductive policy vague while still courting Trump voters.',
      },
      {
        topic: 'Immigration',
        position: '✗ Trump-aligned, anti-sanctuary',
        comparison:
          'Same directional wedge as Bianco against Newsom-era sanctuary norms; Hilton adds Fox/Trump megaphone rather than law-enforcement résumé.',
      },
      {
        topic: 'Education',
        position: '~ Pro-charter, anti-CA-curriculum',
        comparison:
          'National-conservative education culture-war notes; not as institutionally steeped as a longtime Sacramento player.',
      },
      {
        topic: 'Gaza/Israel',
        position: '✓ Strongly pro-Israel',
        comparison:
          'Outspokenly different from Porter’s ceasefire-adjacent positioning; aligns with GOP-primary donor expectations more than any Democrat in the race.',
      },
      {
        topic: 'Trump pushback',
        position: '✗ Trump-endorsed; would align with federal admin',
        comparison:
          'Inverse of Becerra/Porter—continuity with a second Trump term, not resistance; Bianco shares alignment but lacks the endorsement.',
      },
    ],
    money: 'Self-funding plus Trump-aligned PAC support.',
    endorsements: 'Donald Trump. Failed to win formal CA Republican Party endorsement (as did Bianco).',
    redFlags: [
      {
        text: 'Polling near the top of a crowded primary without prior U.S. elected office; Donald Trump’s April 2026 endorsement and a long Fox News prime-time hosting career are central to his coalition. Independent analysts widely question whether marquee tax and utility price pledges are workable from Sacramento alone.',
        sources: [
          { label: 'NBC News', url: 'https://www.nbcnews.com/politics/2026-election/trump-endorses-steve-hilton-california-governors-race-rcna266852' },
          { label: 'CBS News', url: 'https://www.cbsnews.com/sacramento/news/president-trump-endorses-steve-hilton-in-california-governor-race-he-is-a-truly-fine-man/' },
        ],
      },
    ],
    redFlagCallout: true,
  },
  {
    id: 'bianco',
    photoSlug: 'bianco',
    name: 'Chad Bianco',
    party: 'R',
    role: 'Riverside County Sheriff',
    bio: [
      'Sheriff since 2019. Paid Oath Keepers member in 2014 (confirmed via 2021 data hack). March 2025: office seized 600,000+ ballots under a court warrant—first time a sheriff has done this in CA history; AG, SoS, and voting-rights groups sued. Trump-aligned but Trump endorsed Hilton, not Bianco.',
    ],
    scorecard: [
      {
        topic: 'Housing',
        position: '~ Cut regulation framing; no specific plan',
        comparison:
          'Sheriff shorthand on “cut red tape,” not a housing plan race for him—contrasts with Hilton’s polished Califordable pitch and all Dem supply talk.',
      },
      {
        topic: 'Climate',
        position: '✗ Skeptic',
        comparison:
          'Roughly aligned with Hilton on skepticism; Bianco’s brand is badge-and-enforcement, not TV-host climate denialism.',
      },
      {
        topic: 'Public Safety',
        position: '✓✓ Core issue; pro-law-enforcement, pro-sentencing',
        comparison:
          'Deepest law-enforcement authenticity in the GOP field vs Hilton’s outsider-celebrity version of the same voter.',
      },
      {
        topic: 'Abortion',
        position: '✗ Anti-abortion',
        comparison:
          'Harder line than Hilton’s duck-and-weave on California specifics—important if reproductive rights drive your R-primary calculus.',
      },
      {
        topic: 'Immigration',
        position: '✗ Anti-sanctuary, pro-deportation',
        comparison:
          'Same wedge as Hilton against Newsom-era policy; Bianco sells it with sheriff operations stories rather than Fox monologues.',
      },
      {
        topic: 'Education',
        position: '~ Pro-parental-rights, anti-CA-curriculum',
        comparison:
          'Standard conservative education positioning; less differentiated from Hilton than public-safety and scandal baggage are.',
      },
      {
        topic: 'Gaza/Israel',
        position: '✓ Pro-Israel',
        comparison:
          'Shared GOP-primary baseline with Hilton; not the axis where the two men diverge most sharply.',
      },
      {
        topic: 'Trump pushback',
        position: '✗ Would align with Trump admin',
        comparison:
          'Trump picked Hilton, not Bianco—both would align with DC Republicans; the split is endorsement star power vs sheriff street cred.',
      },
    ],
    money: 'Self-funded plus law-enforcement PAC support.',
    endorsements: 'Numerous county sheriffs and law-enforcement associations.',
    redFlags: [
      {
        text: 'Acknowledged paying dues to the Oath Keepers in 2014; his name appeared in leaked membership data as scrutiny of the group intensified after Jan. 6, 2021.',
        sources: [
          { label: 'Washington Post', url: 'https://www.washingtonpost.com/nation/2021/10/07/riverside-county-sheriff-chad-bianco/' },
          { label: 'NPR', url: 'https://www.npr.org/2021/10/06/1043651361/oath-keepers-california-sheriff-chad-bianco-january-6-us-capitol' },
        ],
      },
      {
        text: 'As sheriff, his office executed search warrants that seized a very large volume of voted ballots and election material held by the county registrar, prompting an emergency court fight and warnings from the Attorney General and Secretary of State that the seizures undermine election-administration norms.',
        sources: [
          { label: 'Los Angeles Times', url: 'https://www.latimes.com/california/story/2026-03-21/riverside-county-sheriff-chad-bianco-seizes-more-than-half-million-ballots' },
          { label: 'CalMatters', url: 'https://calmatters.org/politics/2026/03/bonta-chad-bianco-ballots/' },
        ],
      },
    ],
    redFlagCallout: true,
  },
];

export const RACES_STATEWIDE: Race[] = [
  {
    id: 'governor',
    categoryId: 'statewide-partisan',
    title: 'Governor',
    kind: 'candidates',
    stakesParagraphs: [
      'The governor proposes the state budget, signs or vetoes every bill, appoints thousands of officials (including judges and key agency heads), commands the California National Guard, and sets the tone for how housing, climate, health care, and education laws are implemented.',
      'The winner decides whether progressive legislation moves fast or faces vetoes, how aggressively the state fights or cooperates with Washington, and whose priorities—labor, business, cities, or rural regions—carry the most weight in the country’s largest state economy.',
    ],
    introParagraphs: [
      'Newsom is termed out. Polling at guide press showed Republicans Steve Hilton (~16%) and Chad Bianco (~14%) leading a fragmented Democratic field. CDP warned of (but did not expect) a possible top-two GOP lockout. CA Republican Party failed to officially endorse at April 2026 convention.',
    ],
    candidates: governorCandidates,
    crossTypology: govCross,
    counterArguments: [
      'EL (Becerra ●): But consider Porter if you prioritize structural reform over experience.',
      'DM (Becerra ◐): But consider Villaraigosa if labor / urban-Latino base is your priority.',
      'OL (Steyer ◐): But consider Porter — same anti-corporate energy without a hedge-fund past.',
      'AR (Hilton ◐): But consider Becerra if "would not embarrass California" matters more than party.',
      'PR (Bianco ◐): But consider Hilton if you find Oath Keepers / ballot-seizure disqualifying.',
      'PL (Porter ●): But consider Steyer if climate is the dominant single issue over other progressive checks.',
      'CC (Hilton ◐): But consider Bianco if sheriff credentials outweigh business-friendly polish for your lane.',
    ],
  },
  {
    id: 'lt-governor',
    categoryId: 'statewide-partisan',
    title: 'Lieutenant Governor',
    kind: 'candidates',
    stakesParagraphs: [
      'The lieutenant governor becomes governor if the office is vacated, chairs the State Senate in tie votes, and holds seats on the University of California Board of Regents and California State University Board of Trustees—direct leverage over tuition, campus policy, and higher-ed spending.',
      'The office is often a launch pad for statewide runs; who wins signals which coalition (labor, moderates, reformers, or the opposition party) has momentum in the next generation of California leadership.',
    ],
    introParagraphs: [
      'Largely ceremonial office (succession plus UC/CSU board seats), but a stepping-stone. Open seat (Kounalakis termed out).',
    ],
    candidates: [
      {
    id: 'ma',
    photoSlug: 'ma',
    name: 'Fiona Ma',
        party: 'D',
        role: 'California State Treasurer (2019–present)',
        bio: [
          'CPA. Three-term Treasurer, longtime Bay Area Dem. Largest financial advantage (~$4.6M cash on hand) and broadest endorsement coalition.',
        ],
        endorsements:
          'SoS Weber, Controller Cohen, Lt. Gov. Kounalakis, ~75% of the state legislature, 50+ labor unions including CA Labor Federation, Building Trades, CPF, ILWU, Teamsters; Equality California; CA Farm Bureau.',
        redFlags: [
          {
            text: 'A former staffer sued alleging sexual harassment on shared work travel; the dispute drew sustained coverage through settlement. Separate reporting has raised questions about tax reporting and gifts.',
            sources: [
              { label: 'San Francisco Chronicle', url: 'https://www.sfchronicle.com/politics/article/fiona-ma-lieutenant-governor-california-22250768.php' },
              { label: 'Sacramento Bee', url: 'https://www.sacbee.com/news/politics-government/capitol-alert/article252888703.html' },
            ],
          },
        ],
      },
      {
    id: 'fryday',
    photoSlug: 'fryday',
    name: 'Josh Fryday',
        party: 'D',
        role: 'California Chief Service Officer',
        bio: [
          'Newsom appointee. Former Navy JAG, former Mayor of Novato. Heads California Volunteers. Endorsed by Newsom — biggest single endorsement in the race.',
        ],
        endorsements: 'Gov. Newsom, CTA, former Sec. Pete Buttigieg, former Sen. Barbara Boxer.',
        notes: ['No prior statewide office; some perception of Newsom hand-picking.'],
      },
      {
    id: 'tubbs',
    photoSlug: 'tubbs',
    name: 'Michael Tubbs',
        party: 'D',
        role: 'Former Mayor of Stockton',
        bio: [
          'National Dem star at 26 when elected mayor of Stockton (2017–21). Lost re-election in 2020. Best known for piloting a guaranteed-income program. Strong progressive brand.',
        ],
        endorsements:
          'SEIU California (sole endorsement), Mayor Karen Bass, Mayor Barbara Lee, Dolores Huerta, Reps. Robert Garcia, Sam Liccardo, Lateefah Simon, former Sen. Laphonza Butler.',
        notes: [
          'Lost Stockton re-election to a Republican; unflattering local-blog amplification in 2020 cycle.',
        ],
      },
      {
        id: 'kellman',
        name: 'Janelle Kellman',
        party: 'D',
        role: 'Former Mayor of Sausalito',
        bio: ['Environmental attorney. Marin-County base.'],
        endorsements: 'Multiple Marin County Supervisors and city officials, ret. Asm. Jackie Goldberg.',
        notes: ['Limited statewide name recognition.'],
      },
      {
    id: 'romero',
    photoSlug: 'romero',
    name: 'Gloria Romero',
        party: 'R',
        role: 'Former Democratic Senate Majority Leader (now Republican)',
        bio: [
          'State Senator 2001–2008 (as Democrat); switched parties in 2024. Ed reform / charter-school advocate.',
        ],
        endorsements: 'Limited — outpaced by Brian Jones in CA GOP support.',
        notes: ['Party switch raises consistency concerns.'],
      },
      {
    id: 'jones',
    photoSlug: 'jones',
    name: 'Brian Jones',
        party: 'R',
        role: 'Termed-out State Senator (SD-40)',
        bio: ["San Diego County's Senate Republican leader. Termed-out from SD-40."],
        endorsements: 'California Republican Assembly support; many county GOP organizations.',
        notes: ['Trump-aligned but no Bianco/Hilton-tier red flags.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Tubbs', '●', 'Guaranteed-income, SEIU sole endorsement, progressive brand'],
      ['EL', 'Ma', '●', 'Compromise-friendly, 50+ unions, broadest coalition'],
      ['DM', 'Ma', '◐', 'Longstanding establishment Dem; Fryday viable alt'],
      ['OL', 'Tubbs', '◐', 'Outsider but lost his last race; Kellman is fresher OL pick'],
      ['SS', '—', '—', 'Low-salience race; consider skipping if uninformed'],
      ['AR', 'Romero', '○', 'Pro-choice + ed-reform; party-switch awkward'],
      ['PR', 'Jones', '◐', 'More populist than Romero; less so than Bianco-tier'],
      ['CC', 'Jones', '◐', 'Steady establishment-R; Romero history a flag for some CC'],
      ['FF', 'Jones', '●', 'Best religious-conservative fit'],
    ]),
    counterArguments: [
      'DM (Ma ◐): But consider Fryday if Newsom’s stamp matters more than treasurer experience.',
      'OL (Tubbs ◐): But consider Kellman for newcomer/environmental energy.',
      'EL (Ma ●): But consider Tubbs if SEIU-aligned progressive energy outweighs treasurer résumé for your values.',
      'FF (Jones ●): But consider Romero if ed-reform / charter history matters more than a coastal party-line Republican.',
    ],
  },
  {
    id: 'secretary-state',
    categoryId: 'statewide-partisan',
    title: 'Secretary of State',
    kind: 'candidates',
    stakesParagraphs: [
      'The Secretary of State runs statewide elections—voter registration, vote-by-mail, certification, auditing, and combatting misinformation—while also overseeing business filings and campaign-finance disclosure.',
      'At stake is whether California continues to expand access and transparency or shifts toward tighter ID rules, slower counts, and different enforcement of lobbying and corporate disclosure.',
    ],
    introParagraphs: [
      'Manages elections and corporate filings. Incumbent Shirley Weber (D) is the first Black SoS in CA history. Implemented universal vote-by-mail.',
    ],
    candidates: [
      {
    id: 'weber',
    photoSlug: 'weber',
    name: 'Shirley N. Weber',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Appointed 2021, elected 2022. Former state Asm. (chair of Black Caucus). Author of AB 3121 (CA reparations task force). As SoS, defended elections during the Newsom recall.',
        ],
        scorecard: [
          {
            topic: 'Voter ID',
            position: '✓ Opposes strict federal-style ID mandates; prioritizes access',
            comparison:
              'Opposite pole from Wagner, who campaigns on tightening ID—your vote is largely about which “fraud vs. suppression” worry you weight more.',
          },
          {
            topic: 'Vote-by-mail',
            position: '✓ Treats mailed ballots as core infrastructure under current law',
            comparison:
              'Defends the universal vote-by-mail model she implemented; Wagner echoes national GOP skepticism of mail-heavy systems.',
          },
          {
            topic: 'Partisan / federal pressure',
            position: '~ Administers neutral law while publicly resisting election denialism',
            comparison:
              'Steadies California’s current model; Wagner aligns rhetoric with national “election integrity” campaigns aimed at the same office.',
          },
        ],
        endorsements:
          'AG Bonta, Treasurer Ma, Controller Cohen, Insurance Comm. Lara, SoP Thurmond, CA Democratic Party, CA Federation of Teachers, AFSCME, SEIU, CWA, CA Nurses Association, Planned Parenthood Affiliates of CA, Mayor Todd Gloria, SD Supervisor Monica Montgomery Steppe.',
        notes: ['None significant.'],
      },
      {
    id: 'wagner',
    photoSlug: 'wagner',
    name: 'Donald P. Wagner',
        party: 'R',
        role: 'Orange County Supervisor, former Irvine mayor',
        bio: ['Voter-ID / election-integrity platform. Endorsed by CA Republican Party, Reform California, CRA.'],
        scorecard: [
          {
            topic: 'Voter ID',
            position: '✓ Strong voter-ID pitch; aligned with CA GOP / Reform California',
            comparison:
              'Would break sharply from Weber’s access-first record—the clearest policy daylight between the two viable candidates.',
          },
          {
            topic: 'Vote-by-mail',
            position: '✗ Frames mail-heavy voting as integrity risk; tighter verification rhetoric',
            comparison:
              'Contrasts with Weber’s defense of California’s mail-first norm; outcome depends on what Legislature would pass, but tone diverges sharply.',
          },
          {
            topic: 'Partisan / federal pressure',
            position: '~ Standard CA Republican alignment with national party on election messaging',
            comparison:
              'Weber pitches continuity with a Democratic administration’s election posture; Wagner signals alignment with Trump-era national narratives.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Weber', '●', 'Strong incumbent, expanded voter access, Black caucus heritage'],
      ['EL', 'Weber', '●', 'Same'],
      ['DM', 'Weber', '●', 'Same'],
      ['OL', 'Weber', '◐', 'Low-salience; OL voters might consider a Green protest vote'],
      ['SS', '—', '—', 'Skip if uninformed; institutional role'],
      ['AR', 'Wagner', '○', 'Voter-ID is a R wedge issue; Wagner is the safe AR/CC/FF pick'],
      ['PR', 'Wagner', '●', 'Only competitive non-Dem'],
      ['CC', 'Wagner', '●', 'Same'],
      ['FF', 'Wagner', '●', 'Same'],
    ]),
    counterArguments: [
      'OL (Weber ◐): Or vote Green (Blenner/Feinstein) as no-impact protest since Weber will easily win.',
      'EL (Weber ●): Wagner’s voter-ID pitch is a values mismatch for most EL voters—still note if you weight “send a message” on access rules.',
      'PR (Wagner ●): But consider Weber if election-denial-adjacent rhetoric is a hard disqualifier even for a protest vote.',
    ],
  },
  {
    id: 'controller',
    categoryId: 'statewide-partisan',
    title: 'Controller',
    kind: 'candidates',
    stakesParagraphs: [
      'The Controller is California’s chief fiscal officer: independent audits of state and local spending, tracking of cash and payroll, and the authority to withhold pay from agencies that break budget law.',
      'At stake is how aggressively waste, fraud, and unfunded liabilities get surfaced to the public—and whether fiscal oversight is used as a technocratic check or a political weapon.',
    ],
    introParagraphs: ['Chief fiscal officer; audits state spending. Incumbent Malia Cohen (D). Three candidates.'],
    candidates: [
      {
    id: 'cohen',
    photoSlug: 'cohen',
    name: 'Malia M. Cohen',
        party: 'D',
        role: 'Incumbent',
        bio: ['State Controller since 2023. Former SF Supervisor, former BoE chair.'],
        endorsements:
          'Newsom, Lt. Gov. Kounalakis, SoS Weber, Sen. Schiff, Speaker Rivas, CA Labor Federation, CPF, CNA, multiple Teamsters/IBEW locals, Equality California, CA Council for Affordable Housing.',
        redFlags: [],
      },
      {
        id: 'morgan',
        name: 'Herb W. Morgan',
        party: 'R',
        role: 'San Diego investment-firm founder',
        bio: ['"Real-time financial reporting" pitch. Endorsed by CA Republican Party, CRA.'],
        redFlags: [],
      },
      {
        id: 'adams',
        name: 'Meghann Adams',
        party: 'PF',
        role: 'School bus driver, union president',
        bio: ['Peace and Freedom Party; corporate-tax-loophole closure platform. Vote Socialist California endorsement.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Cohen', '◐', 'Solid Dem; Adams (PF) is the symbolic socialist-protest pick'],
      ['EL', 'Cohen', '●', 'Establishment Dem incumbent'],
      ['DM', 'Cohen', '●', 'Same'],
      ['OL', 'Adams', '○', "Symbolic socialist option — won't win"],
      ['SS', '—', '—', 'Skip if uninformed'],
      ['AR', 'Morgan', '○', 'Only fiscal-conservative option'],
      ['PR', 'Morgan', '◐', 'Standard R fiscal pick'],
      ['CC', 'Morgan', '●', 'Same'],
      ['FF', 'Morgan', '●', 'Same'],
    ]),
    counterArguments: [
      'PL (Cohen ◐): But consider Adams (PF) if you want a visible protest vote against establishment auditing.',
      'EL (Cohen ●): But consider Morgan if you believe a Republican controller would audit allied agencies more aggressively.',
      'OL (Adams ○): Adams is symbolic; Cohen still holds the office if you care about outcomes.',
    ],
  },
  {
    id: 'treasurer',
    categoryId: 'statewide-partisan',
    title: 'Treasurer',
    kind: 'candidates',
    stakesParagraphs: [
      'The Treasurer manages hundreds of billions in state investments, bond programs that finance infrastructure and schools, and relationships with Wall Street—small differences in strategy compound into real money for pensions and public projects.',
      'At stake is risk appetite (returns vs. losses), how green or fossil-linked the portfolio becomes, and who voters trust when markets swing and borrowing costs affect every department’s budget.',
    ],
    introParagraphs: [
      'Manages state investments and bond issuance. Open seat (Ma running for Lt. Gov.). Top candidates include Kounalakis, Caballero, Vazquez (D), and Hawks (R).',
    ],
    candidates: [
      {
    id: 'kounalakis',
    photoSlug: 'kounalakis',
    name: 'Eleni Kounalakis',
        party: 'D',
        role: 'Former Lt. Governor (2019–2027)',
        bio: [
          'Former U.S. Ambassador to Hungary; AKT Development Corporation president (~200,000 affordable + middle-class units in Sacramento area). Initially ran for governor, switched to Treasurer.',
        ],
        endorsements:
          'Newsom, Treasurer Ma, Controller Cohen, Hillary Clinton, Nancy Pelosi, Barbara Boxer, 9+ members of Congress, Teamsters CA, Unite Here Local 11, NUHW, CA Council for Affordable Housing.',
        redFlags: [],
      },
      {
    id: 'caballero',
    photoSlug: 'caballero',
    name: 'Anna Caballero',
        party: 'D',
        role: 'State Senator (Salinas/Merced)',
        bio: ['Moderate Dem; former Salinas mayor. Brown admin housing official. Strong rural-Dem coalition.'],
        endorsements:
          'CA Latino Legislative Caucus, Speaker Rivas, Sen. President pro Tem Limón, 25+ legislators, Reps. Lofgren / DeSaulnier / Costa, CA Conference of Carpenters.',
        redFlags: [],
      },
      {
        id: 'vazquez',
        name: 'Tony Vazquez',
        party: 'D',
        role: 'Board of Equalization member, former Santa Monica Mayor',
        bio: ['Eight years on BoE. First Latino Santa Monica mayor.'],
        redFlags: [],
      },
      {
        id: 'hawks',
        name: 'Jennifer Hawks',
        party: 'R',
        role: 'Silicon Valley businesswoman',
        bio: ['CRP-backed; positioning as Sacramento outsider.'],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Vazquez', '◐', 'More progressive on tax issues at BoE; sparse field for PL'],
      ['EL', 'Kounalakis', '●', 'Strong establishment fit; Pelosi/Clinton endorsements; affordable-housing record'],
      ['DM', 'Kounalakis', '◐', 'Or Caballero for moderate-Latino-Dem appeal'],
      ['OL', 'Caballero', '○', 'Outsider-ish (rural, less coastal); still quite establishment'],
      ['SS', '—', '—', 'Skip if uninformed'],
      ['AR', 'Hawks', '○', 'Only major R'],
      ['PR', 'Hawks', '◐', 'Only viable R; not strongly differentiated'],
      ['CC', 'Hawks', '◐', 'Same'],
      ['FF', 'Hawks', '◐', 'Same'],
    ]),
    counterArguments: [
      'EL (Kounalakis ●): But consider Caballero if moderate-rural-Dem coalition matters more than name recognition.',
      'DM (Kounalakis ◐): Caballero has stronger Latino caucus support.',
      'OL (Caballero ○): But consider Vazquez if BoE technocrat experience matters more than Senate résumé.',
      'PL (Vazquez ◐): Kounalakis is still the default viability pick if you prioritize winning coalition over left positioning.',
    ],
  },
  {
    id: 'attorney-general',
    categoryId: 'statewide-partisan',
    title: 'Attorney General',
    kind: 'candidates',
    stakesParagraphs: [
      'The Attorney General is California’s chief law officer: criminal appeals, consumer protection, civil rights enforcement, environmental cases, and multistate lawsuits against federal policies that touch millions of residents.',
      'At stake is how aggressively the state prosecutes corporate fraud, police misconduct, and opioid or tech harms—and whether California’s legal firepower aligns with progressive reform, moderate enforcement, or a tougher “law and order” posture.',
    ],
    introParagraphs: [
      'Incumbent Rob Bonta (D) filed 50+ anti-Trump lawsuits and leads on criminal-justice reform. Competitive R challenger Michael Gates. Marjorie Mikels (Green) in the field.',
    ],
    candidates: [
      {
    id: 'bonta',
    photoSlug: 'bonta',
    name: 'Rob Bonta',
        party: 'D',
        role: 'Incumbent',
        bio: [
          'Former Asm., appointed AG 2021. National profile on reproductive rights, housing enforcement, and multistate litigation against Trump administration policies.',
        ],
        scorecard: [
          {
            topic: 'Consumer & fraud',
            position: '✓ Active multistate tech, opioid, and price-gouging cases',
            comparison:
              'Incumbent track record Gates pitches as overreach; Mikels would lack budget to match current enforcement scale.',
          },
          {
            topic: 'Criminal justice reform',
            position: '✓ Progressive prosecutor framing; limits on enhancements where law allows',
            comparison:
              'Stark contrast with Gates’ “tough prosecutor” lane; Greens agree on decarceration but Mikels cannot staff the office.',
          },
          {
            topic: 'Reproductive & civil rights',
            position: '✓✓ National litigation defending access; multistate amicus work',
            comparison:
              'Career-defining split from Gates; closer to Mikels on some civil-rights outcomes in theory, but Bonta actually holds the levers.',
          },
          {
            topic: 'Environmental enforcement',
            position: '✓ Sues polluters; defends CA climate rules in court',
            comparison:
              'Gates rarely centers environmental AG work; Mikels would prioritize but not displace Bonta’s existing docket without a win.',
          },
          {
            topic: 'Police / prosecutorial accountability',
            position: '~ Reform-oriented investigations; still a statewide prosecutor',
            comparison:
              'Gates emphasizes uniform “back the blue” messaging; some OL voters want more than Bonta’s institutional pace.',
          },
          {
            topic: 'Trump / federal alignment',
            position: '✓ 50+ anti-Trump-administration suits; Biden-era continuity',
            comparison:
              'Opposite pole from Gates’ party alignment; Mikels offers protest symbolism without changing who occupies the office.',
          },
        ],
        endorsements: 'Broad Democratic establishment, labor, and civil-rights coalition.',
        redFlags: [],
      },
      {
        id: 'gates',
        name: 'Michael Gates',
        party: 'R',
        role: 'Long Beach City Prosecutor',
        bio: ['Standard Republican challenger framing on crime and prosecution.'],
        scorecard: [
          {
            topic: 'Consumer & fraud',
            position: '~ Emphasizes street crime and prosecution metrics over corporate dockets',
            comparison:
              'Would de-emphasize marquee tech and climate cases that define Bonta’s national brand.',
          },
          {
            topic: 'Criminal justice reform',
            position: '✗ Law-and-order pitch; skeptical of “progressive prosecutor” framing',
            comparison:
              'Farthest from Bonta and Mikels on sentencing and diversion philosophy in the viable field.',
          },
          {
            topic: 'Reproductive & civil rights',
            position: '✗ Party-aligned skepticism of Bonta’s reproductive-rights litigation posture',
            comparison:
              'Biggest daylight vs incumbent on what the AG should prioritize in blue-state culture conflicts.',
          },
          {
            topic: 'Environmental enforcement',
            position: '~ Secondary in his stump; unlikely to match Bonta’s climate-litigation appetite',
            comparison:
              'Practical risk for climate voters is quieter enforcement even if statutes stay on the books.',
          },
          {
            topic: 'Police / prosecutorial accountability',
            position: '✓ Strong law-enforcement endorsements; pro-prosecution default',
            comparison:
              'Closer to sheriff-aligned voters than Bonta; not differentiated on “toughness” vs other CA Republicans—differentiated vs Bonta.',
          },
          {
            topic: 'Trump / federal alignment',
            position: '~ GOP standard-bearer; Trump DOJ stint colors trust for some swing voters',
            comparison:
              'Would align legal strategy with a Republican federal government—inverse of Bonta’s multistate resistance pattern.',
          },
        ],
        endorsements: 'CA Republican Party and allied law-enforcement groups.',
        notes: ['Brief Trump DOJ tenure (perspective-dependent).'],
      },
      {
        id: 'mikels',
        name: 'Marjorie Mikels',
        party: 'Green',
        role: 'Attorney',
        bio: ['Green Party platform; limited statewide viability.'],
        scorecard: [
          {
            topic: 'Consumer & fraud',
            position: '~ Radical anti-corporate rhetoric; no statewide enforcement bench',
            comparison:
              'Symbolic contrast with corporate targets; Bonta and Gates both have prosecutor infrastructure she would not inherit at parity.',
          },
          {
            topic: 'Criminal justice reform',
            position: '✓✓ Strong decarceration / restorative-justice platform',
            comparison:
              'Closer to activist end than Bonta’s institutional reform; Gates is the mirror opposite.',
          },
          {
            topic: 'Reproductive & civil rights',
            position: '✓ Strong civil-liberties positioning; unlikely to win to implement',
            comparison:
              'Protest vote for values alignment; Bonta remains the officeholder who actually files the cases.',
          },
          {
            topic: 'Environmental enforcement',
            position: '✓✓ Would prioritize climate justice in AG portfolio',
            comparison:
              'Ideologically to Bonta’s left on urgency; Gates is the low-environmental-enforcement contrast.',
          },
          {
            topic: 'Police / prosecutorial accountability',
            position: '✓ Skeptical of carceral defaults; activist-aligned',
            comparison:
              'Useful signal vote if Bonta feels too cautious; not a realistic alternative for day-to-day prosecution staffing.',
          },
          {
            topic: 'Trump / federal alignment',
            position: '~ Oppositional to GOP federal policy; no Trump-tied résumé',
            comparison:
              'Unlike Gates, not aligned with national Republicans—still cannot replicate Bonta’s litigation volume without winning.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Bonta', '●', 'Strongest progressive prosecutor record in field'],
      ['EL', 'Bonta', '●', 'Establishment fit + Trump litigation'],
      ['DM', 'Bonta', '●', 'Same'],
      ['OL', 'Mikels', '○', 'Protest vote; policy levers as AG would be limited'],
      ['SS', '—', '—', 'Skip if uninformed'],
      ['AR', 'Bonta', '○', 'Closest to non-MAGA competence pick for some AR voters'],
      ['PR', 'Gates', '●', 'Standard R law-and-order pick'],
      ['CC', 'Gates', '●', 'Same'],
      ['FF', 'Gates', '●', 'Same'],
    ]),
    counterArguments: [
      'OL (Mikels ○): But consider Bonta — Mikels cannot win; Bonta’s amicus work on Palestinian rights cases may matter more to some OL voters.',
      'AR (Bonta ○): Or consider Gates if you weight party more than competence.',
      'PL (Bonta ●): Gates is disqualifying for many PL voters; Bonta still wins on civil-rights litigation record.',
    ],
  },
];
