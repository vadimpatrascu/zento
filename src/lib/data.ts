export type SpecialistType = "psiholog" | "coach" | "mentor";

export type Specialist = {
  id: string;
  name: string;
  slug: string;
  type: SpecialistType;
  title: string;
  avatar: string;
  city: string;
  cities: string[];
  rating: number;
  reviewCount: number;
  experience: number;
  priceMin: number;
  priceMax: number;
  currency: "RON" | "EUR";
  online: boolean;
  languages: string[];
  specializations: string[];
  shortBio: string;
  bio: string;
  videoIntro?: string;
  services: Service[];
  education: Education[];
  availability: DayAvailability[];
  verified: boolean;
  featured: boolean;
};

export type Service = {
  id: string;
  name: string;
  category: string;
  duration: number;
  price: number;
  currency: "RON" | "EUR";
  description: string;
  objectives: string[];
};

export type Education = {
  institution: string;
  degree: string;
  year: number;
};

export type DayAvailability = {
  day: string;
  slots: string[];
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
};

export const objectives = [
  "Anxietate",
  "Depresie",
  "Stres",
  "Relații",
  "Dezvoltare personală",
  "Coaching carieră",
  "Leadership",
  "Burnout",
  "Stimă de sine",
  "Traume",
  "Dependențe",
  "Fobii",
  "Tulburări de somn",
  "Comunicare",
  "Doliu și pierdere",
  "Terapie de cuplu",
  "Terapie de familie",
  "Management stres",
  "Tranziție carieră",
  "Antreprenoriat",
  "Productivitate",
  "Public speaking",
  "Mindfulness",
  "Parenting",
] as const;

export const cities = [
  "București",
  "Cluj-Napoca",
  "Timișoara",
  "Iași",
  "Brașov",
  "Constanța",
  "Oradea",
  "Sibiu",
  "Târgu Mureș",
  "Craiova",
  "Arad",
  "Ploiești",
  "Galați",
  "Brăila",
  "Bacău",
  "Pitești",
  "Baia Mare",
  "Buzău",
  "Alba Iulia",
  "Suceava",
] as const;

export const therapyTypes = [
  "Psihoterapie individuală",
  "Consiliere psihologică",
  "Coaching dezvoltare personală",
  "Psihoterapie de cuplu",
  "Terapie de familie",
  "Coaching carieră",
  "Coaching leadership",
  "Mentorat business",
  "Mentorat profesional",
  "Terapie cognitiv-comportamentală (CBT)",
  "Terapie EMDR",
  "Terapie ACT",
  "Mindfulness",
] as const;

export const languages = [
  "Română",
  "Engleză",
  "Maghiară",
  "Germană",
  "Italiană",
  "Spaniolă",
  "Franceză",
  "Rusă",
] as const;

