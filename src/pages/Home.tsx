import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import SearchBar from '../components/SearchBar'
import SpecialtyGrid from '../components/SpecialtyGrid'
import DoctorCard from '../components/DoctorCard'
import Stats from '../components/Stats'
import Disclaimer from '../components/Disclaimer'
import { getAllDoctors, getSpecialties, getStats } from '../data/doctors'
import { filterDoctors } from '../utils/search'

export default function Home() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const allDoctors = getAllDoctors()
  const specialties = useMemo(() => getSpecialties().slice(0, 8), [])
  const stats = getStats()

  useEffect(() => {
    document.title = t.meta.homeTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.homeDescription)
  }, [t])

  const featured = useMemo(
    () => filterDoctors(allDoctors, { query: '', specialty: null, city: null }).slice(0, 3),
    [allDoctors]
  )

  return (
    <div className="container">
      <section className="hero">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        <div className="search-wrap">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={() =>
              navigate(`/doctors${query ? `?q=${encodeURIComponent(query)}` : ''}`)
            }
          />
        </div>
      </section>

      <Stats
        doctors={stats.doctorCount}
        specialties={stats.specialtyCount}
        cities={stats.cityCount}
      />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t.specialties.title}</h2>
            <p>{t.specialties.subtitle}</p>
          </div>
          <Link to="/specialties" className="link-arrow">
            {t.specialties.viewAll} →
          </Link>
        </div>
        <SpecialtyGrid items={specialties} />
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t.directory.title}</h2>
            <p>{t.directory.subtitle}</p>
          </div>
          <Link to="/doctors" className="link-arrow">
            {t.nav.doctors} →
          </Link>
        </div>
        <div className="doctors-grid">
          {featured.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
      </section>

      <Disclaimer />
    </div>
  )
}