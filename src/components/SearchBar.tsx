import { useI18n } from '../i18n/I18nContext'

interface Props {
  value: string
  onChange: (v: string) => void
  onSubmit?: () => void
  placeholder?: string
  autoFocus?: boolean
}

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder,
  autoFocus,
}: Props) {
  const { t } = useI18n()

  return (
    <form
      className="search"
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.()
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? t.hero.searchPlaceholder}
        aria-label={t.hero.searchPlaceholder}
        autoFocus={autoFocus}
      />
    </form>
  )
}