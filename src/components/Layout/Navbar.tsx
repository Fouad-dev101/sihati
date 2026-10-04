import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nContext'
import LanguageSwitcher from '../LanguageSwitcher'

export default function Navbar() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: t.nav.home, exact: true },
    { to: '/doctors', label: t.nav.doctors },
    { to: '/specialties', label: t.nav.specialties },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  const isActive = (to: string, exact?: boolean) =>
    exact ? location.pathname === to : location.pathname.startsWith(to)

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">د</span>
            <span>Sihati</span>
          </Link>

          <nav className="nav-links" aria-label="Navigation principale">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={`nav-link ${isActive(l.to, l.exact) ? 'active' : ''}`}
                end={l.exact}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-right">
            <LanguageSwitcher />
            <button
              className="hamburger"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={`nav-link ${isActive(l.to, l.exact) ? 'active' : ''}`}
              end={l.exact}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}