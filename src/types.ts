export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface BusinessDetails {
  name: string;
  type: string;
  owner: string;
  address: string;
  city: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  workingHours: string;
  pib: string;
  mb: string;
}
