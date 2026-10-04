import { useEffect, useMemo } from 'react'
import { useI18n } from '../i18n/I18nContext'
import SpecialtyGrid from '../components/SpecialtyGrid'
import { getSpecialties } from '../data/doctors'

export default function Specialties() {
  const { t } = useI18n()
  const items = useMemo(() => getSpecialties(), [])

  useEffect(() => {
    document.title = t.meta.specialtiesTitle
  }, [t])

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t.specialties.title}</h1>
        <p>{t.specialties.subtitle}</p>
      </div>
      <SpecialtyGrid items={items} />
    </div>
  )
}