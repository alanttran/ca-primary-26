/**
 * Parse TL;DR matrix cells like "Porter ●" or "— ○" into label + trailing confidence symbol.
 */
export function parsePickCell(cell: string): { label: string; confidence: '●' | '◐' | '○' | null } {
  const t = cell.trim();
  const m = t.match(/^(.*?)\s+([●◐○])\s*$/u);
  if (m?.[1] !== undefined && m[2]) {
    const sym = m[2] as '●' | '◐' | '○';
    if (sym === '●' || sym === '◐' || sym === '○') return { label: m[1].trim(), confidence: sym };
  }
  return { label: t, confidence: null };
}
