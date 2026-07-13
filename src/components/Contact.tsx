import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, MessageCircle, Info } from 'lucide-react';
import { businessDetails } from '../data';
import { ContactFormInput } from '../types';
import Reveal from './motion/Reveal';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormInput>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Web3Forms access key — set VITE_WEB3FORMS_ACCESS_KEY in .env (see .env.example)
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

  const validate = (): boolean => {
    const tempErrors: Partial<ContactFormInput> = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Ime i prezime je obavezno polje.';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'E-mail adresa je obavezna polje.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Unesite ispravnu e-mail adresu.';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Broj telefona je obavezan.';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Poruka je obavezna.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof ContactFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error('Web3Forms access key is not configured.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Upit sa sajta: ${formData.name}`,
          from_name: 'Bona Fides V&D sajt',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || 'Slanje nije uspelo.');
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        `Došlo je do greške pri slanju upita. Pokušajte ponovo ili nas kontaktirajte direktno na ${businessDetails.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  // Google Maps Novi Sad Embed link for Miše Dimitrijevića 24
  // Using official openstreetmap/google maps coordinates inside embed.
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.8359404286125!2d19.835478076692994!3d45.24108894828135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b101962327429%3A0xe54ef9034cf9b07c!2zTWnFoWUgRGltaXRyaWpldmnEh2EgMjQsIE5vdmkgU2Fk!5e0!3m2!1ssr!2srs!4v1710000000000!5m2!1ssr!2srs";

  return (
    <section 
      id="kontakt" 
      className="py-24 bg-brand-cream relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-deep">
            Kontakt
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-brand-chocolate mt-2 tracking-tight">
            Otpočnimo uspešnu saradnju
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
          <p className="font-sans text-sm sm:text-base text-brand-chocolate/80 mt-4 leading-relaxed">
            Kontaktirajte nas radi konsultacija, ponuda ili bilo kakvih nedoumica. Javićemo vam se u najkraćem roku.
          </p>
        </Reveal>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Contact Information & Legal Details */}
          <Reveal className="lg:col-span-5 space-y-8"><div className="space-y-8" id="contact-info-block">
            
            {/* Quick Contact Cards */}
            <div className="p-8 rounded-2xl bg-brand-ivory border border-brand-bronze/10 space-y-6">
              <h3 className="font-serif text-xl font-bold text-brand-chocolate border-b border-brand-bronze/10 pb-4">
                Informacije o agenciji
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center text-brand-walnut">
                    <MapPin size={18} className="stroke-[1.75]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-taupe">Adresa i sedište</h4>
                    <p className="text-sm font-semibold text-brand-chocolate mt-1">
                      {businessDetails.address}
                    </p>
                    <p className="text-xs text-brand-chocolate/75 font-medium">{businessDetails.city}, Srbija</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center text-brand-walnut">
                    <Mail size={18} className="stroke-[1.75]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-taupe">E-mail adresa</h4>
                    <a 
                      href={`mailto:${businessDetails.email}`}
                      className="text-sm font-semibold text-brand-walnut hover:text-brand-chocolate transition-colors mt-1 block"
                    >
                      {businessDetails.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center text-brand-walnut">
                    <Clock size={18} className="stroke-[1.75]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-taupe">Radno vreme</h4>
                    <p className="text-sm font-semibold text-brand-chocolate mt-1">
                      {businessDetails.workingHours}
                    </p>
                    <p className="text-xs text-brand-taupe font-medium">Subota i nedelja: neradni dani</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat & Instant Messengers */}
            <div className="p-8 rounded-2xl bg-brand-black text-brand-cream space-y-5 shadow-lg border border-brand-gold/25">
              <h3 className="font-serif text-lg font-bold text-brand-bronze">
                Brzi kontakt i konsultacije
              </h3>
              <p className="text-xs text-brand-cream/80 leading-relaxed">
                Povežite se sa nama direktno putem mobilnog telefona ili popularnih aplikacija za ćaskanje.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Call */}
                <a
                  href={`tel:${businessDetails.phoneFormatted}`}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-brand-cream/10 border border-brand-cream/10 hover:border-brand-bronze hover:bg-brand-cream/15 text-center transition-all duration-300"
                >
                  <Phone size={18} className="text-brand-bronze mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cream">Poziv</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${businessDetails.phoneFormatted.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-brand-cream/10 border border-brand-cream/10 hover:border-brand-bronze hover:bg-brand-cream/15 text-center transition-all duration-300"
                >
                  <MessageCircle size={18} className="text-[#25D366] mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cream">WhatsApp</span>
                </a>

                {/* Viber */}
                <a
                  href={`viber://chat?number=%2B${businessDetails.phoneFormatted.replace('+', '')}`}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-brand-cream/10 border border-brand-cream/10 hover:border-brand-bronze hover:bg-brand-cream/15 text-center transition-all duration-300"
                >
                  <MessageCircle size={18} className="text-[#7360F2] mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cream">Viber</span>
                </a>
              </div>
            </div>

            {/* Legal Identification parameters */}
            <div className="p-6 rounded-xl bg-brand-ivory/50 border border-brand-bronze/10 text-xs text-brand-chocolate/80 space-y-2">
              <div className="flex justify-between border-b border-brand-bronze/10 pb-2">
                <span className="font-medium text-brand-taupe">Pravno lice:</span>
                <span className="font-bold">{businessDetails.name}</span>
              </div>
              <div className="flex justify-between border-b border-brand-bronze/10 pb-2">
                <span className="font-medium text-brand-taupe">Zastupnik:</span>
                <span className="font-bold">{businessDetails.owner}</span>
              </div>
              <div className="flex justify-between border-b border-brand-bronze/10 pb-2">
                <span className="font-medium text-brand-taupe">PIB:</span>
                <span className="font-mono font-bold text-brand-chocolate">{businessDetails.pib}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-brand-taupe">Matični broj (MB):</span>
                <span className="font-mono font-bold text-brand-chocolate">{businessDetails.mb}</span>
              </div>
            </div>

          </div></Reveal>

          {/* Right Side: Interactive Inquiry Form */}
          <Reveal delay={0.15} className="lg:col-span-7"><div className="bg-brand-ivory border border-brand-gold/20 p-8 sm:p-10 rounded-2xl shadow-sm h-full" id="contact-form-block">
            
            <h3 className="font-serif text-2xl font-bold text-brand-chocolate mb-2">
              Pošaljite nam upit
            </h3>
            <p className="text-xs sm:text-sm text-brand-chocolate/75 mb-8">
              Popunite formu ispod i opišite vašu delatnost i potrebe. Pripremićemo prilagođenu ponudu specifičnu za vaš biznis.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-brand-cream/50 border border-brand-bronze/30 rounded-2xl text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-brand-walnut/10 flex items-center justify-center text-brand-walnut mx-auto">
                  <CheckCircle2 size={36} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-brand-chocolate">
                    Upit je uspešno poslat!
                  </h4>
                  <p className="text-sm text-brand-chocolate/85 mt-2 max-w-md mx-auto">
                    Hvala na poverenju. Vaša poruka je stigla do nas i javićemo vam se u najkraćem roku. Za hitna pitanja pozovite nas na <strong className="text-brand-walnut">{businessDetails.phone}</strong> ili pišite na <strong className="text-brand-walnut">{businessDetails.email}</strong>.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-full border border-brand-walnut/30 text-brand-walnut hover:bg-brand-cream font-medium text-xs uppercase tracking-wider transition-colors"
                  >
                    Pošaljite novu poruku
                  </button>
                  <a
                    href={`mailto:${businessDetails.email}`}
                    className="px-6 py-3 rounded-full bg-brand-gold text-brand-black hover:bg-brand-gold-bright font-medium text-xs uppercase tracking-wider transition-colors"
                  >
                    Otvori e-mail ručno
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="inquiry-form">
                
                {/* Form Group Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-brand-chocolate mb-2">
                      Ime i prezime <span className="text-brand-bronze">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-brand-ivory focus:bg-white text-sm text-brand-chocolate transition-all focus:outline-none ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-brand-gold/25 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20'
                      }`}
                      placeholder="npr. Marko Marković"
                    />
                    {errors.name && <span className="text-xs text-red-600 mt-1.5 block">{errors.name}</span>}
                  </div>

                  {/* Form Group Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-chocolate mb-2">
                      Kontakt telefon <span className="text-brand-bronze">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-brand-ivory focus:bg-white text-sm text-brand-chocolate transition-all focus:outline-none ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-brand-gold/25 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20'
                      }`}
                      placeholder="npr. 064123456"
                    />
                    {errors.phone && <span className="text-xs text-red-600 mt-1.5 block">{errors.phone}</span>}
                  </div>
                </div>

                {/* Form Group Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-chocolate mb-2">
                    E-mail adresa <span className="text-brand-bronze">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-brand-ivory focus:bg-white text-sm text-brand-chocolate transition-all focus:outline-none ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-brand-gold/25 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20'
                    }`}
                    placeholder="npr. marko@kompanija.rs"
                  />
                  {errors.email && <span className="text-xs text-red-600 mt-1.5 block">{errors.email}</span>}
                </div>

                {/* Form Group Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-chocolate mb-2">
                    Vaša poruka / Opis potreba <span className="text-brand-bronze">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-brand-ivory focus:bg-white text-sm text-brand-chocolate transition-all focus:outline-none resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-brand-gold/25 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20'
                    }`}
                    placeholder="Ukratko opišite vašu delatnost, pravnu formu (d.o.o, preduzetnik) i usluge za koje ste zainteresovani..."
                  />
                  {errors.message && <span className="text-xs text-red-600 mt-1.5 block">{errors.message}</span>}
                </div>

                {/* Submission error */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 flex items-start gap-3">
                    <Info size={16} className="flex-shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-gold text-brand-black hover:bg-brand-gold-bright disabled:bg-brand-gold/60 font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_-8px_rgba(201,162,75,0.6)]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
                      <span>Slanje upita...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Pošaljite upit</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div></Reveal>

        </div>

        {/* Beautiful Map Embed Block */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-brand-bronze/15 shadow-sm" id="google-maps-section">
          <div className="p-4 bg-brand-ivory border-b border-brand-bronze/10 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-walnut" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-chocolate">Naša lokacija</span>
            </div>
            <a 
              href="https://maps.google.com/?q=Mi%C5%A1e+Dimitrijevi%C4%87a+24,+Novi+Sad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-walnut hover:text-brand-chocolate hover:underline transition-all"
            >
              Otvorite u Google mapama
            </a>
          </div>
          <div className="relative w-full h-80 sm:h-96">
            <iframe
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0 filter sepia-[10%] contrast-[103%] brightness-[95%] saturate-[90%]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="BONA FIDES V&D Lokacija na mapi"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
