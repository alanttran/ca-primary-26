/** Candidate id → English Wikipedia REST title (underscore form). */
export const WIKI_BY_CANDIDATE_ID = {
  becerra: 'Xavier_Becerra',
  porter: 'Katie_Porter',
  villaraigosa: 'Antonio_Villaraigosa',
  steyer: 'Tom_Steyer',
  hilton: 'Steve_Hilton',
  bianco: 'Chad_Bianco',
  ma: 'Fiona_Ma',
  fryday: 'Josh_Fryday',
  tubbs: 'Michael_Tubbs',
  romero: 'Gloria_Romero_(politician)',
  jones: 'Brian_Jones_(politician)',
  weber: 'Shirley_Weber',
  wagner: 'Donald_P._Wagner',
  cohen: 'Malia_Cohen',
  kounalakis: 'Eleni_Kounalakis',
  caballero: 'Anna_Caballero',
  bonta: 'Rob_Bonta',
  allen: 'Ben_Allen_(California_politician)',
  bradford: 'Steven_Bradford',
  kim: 'Jane_Kim',
  umberg: 'Tom_Umberg',
  peters: 'Scott_Peters_(politician)',
  elliott: 'Mara_Elliott',
  ward: 'Chris_Ward_(California_politician)',
  muratsuchi: 'Al_Muratsuchi',
  anderson: 'Joel_Anderson',
  lee: 'Kent_Lee_(politician)',
};

export function wikiSummaryUrl(title) {
  return `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
}
