export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

/**
 * Northern hemisphere meteorological seasons.
 * Spring: Mar–May · Summer: Jun–Aug · Autumn: Sep–Nov · Winter: Dec–Feb
 */
export function getSeason(date: Date = new Date()): Season {
  const m = date.getUTCMonth(); // 0-indexed
  if (m >= 2 && m <= 4) return 'spring';
  if (m >= 5 && m <= 7) return 'summer';
  if (m >= 8 && m <= 10) return 'autumn';
  return 'winter';
}
