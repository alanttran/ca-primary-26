import type {
  BallotData,
  Candidate,
  MeasureBlock,
  MeasureReadingLink,
  Race,
  RedFlagBullet,
  ScorecardRow,
  TypologyCode,
} from './types/ballot-types';
import { CONFIDENCE_LEVEL_ROWS, NO_PICK_TOKEN } from './data/confidence-levels';
import { BALLOT_CATEGORIES, BALLOT_META } from './data/meta';
import { mergeRaceDerivedFields } from './data/merge-races';
import { RACES_REST } from './data/races-rest';
import { RACES_STATEWIDE } from './data/races-statewide';
import { TLDR_ROWS } from './data/tldr-data';
import { TYPOLOGIES } from './data/typologies-data';
import {
  categoryIcon,
  confidenceIconFromChar,
  iconBallot,
  iconBook,
  iconChevron,
  iconExternal,
  iconRedFlag,
  iconTopicMixed,
  iconTopicOppose,
  iconTopicStrongSupport,
  iconTopicSupport,
  iconTopicUnknown,
  partyGlyphIcon,
  typologyChip,
} from './icons.ts';
import { parsePickCell } from './parse-pick-cell.ts';

export const ballotData: BallotData = {
  meta: BALLOT_META,
  typologies: TYPOLOGIES,
  categories: BALLOT_CATEGORIES,
  tldrRows: TLDR_ROWS,
  races: mergeRaceDerivedFields([...RACES_STATEWIDE, ...RACES_REST]),
};

const TY_CODES: TypologyCode[] = ['PL', 'EL', 'DM', 'OL', 'SS', 'AR', 'PR', 'CC', 'FF'];

/** Leading typology token in counter-argument lines, e.g. `EL (` or `AR/FF (` */
const COUNTER_ARG_TY_PREFIX =
  /^((?:PL|EL|DM|OL|SS|AR|PR|CC|FF)(?:\/(?:PL|EL|DM|OL|SS|AR|PR|CC|FF))*)\s+\(/;

function typologyNameForChip(code: TypologyCode): string | undefined {
  return TYPOLOGIES.find((t) => t.code === code)?.name;
}

function isTypologyCodeString(s: string): s is TypologyCode {
  return (TY_CODES as readonly string[]).includes(s);
}

function appendCounterTypologyChips(li: HTMLElement, group: string): void {
  const segs = group.split('/');
  for (let i = 0; i < segs.length; i++) {
    if (i > 0) li.append(document.createTextNode('/'));
    const seg = segs[i];
    if (isTypologyCodeString(seg)) li.append(typologyChip(seg, { title: typologyNameForChip(seg) }));
    else li.append(document.createTextNode(seg));
  }
}

function srConfidenceLabel(c: string): string {
  const t = c.trim() === '\u2014' ? '—' : c.trim();
  switch (t) {
    case '●':
      return 'High confidence';
    case '◐':
      return 'Medium confidence';
    case '○':
      return 'Low confidence';
    case '—':
      return 'No pick, skip';
    default:
      return c;
  }
}

function fillPickCell(td: HTMLTableCellElement, cell: string): void {
  td.classList.add('matrix-pick-cell');
  const { label, confidence } = parsePickCell(cell);
  const inner = el('span', 'pick-cell');
  const isFullSkip = confidence === NO_PICK_TOKEN && label === NO_PICK_TOKEN;
  if (isFullSkip) {
    const badge = el('span', 'pick-cell__confidence');
    const sr = el('span', 'visually-hidden');
    sr.textContent = 'No pick, skip';
    const ic = confidenceIconFromChar(NO_PICK_TOKEN);
    if (ic) badge.append(sr, ic);
    inner.append(badge);
    td.append(inner);
    return;
  }
  inner.append(document.createTextNode(label));
  if (confidence) {
    inner.append(document.createTextNode('\u00a0'));
    const badge = el('span', 'pick-cell__confidence');
    const sr = el('span', 'visually-hidden');
    sr.textContent = ` ${srConfidenceLabel(confidence)}`;
    const ic = confidenceIconFromChar(confidence);
    if (ic) badge.append(sr, ic);
    inner.append(badge);
  }
  td.append(inner);
}

function appendConfidenceCell(td: HTMLTableCellElement, symbol: string): void {
  td.classList.add('confidence-matrix-cell');
  const ch = symbol.trim() === '\u2014' ? '—' : symbol.trim();
  const icon = confidenceIconFromChar(ch);
  if (!icon) {
    td.textContent = symbol;
    return;
  }
  const wrap = el('span', 'confidence-badge');
  const sr = el('span', 'visually-hidden');
  sr.textContent = srConfidenceLabel(ch);
  wrap.append(sr, icon);
  td.append(wrap);
}

function appendTopicPositionCell(td: HTMLTableCellElement, raw: string): void {
  td.classList.add('topic-cell');
  td.setAttribute('title', raw);
  const wrap = el('span', 'topic-cell__inner');
  let s = raw.trim();
  if (s.startsWith('✓✓')) {
    wrap.append(iconTopicStrongSupport());
    s = s.slice(2).trimStart();
  } else if (s.startsWith('✓')) {
    wrap.append(iconTopicSupport());
    s = s.slice(1).trimStart();
  } else if (s.startsWith('✗')) {
    wrap.append(iconTopicOppose());
    s = s.slice(1).trimStart();
  } else if (s.startsWith('~')) {
    wrap.append(iconTopicMixed());
    s = s.slice(1).trimStart();
  } else if (s.startsWith('?')) {
    wrap.append(iconTopicUnknown());
    s = s.slice(1).trimStart();
  }
  if (s) wrap.append(document.createTextNode(s.startsWith(' ') ? s : ` ${s}`));
  td.append(wrap);
}

/** Position column: icon + stance, optional comparison line vs incumbent / field. */
function appendScorecardPositionCell(td: HTMLTableCellElement, row: ScorecardRow): void {
  appendTopicPositionCell(td, row.position);
  if (!row.comparison?.trim()) return;
  const note = el('p', 'scorecard__comparison');
  note.textContent = row.comparison.trim();
  td.append(note);
}

function renderConfidenceLegend(): HTMLElement {
  const div = el('div', 'confidence-legend');
  const t = el('p', 'confidence-legend__title');
  t.textContent = 'Confidence at a glance';
  const row = el('ul', 'confidence-legend__list');
  for (const def of CONFIDENCE_LEVEL_ROWS) {
    const li = el('li', 'confidence-legend__item');
    const icWrap = el('span', 'confidence-legend__icon');
    const ic = confidenceIconFromChar(def.symbol);
    if (ic) icWrap.append(ic);
    const txt = el('span');
    txt.innerHTML = `<strong>${def.title}</strong> — ${def.legendDetail}`;
    li.append(icWrap, txt);
    row.append(li);
  }
  div.append(t, row);
  return div;
}

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  attrs?: Record<string, string>,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  }
  return node;
}

