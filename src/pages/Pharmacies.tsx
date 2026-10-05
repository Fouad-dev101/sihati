import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { getCities } from '../data/doctors'

/**
 * Mapping ville → URL externe pour la pharmacie de garde.
 * Change juste ce dictionnaire si tu veux utiliser un autre fournisseur
 * (Hirassa, Sahha, etc.).
 */
const GARDE_URLS: Record<string, string> = {
  'Al Hoceima': 'https://pharmacie.omnidoc.ma/liste-des-villes/AL-HOCEIMA',
  'Nador': 'https://pharmacie.omnidoc.ma/liste-des-villes/NADOR',
  'Tétouan': 'https://pharmacie.omnidoc.ma/liste-des-villes/TETOUAN',
  'Tanger': 'https://pharmacie.omnidoc.ma/liste-des-villes/TANGER',
  'Fès': 'https://pharmacie.omnidoc.ma/liste-des-villes/FES',
  'Meknès': 'https://pharmacie.omnidoc.ma/liste-des-villes/MEKNES',
  'Rabat': 'https://pharmacie.omnidoc.ma/liste-des-villes/RABAT',
  'Casablanca': 'https://pharmacie.omnidoc.ma/liste-des-villes/CASABLANCA',
  'Marrakech': 'https://pharmacie.omnidoc.ma/liste-des-villes/MARRAKECH',
  'Agadir': 'https://pharmacie.omnidoc.ma/liste-des-villes/AGADIR',
  'Oujda': 'https://pharmacie.omnidoc.ma/liste-des-villes/OUJDA',
  'Safi': 'https://pharmacie.omnidoc.ma/liste-des-villes/SAFI',
}

export default function Pharmacies() {
  const { t } = useI18n()
  const [city, setCity] = useState<string>('')
  const cities = getCities()

  useEffect(() => {
    document.title = t.meta.pharmaciesTitle
  }, [t])

  const hasUrl = city !== '' && Boolean(GARDE_URLS[city])

  const handleOpen = () => {
    if (!hasUrl) return
    window.open(GARDE_URLS[city], '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t.pharmacies.title}</h1>
        <p>{t.pharmacies.subtitle}</p>
      </div>

      <div className="profile" style={{ maxWidth: 560, marginInline: 'auto' }}>
        <label
          htmlFor="city-select"
          style={{ display: 'block', fontWeight: 600, marginBlockEnd: 8 }}
        >
          {t.pharmacies.chooseCity}
        </label>

        <select
          id="city-select"
          className="filter-select"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ width: '100%', marginBlockEnd: 16 }}
        >
          <option value="">— {t.pharmacies.chooseCity} —</option>
          {cities.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </select>

        <button
          className="btn btn-primary btn-lg btn-block"
          disabled={!hasUrl}
          onClick={handleOpen}
        >
          {t.pharmacies.openService} ↗
        </button>

        {city && !hasUrl && (
          <p style={{ marginBlockStart: 12, color: 'var(--accent)', fontSize: '0.9rem' }}>
            {t.pharmacies.unavailable}
          </p>
        )}

        <p
          className="muted"
          style={{ fontSize: '0.85rem', marginBlockStart: 16, marginBlockEnd: 0 }}
        >
          {t.pharmacies.externalNotice}
        </p>
      </div>
    </div>
  )
}