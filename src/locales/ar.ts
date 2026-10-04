import type { Translations } from './fr'

export const ar: Translations = {
  meta: {
    homeTitle: 'اعثر على طبيب في المغرب — دليل طبي',
    homeDescription:
      'دليل الأطباء في المغرب. ابحث حسب التخصص أو المدينة أو العيادة واتصل مباشرة.',
    doctorsTitle: 'الأطباء — دليل طبي مغربي',
    specialtiesTitle: 'التخصصات الطبية — دليل مغربي',
    aboutTitle: 'حول',
    contactTitle: 'اتصل بنا',
  },
  nav: {
    home: 'الرئيسية',
    doctors: 'الأطباء',
    specialties: 'التخصصات',
    about: 'حول',
    contact: 'اتصل بنا',
  },
  hero: {
    title: 'اعثر بسهولة على الطبيب الذي تحتاجه',
    subtitle: 'اكتشف الأطباء في منطقتك واحصل على معلومات الاتصال بهم بسرعة.',
    searchPlaceholder: 'ابحث عن طبيب أو تخصص…',
  },
  stats: {
    doctors: 'أطباء',
    specialties: 'تخصصات',
    cities: 'مدن',
  },
  specialties: {
    title: 'التخصصات الشائعة',
    subtitle: 'تصفح الأطباء حسب التخصص.',
    viewAll: 'عرض كل التخصصات',
  },
  directory: {
    title: 'كل الأطباء',
    subtitle: 'تصفح دليلنا واعثر على الطبيب المناسب لك.',
    results: (n: number) => (n === 1 ? 'تم العثور على طبيب واحد' : `تم العثور على ${n} أطباء`),
    filterSpecialty: 'التخصص',
    filterCity: 'المدينة',
    allSpecialties: 'كل التخصصات',
    allCities: 'كل المدن',
    clearFilters: 'مسح الفلاتر',
    emptyTitle: 'لم يتم العثور على أي طبيب',
    emptyBody: 'لم نعثر على أي طبيب يطابق بحثك.',
  },
  doctor: {
    call: 'اتصل',
    viewProfile: 'عرض الملف',
    backToDirectory: 'العودة إلى الدليل',
    directions: 'الاتجاهات',
    phone: 'الهاتف',
    address: 'العنوان',
    clinic: 'العيادة / المستشفى',
    hours: 'أوقات العمل',
    about: 'نبذة',
  },
  about: {
    title: 'حول هذا المشروع',
    body: 'يهدف هذا الدليل إلى مساعدة المرضى المغاربة في العثور بسرعة على طبيب قريب منهم والتواصل معه مباشرة. نعمل على فهرسة المهنيين الصحيين في جميع مدن المغرب.',
    futureTitle: 'قريباً',
    futureItems: [
      'الإبلاغ عن معلومات غير صحيحة',
      'اقتراح طبيب',
      'التحقق من الأطباء',
      'حجز المواعيد عبر الإنترنت',
      'رابط واتساب',
      'خرائط جوجل',
      'المفضلة',
    ],
  },
  contact: {
    title: 'اتصل بنا',
    body: 'سؤال أو اقتراح أو تصحيح؟ راسلنا.',
    email: 'contact@exemple.ma',
  },
  footer: {
    tagline: 'دليل طبي مغربي — سريع، مجاني، ثنائي اللغة.',
    rights: 'جميع الحقوق محفوظة.',
  },
  disclaimer:
    'المعلومات المعروضة على هذه المنصة هي لأغراض إعلامية فقط. يُرجى التحقق من المعلومات مباشرةً مع الطبيب قبل التوجه إليه.',
  language: {
    fr: 'Français',
    ar: 'العربية',
  },
}