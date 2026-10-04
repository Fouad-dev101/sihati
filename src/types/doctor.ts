/**
 * The canonical Doctor data model.
 *
 * This shape is intentionally designed to be 1:1 compatible with a future
 * Supabase table so that swapping the data source requires no UI changes.
 *
 * Only `id`, `name`, `specialty`, `specialtyAr`, `phone`, `city` are required.
 * Every other field is optional and will simply not be rendered when absent.
 */
export interface Doctor {
  id: string
  name: string
  specialty: string
  specialtyAr: string
  phone: string
  city: string
  address?: string
  clinic?: string
  description?: string
  descriptionAr?: string
  image?: string
  openingHours?: string
  /** Reserved for V2 admin — allows hiding a doctor without deleting the row. */
  active?: boolean
}

export interface SpecialtySummary {
  /** French label used as the canonical key. */
  name: string
  nameAr: string
  count: number
  slug: string
}

export interface CitySummary {
  name: string
  count: number
  slug: string
}