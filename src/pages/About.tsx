import { useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'
import Disclaimer from '../components/Disclaimer'

export default function About() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = `${t.meta.aboutTitle} — Sihati`
  }, [t])

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t.about.title}</h1>
      </div>

      <div className="profile" style={{ maxWidth: 780 }}>
        <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.7 }}>{t.about.body}</p>

        <div className="profile-about">
          <h2>{t.about.futureTitle}</h2>
          <ul style={{ paddingInlineStart: 20, color: 'var(--text-muted)' }}>
            {t.about.futureItems.map((item) => (
              <li key={item} style={{ marginBlockEnd: 6 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Disclaimer />
    </div>
  )
}