/**
 * Renders counter-argument prose: leading `PL` / `AR/FF` tokens use matrix typology chips; `(Name ●)` confidence markers use matrix SVG icons.
 */
function appendCounterArgumentRich(li: HTMLElement, line: string): void {
  const pm = line.match(COUNTER_ARG_TY_PREFIX);
  if (pm?.[1] !== undefined && pm.index === 0) {
    appendCounterTypologyChips(li, pm[1]);
    li.append(document.createTextNode(' ('));
    appendCounterArgumentConfidencePart(li, line.slice(pm[0].length));
    return;
  }
  appendCounterArgumentConfidencePart(li, line);
}

/** Inline confidence SVGs after pick names inside parentheses. */
function appendCounterArgumentConfidencePart(li: HTMLElement, line: string): void {
  const re = /\s([●◐○\u2014])\)/gu;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line)) !== null) {
    li.append(document.createTextNode(line.slice(last, m.index)));
    const sym = m[1] ?? '';
    const wrap = el('span', 'race__counter-confidence');
    const ic = confidenceIconFromChar(sym);
    if (ic) wrap.append(ic);
    else wrap.textContent = sym;
    li.append(wrap);
    li.append(document.createTextNode(')'));
    last = re.lastIndex;
  }
  li.append(document.createTextNode(line.slice(last)));
}

function extLink(href: string, text: string, withIcon = false): HTMLAnchorElement {
  const a = el('a', withIcon ? 'link-external' : undefined, {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
  });
  if (withIcon) {
    const span = el('span', 'link-external__text');
    span.textContent = text;
    a.append(span, iconExternal());
  } else {
    a.textContent = text;
  }
  return a;
}

/**
 * Appends a note list item, turning bare `https://…` segments into external links (rest stays plain text).
 */
function appendCandidateNoteLine(li: HTMLLIElement, note: string): void {
  const re = /(https:\/\/[^\s]+)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(note)) !== null) {
    if (m.index > last) li.append(document.createTextNode(note.slice(last, m.index)));
    const href = m[1];
    if (href) li.append(extLink(href, href, true));
    last = re.lastIndex;
  }
  if (last < note.length) li.append(document.createTextNode(note.slice(last)));
}

/**
 * Collapsible “what changed” note for the current content refresh (progressive disclosure).
 */
