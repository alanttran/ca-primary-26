import type { CrossTypologyRow, Race } from '../types/ballot-types';

function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}

/** Federal, state-leg, and Riverside County races for ZIP 92562 (Murrieta / southwest RivCo). BoE D3 lives in `races-la.ts`. */
export const RACES_RIVERSIDE: Race[] = [
  {
    id: 'us-rep-ca40',
    categoryId: 'federal',
    title: 'U.S. Representative, CA-40',
    kind: 'candidates',
    stakesParagraphs: [
      'Your member of Congress votes on federal taxes, immigration, military spending, health programs, climate and infrastructure funding, and oversight of the executive branch—plus casework for Camp Pendleton-adjacent communities, wildfire mitigation dollars, and Inland Empire growth issues.',
      'Prop 50 (2025) redistricting merged two sitting Republicans—Ken Calvert (long the area’s congressman from older lines) and Young Kim (the prior CA-40 incumbent)—into one top-two primary field with several Democrats. Murrieta and the Temecula Valley sit in this new R-leaning seat; who advances shapes the House majority fight and local clout on veterans and water infrastructure.',
    ],
    introParagraphs: [
      'Eight-way jungle primary. Calvert and Young Kim bring the biggest war chests and name ID; Democrats Joe Kerr and Esther Kim-Varet lead fundraising on their side, with Lisa Ramirez also spending at scale. Nina Linh is running with no party preference.',
    ],
    candidates: [
      {
        id: 'calvert',
        photoSlug: 'calvert',
        name: 'Ken Calvert',
        party: 'R',
        role: 'Incumbent U.S. Representative (prior CA-41 lines)',
        bio: [
          'In Congress since 1993; small-business and real-estate background. Campaign stresses Appropriations seniority, conservative ratings (Chamber, NFIB, ATR), E-Verify authorship, and district infrastructure wins.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '~ Market-led growth; skeptical of dense federal mandates',
            comparison: 'Democrats pitch affordability and renter protections Calvert does not prioritize; Young Kim competes for the same suburban-homeowner lane.',
          },
          {
            topic: 'Climate',
            position: '~ Conservative voting pattern; district project earmarks over climate regulation',
            comparison: 'D challengers and some NPP voters want greener federal strings; Kim mirrors party on rolling back Biden-era rules.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓✓ Reliable House Republican vote; seniority on spending bills',
            comparison: 'Kim also pitches Trump-era alignment; Kerr and Varet are the clearest checks on a GOP trifecta.',
          },
          {
            topic: 'Seniority / district clout',
            position: '✓✓ Decades on Appropriations; “already represent a majority of the new seat” framing',
            comparison: 'Kim lacks Calvert’s years but argues fresher messenger for changing suburbs.',
          },
          {
            topic: 'Immigration / border-adjacent',
            position: '✓ Hard-line enforcement record and messaging',
            comparison: 'Kerr highlights labor/community safety without Calvert’s restrictionist floor votes.',
          },
        ],
        money: 'Raised about $5.2M through March 31, 2026 filings (Ballotpedia tabulation).',
        redFlags: [],
        recordVsChange:
          'Calvert is the Appropriations-era incumbent pitching decades of district infrastructure leverage and hard-line immigration votes. Young Kim is the newer messenger with similar conference votes but less seniority—choose between raw committee years and perceived freshness because both occupy the same Republican lane against Democrats.',
      },
      {
        id: 'young-kim',
        photoSlug: 'young-kim',
        name: 'Young Kim',
        party: 'R',
        role: 'Incumbent U.S. Representative (prior CA-40 lines)',
        bio: [
          'Former Assemblymember and Royce staffer; first elected to Congress in 2020. Campaign stresses inflation, border security, and support for the Trump agenda.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '~ Suburban homeowner focus; less Appropriations depth than Calvert',
            comparison: 'Calvert sells decades of earmarks; Kim argues outsider energy inside the GOP conference.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓✓ Explicit Trump ally branding on the trail',
            comparison: 'Calvert is institutionally similar but less vocal in national cable style; both beat Democratic checks-and-balances pitches.',
          },
          {
            topic: 'Seniority / district clout',
            position: '~ Shorter tenure but strong fundraising',
            comparison: 'Young Kim led Calvert in cash on hand in late-Q1 2026 filings; Calvert counters with committee gavel proximity.',
          },
          {
            topic: 'Climate',
            position: '~ Standard modern House R positioning',
            comparison: 'Neither R leads on climate; Ds compete on wildfire and heat resilience funding.',
          },
          {
            topic: 'Health care',
            position: '~ ACA repeal conference votes in prior Congresses',
            comparison: 'Kerr and Varet anchor the ACA / reproductive-rights contrast lane.',
          },
        ],
        money: 'Raised about $7.7M through March 31, 2026 filings (Ballotpedia tabulation).',
        redFlags: [],
        recordVsChange:
          'Kim is the newer CA-40 incumbent with strong fundraising and explicit Trump-era alignment while Calvert sells longer Appropriations tenure. Pick Kim if you want a fresher suburban messenger; pick Calvert if raw committee seniority for federal dollars still tops style in the merged seat.',
      },
      {
        id: 'joe-kerr',
        name: 'Joe Kerr',
        party: 'D',
        role: 'Retired fire captain; former OC firefighters union president',
        bio: [
          'Labor leader framing: firefighter problem-solver, affordability, democracy, and wildfire mitigation. OC Register questionnaire highlights working-family economics.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '✓ Middle-class affordability focus; less housing-supply wonk detail',
            comparison: 'Ramirez and Varet bring more campaign cash for airtime; Hoffman and Keissieh trail on resources.',
          },
          {
            topic: 'Climate',
            position: '✓ Wildfire mitigation as core credential',
            comparison: 'Strongest experiential climate story in the D field; less legislative track record than elected rivals.',
          },
          {
            topic: 'Labor vs business',
            position: '✓✓ Firefighter union presidency; clearest union lane',
            comparison: 'Varet pitches entrepreneur outsider; Ramirez blends prosecutor-style accountability themes.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Check-and-balance D vote if elected',
            comparison: 'Same broad goal as other Ds; Kerr’s edge is first-responder trust in swing suburbs.',
          },
        ],
        money: 'Raised about $223K through March 31, 2026 filings (Ballotpedia tabulation).',
        redFlags: [],
      },
      {
        id: 'kim-varet',
        name: 'Esther Kim-Varet',
        party: 'D',
        role: 'Gallery owner; Ph.D. art historian',
        bio: [
          'Yale and Columbia art-history degrees; runs contemporary gallery Various Small Fires. Campaign stresses outsider problem-solving and “working mom” economics.',
        ],
        scorecard: [
          {
            topic: 'Housing (federal)',
            position: '~ Affordability rhetoric; less federal housing bill detail',
            comparison: 'Kerr owns union infrastructure story; Ramirez has local-government prosecutorial résumé.',
          },
          {
            topic: 'Climate',
            position: '~ Cultural-sector candidate without climate-specific record',
            comparison: 'Kerr’s wildfire experience is the cleaner climate-adjacent credential.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Strongest D fundraising to prosecute anti-Trump contrast ads',
            comparison: 'Calvert/Kim still favored in an R-tilting seat—Varet bets on November viability if she tops the D pile.',
          },
          {
            topic: 'Seniority / district clout',
            position: '~ Would start cold in the House if elected',
            comparison: 'Opposite of Calvert’s seniority pitch; similar to other first-time federal candidates.',
          },
        ],
        money: 'Raised about $2.7M through March 31, 2026 filings (Ballotpedia tabulation).',
        redFlags: [],
      },
      {
        id: 'ramirez-lisa',
        name: 'Lisa Ramirez',
        party: 'D',
        role: 'Candidate',
        bio: [
          'Democratic contender with meaningful media-market spending in early reporting cycles; competes for the pragmatic-primary vote against Kerr and Varet.',
        ],
        scorecard: [
          {
            topic: 'Trump / House majority',
            position: '✓ Standard Democratic check on national Republicans',
            comparison: 'Overlaps Kerr/Varet; differentiation is biography and local ties voters accept on faith without a federal voting record.',
          },
          {
            topic: 'Housing (federal)',
            position: '~ Middle-class affordability framing',
            comparison: 'Less labor-specific story than Kerr; less art-world outsider branding than Varet.',
          },
        ],
        money: 'Raised about $392K through March 31, 2026 filings (Ballotpedia tabulation).',
        redFlags: [],
      },
      {
        id: 'hoffman-francis',
        name: 'Francis Xavier Hoffman',
        party: 'D',
        role: 'Candidate',
        bio: ['Lower-profile Democratic filing in a top-heavy fundraising field.'],
        scorecard: [
          {
            topic: 'Trump / House majority',
            position: '? Sparse public record versus front-runners',
            comparison: 'Protest-vote lane against better-funded Ds and two R incumbents.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'keissieh',
        name: 'Claude M. Keissieh',
        party: 'D',
        role: 'Candidate',
        bio: ['Democratic contender with minimal reported fundraising in early-cycle filings.'],
        scorecard: [
          {
            topic: 'Trump / House majority',
            position: '? Long-shot visibility versus Kerr/Varet/Ramirez',
            comparison: 'Honest long-shot card for voters avoiding major-money names.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'linh-nina',
        name: 'Nina Linh',
        party: 'NP',
        role: 'Candidate',
        bio: [
          'No-party-preference option for voters avoiding major-party labels; self-funded mid six figures in early reporting.',
        ],
        scorecard: [
          {
            topic: 'Trump / House majority',
            position: '~ NPP protest positioning between two R incumbents',
            comparison: 'If you want a guaranteed anti-Trump vote, major Ds are clearer; Linh is the outsider-middle signal.',
          },
        ],
        money: 'Raised about $267K through March 31, 2026 filings (Ballotpedia tabulation).',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Kerr', '●', 'Labor-led D; clearest working-families / union lane'],
      ['EL', 'Varet', '●', 'Fundraising scale to run a serious fall campaign if she advances'],
      ['DM', 'Kerr', '●', 'Same labor credibility; strongest firefighter brand'],
      ['OL', 'Varet', '◐', 'Outsider entrepreneur tone versus Calvert machine'],
      ['SS', 'Linh', '○', 'NPP middle protest—not a policy anchor'],
      ['AR', 'Y. Kim', '●', 'Most explicit Trump-aligned national messaging'],
      ['PR', 'Calvert', '●', 'Chamber/ATR conservative record; decades of GOP votes'],
      ['CC', 'Calvert', '●', 'Appropriations seniority argument for business'],
      ['FF', 'Y. Kim', '●', 'Faith-and-family GOP lane if you weight cultural signaling'],
    ]),
    counterArguments: [
      'EL (Varet ●): Calvert’s Appropriations tenure still matters if you weight clout over ideology.',
      'AR (Y. Kim ●): Kerr is the cleaner labor-D pick if House control and union economics top Trump noise.',
      'PR (Calvert ●): Kim-Varet or Ramirez offer cleaner ACA / reproductive-rights contrasts than Linh.',
    ],
  },
  {
    id: 'senate-sd32',
    categoryId: 'state-leg',
    title: 'State Senate, District 32',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators set education funding formulas, housing and climate law floors, criminal-justice policy, and the budget that shapes sheriff and probation grants counties rely on.',
      'SD-32 strings together fast-growing southwest Riverside suburbs—Murrieta, Temecula, Wildomar, Menifee, and Canyon Lake—plus slices of Corona and Orange County. The race tests whether a Democratic challenger can dent a sitting Republican in an area that has trended purple in some federal contests.',
    ],
    introParagraphs: [
      'Incumbent Kelly Seyarto (R), former Assemblymember and firefighter, faces Murrieta City Councilmember Tiffanie Tate (D) in a rare head-to-head state-senate spotlight for the Temecula Valley.',
    ],
    candidates: [
      {
        id: 'tate',
        name: 'Tiffanie Tate',
        party: 'D',
        role: 'Murrieta City Councilmember',
        bio: [
          'Local elected framing public safety, schools, and affordability from city hall; trying to nationalize Seyarto’s Sacramento votes where helpful.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Growth-management experience from Murrieta housing debates',
            comparison: 'Seyarto carries statewide housing votes Tate will attack as too developer-friendly.',
          },
          {
            topic: 'Public safety',
            position: '✓ Council public-safety portfolio vs incumbent law-enforcement endorsements',
            comparison: 'Seyarto owns first-responder biography; Tate argues community safety without reflexive carceral expansion.',
          },
          {
            topic: 'Climate',
            position: '~ Heat and wildfire smoke are local salient; less Sacramento climate bill authorship',
            comparison: 'Seyarto’s record is mixed on mandates that Tate can paint as behind the times.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Democratic caucus vote if elected in a still-R-leaning seat',
            comparison: 'Clear contrast vote versus Seyarto’s Republican conference membership.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'seyarto',
        photoSlug: 'seyarto',
        name: 'Kelly Seyarto',
        party: 'R',
        role: 'Incumbent State Senator',
        bio: [
          'Former firefighter and Assemblymember; emphasizes public safety, local control, and fiscal restraint. Republican conference member representing a diversifying suburban district.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '~ GOP “cut red tape” supply rhetoric with suburban homeowner caution',
            comparison: 'Tate will hit specific bills; Seyarto stresses builder relief over tenant mandates.',
          },
          {
            topic: 'Public safety',
            position: '✓✓ Firefighter biography; law-enforcement support base',
            comparison: 'Tate competes on neighborhood safety without matching Seyarto’s first-responder brand.',
          },
          {
            topic: 'Education funding',
            position: '~ Republican mainstream on charter transparency and local control',
            comparison: 'Tate aligns with teachers’ unions on funding equity; Seyarto stresses accountability spending.',
          },
          {
            topic: 'Taxes & fees',
            position: '✓ Anti-tax club scores typical for Inland Empire Rs',
            comparison: 'Tate can defend local benefit fees Seyarto routinely campaigns against in Sacramento.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Seyarto is the sitting Republican senator with firefighter biography and standard Inland Empire fiscal votes Tate will paint as too developer-friendly. Tate is the credible Democratic contrast—worth the swap only if moving a Senate seat matters more than Seyarto’s first-responder brand for your public-safety and tax instincts.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Tate', '●', 'Labor-adjacent D; clearest check on GOP caucus'],
      ['EL', 'Tate', '◐', 'Local elected without Seyarto’s Sacramento tenure'],
      ['DM', 'Tate', '●', 'Same pragmatic-suburban D lane'],
      ['OL', 'Tate', '◐', 'Outsider-ish vs incumbent but still partisan D'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Seyarto', '●', 'Firefighter R incumbent'],
      ['PR', 'Seyarto', '●', 'Low-tax, local-control record'],
      ['CC', 'Seyarto', '●', 'Chamber-friendly suburban Republican'],
      ['FF', 'Seyarto', '●', 'Cultural conservative baseline for CA Senate R'],
    ]),
    counterArguments: [
      'AR (Seyarto ●): Tate is the only vote to move senate margin if you weight chamber control over biography.',
      'PL (Tate ●): Seyarto’s first-responder credibility still resonates with public-safety-first swing voters.',
    ],
  },
  {
    id: 'assembly-ad71',
    categoryId: 'state-leg',
    title: 'State Assembly, District 71',
    kind: 'candidates',
    stakesParagraphs: [
      'Assemblymembers vote on housing production bills, climate implementation details, school funding, and criminal-justice tweaks that counties implement the next week.',
      'AD-71 pairs southwest Riverside growth cities with a slice of southern Orange County—Mission Viejo and Rancho Santa Margarita—so Murrieta voters pick someone balancing inland growth pressures with OC homeowner politics.',
    ],
    introParagraphs: [
      'Incumbent Kate Sanchez (R), former Murrieta councilmember, faces Democrat JJ Galvez in a classic suburban swing Assembly fight.',
    ],
    candidates: [
      {
        id: 'jj-galvez',
        name: 'JJ Galvez',
        party: 'D',
        role: 'Candidate',
        bio: [
          'Democratic challenger running on affordability, schools, and contrast with Sanchez’s Sacramento voting record in a district that still leans Republican on paper.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Middle-class cost-of-living frame',
            comparison: 'Sanchez carries GOP housing deregulation votes Galvez will spotlight.',
          },
          {
            topic: 'Education funding',
            position: '✓ Pro–public school funding typical of D challengers here',
            comparison: 'Sanchez emphasizes parental rights / charter transparency themes popular with part of the district.',
          },
          {
            topic: 'Public safety',
            position: '~ Community safety without Sanchez’s conservative crime floor votes',
            comparison: 'Sanchez owns tougher-on-crime positioning for primary-right voters.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Democratic caucus vote if elected',
            comparison: 'Only path to Asm majority leverage from this seat is flipping Sanchez.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'sanchez-kate',
        photoSlug: 'sanchez-kate',
        name: 'Kate Sanchez',
        party: 'R',
        role: 'Incumbent Assemblymember',
        bio: [
          'Former Murrieta councilmember; emphasizes public safety, parental rights in schools, and lower taxes. Republican conference member in a split coastal/inland seat.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '~ GOP supply + local-control mix',
            comparison: 'Galvez hits affordability pain points Sanchez answers with regulation cuts.',
          },
          {
            topic: 'Education funding',
            position: '✓ Conservative education culture priorities',
            comparison: 'Galvez aligns with union funding arguments Sanchez resists.',
          },
          {
            topic: 'Climate',
            position: '~ Skeptical of costly mandates; votes with inland R caucus',
            comparison: 'Galvez can tie district heat and wildfire smoke to policy contrast.',
          },
          {
            topic: 'Taxes & fees',
            position: '✓ Anti-tax voting pattern',
            comparison: 'Galvez aligns with voters who accept fee-funded services for parks, libraries, and roads.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Sanchez is the Murrieta-rooted Republican incumbent with parental-rights and low-tax branding in a seat that still leans R on paper. Galvez is the Democratic flip attempt—change buys union-friendly school funding and affordability framing only if you prioritize Assembly margin over her established GOP votes.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Galvez', '●', 'Labor-leaning D contrast to Sanchez'],
      ['EL', 'Galvez', '◐', 'Challenger without incumbent’s bill-passing record'],
      ['DM', 'Galvez', '●', 'Same suburban-D lane'],
      ['OL', 'Galvez', '◐', 'Change vote versus council-to-Sacramento incumbent'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Sanchez', '●', 'Incumbent R'],
      ['PR', 'Sanchez', '●', 'Low-tax, parental-rights branding'],
      ['CC', 'Sanchez', '●', 'Business-friendly suburban R'],
      ['FF', 'Sanchez', '●', 'Cultural conservative baseline'],
    ]),
    counterArguments: [
      'AR (Sanchez ●): Galvez is the only vote to move Assembly margin if you weight chamber control.',
      'PR (Sanchez ●): Galvez is cleaner on union-aligned school funding if education employees top your card.',
    ],
  },
  {
    id: 'rivco-assessor-clerk',
    categoryId: 'local-rivco',
    title: 'Riverside County Assessor-Recorder-County Clerk',
    kind: 'candidates',
    stakesParagraphs: [
      'The assessor sets taxable values that fund schools and cities; the recorder-clerk side handles elections filings, marriage licenses, and public records that touch every property transaction.',
      'Incumbent Assessor-Recorder-County Clerk Peter Aldana is defending the merged office against challenger Jared McBride, who is running on reform, transparency, and homeowner-facing service—a contest that usually stays quiet unless assessments or wait times spark frustration.',
    ],
    introParagraphs: [
      'Nonpartisan head-to-head: appointed/elected incumbent Aldana versus challenger McBride on customer service, assessment fairness, and clerk operations.',
    ],
    candidates: [
      {
        id: 'aldana-rivco',
        name: 'Peter Aldana',
        party: 'NP',
        role: 'Incumbent',
        bio: [
          'Running on continuity: modernizing clerk services, defending assessment consistency, and keeping election operations steady in a fast-growing county.',
        ],
        scorecard: [
          {
            topic: 'Assessment fairness',
            position: '✓ Incumbent record managing boom-time growth',
            comparison: 'McBride pitches outsider scrutiny of appeals backlogs and communication.',
          },
          {
            topic: 'Transparency / corruption',
            position: '~ Stewardship frame versus reform attack',
            comparison: 'Challenger owns the “fresh eyes” lane; Aldana owns institutional knowledge.',
          },
          {
            topic: 'Housing & data',
            position: '✓ Assessment rolls underpin housing market liquidity',
            comparison: 'McBride may argue for clearer homeowner-facing tools Aldana must match with delivery metrics.',
          },
        ],
        redFlags: [],
        recordVsChange:
          'Aldana runs as the steady hands managing assessments and recorder services through rapid growth. McBride is the reform outsider on backlogs and homeowner communication—switch if you believe customer-service failures justify leadership change; stay if operational risk from turnover worries you more.',
      },
      {
        id: 'mcbride-rivco',
        name: 'Jared McBride',
        party: 'NP',
        role: 'Challenger',
        bio: [
          'Reform challenger stressing accessibility, technology upgrades for clerk services, and more aggressive homeowner education on appeals.',
        ],
        scorecard: [
          {
            topic: 'Assessment fairness',
            position: '✓ Criticizes backlog and opacity as outsider',
            comparison: 'Must prove competence against Aldana’s on-the-job résumé.',
          },
          {
            topic: 'Transparency / corruption',
            position: '✓✓ “Sunlight” and customer-service critique of incumbent operations',
            comparison: 'Risk: less demonstrated management of a 2.4M-person county apparatus.',
          },
          {
            topic: 'Homeowner relief / Prop 13',
            position: '~ Appeals navigation and exemption education',
            comparison: 'Aldana knows Prop 13 mechanics cold; McBride sells empathy for confused taxpayers.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'McBride', '◐', 'Reform outsider if you distrust county property bureaucracy'],
      ['EL', 'Aldana', '●', 'Institutional continuity pick'],
      ['DM', 'Aldana', '●', 'Same steady-hands lane'],
      ['OL', 'McBride', '◐', 'Change vote without partisan anchor'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Aldana', '◐', 'Incumbent bias toward status-quo assessments'],
      ['PR', 'McBride', '◐', 'Taxpayer-skeptic framing of county fees'],
      ['CC', 'Aldana', '●', 'Business transactions depend on predictable recorder services'],
      ['FF', '—', '—', 'Low salience'],
    ]),
    counterArguments: [
      'EL (Aldana ●): McBride is the only vote if you believe assessment appeals are rigged toward delay.',
      'CC (Aldana ●): McBride still has to prove he can run a complex tax and elections office day one.',
    ],
  },
  {
    id: 'rivco-mvusd-area3',
    categoryId: 'local-rivco',
    title: 'Murrieta Valley Unified School District Governing Board Member, Trustee Area 3 (special)',
    kind: 'candidates',
    stakesParagraphs: [
      'School boards set budgets that determine class sizes, counselor ratios, and how quickly campuses can repair HVAC and roofs; they also negotiate with employee unions and decide bond placement.',
      'Area 3 covers fast-growing eastern Murrieta neighborhoods; this seat drew a special election after a mid-term vacancy, so voters are choosing direction on bonds, growth, and how welcoming campuses are to immigrant families.',
    ],
    introParagraphs: [
      'Two-way race: UC Riverside development director Elliot Emmer versus former trustee Julie Vandegrift, who previously held this seat.',
    ],
    candidates: [
      {
        id: 'emmer',
        name: 'Elliot Emmer',
        party: 'NP',
        role: 'Senior director of development, UC Riverside School of Public Policy',
        bio: [
          'Murrieta resident; Press Enterprise questionnaire highlights school bond support at current tax rates for facilities, growth planning, and keeping federal immigration enforcement off campuses.',
        ],
        scorecard: [
          {
            topic: 'Facilities & bonds',
            position: '✓ Pro-bond framing tied to population growth and facility upkeep',
            comparison: 'Vandegrift stresses Prop 39 list discipline and skeptical review before new debt.',
          },
          {
            topic: 'Student inclusion',
            position: '✓ Explicit opposition to ICE on school grounds',
            comparison: 'Cultural flashpoint where Vandegrift may hew closer to neutral district-policy language.',
          },
          {
            topic: 'Fiscal oversight',
            position: '~ Fundraising executive skill set; less elected-board track record',
            comparison: 'Vandegrift owns prior trustee service as proof of oversight habits.',
          },
        ],
        redFlags: [],
      },
      {
        id: 'vandegrift',
        name: 'Julie Vandegrift',
        party: 'NP',
        role: 'Former MVUSD trustee (Area 3)',
        bio: [
          'Served as Area 3 trustee 2022–2024; emphasizes academic achievement, careful bond compliance, and experienced board governance.',
        ],
        scorecard: [
          {
            topic: 'Facilities & bonds',
            position: '✓ Skeptical detailed-review lane on bond packages',
            comparison: 'Emmer is more explicitly pro-bond for growth; Vandegrift wants tighter project lists.',
          },
          {
            topic: 'Fiscal oversight',
            position: '✓✓ Returning trustee with meeting-time experience',
            comparison: 'Emmer sells university partnerships and fundraising chops instead.',
          },
          {
            topic: 'Student inclusion',
            position: '~ Traditional “focus on academics” framing',
            comparison: 'Emmer is clearer on sanctuary-schools positioning; Vandegrift emphasizes neutral compliance.',
          },
        ],
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Emmer', '●', 'ICE-off-campus and inclusion signaling'],
      ['EL', 'Vandegrift', '●', 'Experienced trustee steady-hands pick'],
      ['DM', 'Vandegrift', '●', 'Same mainstream governance lane'],
      ['OL', 'Emmer', '◐', 'Outsider energy versus returning incumbent-style trustee'],
      ['SS', '—', '—', 'Skip'],
      ['AR', 'Vandegrift', '◐', 'Conservative-leaning suburb default may favor experienced restraint'],
      ['PR', 'Vandegrift', '◐', 'Bond-skeptic tone resonates with tax-wary homeowners'],
      ['CC', 'Emmer', '◐', 'Growth infrastructure investment story'],
      ['FF', 'Vandegrift', '◐', 'Traditional-values parents may trust prior trustee résumé'],
    ]),
    counterArguments: [
      'EL (Vandegrift ●): Emmer is the clearer vote if ICE-on-campus or bond-funded modernization is your single issue.',
      'PR (Vandegrift ◐): Emmer still has to prove fiscal discipline matches his bond enthusiasm.',
    ],
  },
];
