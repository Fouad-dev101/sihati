import { fr, type Translations } from './fr'
import { ar } from './ar'

export type Lang = 'fr' | 'ar'

export const translations: Record<Lang, Translations> = { fr, ar }

export const defaultLang: Lang = 'fr'

export { type Translations }