// Mock specialists for development
export const mockSpecialists: Specialist[] = [
  {
    id: "1",
    name: "Dr. Ana Popescu",
    slug: "ana-popescu",
    type: "psiholog",
    title: "Psiholog clinician & Psihoterapeut CBT",
    avatar: "",
    city: "București",
    cities: ["București"],
    rating: 4.9,
    reviewCount: 47,
    experience: 12,
    priceMin: 200,
    priceMax: 350,
    currency: "RON",
    online: true,
    languages: ["Română", "Engleză"],
    specializations: ["Anxietate", "Depresie", "Stres", "Burnout"],
    shortBio:
      "Psiholog clinician cu 12 ani experiență, specializată în terapie cognitiv-comportamentală pentru anxietate și depresie.",
    bio: "Sunt psiholog clinician cu drept de liberă practică, absolventă a Universității București, Facultatea de Psihologie. Am peste 12 ani de experiență în psihoterapie individuală și de cuplu.\n\nSunt specializată în Terapia Cognitiv-Comportamentală (CBT) și lucrez cu adulți care se confruntă cu anxietate, depresie, stres cronic și burnout profesional.\n\nCred cu tărie că fiecare persoană are resursele interioare necesare pentru a-și depăși dificultățile — rolul meu este să te ghidez în procesul de descoperire și activare a acestor resurse.",
    verified: true,
    featured: true,
    services: [
      {
        id: "s1",
        name: "Psihoterapie individuală",
        category: "Terapie",
        duration: 50,
        price: 250,
        currency: "RON",
        description: "Ședință individuală de psihoterapie CBT",
        objectives: ["Anxietate", "Depresie", "Stres"],
      },
      {
        id: "s2",
        name: "Psihoterapie de cuplu",
        category: "Terapie",
        duration: 80,
        price: 350,
        currency: "RON",
        description: "Ședință de terapie pentru cupluri",
        objectives: ["Relații", "Comunicare"],
      },
      {
        id: "s3",
        name: "Consiliere psihologică",
        category: "Consiliere",
        duration: 50,
        price: 200,
        currency: "RON",
        description: "Ședință de consiliere pentru probleme punctuale",
        objectives: ["Stres", "Burnout", "Management stres"],
      },
    ],
    education: [
      { institution: "Universitatea București", degree: "Doctorat în Psihologie Clinică", year: 2014 },
      { institution: "Institutul de Terapie CBT", degree: "Specializare CBT", year: 2016 },
    ],
    availability: [
      { day: "Luni", slots: ["09:00", "10:00", "14:00", "15:00", "16:00"] },
      { day: "Marți", slots: ["10:00", "11:00", "15:00", "16:00"] },
      { day: "Miercuri", slots: ["09:00", "10:00", "14:00"] },
      { day: "Joi", slots: ["10:00", "11:00", "15:00", "16:00", "17:00"] },
      { day: "Vineri", slots: ["09:00", "10:00", "11:00"] },
    ],
  },
  {
    id: "2",
    name: "Mihai Ionescu",
    slug: "mihai-ionescu",
    type: "coach",
    title: "Coach certificat ICF & Trainer",
    avatar: "",
    city: "Cluj-Napoca",
    cities: ["Cluj-Napoca", "Online"],
    rating: 4.8,
    reviewCount: 32,
    experience: 8,
    priceMin: 250,
    priceMax: 400,
    currency: "RON",
    online: true,
    languages: ["Română", "Engleză", "Germană"],
    specializations: ["Coaching carieră", "Leadership", "Dezvoltare personală", "Productivitate"],
    shortBio:
      "Coach certificat ICF cu experiență în dezvoltare de leadership și tranziții de carieră.",
    bio: "Sunt coach certificat ICF (International Coach Federation) cu peste 8 ani de experiență în coaching individual și de echipă.\n\nAm ajutat peste 500 de profesioniști să-și atingă potențialul maxim, să navigheze tranziții de carieră și să-și dezvolte abilitățile de leadership.",
    verified: true,
    featured: true,
    services: [
      {
        id: "s4",
        name: "Coaching carieră",
        category: "Coaching",
        duration: 60,
        price: 300,
        currency: "RON",
        description: "Sesiune de coaching pentru dezvoltare profesională",
        objectives: ["Coaching carieră", "Tranziție carieră"],
      },
      {
        id: "s5",
        name: "Coaching leadership",
        category: "Coaching",
        duration: 60,
        price: 400,
        currency: "RON",
        description: "Sesiune de coaching pentru dezvoltare de leadership",
        objectives: ["Leadership", "Productivitate"],
      },
    ],
    education: [
      { institution: "ICF", degree: "Professional Certified Coach (PCC)", year: 2018 },
      { institution: "INSEAD", degree: "Executive Education Program", year: 2020 },
    ],
    availability: [
      { day: "Luni", slots: ["10:00", "11:00", "14:00", "15:00"] },
      { day: "Marți", slots: ["09:00", "10:00", "16:00", "17:00"] },
      { day: "Miercuri", slots: ["10:00", "14:00", "15:00"] },
      { day: "Joi", slots: ["09:00", "10:00", "11:00", "16:00"] },
    ],
  },
  {
    id: "3",
    name: "Elena Dumitrescu",
    slug: "elena-dumitrescu",
    type: "mentor",
    title: "Mentor Business & Antreprenoriat",
    avatar: "",
    city: "Timișoara",
    cities: ["Timișoara", "Online"],
    rating: 5.0,
    reviewCount: 18,
    experience: 15,
    priceMin: 300,
    priceMax: 500,
    currency: "RON",
    online: true,
    languages: ["Română", "Engleză", "Italiană"],
    specializations: ["Antreprenoriat", "Leadership", "Dezvoltare personală", "Public speaking"],
    shortBio:
      "Mentor cu 15 ani experiență în antreprenoriat, fost CEO al unei companii cu 200+ angajați.",
    bio: "Am construit și condus o companie de la 0 la peste 200 de angajați și 5M€ cifra de afaceri. Acum ajut antreprenori și lideri să accelereze creșterea.\n\nOfer mentorat bazat pe experiență reală, nu doar teorie. Fiecare sesiune e practică, orientată spre acțiune și rezultate concrete.",
    verified: true,
    featured: true,
    services: [
      {
        id: "s6",
        name: "Mentorat antreprenoriat",
        category: "Mentorat",
        duration: 60,
        price: 400,
        currency: "RON",
        description: "Sesiune de mentorat pentru antreprenori",
        objectives: ["Antreprenoriat", "Leadership"],
      },
      {
        id: "s7",
        name: "Mentorat leadership",
        category: "Mentorat",
        duration: 60,
        price: 500,
        currency: "RON",
        description: "Mentorat intensiv pentru lideri",
        objectives: ["Leadership", "Public speaking"],
      },
    ],
    education: [
      { institution: "ASE București", degree: "MBA", year: 2010 },
      { institution: "Stanford Online", degree: "Innovation & Entrepreneurship", year: 2019 },
    ],
    availability: [
      { day: "Marți", slots: ["10:00", "11:00"] },
      { day: "Joi", slots: ["14:00", "15:00", "16:00"] },
    ],
  },
  {
    id: "4",
    name: "Dr. Cristina Moldovan",
    slug: "cristina-moldovan",
    type: "psiholog",
    title: "Psihoterapeut EMDR & Traume",
    avatar: "",
    city: "Brașov",
    cities: ["Brașov", "Online"],
    rating: 4.7,
    reviewCount: 23,
    experience: 10,
    priceMin: 200,
    priceMax: 300,
    currency: "RON",
    online: true,
    languages: ["Română", "Engleză", "Franceză"],
    specializations: ["Traume", "Anxietate", "Fobii", "Stres"],
    shortBio:
      "Psihoterapeut specializat în EMDR pentru traume, anxietate și fobii. Abordare caldă și empatică.",
    bio: "Sunt psihoterapeut cu 10 ani de experiență, specializată în terapia EMDR pentru traume și stres post-traumatic.\n\nLucrez cu adulți care s-au confruntat cu experiențe dificile și îi ajut să-și proceseze amintirile dureroase într-un mediu sigur și suportiv.",
    verified: true,
    featured: false,
    services: [
      {
        id: "s8",
        name: "Psihoterapie EMDR",
        category: "Terapie",
        duration: 60,
        price: 280,
        currency: "RON",
        description: "Ședință EMDR pentru procesarea traumelor",
        objectives: ["Traume", "Anxietate", "Fobii"],
      },
      {
        id: "s9",
        name: "Consiliere psihologică",
        category: "Consiliere",
        duration: 50,
        price: 200,
        currency: "RON",
        description: "Consiliere pentru stres și anxietate",
        objectives: ["Stres", "Anxietate"],
      },
    ],
    education: [
      { institution: "UBB Cluj-Napoca", degree: "Doctorat Psihologie Clinică", year: 2016 },
      { institution: "EMDR Europe", degree: "EMDR Practitioner", year: 2018 },
    ],
    availability: [
      { day: "Luni", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Miercuri", slots: ["09:00", "10:00", "14:00", "15:00"] },
      { day: "Vineri", slots: ["09:00", "10:00", "11:00"] },
    ],
  },
  {
    id: "5",
    name: "Adrian Petrescu",
    slug: "adrian-petrescu",
    type: "coach",
    title: "Coach dezvoltare personală & Mindfulness",
    avatar: "",
    city: "Iași",
    cities: ["Iași", "Online"],
    rating: 4.9,
    reviewCount: 41,
    experience: 6,
    priceMin: 180,
    priceMax: 300,
    currency: "RON",
    online: true,
    languages: ["Română", "Engleză"],
    specializations: ["Dezvoltare personală", "Mindfulness", "Stres", "Stimă de sine"],
    shortBio:
      "Coach pentru dezvoltare personală cu focus pe mindfulness și inteligență emoțională.",
    bio: "Ajut oamenii să trăiască o viață mai autentică și împlinită prin tehnici de coaching și mindfulness.\n\nAm lucrat cu peste 300 de clienți și am facilitat workshopuri pentru companii precum Google, Microsoft și startup-uri din România.",
    verified: true,
    featured: false,
    services: [
      {
        id: "s10",
        name: "Coaching dezvoltare personală",
        category: "Coaching",
        duration: 60,
        price: 250,
        currency: "RON",
        description: "Sesiune de coaching focusată pe creștere personală",
        objectives: ["Dezvoltare personală", "Stimă de sine"],
      },
      {
        id: "s11",
        name: "Sesiune Mindfulness",
        category: "Mindfulness",
        duration: 45,
        price: 180,
        currency: "RON",
        description: "Introducere în mindfulness și meditație ghidată",
        objectives: ["Mindfulness", "Stres", "Management stres"],
      },
    ],
    education: [
      { institution: "ICF", degree: "Associate Certified Coach (ACC)", year: 2020 },
      { institution: "MBSR Center", degree: "Mindfulness-Based Stress Reduction", year: 2019 },
    ],
    availability: [
      { day: "Luni", slots: ["10:00", "11:00", "16:00", "17:00"] },
      { day: "Marți", slots: ["09:00", "10:00", "14:00", "15:00"] },
      { day: "Joi", slots: ["10:00", "11:00", "16:00", "17:00"] },
      { day: "Vineri", slots: ["09:00", "10:00"] },
    ],
  },
  {
    id: "6",
    name: "Laura Stanescu",
    slug: "laura-stanescu",
    type: "psiholog",
    title: "Psiholog & Terapeut de cuplu",
    avatar: "",
    city: "București",
    cities: ["București", "Online"],
    rating: 4.8,
    reviewCount: 35,
    experience: 9,
    priceMin: 220,
    priceMax: 380,
    currency: "RON",
    online: true,
    languages: ["Română", "Engleză", "Spaniolă"],
    specializations: ["Relații", "Terapie de cuplu", "Comunicare", "Dezvoltare personală"],
    shortBio:
      "Psiholog specializat în terapie de cuplu și relații. Abordare integrativă cu focus pe EFT.",
    bio: "Sunt psiholog cu experiență în terapia emoțional-focusată (EFT) pentru cupluri și indivizi. Ajut oamenii să-și îmbunătățească relațiile și să comunice mai eficient.",
    verified: true,
    featured: false,
    services: [
      {
        id: "s12",
        name: "Terapie de cuplu EFT",
        category: "Terapie",
        duration: 80,
        price: 380,
        currency: "RON",
        description: "Terapie emoțional-focusată pentru cupluri",
        objectives: ["Terapie de cuplu", "Relații", "Comunicare"],
      },
      {
        id: "s13",
        name: "Psihoterapie individuală",
        category: "Terapie",
        duration: 50,
        price: 220,
        currency: "RON",
        description: "Ședință individuală focusată pe relații și comunicare",
        objectives: ["Relații", "Stimă de sine", "Dezvoltare personală"],
      },
    ],
    education: [
      { institution: "Universitatea București", degree: "Master Psihologie Clinică", year: 2017 },
      { institution: "ICEEFT", degree: "Certified EFT Therapist", year: 2020 },
    ],
    availability: [
      { day: "Luni", slots: ["14:00", "15:00", "16:00", "17:00"] },
      { day: "Marți", slots: ["10:00", "11:00", "14:00", "15:00"] },
      { day: "Miercuri", slots: ["14:00", "15:00", "16:00"] },
      { day: "Joi", slots: ["10:00", "11:00", "14:00"] },
    ],
  },
];

export function getSpecialistBySlug(slug: string): Specialist | undefined {
  return mockSpecialists.find((s) => s.slug === slug);
}

export function getSpecialistTypeLabel(type: SpecialistType): string {
  const labels: Record<SpecialistType, string> = {
    psiholog: "Psiholog",
    coach: "Coach",
    mentor: "Mentor",
  };
  return labels[type];
}

export function getSpecialistTypeColor(type: SpecialistType): string {
  const colors: Record<SpecialistType, string> = {
    psiholog: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    coach: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    mentor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  };
  return colors[type];
}