function renderSiteUpdatesSection(lastContentUpdated: string): HTMLElement {
  const outer = el('details', 'site-updates', { id: 'site-updates' });
  const sum = el('summary', 'site-updates__summary');
  sum.textContent = `${lastContentUpdated} — what changed in this build`;
  const lede = el('p', 'site-updates__lede');
  lede.textContent =
    'A focused editorial and UX pass: judicial job lines, official portraits where campaigns publish them, and tighter mobile behavior for wide tables. Open a topic for specifics.';

  const stack = el('div', 'site-updates__stack');

  const dTitles = el('details', 'site-updates__panel');
  const sTitles = el('summary', 'site-updates__panel-summary');
  sTitles.textContent = 'San Diego Superior Court — current titles on each judge line';
  const pTitles = el('p', 'site-updates__panel-body');
  pTitles.textContent =
    'Role blurbs now match day-job titles instead of generic “Candidate” / “Unopposed” where we had a clear source: chief deputy city attorney (Ramirez), civil litigator (Gallo), chief deputy district attorney (Prior, unopposed), assistant chief deputy district attorney (Hauf, unopposed), Superior Court commissioner (Boucek, unopposed), senior deputy attorney general (Cleesattle), administrative law judge with civil-litigation background (Noakes), and estate & family law attorney plus law-school clinical director (D’Ambrogi).';
  dTitles.append(sTitles, pTitles);

  const dPhotos = el('details', 'site-updates__panel');
  const sPhotos = el('summary', 'site-updates__panel-summary');
  sPhotos.textContent = 'Campaign headshots in candidate tiles';
  const pPhotos = el('p', 'site-updates__panel-body');
  pPhotos.textContent =
    'Merged-in portrait URLs were refreshed for a long list of races (San Diego judicial primaries, county and city contests, and several statewide nonpartisan lines) so tiles favor each campaign’s primary photo asset when the host allows embedding. If a remote image fails in your browser, it is usually hotlink protection on that host—not a broken build.';
  dPhotos.append(sPhotos, pPhotos);

  const dLayout = el('details', 'site-updates__panel');
  const sLayout = el('summary', 'site-updates__panel-summary');
  sLayout.textContent = 'Layout, tables, and notes on phones';
  const ulLayout = el('ul', 'site-updates__panel-list');
  const layoutItems = [
    'Dropped the old fixed minimum page width so the guide reflows on narrow viewports.',
    'Wrapped wide typology and scorecard tables in horizontal scroll regions so you can pan without squashing text.',
    'Viewport meta uses safe-area insets for notched phones; candidate notes automatically link bare https:// URLs.',
  ];
  for (const t of layoutItems) {
    const li = el('li');
    li.textContent = t;
    ulLayout.append(li);
  }
  dLayout.append(sLayout, ulLayout);

  stack.append(dTitles, dPhotos, dLayout);
  outer.append(sum, lede, stack);
  return outer;
}

export function renderApp(root: HTMLElement, data: BallotData): void {
  root.replaceChildren();

  const banner = el('aside', 'scope-banner', { role: 'note' });
  banner.append(
    document.createTextNode(
      `If you're in ZIP ${data.meta.scopeZip} (${data.meta.scopeLabel}), here's a compact June 2, 2026 primary cheat sheet—not your registrar's mailing. Take the `,
    ),
    extLink(
      'https://www.pewresearch.org/politics/quiz/political-typology',
      'Pew Political Typology Quiz',
      true,
    ),
    document.createTextNode(
      ` once so the nine columns map to you; the blurbs stay short on purpose—contrast, not completeness. Officials: `,
    ),
    extLink('https://www.sdvote.com', 'San Diego County sample ballot', true),
    document.createTextNode(' · '),
    extLink('https://www.sos.ca.gov/elections', 'CA Secretary of State', true),
    document.createTextNode(
      `. ${data.meta.verificationNote} Content last updated ${data.meta.lastContentUpdated}.`,
    ),
  );

  const header = el('header', 'site-header');
  const brand = el('div', 'site-header__brand');
  const brandIcon = el('div', 'site-header__brand-icon');
  brandIcon.append(iconBallot());
  const h1 = el('h1', 'site-header__title');
  h1.textContent = data.meta.siteTitle;
  brand.append(brandIcon, h1);
  const sub = el('p', 'site-header__subtitle');
  sub.textContent = `June 2, 2026 California primary · ZIP ${data.meta.scopeZip} ballot · unofficial independent research — not the government, not legal advice.`;
  header.append(brand, sub, banner, renderSiteUpdatesSection(data.meta.lastContentUpdated));

  const nav = el('nav', 'toc-nav', { 'aria-label': 'On this page' });
  const tocTitle = el('h2', 'toc-nav__title');
  tocTitle.textContent = 'Jump to section';
  const tocList = el('ul', 'toc-nav__list');
  for (const c of data.categories) {
    const li = el('li');
    const a = el('a', 'toc-nav__link', { href: `#cat-${c.id}` });
    const ic = categoryIcon(c.id);
    a.append(ic, document.createTextNode(c.label));
    li.append(a);
    tocList.append(li);
  }
  nav.append(tocTitle, tocList);

  const main = el('main', undefined, { id: 'main-content' });
  main.append(
    renderIntroBlocks(),
    renderTypologyKey(data),
    renderMethodologySection(),
    renderTldr(data),
    renderRacesByCategory(data),
  );

  const footer = el('footer', 'site-footer');
  const fp = el('p');
  fp.append(
    document.createTextNode(
      'Not affiliated with the California Secretary of State, any county registrar, or any candidate committee. Cross-typology picks are ',
    ),
    extLink(
      'https://www.pewresearch.org/politics/2021/political-typology/',
      'inferences from Pew typology descriptions',
      true,
    ),
    document.createTextNode(
      ', not polling of those voter groups. Vote-by-mail rules and deadlines vary by county — use official sources.',
    ),
  );
  const fp2 = el('p');
  fp2.textContent =
    'Corrections: open an issue in the project repository if this site is published from GitHub.';
  footer.append(fp, fp2);

  root.append(header, nav, main, footer);
}

