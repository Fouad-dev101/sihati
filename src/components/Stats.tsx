import { useI18n } from '../i18n/I18nContext'

interface Props {
  doctors: number
  specialties: number
  cities: number
}

export default function Stats({ doctors, specialties, cities }: Props) {
  const { t } = useI18n()
  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-num">{doctors}</div>
        <div className="stat-label">{t.stats.doctors}</div>
      </div>
      <div className="stat">
        <div className="stat-num">{specialties}</div>
        <div className="stat-label">{t.stats.specialties}</div>
      </div>
      <div className="stat">
        <div className="stat-num">{cities}</div>
        <div className="stat-label">{t.stats.cities}</div>
      </div>
    </div>
  )
}