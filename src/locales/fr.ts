export const fr = {
  meta: {
    homeTitle: 'Trouvez un médecin au Maroc — Annuaire médical',
    homeDescription:
      "Annuaire des médecins au Maroc. Recherchez par spécialité, ville ou clinique et appelez directement.",
    doctorsTitle: 'Médecins — Annuaire médical marocain',
    specialtiesTitle: 'Spécialités médicales — Annuaire marocain',
    aboutTitle: 'À propos',
    contactTitle: 'Contact',
  },
  nav: {
    home: 'Accueil',
    doctors: 'Médecins',
    specialties: 'Spécialités',
    about: 'À propos',
    contact: 'Contact',
  },
  hero: {
    title: "Trouvez facilement le médecin qu'il vous faut.",
    subtitle:
      'Découvrez les médecins de votre région et accédez rapidement à leurs coordonnées.',
    searchPlaceholder: 'Rechercher un médecin ou une spécialité…',
  },
  stats: {
    doctors: 'médecins',
    specialties: 'spécialités',
    cities: 'villes',
  },
  specialties: {
    title: 'Spécialités populaires',
    subtitle: 'Parcourez les médecins par spécialité.',
    viewAll: 'Voir toutes les spécialités',
  },
  directory: {
    title: 'Tous les médecins',
    subtitle: 'Parcourez notre annuaire et trouvez le professionnel qu’il vous faut.',
    results: (n: number) => (n === 1 ? '1 médecin trouvé' : `${n} médecins trouvés`),
    filterSpecialty: 'Spécialité',
    filterCity: 'Ville',
    allSpecialties: 'Toutes les spécialités',
    allCities: 'Toutes les villes',
    clearFilters: 'Effacer les filtres',
    emptyTitle: 'Aucun médecin trouvé',
    emptyBody:
      "Nous n'avons trouvé aucun médecin correspondant à votre recherche.",
  },
  doctor: {
    call: 'Appeler',
    viewProfile: 'Voir le profil',
    backToDirectory: 'Retour à l’annuaire',
    directions: 'Itinéraire',
    phone: 'Téléphone',
    address: 'Adresse',
    clinic: 'Clinique / Hôpital',
    hours: 'Horaires',
    about: 'À propos',
  },
  about: {
    title: 'À propos de ce projet',
    body: "Cet annuaire a pour but d'aider les patients marocains à trouver rapidement un médecin près de chez eux et à le contacter directement. Nous travaillons à référencer les professionnels de santé de toutes les villes du Maroc.",
    futureTitle: 'Bientôt disponible',
    futureItems: [
      'Signaler une information incorrecte',
      'Suggérer un médecin',
      'Vérification des médecins',
      'Prise de rendez-vous en ligne',
      'Lien WhatsApp',
      'Google Maps',
      'Favoris',
    ],
  },
  contact: {
    title: 'Contact',
    body: 'Une question, une suggestion ou une correction ? Écrivez-nous.',
    email: 'contact@exemple.ma',
  },
  footer: {
    tagline: 'Annuaire médical marocain — rapide, gratuit, bilingue.',
    rights: 'Tous droits réservés.',
  },
  disclaimer:
    'Les informations présentées sur cette plateforme sont fournies à titre informatif. Vérifiez les informations directement auprès du professionnel de santé avant de vous déplacer.',
  language: {
    fr: 'Français',
    ar: 'العربية',
  },
}

export type Translations = typeof fr