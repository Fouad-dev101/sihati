import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { getDoctorById } from '../data/doctors'
import Disclaimer from '../components/Disclaimer'

export default function DoctorProfile() {
  const { id } = useParams<{ id: string }>()
  const { lang, t } = useI18n()
  const doctor = id ? getDoctorById(id) : undefined

  useEffect(() => {
    if (!doctor) {
      document.title = '404'
      return
    }
    document.title =
      lang === 'ar'
        ? `${doctor.name} — ${doctor.specialtyAr} في ${doctor.city}`
        : `${doctor.name} — ${doctor.specialty} à ${doctor.city}`
  }, [doctor, lang])

  if (!doctor) {
    return (
      <div className="container page">
        <div className="empty">
          <h3>{t.directory.emptyTitle}</h3>
          <p>{t.directory.emptyBody}</p>
          <Link to="/doctors" className="btn btn-primary" style={{ marginBlockStart: 18 }}>
            {t.doctor.backToDirectory}
          </Link>
        </div>
      </div>
    )
  }

  const specialty = lang === 'ar' ? doctor.specialtyAr : doctor.specialty
  const description =
    lang === 'ar' ? doctor.descriptionAr ?? doctor.description : doctor.description

  const telHref = `tel:${doctor.phone.replace(/\s/g, '')}`
  const mapsHref = doctor.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${doctor.name}, ${doctor.address}, ${doctor.city}`
      )}`
    : null

  const initials = doctor.name
    .replace(/^Dr\.?\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <div className="container page">
      <Link to="/doctors" className="link-arrow" style={{ marginBlockEnd: 16, display: 'inline-flex' }}>
        ← {t.doctor.backToDirectory}
      </Link>

      <div className="profile">
        <div className="profile-head">
          <div className="profile-avatar" aria-hidden="true">
            {doctor.image ? <img src={doctor.image} alt="" /> : initials}
          </div>
          <div>
            <h1>{doctor.name}</h1>
            <span className="doctor-specialty">{specialty}</span>
            <p className="sub" style={{ marginBlockStart: 8 }}>
              📍 {doctor.city}
            </p>
          </div>
        </div>

        <div className="profile-actions">
          <a href={telHref} className="btn btn-primary btn-lg">
            📞 {t.doctor.call} — <span dir="ltr">{doctor.phone}</span>
          </a>
          {mapsHref && (
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              🧭 {t.doctor.directions}
            </a>
          )}
        </div>

        <div className="profile-info">
          <div className="info-item">
            <div className="label">{t.doctor.phone}</div>
            <div className="value" dir="ltr">{doctor.phone}</div>
          </div>

          {doctor.clinic && (
            <div className="info-item">
              <div className="label">{t.doctor.clinic}</div>
              <div className="value">{doctor.clinic}</div>
            </div>
          )}

          {doctor.address && (
            <div className="info-item">
              <div className="label">{t.doctor.address}</div>
              <div className="value">{doctor.address}</div>
            </div>
          )}

          {doctor.openingHours && (
            <div className="info-item">
              <div className="label">{t.doctor.hours}</div>
              <div className="value">{doctor.openingHours}</div>
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