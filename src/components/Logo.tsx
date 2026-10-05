interface Props {
  size?: number
}

/**
 * Logo DalilSehati.
 * Utilise /logo.svg par défaut (ou /logo.png si tu préfères un PNG).
 * Change juste la prop `src` ci-dessous.
 */
export default function Logo({ size = 34 }: Props) {
  return (
    <img
      src="/logo.svg"
      alt="DalilSehati"
      width={size}
      height={size}
      style={{
        borderRadius: 10,
        objectFit: 'cover',
        boxShadow: 'var(--shadow-sm)',
        display: 'block',
      }}
    />
  )
}