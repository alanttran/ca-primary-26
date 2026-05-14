import type { BallotData, Candidate, MeasureBlock, Race, TypologyCode } from './types/ballot-types';
import { BALLOT_CATEGORIES, BALLOT_META } from './data/meta';
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
  iconConfidenceHigh,
  iconConfidenceLow,
  iconConfidenceMed,
  iconConfidenceSkip,
  iconTopicMixed,
  iconTopicOppose,
  iconTopicStrongSupport,
  iconTopicSupport,
  iconTopicUnknown,
  typologyChip,
} from './icons.ts';
import { parsePickCell } from './parse-pick-cell.ts';

export const ballotData: BallotData = {
  meta: BALLOT_META,
  typologies: TYPOLOGIES,
  categories: BALLOT_CATEGORIES,
  tldrRows: TLDR_ROWS,
  races: [...RACES_STATEWIDE, ...RACES_REST],
};

const TY_CODES: TypologyCode[] = ['PL', 'EL', 'DM', 'OL', 'SS', 'AR', 'PR', 'CC', 'FF'];

function srConfidenceLabel(c: string): string {
  switch (c.trim()) {
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
  const ch = symbol.trim();
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

function renderConfidenceLegend(): HTMLElement {
  const div = el('div', 'confidence-legend');
  const t = el('p', 'confidence-legend__title');
  t.textContent = 'Confidence at a glance';
  const row = el('ul', 'confidence-legend__list');
  const items: [string, string, () => SVGElement][] = [
    ['High', 'Clear typology match', iconConfidenceHigh],
    ['Medium', 'Defensible trade-offs', iconConfidenceMed],
    ['Low', 'Uncertain call', iconConfidenceLow],
    ['Skip', 'No pick / skip race', iconConfidenceSkip],
  ];
  for (const [title, desc, fn] of items) {
    const li = el('li', 'confidence-legend__item');
    const icWrap = el('span', 'confidence-legend__icon');
    icWrap.append(fn());
    const txt = el('span');
    txt.innerHTML = `<strong>${title}</strong> — ${desc}`;
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

export function renderApp(root: HTMLElement, data: BallotData): void {
  root.replaceChildren();

  const banner = el('aside', 'scope-banner', { role: 'note' });
  banner.append(
    document.createTextNode(
      `${data.meta.siteTitle} — modeled for ZIP ${data.meta.scopeZip} (${data.meta.scopeLabel}). `,
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
  header.append(brand, sub, banner);

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
  thn.textContent = 'Typology';
  trh.append(thc, thn);
  thead.append(trh);
  const tb = el('tbody');
  for (const t of data.typologies) {
    const tr = el('tr');
    const th = el('th', undefined, { scope: 'row' });
    th.append(typologyChip(t.code, { title: t.name }));
    const td = el('td');
    td.textContent = `${t.name} — ${t.description}`;
    tr.append(th, td);
    tb.append(tr);
  }
  table.append(thead, tb);
  sec.append(h2, table);
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
  sumText.textContent = race.title;
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
      li.textContent = line;
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
  const wrap = el('div', 'race__cross');
  wrap.append(h3, table);
  return wrap;
}

function renderMeasure(m: MeasureBlock): HTMLElement {
  const art = el('article', 'measure');
  const hq = el('h3', 'race__subhead');
  hq.textContent = 'Measure summary';
  const pq = el('p', 'measure__question');
  pq.innerHTML = `<strong>Question:</strong> ${escapeHtml(m.question)}`;
  art.append(hq, pq);
  const mech = el('h4');
  mech.textContent = 'Mechanism';
  const ulm = el('ul');
  for (const b of m.mechanismBullets) {
    const li = el('li');
    li.textContent = b;
    ulm.append(li);
  }
  const hf = el('h4');
  hf.textContent = 'Arguments for';
  const ulf = el('ul');
  for (const b of m.argumentsFor) {
    const li = el('li');
    li.textContent = b;
    ulf.append(li);
  }
  const ha = el('h4');
  ha.textContent = 'Arguments against';
  const ula = el('ul');
  for (const b of m.argumentsAgainst) {
    const li = el('li');
    li.textContent = b;
    ula.append(li);
  }
  art.append(mech, ulm, hf, ulf, ha, ula);
  return art;
}

function renderCandidate(c: Candidate): HTMLElement {
  const card = el('article', 'candidate-card');
  if (c.redFlagCallout) card.classList.add('candidate-card--alert');

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
  } else {
    media.append(placeholderAvatar(initials));
  }

  const text = el('div', 'candidate-card__text');
  const h3 = el('h3', 'candidate-card__name');
  h3.textContent = `${c.name} (${c.party})`;
  const role = el('p', 'candidate-card__role');
  role.textContent = c.role;
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
      appendTopicPositionCell(td, row.position);
      trow.append(th, td);
      tb.append(trow);
    }
    tbl.append(thead, tb);
    text.append(hs, tbl);
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
    const rh = el('h4');
    rh.textContent = 'Red flags / notes';
    const ul = el('ul');
    for (const f of c.redFlags) {
      const li = el('li');
      li.textContent = f;
      ul.append(li);
    }
    rf.append(rh, ul);
    text.append(rf);
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
