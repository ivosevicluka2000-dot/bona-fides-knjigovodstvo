import React from 'react';
import BfLogo from './BfLogo';
import { businessDetails } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const footerLinks = [
    { name: 'Početna', id: 'pocetna' },
    { name: 'O nama', id: 'o-nama' },
    { name: 'Usluge', id: 'usluge' },
    { name: 'Kontakt', id: 'kontakt' }
  ];

  return (
    <footer className="bg-brand-black text-brand-ivory pt-16 pb-12 border-t border-brand-gold/20" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-brand-ivory/10">
          
          {/* Col 1: Logo & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <BfLogo variant="light" size="lg" />
            <p className="text-xs sm:text-sm text-brand-cream/80 max-w-sm leading-relaxed pt-2">
              Pružamo pouzdanu i preciznu knjigovodstvenu podršku za firme i preduzetnike u Novom Sadu i šire. Vaša finansijska stabilnost je naš prioritet.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-bronze">
              Brze veze
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-xs sm:text-sm text-brand-cream/75 hover:text-brand-cream hover:underline transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details & Hours */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-bronze">
              Kontakt i adresa
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-brand-cream/75">
              <p>
                <strong className="text-brand-ivory font-medium">Adresa:</strong> {businessDetails.address}, {businessDetails.city}
              </p>
              <p>
                <strong className="text-brand-ivory font-medium">Telefon:</strong> <a href={`tel:${businessDetails.phoneFormatted}`} className="hover:text-brand-cream hover:underline transition-colors">{businessDetails.phone}</a>
              </p>
              <p>
                <strong className="text-brand-ivory font-medium">E-mail:</strong> <a href={`mailto:${businessDetails.email}`} className="hover:text-brand-cream hover:underline transition-colors">{businessDetails.email}</a>
              </p>
              <p className="pt-2 text-brand-cream/60">
                <strong className="text-brand-ivory font-medium">Radno vreme:</strong> {businessDetails.workingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Legal Parameters & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-cream/55">
          
          {/* Left: Legals */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            <span>PIB: <strong className="font-mono text-brand-cream/80">{businessDetails.pib}</strong></span>
            <span>Matični broj: <strong className="font-mono text-brand-cream/80">{businessDetails.mb}</strong></span>
            <span>Preduzetnik: <strong className="text-brand-cream/80">{businessDetails.owner}</strong></span>
          </div>

          {/* Right: Copyright */}
          <div className="text-center sm:text-right">
            <p>&copy; {currentYear} {businessDetails.name}. Sva prava zadržana.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
