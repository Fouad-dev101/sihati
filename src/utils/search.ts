import type { Doctor } from '../types/doctor'
import { normalizeForSearch } from './slug'

export interface DoctorFilters {
  query: string
  specialty: string | null
  city: string | null
}

export const emptyFilters: DoctorFilters = {
  query: '',
  specialty: null,
  city: null,
}

/**
 * Filter doctors client-side. Pure function — fully testable, no React.
 * Handles French and Arabic normalization.
 */
export function filterDoctors(doctors: Doctor[], filters: DoctorFilters): Doctor[] {
  const q = normalizeForSearch(filters.query)

  return doctors.filter((d) => {
    if (filters.specialty && d.specialty !== filters.specialty) return false
    if (filters.city && d.city !== filters.city) return false
    if (!q) return true

    const haystack = normalizeForSearch(
      [
        d.name,
        d.specialty,
        d.specialtyAr,
        d.city,
        d.clinic ?? '',
        d.address ?? '',
        d.description ?? '',
        d.descriptionAr ?? '',
      ].join(' ')
    )
    // every word in the query must appear somewhere
    return q.split(' ').every((word) => haystack.includes(word))
  })
}

export function hasActiveFilters(f: DoctorFilters): boolean {
  return f.query.trim() !== '' || f.specialty !== null || f.city !== null
}