import { Link } from 'react-router-dom'
import type { SpecialtySummary } from '../types/doctor'
import { useI18n } from '../i18n/I18nContext'

const iconMap: Record<string, string> = {
  Cardiologue: '❤',
  Dermatologue: '✦',
  Pédiatre: '☺',
  Dentiste: '◈',
  Gynécologue: '♀',
  Ophtalmologue: '◉',
  ORL: '◐',
  Neurologue: '⌬',
  Psychiatre: '☯',
  Orthopédiste: '⊞',
  'Médecin généraliste': '✚',
}

export default function SpecialtyGrid({ items }: { items: SpecialtySummary[] }) {
  const { lang } = useI18n()
  return (
    <div className="specialty-grid">
      {items.map((s) => (
        <Link
          key={s.slug}
          to={`/doctors?specialty=${encodeURIComponent(s.name)}`}
          className="specialty-card"
        >
          <div className="specialty-icon" aria-hidden="true">
            {iconMap[s.name] ?? '✚'}
          </div>
          <div className="specialty-info">
            <strong>{lang === 'ar' ? s.nameAr : s.name}</strong>
            <span>{s.count}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}