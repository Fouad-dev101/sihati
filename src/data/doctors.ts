/**
 * DATA ACCESS LAYER
 * -----------------
 * This module is the ONLY place that knows where doctor data comes from.
 *
 * V1: reads from `data/doctors.json` (bundled at build time).
 * V2: replace the bodies of these functions with Supabase/Firebase calls.
 *     The rest of the app never needs to change.
 */
import raw from '../../data/doctors.json'
import type { Doctor, SpecialtySummary, CitySummary } from '../types/doctor'
import { slugify } from '../utils/slug'

const doctors = (raw as Doctor[]).filter((d) => d.active !== false)

export function getAllDoctors(): Doctor[] {
  return doctors
}

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find((d) => d.id === id)
}

export function getSpecialties(): SpecialtySummary[] {
  const map = new Map<string, SpecialtySummary>()
  for (const d of doctors) {
    const key = d.specialty
    const existing = map.get(key)
    if (existing) {
      existing.count++
    } else {
      map.set(key, {
        name: d.specialty,
        nameAr: d.specialtyAr,
        count: 1,
        slug: slugify(d.specialty),
      })
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count)
}

export function getCities(): CitySummary[] {
  const map = new Map<string, CitySummary>()
  for (const d of doctors) {
    const existing = map.get(d.city)
    if (existing) existing.count++
    else map.set(d.city, { name: d.city, count: 1, slug: slugify(d.city) })
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name))
}

export function getStats() {
  return {
    doctorCount: doctors.length,
    specialtyCount: getSpecialties().length,
    cityCount: getCities().length,
  }
}