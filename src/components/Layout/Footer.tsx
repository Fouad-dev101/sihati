import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nContext'
import Logo from '../Logo'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBlockEnd: 12 }}>
              <Logo size={34} />
              <span>DalilSehati</span>
            </div>
            <p className="muted" style={{ maxWidth: 360, margin: 0 }}>
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4>{t.nav.doctors}</h4>
            <ul>
              <li><Link to="/doctors">{t.nav.doctors}</Link></li>
              <li><Link to="/nurses">{t.nav.nurses}</Link></li>
              <li><Link to="/specialties">{t.nav.specialties}</Link></li>
              <li><Link to="/pharmacies">{t.nav.pharmacies}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.nav.about}</h4>
            <ul>
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} DalilSehati. {t.footer.rights}</span>
          <span>
            Made with <span style={{ color: 'var(--accent)' }}>♥</span> by{' '}
            <a
              href="https://github.com/Fouad-dev101"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--brand)', fontWeight: 600 }}
            >
              FodX
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}