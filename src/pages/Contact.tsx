import { useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'

export default function Contact() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = `${t.meta.contactTitle} — Sihati`
  }, [t])

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t.contact.title}</h1>
        <p>{t.contact.body}</p>
      </div>

      <div className="profile" style={{ maxWidth: 640 }}>
        <div className="info-item">
          <div className="label">Email</div>
          <div className="value">
            <a
              href={`mailto:${t.contact.email}`}
              style={{ color: 'var(--brand)', fontWeight: 600 }}
            >
              {t.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}