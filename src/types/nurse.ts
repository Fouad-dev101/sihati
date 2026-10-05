export interface Nurse {
  id: string
  name: string
  phone: string
  city: string
  neighborhood?: string
  services?: string[]
  servicesAr?: string[]
  available247?: boolean
  openingHours?: string
  description?: string
  descriptionAr?: string
  image?: string
  active?: boolean
}