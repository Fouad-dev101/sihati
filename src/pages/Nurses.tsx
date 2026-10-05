import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import NurseCard from '../components/NurseCard'
import EmptyState from '../components/EmptyState'
import { getAllNurses, getNurseCities } from '../data/nurses'
import { normalizeForSearch } from '../utils/slug'

export default function Nurses() {
  const { t } = useI18n()
  const [query, setQuery] = useState('')
  const [city, setCity] = useState<string | null>(null)

  const allNurses = getAllNurses()
  const cities = useMemo(() => getNurseCities(), [])

  useEffect(() => {
    document.title = t.meta.nursesTitle
  }, [t])

  const results = useMemo(() => {
    const q = normalizeForSearch(query)
    return allNurses.filter((n) => {
      if (city && n.city !== city) return false
      if (!q) return true
      const haystack = normalizeForSearch(
        [n.name, n.city, n.neighborhood ?? '', ...(n.services ?? []), ...(n.servicesAr ?? [])].join(' ')
      )
      return q.split(' ').every((w) => haystack.includes(w))
    })
  }, [allNurses, query, city])

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t.nurses.title}</h1>
        <p>{t.nurses.subtitle}</p>
      </div>

      <div className="filters">
        <div className="search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.hero.searchPlaceholder}
            aria-label={t.hero.searchPlaceholder}
          />
        </div>

        <select
          className="filter-select"
          value={city ?? ''}
          onChange={(e) => setCity(e.target.value || null)}
          aria-label={t.directory.filterCity}
        >
          <option value="">{t.directory.allCities}</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button
          className="btn btn-ghost"
          onClick={() => { setQuery(''); setCity(null) }}
        >
          {t.directory.clearFilters}
        </button>
      </div>

      <p className="muted" style={{ marginBlock: '0 16px' }} role="status" aria-live="polite">
        {t.nurses.results(results.length)}
      </p>

      {results.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="doctors-grid">
          {results.map((n) => <NurseCard key={n.id} nurse={n} />)}
        </div>
      )}
    </div>
  )
}