function renderIntroBlocks(): HTMLElement {
  const wrap = el('section', 'intro-grid');
  wrap.innerHTML = `
    <section class="intro-card" aria-labelledby="how-primary">
      <h2 id="how-primary"><span class="intro-card__heading-icon" aria-hidden="true"></span>How California’s primary works</h2>
      <p>California’s <strong>June 2, 2026</strong> statewide direct primary sends the <strong>top two</strong> finishers in most partisan contests to the November general election — regardless of party. Some offices (for example Superintendent of Public Instruction and many judicial races) use <strong>different</strong> advance rules; read your official voter guide for legal detail.</p>
      <p>Strategic “lockout” voting is usually a poor trade — see neutral discussion from 
        <a href="https://calmatters.org/california-voter-guide-2026/governor/" target="_blank" rel="noopener noreferrer">CalMatters</a>.</p>
      <p><a href="https://www.sos.ca.gov/elections" target="_blank" rel="noopener noreferrer">SOS elections hub</a> · 
         <a href="https://www.sdvote.com" target="_blank" rel="noopener noreferrer">sdvote.com</a> · 
         <a href="https://voterguide.sos.ca.gov/" target="_blank" rel="noopener noreferrer">Official CA voter guide</a></p>
    </section>
    <section class="intro-card" aria-labelledby="how-guide">
      <h2 id="how-guide"><span class="intro-card__heading-icon intro-card__heading-icon--secondary" aria-hidden="true"></span>How to use this guide</h2>
      <p>Each race includes <strong>web-condensed</strong> backgrounds, scorecards where available, money and endorsement notes, red-flag callouts, and a <strong>cross-typology recommendation row</strong> with confidence icons (see legend under the TL;DR matrix).</p>
      <p>Serious red-flag candidates are excluded from picks unless they are polling top-two and viable — then they are surfaced so voters are not surprised.</p>
    </section>
  `;
  wrap.querySelector('#how-primary .intro-card__heading-icon')?.append(iconBallot('icon icon--intro'));
  wrap.querySelector('#how-guide .intro-card__heading-icon')?.append(iconBook('icon icon--intro'));
  return wrap;
}

function renderTypologyKey(data: BallotData): HTMLElement {
  const sec = el('section', 'typology-key');
  const h2 = el('h2');
  h2.id = 'typology-key';
  h2.textContent = 'The nine Pew typology columns';
  const table = el('table', 'typology-key__table');
  table.setAttribute('aria-labelledby', 'typology-key');
  const thead = el('thead');
  const trh = el('tr');
  const thc = el('th', undefined, { scope: 'col' });
  thc.textContent = 'Code';
  const thn = el('th', undefined, { scope: 'col' });
  thn.textContent = 'Typology (Pew chapter)';
  trh.append(thc, thn);
  thead.append(trh);
  const tb = el('tbody');
  for (const t of data.typologies) {
    const tr = el('tr');
    const th = el('th', undefined, { scope: 'row' });
    th.append(typologyChip(t.code, { title: t.name }));
    const td = el('td');
    const profile = extLink(t.pewChapterUrl, t.name, true);
    td.append(profile, document.createTextNode(` — ${t.description}`));
    tr.append(th, td);
    tb.append(tr);
  }
  table.append(thead, tb);
  const scroll = el('div', 'table-scroll');
  scroll.append(table);
  sec.append(h2, scroll);
  return sec;
}

/**
 * Documents how cross-typology picks, confidence marks, scorecards, and exclusions are evaluated.
 */
