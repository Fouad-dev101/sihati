import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, defaultLang, type Lang, type Translations } from '../locales'

interface I18nValue {
  lang: Lang
  t: Translations
  dir: 'ltr' | 'rtl'
  setLang: (l: Lang) => void
  toggleLang: () => void
}

const I18nContext = createContext<I18nValue | null>(null)
const STORAGE_KEY = 'lang'

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return defaultLang
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'ar' || v === 'fr') return v
  } catch {
    /* ignore */
  }
  return defaultLang
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  // Sync <html lang> and <html dir>
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'fr' ? 'ar' : 'fr')),
    []
  )

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      t: translations[lang],
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      setLang,
      toggleLang,
    }),
    [lang, setLang, toggleLang]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}