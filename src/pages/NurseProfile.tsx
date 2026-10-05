import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { getNurseById } from '../data/nurses'
import Disclaimer from '../components/Disclaimer'

export default function NurseProfile() {
  const { id } = useParams<{ id: string }>()
  const { lang, t } = useI18n()
  const nurse = id ? getNurseById(id) : undefined

  useEffect(() => {
    document.title = nurse ? `${nurse.name} — DalilSehati` : 'DalilSehati'
  }, [nurse])

  if (!nurse) {
    return (
      <div className="container page">
        <div className="empty">
          <h3>{t.nurses.emptyTitle}</h3>
          <p>{t.nurses.emptyBody}</p>
          <Link to="/nurses" className="btn btn-primary" style={{ marginBlockStart: 18 }}>
            {t.nurses.backToList}
          </Link>
        </div>
      </div>
    )
  }

  const services = lang === 'ar' ? nurse.servicesAr ?? nurse.services : nurse.services
  const description =
    lang === 'ar' ? nurse.descriptionAr ?? nurse.description : nurse.description

  const telHref = `tel:${nurse.phone.replace(/\s/g, '')}`
  const initials = nurse.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <div className="container page">
      <Link
        to="/nurses"
        className="link-arrow"
        style={{ marginBlockEnd: 16, display: 'inline-flex' }}
      >
        ← {t.nurses.backToList}
      </Link>

      <div className="profile">
        <div className="profile-head">
          <div className="profile-avatar" aria-hidden="true">
            {nurse.image ? <img src={nurse.image} alt="" /> : initials}
          </div>
          <div>
            <h1>{nurse.name}</h1>
            <span className="doctor-specialty">{t.nav.nurses}</span>
            <p className="sub" style={{ marginBlockStart: 8 }}>
              📍 {nurse.neighborhood ? `${nurse.neighborhood}, ${nurse.city}` : nurse.city}
            </p>
          </div>
        </div>

        <div className="profile-actions">
          <a href={telHref} className="btn btn-primary btn-lg">
            📞 {t.nurses.call} — <span dir="ltr">{nurse.phone}</span>
          </a>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <div className="label">{t.doctor.phone}</div>
            <div className="value" dir="ltr">{nurse.phone}</div>
          </div>

          {nurse.available247 && (
            <div className="info-item">
              <div className="label">{t.nurses.available247}</div>
              <div className="value">✓</div>
            </div>
          )}

          {nurse.openingHours && (
            <div className="info-item">
              <div className="label">{t.doctor.hours}</div>
              <div className="value">{nurse.openingHours}</div>
            </div>
          )}

          {services && services.length > 0 && (
            <div className="info-item">
              <div className="label">{t.nurses.services}</div>
              <div className="value">{services.join(' · ')}</div>
            </div>
          )}
        </div>

        {description && (
          <div className="profile-about">
            <h2>{t.doctor.about}</h2>
            <p>{description}</p>
          </div>
        )}
      </div>

      <Disclaimer />
    </div>
  )
}