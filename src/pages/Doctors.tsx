import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import Filters from '../components/Filters'
import DoctorCard from '../components/DoctorCard'
import EmptyState from '../components/EmptyState'
import { getAllDoctors, getSpecialties, getCities } from '../data/doctors'
import { filterDoctors, type DoctorFilters } from '../utils/search'

export default function Doctors() {
  const { t } = useI18n()
  const [params, setParams] = useSearchParams()

  const [filters, setFilters] = useState<DoctorFilters>({
    query: params.get('q') ?? '',
    specialty: params.get('specialty'),
    city: params.get('city'),
  })

  const allDoctors = getAllDoctors()
  const specialties = useMemo(() => getSpecialties(), [])
  const cities = useMemo(() => getCities(), [])

  const results = useMemo(() => filterDoctors(allDoctors, filters), [allDoctors, filters])

  useEffect(() => {
    document.title = t.meta.doctorsTitle
  }, [t])

  // Keep URL in sync so links are shareable
  useEffect(() => {
    const next = new URLSearchParams()
    if (filters.query) next.set('q', filters.query)
    if (filters.specialty) next.set('specialty', filters.specialty)
    if (filters.city) next.set('city', filters.city)
    setParams(next, { replace: true })
  }, [filters, setParams])

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t.directory.title}</h1>
        <p>{t.directory.subtitle}</p>
      </div>

      <Filters
        filters={filters}
        onChange={setFilters}
        specialties={specialties}
        cities={cities}
      />

      <p className="muted" style={{ marginBlock: '0 16px' }} role="status" aria-live="polite">
        {t.directory.results(results.length)}
      </p>

      {results.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="doctors-grid">
          {results.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
      )}
    </div>
  )
}