import { useI18n } from '../i18n/I18nContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        className={lang === 'fr' ? 'active' : ''}
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
      <button
        className={lang === 'ar' ? 'active' : ''}
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
      >
        العربية
      </button>
    </div>
  )
}