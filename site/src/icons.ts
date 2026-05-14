import type { TypologyCode } from './types/ballot-types';

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Small inline SVG icon; uses currentColor for fills.
 */
function svgIcon(viewBox: string, innerHtml: string, className = 'icon'): SVGElement {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', viewBox);
  svg.setAttribute('class', className);
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = innerHtml;
  return svg;
}

export function iconBallot(className = 'icon icon--lg'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M4 4h16v2H4V4zm0 4h10v12H4V8zm12 0h4v12h-4V8zm-8 2v2h2v-2H8zm0 4v2h2v-2h-2zm4-4v2h2v-2h-2zm0 4v2h2v-2h-2z"/>',
    className,
  );
}

export function iconChevron(className = 'icon icon--chevron'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M9 6l6 6-6 6V6z"/>',
    className,
  );
}

export function iconExternal(className = 'icon icon--inline'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2v-7h-2v7zm0-9h2V3h-8v2h4.59L10 10.59 11.41 12 17 6.41V10z"/>',
    className,
  );
}

export function iconCapitol(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M12 3L2 9h2v11h6v-6h4v6h6V9h2L12 3zm-6 9h4v2H6v-2zm8 0h4v2h-4v-2z"/>',
    className,
  );
}

export function iconFlag(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M14 4l-1 2H5v11h2v-4h5l1-2h6V4h-5zm-7 3h4v2H7V7zm0 4h4v2H7v-2z"/>',
    className,
  );
}

export function iconGavel(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M2 20l5-5 2 2-5 5H2v-2zm7-7l9-9 2 2-9 9-2-2zm-1 1l2 2-1 1-2-2 1-1zm3-3l2 2-7 7-2-2 7-7z"/>',
    className,
  );
}

export function iconEducation(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9 12 3zm0 2.24L18.21 9 12 11.82 5.79 9 12 5.24zM5 13.5l6 3.3v-4.8l-6-3.3v4.8zm14 0v-4.8l-6 3.3v4.8l6-3.3z"/>',
    className,
  );
}

export function iconMapPin(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>',
    className,
  );
}

export function iconClipboard(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M16 4h-1V2H9v2H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H8V6h8v14zM10 8h4v2h-4V8zm0 4h4v2h-4v-2zm0 4h2v2h-2v-2z"/>',
    className,
  );
}

export function iconBook(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M18 2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12V2zm-7 2h5v12l-2.5-1.5L11 16V4z"/>',
    className,
  );
}

export function categoryIcon(categoryId: string): SVGElement {
  switch (categoryId) {
    case 'statewide-partisan':
      return iconCapitol();
    case 'federal':
      return iconFlag();
    case 'state-leg':
      return iconGavel();
    case 'statewide-nonpartisan':
      return iconEducation();
    case 'local-sd':
      return iconMapPin();
    case 'measures':
      return iconClipboard();
    default:
      return iconBook();
  }
}

/** Pew column label as a colored chip (blue → red spectrum). */
export function typologyChip(code: TypologyCode, opts?: { title?: string }): HTMLSpanElement {
  const span = document.createElement('span');
  span.className = `typology-chip typology-chip--${code}`;
  span.textContent = code;
  if (opts?.title) span.title = opts.title;
  return span;
}

/** Confidence: high — three solid bars. */
export function iconConfidenceHigh(className = 'icon-confidence icon-confidence--high'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<rect x="2" y="3" width="2.75" height="10" rx="0.5" fill="currentColor"/><rect x="6.625" y="3" width="2.75" height="10" rx="0.5" fill="currentColor"/><rect x="11.25" y="3" width="2.75" height="10" rx="0.5" fill="currentColor"/>',
    className,
  );
}

/** Confidence: medium — strong + mid + mid bars. */
export function iconConfidenceMed(className = 'icon-confidence icon-confidence--med'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<rect x="2" y="4" width="2.75" height="9" rx="0.5" fill="currentColor"/><rect x="6.625" y="6" width="2.75" height="7" rx="0.5" fill="currentColor"/><rect x="11.25" y="7" width="2.75" height="6" rx="0.5" fill="currentColor"/>',
    className,
  );
}

/** Confidence: low — one tall bar + two short stubs. */
export function iconConfidenceLow(className = 'icon-confidence icon-confidence--low'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<rect x="2" y="6" width="2.75" height="7" rx="0.5" fill="currentColor"/><rect x="6.625" y="11" width="2.75" height="2" rx="0.5" fill="currentColor"/><rect x="11.25" y="11" width="2.75" height="2" rx="0.5" fill="currentColor"/>',
    className,
  );
}

/** Confidence / skip — flat line (no pick). */
export function iconConfidenceSkip(className = 'icon-confidence icon-confidence--skip'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<rect x="2" y="7" width="12" height="2" rx="0.5" fill="currentColor"/>',
    className,
  );
}

export function confidenceIconFromChar(
  c: string,
  className = 'icon-confidence',
): SVGElement | null {
  switch (c) {
    case '●':
      return iconConfidenceHigh(className);
    case '◐':
      return iconConfidenceMed(className);
    case '○':
      return iconConfidenceLow(className);
    case '—':
      return iconConfidenceSkip(className);
    default:
      return null;
  }
}

/** Topic scorecard: supports / affirms (✓). */
export function iconTopicSupport(className = 'topic-icon topic-icon--support'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M3.25 8.35l2.6 2.6L12.85 3.85" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    className,
  );
}

/** Strong support (✓✓): paired checks. */
export function iconTopicStrongSupport(className = 'topic-icon topic-icon--strong'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M2 8.5l2.2 2.2L7.8 4.5M8.2 8.5l2.2 2.2L14 4.5" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>',
    className,
  );
}

/** Oppose / against (✗). */
export function iconTopicOppose(className = 'topic-icon topic-icon--oppose'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M4.1 4.1l7.8 7.8M11.9 4.1l-7.8 7.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    className,
  );
}

/** Mixed / nuanced (~). */
export function iconTopicMixed(className = 'topic-icon topic-icon--mixed'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M2.25 6.25c1.6-1.35 3.1-.9 4.75 0s3.15 1.35 4.75 0 3.1-.9 4.75 0" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/><path d="M2.25 9.75c1.6-1.35 3.1-.9 4.75 0s3.15 1.35 4.75 0 3.1-.9 4.75 0" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/>',
    className,
  );
}

/** Unknown / unclear (?). */
export function iconTopicUnknown(className = 'topic-icon topic-icon--unknown'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M8 11.4v.15M5.85 5.9a2.35 2.35 0 014.3 1.2c0 1.05-.8 1.6-1.75 2.45" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round"/>',
    className,
  );
}
