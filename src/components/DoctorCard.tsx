import { Link } from 'react-router-dom'
import type { Doctor } from '../types/doctor'
import { useI18n } from '../i18n/I18nContext'

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const { lang, t } = useI18n()
  const specialty = lang === 'ar' ? doctor.specialtyAr : doctor.specialty
  const description =
    lang === 'ar' ? doctor.descriptionAr ?? doctor.description : doctor.description

  return (
    <article className="doctor-card">
      <div className="doctor-head">
        <div className="doctor-avatar" aria-hidden="true">
          {doctor.image ? (
            <img src={doctor.image} alt="" loading="lazy" />
          ) : (
            initials(doctor.name)
          )}
        </div>
        <div style={{ minWidth: 0 }}>
          <h3 className="doctor-name">{doctor.name}</h3>
          <span className="doctor-specialty">{specialty}</span>
        </div>
      </div>

      <div className="doctor-meta">
        <div className="row">
          <PinIcon /> <span>{doctor.city}</span>
        </div>
        {doctor.clinic && (
          <div className="row">
            <ClinicIcon /> <span>{doctor.clinic}</span>
          </div>
        )}
        <div className="row">
          <PhoneIcon /> <span dir="ltr">{doctor.phone}</span>
        </div>
      </div>

      {description && (
        <p
          className="muted"
          style={{
            margin: 0,
            fontSize: '0.9rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </p>
      )}

      <div className="doctor-actions">
        <a href={`tel:${doctor.phone.replace(/\s/g, '')}`} className="btn btn-primary">
          <PhoneIcon /> {t.doctor.call}
        </a>
        <Link to={`/doctors/${doctor.id}`} className="btn btn-ghost">
          {t.doctor.viewProfile}
        </Link>
      </div>
    </article>
  )
}

/* ─── inline icons (no icon library = smaller bundle) ─── */
function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.4 2.1L8 9.8a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.9 2.3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function ClinicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21V9l9-6 9 6v12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 12v6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}