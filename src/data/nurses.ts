import raw from '../../data/nurses.json'
import type { Nurse } from '../types/nurse'

const nurses = (raw as Nurse[]).filter((n) => n.active !== false)

export function getAllNurses(): Nurse[] {
  return nurses
}

export function getNurseById(id: string): Nurse | undefined {
  return nurses.find((n) => n.id === id)
}

export function getNurseCities(): string[] {
  return [...new Set(nurses.map((n) => n.city))].sort()
}