import type { Lang } from '../../i18n/locales.ts';
import { enProfile } from './locales/en.ts';
import { esProfile } from './locales/es.ts';
import { ptProfile } from './locales/pt.ts';
import type { CvProfile } from './types.ts';

const profiles: Record<Lang, CvProfile> = { es: esProfile, en: enProfile, pt: ptProfile };

export function getProfile(lang: Lang): CvProfile {
  return profiles[lang];
}

export type { CvEntry, CvProfile, SkillGroup } from './types.ts';
