import { useI18n } from '../i18n/I18nContext'

export default function Disclaimer() {
  const { t } = useI18n()
  return (
    <div className="disclaimer" role="note">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <p style={{ margin: 0 }}>{t.disclaimer}</p>
    </div>
  )
}