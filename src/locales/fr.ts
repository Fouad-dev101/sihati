export const fr = {
  meta: {
    homeTitle: 'DalilSehati — Trouvez un professionnel de santé au Maroc',
    homeDescription:
      "Annuaire des médecins et infirmiers au Maroc. Recherchez par spécialité, ville ou clinique et appelez directement.",
    doctorsTitle: 'Médecins — DalilSehati',
    specialtiesTitle: 'Spécialités médicales — DalilSehati',
    aboutTitle: 'À propos — DalilSehati',
    contactTitle: 'Contact — DalilSehati',
    nursesTitle: 'Infirmiers — DalilSehati',
    pharmaciesTitle: 'Pharmacies de garde — DalilSehati',
  },
  nav: {
    home: 'Accueil',
    doctors: 'Médecins',
    nurses: 'Infirmiers',
    specialties: 'Spécialités',
    pharmacies: 'Pharmacies',
    about: 'À propos',
    contact: 'Contact',
  },
  hero: {
    title: "Trouvez facilement le professionnel qu'il vous faut.",
    subtitle:
      'Découvrez les médecins et infirmiers de votre région et accédez rapidement à leurs coordonnées.',
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
  nurses: {
    title: 'Infirmiers & infirmières',
    subtitle: 'Trouvez un infirmier à domicile près de chez vous.',
    results: (n: number) => (n === 1 ? '1 infirmier trouvé' : `${n} infirmiers trouvés`),
    services: 'Services',
    available247: 'Disponible 24/7',
    emptyTitle: 'Aucun infirmier trouvé',
    emptyBody: "Nous n'avons trouvé aucun infirmier correspondant à votre recherche.",
    call: 'Appeler',
    viewProfile: 'Voir le profil',
    backToList: 'Retour aux infirmiers',
  },
  pharmacies: {
    title: 'Pharmacies de garde',
    subtitle: 'Sélectionnez votre ville pour consulter la pharmacie de garde.',
    chooseCity: 'Choisissez une ville',
    openService: 'Voir les pharmacies de garde',
    externalNotice:
      'Les pharmacies de garde sont mises à jour quotidiennement par un service externe. Vous serez redirigé vers leur site.',
    noCity: 'Aucune ville disponible pour le moment.',
    unavailable: 'Service indisponible pour cette ville pour le moment.',
  },
  about: {
    title: 'À propos de ce projet',
    body: "DalilSehati a pour but d'aider les patients marocains à trouver rapidement un professionnel de santé près de chez eux et à le contacter directement. Nous référençons les médecins et infirmiers de toutes les villes du Maroc.",
    futureTitle: 'Bientôt disponible',
    futureItems: [
      'Signaler une information incorrecte',
      'Suggérer un professionnel',
      'Vérification des professionnels',
      'Prise de rendez-vous en ligne',
      'Lien WhatsApp',
      'Google Maps',
      'Favoris',
    ],
  },
  contact: {
    title: 'Contact',
    body: 'Une question, une suggestion ou une correction ? Écrivez-nous.',
    email: 'contact@dalilsehati.ma',
  },
  footer: {
    tagline: 'DalilSehati — Annuaire médical marocain, rapide, gratuit, bilingue.',
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