function renderMethodologySection(): HTMLElement {
  const sec = el('section', 'methodology');
  sec.id = 'methodology';

  const h2 = el('h2', 'methodology__title');
  h2.textContent = 'Methodology';

  const lead = el('p', 'methodology__lede');
  lead.textContent =
    'This guide compresses public records, reporting, and questionnaires into skimmable cards. Nothing here is a poll of Pew typology groups; it is our best-effort translation of candidate positioning into the values language those chapters describe.';

  const hCross = el('h3', 'methodology__subhead');
  hCross.textContent = 'Cross-typology recommendations';

  const pCross = el('p', 'methodology__text');
  pCross.textContent =
    'Each partisan race includes a row of suggested names keyed to PL through FF. We ask which candidate is least mismatched with the policy and cultural instincts Pew summarizes for that bucket—then sanity-check against viability and red flags. When two candidates are both plausible, the write-up states the trade-off instead of pretending certainty.';

  const hConf = el('h3', 'methodology__subhead');
  hConf.textContent = 'Confidence symbols in the TL;DR matrix';

  const ulConf = el('ul', 'confidence-legend__list methodology__confidence-legend');
  for (const def of CONFIDENCE_LEVEL_ROWS) {
    const li = el('li', 'confidence-legend__item');
    const icWrap = el('span', 'confidence-legend__icon');
    const ic = confidenceIconFromChar(def.symbol);
    if (ic) icWrap.append(ic);
    const txt = el('span');
    txt.innerHTML = `<strong>${def.title}</strong> — ${def.methodologyDetail}`;
    li.append(icWrap, txt);
    ulConf.append(li);
  }

  const hScore = el('h3', 'methodology__subhead');
  hScore.textContent = 'Candidate scorecard markers';

  const pScore = el('p', 'methodology__text');
  pScore.textContent =
    'Where a scorecard appears, leading symbols compress the stance: ✓✓ strong support, ✓ support, ✗ oppose, ~ mixed or context-dependent, ? unclear from available sources. Text after the icon carries the nuance. When a second muted line appears under a cell, it contrasts that stance with the termed-out incumbent, the sitting officeholder, or other leading candidates in the same primary.';

  const hRed = el('h3', 'methodology__subhead');
  hRed.textContent = 'Red flags and picks';

  const pRed = el('p', 'methodology__text');
  pRed.textContent =
    'Candidates with disqualifying conduct or ethics findings can be omitted from typology picks when they are not realistically top-two. If polling suggests they could still advance, we leave the pick in the matrix but surface the warning in the profile so you are not blindsided.';

  const hPew = el('h3', 'methodology__subhead');
  hPew.textContent = "About Pew's groups vs. our cells";

  const pPew = el('p', 'methodology__text');
  pPew.append(
    document.createTextNode(
      'Pew built the nine profiles from national survey clustering; our cells map candidates to those profiles heuristically. Read their survey and construction notes in ',
    ),
    extLink(
      'https://www.pewresearch.org/politics/2021/11/09/political-typology-appendix-b/',
      'Appendix B: Typology group creation and analysis',
      true,
    ),
    document.createTextNode(' and '),
    extLink(
      'https://www.pewresearch.org/politics/2021/11/09/political-typology-appendix-a/',
      'Appendix A: Survey methodology',
      true,
    ),
    document.createTextNode(
      `—then treat our picks as shortcuts, not substitutes for their methodology or your county's official wording.`,
    ),
  );

  sec.append(h2, lead, hCross, pCross, hConf, ulConf, hScore, pScore, hRed, pRed, hPew, pPew);
  return sec;
}

function renderTldr(data: BallotData): HTMLElement {
  const sec = el('section', 'tldr');
  const h2 = el('h2');
  h2.id = 'tldr-matrix';
  h2.textContent = 'TL;DR matrix (all races × typologies)';
  const spectrum = el('div', 'typology-spectrum');
  spectrum.setAttribute('role', 'presentation');
  const spectrumLabel = el('p', 'typology-spectrum__label');
  spectrumLabel.textContent = 'Column colors: left-of-center (blue) → center → right-of-center (red).';
  const bar = el('div', 'typology-spectrum__bar');
  spectrum.append(spectrumLabel, bar);
  const legend = renderConfidenceLegend();
  const cap = el('p', 'table-caption');
  cap.id = 'tldr-cap';
  cap.textContent =
    'At-a-glance picks from the research guide. Each cell shows the recommended name plus a confidence icon (see legend above).';
  const wrap = el('div', 'table-scroll');
  const table = el('table', 'matrix-table');
  table.setAttribute('aria-labelledby', 'tldr-matrix');
  table.setAttribute('aria-describedby', 'tldr-cap');
  const thead = el('thead');
  const trh = el('tr');
  const thRace = el('th', 'matrix-col matrix-col--race', { scope: 'col' });
  thRace.textContent = 'Race';
  trh.append(thRace);
  for (const code of TY_CODES) {
    const th = el('th', `matrix-col matrix-col--${code}`, { scope: 'col' });
    const title = data.typologies.find((t) => t.code === code)?.name ?? code;
    th.append(typologyChip(code, { title }));
    trh.append(th);
  }
  thead.append(trh);
  const tb = el('tbody');
  for (const row of data.tldrRows) {
    const tr = el('tr');
    const th = el('th', 'matrix-col matrix-col--race', { scope: 'row' });
    const inner = el('a', undefined, { href: `#race-${row.raceId}` });
    inner.textContent = row.label;
    th.append(inner);
    tr.append(th);
    for (const code of TY_CODES) {
      const td = el('td', `matrix-col matrix-col--${code}`);
      fillPickCell(td, row.cells[code] ?? '—');
      tr.append(td);
    }
    tb.append(tr);
  }
  table.append(thead, tb);
  wrap.append(table);
  sec.append(h2, spectrum, legend, cap, wrap);
  return sec;
}

