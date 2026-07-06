import { BusinessDetails, Service, GalleryItem } from "./types";

export const businessDetails: BusinessDetails = {
  name: "BONA FIDES V&D",
  type: "Knjigovodstvena agencija / Bookkeeping and accounting agency",
  owner: "Ljiljana Marić",
  address: "Miše Dimitrijevića 24, lokal broj 2",
  city: "Novi Sad",
  phone: "064/165-84-24",
  phoneFormatted: "+381641658424",
  email: "bonafidesknjigovodstvo@gmail.com",
  workingHours: "Ponedeljak–petak 07:00–15:00",
  pib: "115716079",
  mb: "68578701"
};

export const services: Service[] = [
  {
    id: "finansijsko-knjigovodstvo",
    iconName: "BookOpen",
    title: "Finansijsko knjigovodstvo",
    description: "Kompletno vođenje poslovnih knjiga, hronološka evidencija svih poslovnih promena, vođenje glavne knjige i pomoćnih evidencija, kao i izrada izveštaja za eksterne potrebe u skladu sa važećim propisima."
  },
  {
    id: "finansijski-konsalting",
    iconName: "TrendingUp",
    title: "Finansijski konsalting",
    description: "Stručno savetovanje koje pomaže u analizi prihoda i rashoda, optimizaciji finansijskih tokova poslovanja, planiranju budžeta i donošenju sigurnih i ekonomski opravdanih poslovnih odluka."
  },
  {
    id: "kadrovski-poslovi",
    iconName: "Users",
    title: "Kadrovski poslovi i plate",
    description: "Prijava i odjava zaposlenih na socijalno osiguranje (CROSO), izrada ugovora o radu, priprema rešenja o godišnjim odmorima i odlukama, precizan obračun zarada i naknada, kao i izrada svih potrebnih uverenja."
  },
  {
    id: "platni-promet",
    iconName: "CreditCard",
    title: "Platni promet",
    description: "Priprema, provera i realizacija dinarskih naloga za plaćanje putem elektronskog bankarstva, plaćanje zarada i poreza, preuzimanje i svakodnevna obrada izvoda, kao i podrška kod deviznog poslovanja."
  },
  {
    id: "poresko-savetovanje",
    iconName: "Scale",
    title: "Poresko savetovanje",
    description: "Zakonita optimizacija poreskih obaveza, pronalaženje poreskih olakšica, izbor najpovoljnije poreske forme kod osnivanja, priprema poreskih prijava i pružanje pune podrške i zastupanja tokom poreske kontrole."
  },
  {
    id: "zavrsni-racuni",
    iconName: "FileText",
    title: "Završni računi i izveštaji",
    description: "Profesionalna izrada vanrednih, periodičnih i godišnjih finansijskih izveštaja (završni račun), sastavljanje poreskog bilansa, podnošenje dokumentacije APR-u i Poreskoj upravi u zakonskim rokovima."
  },
  {
    id: "osnivanje-firmi",
    iconName: "Building",
    title: "Podrška pri osnivanju firmi",
    description: "Detaljno savetovanje o izboru pravne forme (preduzetnik ili d.o.o.), izbor šifre delatnosti, analiza poreskih modela (paušal, samooporezivanje, isplata lične zarade) i vođenje celog procesa registracije u APR-u."
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    alt: "Uredan knjigovodstveni radni sto sa dokumentima i olovkom",
    caption: "Preciznost u dokumentaciji"
  },
  {
    id: "gallery-2",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    alt: "Analiza poslovnih grafikona i finansijskih planova na stolu",
    caption: "Strateško planiranje i konsalting"
  },
  {
    id: "gallery-3",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    alt: "Elegantan i svetao poslovni prostor za sastanke",
    caption: "Profesionalni radni ambijent"
  },
  {
    id: "gallery-4",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
    alt: "Potpisivanje poslovnog ugovora zlatnim nalivperom",
    caption: "Pravna i administrativna sigurnost"
  }
];
