import type { TypologyDefinition } from '../types/ballot-types';

export const TYPOLOGIES: TypologyDefinition[] = [
  { code: 'PL', name: 'Progressive Left', description: 'Young, secular, very liberal, pro-systemic-change' },
  { code: 'EL', name: 'Establishment Liberals', description: 'Compromise-friendly Biden Democrats (guide origin profile)' },
  { code: 'DM', name: 'Democratic Mainstays', description: 'Older, more religious, racially diverse moderate Dems' },
  { code: 'OL', name: 'Outsider Left', description: 'Young, frustrated, less party-loyal liberals' },
  { code: 'SS', name: 'Stressed Sideliners', description: 'Disengaged, mixed politics, financially anxious' },
  { code: 'AR', name: 'Ambivalent Right', description: 'Moderate Republicans, anti-Trump-leaning' },
  { code: 'PR', name: 'Populist Right', description: 'Working-class, anti-elite, MAGA-adjacent' },
  { code: 'CC', name: 'Committed Conservatives', description: 'Traditional Reagan-Republican business conservatives' },
  { code: 'FF', name: 'Faith and Flag Conservatives', description: 'Religious right, MAGA core' },
];