function renderRacesByCategory(data: BallotData): DocumentFragment {
  const frag = document.createDocumentFragment();
  for (const cat of data.categories) {
    const races = data.races.filter((r) => r.categoryId === cat.id);
    if (races.length === 0) continue;
    const section = el('section', 'race-category');
    section.id = `cat-${cat.id}`;
    const h2 = el('h2', 'race-category__title');
    const iconWrap = el('span', 'race-category__icon');
    iconWrap.append(categoryIcon(cat.id));
    h2.append(iconWrap, document.createTextNode(cat.label));
    section.append(h2);
    for (const race of races) {
      section.append(renderRace(race));
    }
    frag.append(section);
  }
  return frag;
}

function renderRace(race: Race): HTMLElement {
  const details = el('details', 'race');
  details.id = `race-${race.id}`;
  const summary = el('summary', 'race__summary');
  const chev = iconChevron('icon icon--chevron race__chevron');
  const sumText = el('span', 'race__summary-text');
  const titleEl = el('span', 'race__summary-title');
  titleEl.textContent = race.title;
  sumText.append(titleEl);
  if (race.seatContext) {
    sumText.append(document.createTextNode(' · '));
    const seatEl = el('span', 'race__summary-seat');
    seatEl.textContent = race.seatContext;
    sumText.append(seatEl);
  }
  summary.append(chev, sumText);
  details.append(summary);

  const body = el('div', 'race__body');
  if (race.stakesParagraphs?.length) {
    const stakeHead = el('h3', 'race__subhead race__subhead--stakes');
    stakeHead.textContent = 'What’s at stake';
    body.append(stakeHead);
    for (const p of race.stakesParagraphs) {
      const para = el('p', 'race__stakes');
      para.textContent = p;
      body.append(para);
    }
  }
  for (const p of race.introParagraphs) {
    const para = el('p', 'race__context');
    para.textContent = p;
    body.append(para);
  }

  body.append(renderCrossTable(race));

  if (race.kind === 'measure' && race.measure) {
    body.append(renderMeasure(race.measure));
  } else {
    for (const c of race.candidates) {
      body.append(renderCandidate(c));
    }
  }

  if (race.counterArguments?.length) {
    const h3 = el('h3', 'race__subhead');
    h3.textContent = 'Counter-arguments';
    body.append(h3);
    const ul = el('ul', 'race__counter');
    for (const line of race.counterArguments) {
      const li = el('li');
      appendCounterArgumentRich(li, line);
      ul.append(li);
    }
    body.append(ul);
  }

  details.append(body);
  return details;
}

function renderCrossTable(race: Race): HTMLElement {
  const h3 = el('h3', 'race__subhead');
  h3.textContent = 'Cross-typology picks';
  const table = el('table', 'matrix-table matrix-table--compact');
  const cap = el('caption', 'visually-hidden');
  cap.textContent = `Recommendations for ${race.title}`;
  table.append(cap);
  const thead = el('thead');
  const trh = el('tr');
  for (const text of ['Typology', 'Pick', 'Confidence', 'Rationale']) {
    const th = el('th', undefined, { scope: 'col' });
    th.textContent = text;
    trh.append(th);
  }
  thead.append(trh);
  const tb = el('tbody');
  for (const row of race.crossTypology) {
    const tr = el('tr');
    const th = el('th', undefined, { scope: 'row' });
    th.append(typologyChip(row.typology));
    const td1 = el('td');
    td1.textContent = row.pick;
    const td2 = el('td');
    appendConfidenceCell(td2, row.confidence);
    const td3 = el('td');
    td3.textContent = row.rationale;
    tr.append(th, td1, td2, td3);
    tb.append(tr);
  }
  table.append(thead, tb);
  const scroll = el('div', 'table-scroll');
  scroll.append(table);
  const wrap = el('div', 'race__cross');
  wrap.append(h3, scroll);
  return wrap;
}

