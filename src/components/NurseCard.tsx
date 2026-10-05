import { Link } from 'react-router-dom'
import type { Nurse } from '../types/nurse'
import { useI18n } from '../i18n/I18nContext'

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

export default function NurseCard({ nurse }: { nurse: Nurse }) {
  const { lang, t } = useI18n()
  const services = lang === 'ar' ? nurse.servicesAr ?? nurse.services : nurse.services
  const description =
    lang === 'ar' ? nurse.descriptionAr ?? nurse.description : nurse.description

  return (
    <article className="doctor-card">
      <div className="doctor-head">
        <div className="doctor-avatar" aria-hidden="true">
          {nurse.image ? (
            <img src={nurse.image} alt="" loading="lazy" />
          ) : (
            initials(nurse.name)
          )}
        </div>
        <div style={{ minWidth: 0 }}>
          <h3 className="doctor-name">{nurse.name}</h3>
          <span className="doctor-specialty">{t.nav.nurses}</span>
        </div>
      </div>

      <div className="doctor-meta">
        <div className="row">
          <PinIcon />
          <span>
            {nurse.neighborhood ? `${nurse.neighborhood}, ${nurse.city}` : nurse.city}
          </span>
        </div>
        <div className="row">
          <PhoneIcon /> <span dir="ltr">{nurse.phone}</span>
        </div>
        {nurse.available247 && (
          <div className="row">
            <ClockIcon /> <span>{t.nurses.available247}</span>
          </div>
        )}
      </div>

      {services && services.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {services.map((s) => (
            <span
              key={s}
              style={{
                fontSize: '0.78rem',
                background: 'var(--brand-soft)',
                color: 'var(--brand)',
                padding: '3px 9px',
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {description && (
        <p className="muted" style={{ margin: 0, fontSize: '0.9rem' }}>{description}</p>
      )}

      <div className="doctor-actions">
        <a href={`tel:${nurse.phone.replace(/\s/g, '')}`} className="btn btn-primary">
          <PhoneIcon /> {t.nurses.call}
        </a>
        <Link to={`/nurses/${nurse.id}`} className="btn btn-ghost">
          {t.nurses.viewProfile}
        </Link>
      </div>
    </article>
  )
}

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
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
      />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}