
export interface TherapistContact {
  email: string;
  mailtoHref: string;
  instagramHandle: string;
  instagramUrl: string;
  linkedinUrl: string;
}

export interface InstitutionContact {
  name: string;
  email: string;
  mailtoHref: string;
}

export const THERAPIST_CONTACT: TherapistContact = {
  email: 'dkt.izeltoplu@gmail.com',
  mailtoHref: 'mailto:dkt.izeltoplu@gmail.com',
  instagramHandle: 'dkt.izeltoplu',
  instagramUrl: 'https://www.instagram.com/dkt.izeltoplu/',
  linkedinUrl: 'https://tr.linkedin.com/in/izel-toplu-0745b3363',
};

export const INSTITUTION_CONTACT: InstitutionContact = {
  name: 'Patika Dil, Konuşma ve Ergoterapi Merkezi',
  email: 'info@patikadilkonusma.com',
  mailtoHref: 'mailto:info@patikadilkonusma.com',
};