function renderMeasure(m: MeasureBlock): HTMLElement {
  const art = el('article', 'measure');
  const hq = el('h3', 'race__subhead');
  hq.textContent = 'Measure summary';
  const pq = el('p', 'measure__question');
  pq.innerHTML = `<strong>Question:</strong> ${escapeHtml(m.question)}`;
  art.append(hq, pq);
  if (m.voterConnection?.length) {
    const hv = el('h4', 'measure__voter-heading');
    hv.textContent = 'Why you’re voting on this';
    const ulv = el('ul', 'measure__voter-list');
    for (const b of m.voterConnection) {
      const li = el('li');
      li.textContent = b;
      ulv.append(li);
    }
    art.append(hv, ulv);
  }
  const mech = el('h4');
  mech.textContent = 'Key facts (amounts & rules)';
  const ulm = el('ul');
  for (const b of m.mechanismBullets) {
    const li = el('li');
    li.textContent = b;
    ulm.append(li);
  }
  const hf = el('h4');
  hf.textContent = m.argumentsForHeading ?? 'Arguments for';
  const ulf = el('ul');
  for (const b of m.argumentsFor) {
    const li = el('li');
    li.textContent = b;
    ulf.append(li);
  }
  const ha = el('h4');
  ha.textContent = m.argumentsAgainstHeading ?? 'Arguments against';
  const ula = el('ul');
  for (const b of m.argumentsAgainst) {
    const li = el('li');
    li.textContent = b;
    ula.append(li);
  }
  art.append(mech, ulm, hf, ulf, ha, ula);
  if (m.readingLinks?.length) {
    const hr = el('h4');
    hr.textContent = 'Further reading';
    const ulr = el('ul', 'measure__reading-list');
    for (const link of m.readingLinks) {
      ulr.append(renderMeasureReadingItem(link));
    }
    const note = el('p', 'measure__reading-note');
    note.textContent =
      'Links include official city fiscal analysis, local news explainers, and organized support or opposition—judge each on its own.';
    art.append(hr, ulr, note);
  }
  return art;
}

function renderMeasureReadingItem(link: MeasureReadingLink): HTMLLIElement {
  const li = el('li');
  li.append(extLink(link.url, link.label, true));
  return li;
}

function appendRedFlagListItem(li: HTMLLIElement, bullet: RedFlagBullet): void {
  if (typeof bullet === 'string') {
    li.textContent = bullet;
    return;
  }
  li.append(document.createTextNode(bullet.text));
  const sources = bullet.sources;
  if (!sources?.length) return;
  li.append(document.createTextNode(' '));
  const srcWrap = el('span', 'candidate-card__flag-sources');
  srcWrap.append(document.createTextNode(sources.length > 1 ? 'Sources: ' : 'Source: '));
  for (let i = 0; i < sources.length; i++) {
    if (i > 0) srcWrap.append(document.createTextNode('; '));
    const s = sources[i];
    if (s) srcWrap.append(extLink(s.url, s.label, true));
  }
  li.append(srcWrap);
}

/** Accessible label for `party` codes in ballot data. */
function partyMarkAriaLabel(party: string): string {
  switch (party.trim()) {
    case 'D':
      return 'Democratic';
    case 'R':
      return 'Republican';
    case 'Green':
      return 'Green Party';
    case 'PF':
      return 'Peace and Freedom';
    case 'L':
      return 'Libertarian';
    case 'NP':
      return 'No party preference';
    default:
      return party;
  }
}

/** Minimal party glyph (donkey, elephant, etc.), or “NP” for no party preference. */
function partyMarkElement(party: string): HTMLElement {
  const p = party.trim();
  const label = partyMarkAriaLabel(p);
  if (p === 'NP') {
    const span = el('span', 'party-mark party-mark--np');
    span.textContent = 'NP';
    span.setAttribute('title', label);
    span.setAttribute('aria-label', `${label}, NP`);
    return span;
  }
  let mod = 'party-mark--unknown';
  if (p === 'D') mod = 'party-mark--d';
  else if (p === 'R') mod = 'party-mark--r';
  else if (p === 'Green') mod = 'party-mark--green';
  else if (p === 'PF') mod = 'party-mark--pf';
  else if (p === 'L') mod = 'party-mark--l';
  const span = el('span', `party-mark ${mod}`);
  span.setAttribute('role', 'img');
  span.setAttribute('aria-label', label);
  span.setAttribute('title', label);
  span.append(partyGlyphIcon(p));
  return span;
}

