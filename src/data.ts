import { BusinessDetails, Service } from "./types";

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
    description: "Kompletno vođenje poslovnih knjiga, glavne knjige i pomoćnih evidencija, uz izradu izveštaja u skladu sa važećim propisima."
  },
  {
    id: "finansijski-konsalting",
    iconName: "TrendingUp",
    title: "Finansijski konsalting",
    description: "Analiza prihoda i rashoda, optimizacija finansijskih tokova i podrška u donošenju sigurnih poslovnih odluka."
  },
  {
    id: "kadrovski-poslovi",
    iconName: "Users",
    title: "Kadrovski poslovi i plate",
    description: "Prijave zaposlenih (CROSO), ugovori o radu, rešenja o odmorima i precizan obračun zarada, naknada i uverenja."
  },
  {
    id: "platni-promet",
    iconName: "CreditCard",
    title: "Platni promet",
    description: "Priprema i realizacija naloga za plaćanje, obračun zarada i poreza, dnevna obrada izvoda i podrška kod deviznog poslovanja."
  },
  {
    id: "poresko-savetovanje",
    iconName: "Scale",
    title: "Poresko savetovanje",
    description: "Zakonita optimizacija poreza, izbor najpovoljnije poreske forme i puno zastupanje tokom poreske kontrole."
  },
  {
    id: "zavrsni-racuni",
    iconName: "FileText",
    title: "Završni računi i izveštaji",
    description: "Izrada završnog računa i poreskog bilansa, uz podnošenje dokumentacije APR-u i Poreskoj upravi u zakonskim rokovima."
  },
  {
    id: "osnivanje-firmi",
    iconName: "Building",
    title: "Podrška pri osnivanju firmi",
    description: "Savetovanje o pravnoj formi (preduzetnik ili d.o.o.), analiza poreskih modela i vođenje cele registracije u APR-u."
  }
];
