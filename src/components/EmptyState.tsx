import { useI18n } from '../i18n/I18nContext'

export default function EmptyState() {
  const { t } = useI18n()
  return (
    <div className="empty" role="status">
      <div className="empty-icon" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <h3>{t.directory.emptyTitle}</h3>
      <p>{t.directory.emptyBody}</p>
    </div>
  )
}