function renderCandidate(c: Candidate): HTMLElement {
  const card = el('article', 'candidate-card');
  if (c.redFlagCallout || (c.redFlags?.length ?? 0) > 0) card.classList.add('candidate-card--alert');

  const media = el('div', 'candidate-card__media');
  const initials = c.name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .join('')
    .slice(0, 3)
    .toUpperCase();
  const base = import.meta.env.BASE_URL;
  if (c.photoSlug) {
    const img = el('img', 'candidate-card__photo', {
      src: `${base}images/candidates/${c.photoSlug}.webp`,
      alt: '',
      width: '96',
      height: '96',
      loading: 'lazy',
    });
    img.addEventListener('error', () => {
      img.replaceWith(placeholderAvatar(initials));
    });
    media.append(img);
  } else if (c.headshotUrl) {
    const img = el('img', 'candidate-card__photo', {
      src: c.headshotUrl,
      alt: '',
      width: '96',
      height: '96',
      loading: 'lazy',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer',
    });
    img.addEventListener('error', () => {
      img.replaceWith(placeholderAvatar(initials));
    });
    media.append(img);
  } else {
    media.append(placeholderAvatar(initials));
  }

  const text = el('div', 'candidate-card__text');
  const h3 = el('h3', 'candidate-card__name');
  const nameText = el('span', 'candidate-card__name-text');
  nameText.textContent = c.name;
  h3.append(nameText, document.createTextNode('\u00a0'), partyMarkElement(c.party));
  const role = el('p', 'candidate-card__role');
  if (c.campaignUrl) {
    const a = extLink(c.campaignUrl, c.role, false);
    a.classList.add('candidate-card__role-link');
    role.append(a);
  } else {
    role.textContent = c.role;
  }
  text.append(h3, role);
  for (const para of c.bio) {
    const p = el('p');
    p.textContent = para;
    text.append(p);
  }
  if (c.scorecard?.length) {
    const hs = el('h4', 'candidate-card__sub');
    hs.textContent = 'Topical scorecard';
    const tbl = el('table', 'scorecard');
    const cap = el('caption', 'visually-hidden');
    cap.textContent = `Scorecard for ${c.name}`;
    tbl.append(cap);
    const thead = el('thead');
    const tr = el('tr');
    for (const lab of ['Topic', 'Position']) {
      const th = el('th', undefined, { scope: 'col' });
      th.textContent = lab;
      tr.append(th);
    }
    thead.append(tr);
    const tb = el('tbody');
    for (const row of c.scorecard) {
      const trow = el('tr');
      const th = el('th', undefined, { scope: 'row' });
      th.textContent = row.topic;
      const td = el('td');
      appendScorecardPositionCell(td, row);
      trow.append(th, td);
      tb.append(trow);
    }
    tbl.append(thead, tb);
    const scoreScroll = el('div', 'table-scroll');
    scoreScroll.append(tbl);
    text.append(hs, scoreScroll);
  }
  if (c.money) {
    const pm = el('p', 'candidate-card__meta');
    pm.innerHTML = `<strong>Money:</strong> ${escapeHtml(c.money)}`;
    text.append(pm);
  }
  if (c.endorsements) {
    const pe = el('p', 'candidate-card__meta');
    pe.innerHTML = `<strong>Endorsements:</strong> ${escapeHtml(c.endorsements)}`;
    text.append(pe);
  }
  if (c.redFlags?.length) {
    const rf = el('div', 'candidate-card__flags');
    const rh = el('h4', 'candidate-card__flags-heading');
    const flagIc = iconRedFlag('icon icon--red-flag candidate-card__flags-heading-icon');
    flagIc.setAttribute('aria-hidden', 'true');
    rh.append(flagIc, document.createTextNode(' Red flags'));
    const ul = el('ul');
    for (const f of c.redFlags) {
      const li = el('li');
      appendRedFlagListItem(li, f);
      ul.append(li);
    }
    rf.append(rh, ul);
    text.append(rf);
  }
  if (c.notes?.length) {
    const nf = el('div', 'candidate-card__notes');
    const nh = el('h4', 'candidate-card__sub');
    nh.textContent = 'Notes';
    const ul = el('ul');
    for (const n of c.notes) {
      const li = el('li');
      appendCandidateNoteLine(li, n);
      ul.append(li);
    }
    nf.append(nh, ul);
    text.append(nf);
  }

  card.append(media, text);
  return card;
}

function placeholderAvatar(initials: string): HTMLElement {
  const div = el('div', 'candidate-card__placeholder');
  div.setAttribute('role', 'img');
  div.setAttribute('aria-label', `No photo; initials ${initials}`);
  div.textContent = initials;
  return div;
}

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
