/**
 * Real, approved contact information — single source of truth.
 *
 * Consumed by the Contact page (/iletisim) and the Footer. These are
 * the only two places real contact details should ever be rendered
 * from — do not redefine or duplicate these values elsewhere; import
 * from this file instead.
 *
 * href-ready fields (mailtoHref, phoneHref, mapEmbedUrl, mapTitle)
 * are precomputed here rather than built inline in JSX, so no
 * page/component needs to concatenate "mailto:"/"tel:" strings
 * itself.
 */

export interface TherapistContact {
  email: string;
  mailtoHref: string;
  instagramHandle: string;
  instagramUrl: string;
  linkedinUrl: string;
}

export interface InstitutionContact {
  name: string;
  phone: string;
  phoneHref: string;
  email: string;
  mailtoHref: string;
  address: string;
  mapEmbedUrl: string;
  mapTitle: string;
}

export const THERAPIST_CONTACT: TherapistContact = {
  email: 'dkt.izeltoplu@gmail.com',
  mailtoHref: 'mailto:dkt.izeltoplu@gmail.com',
  instagramHandle: 'dkt.izeltoplu',
  instagramUrl: 'https://www.instagram.com/dkt.izeltoplu/',
  linkedinUrl: 'https://tr.linkedin.com/in/izel-toplu-0745b3363',
};

const INSTITUTION_NAME = 'Patika Dil, Konuşma ve Ergoterapi Merkezi';
const INSTITUTION_ADDRESS =
  'İhsaniye, Celal Atik Cd. No:56 D:1 A Blok, 10200 Bandırma/BALIKESİR';

export const INSTITUTION_CONTACT: InstitutionContact = {
  name: INSTITUTION_NAME,
  phone: '0549 696 0110',
  phoneHref: 'tel:+905496960110',
  email: 'info@patikadilkonusma.com',
  mailtoHref: 'mailto:info@patikadilkonusma.com',
  address: INSTITUTION_ADDRESS,
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    INSTITUTION_ADDRESS
  )}&output=embed`,
  mapTitle: `${INSTITUTION_NAME} konumu`,
};