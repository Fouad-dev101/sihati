import type { DoctorFilters } from '../utils/search'
import type { SpecialtySummary, CitySummary } from '../types/doctor'
import { useI18n } from '../i18n/I18nContext'
import SearchBar from './SearchBar'

interface Props {
  filters: DoctorFilters
  onChange: (f: DoctorFilters) => void
  specialties: SpecialtySummary[]
  cities: CitySummary[]
}

export default function Filters({ filters, onChange, specialties, cities }: Props) {
  const { lang, t } = useI18n()

  return (
    <div className="filters">
      <SearchBar
        value={filters.query}
        onChange={(q) => onChange({ ...filters, query: q })}
      />

      <select
        className="filter-select"
        aria-label={t.directory.filterSpecialty}
        value={filters.specialty ?? ''}
        onChange={(e) =>
          onChange({ ...filters, specialty: e.target.value || null })
        }
      >
        <option value="">{t.directory.allSpecialties}</option>
        {specialties.map((s) => (
          <option key={s.slug} value={s.name}>
            {lang === 'ar' ? s.nameAr : s.name}
          </option>
        ))}
      </select>

      <select
        className="filter-select"
        aria-label={t.directory.filterCity}
        value={filters.city ?? ''}
        onChange={(e) => onChange({ ...filters, city: e.target.value || null })}
      >
        <option value="">{t.directory.allCities}</option>
        {cities.map((c) => (
          <option key={c.slug} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <button
        className="btn btn-ghost"
        onClick={() => onChange({ query: '', specialty: null, city: null })}
      >
        {t.directory.clearFilters}
      </button>
    </div>
  )
}