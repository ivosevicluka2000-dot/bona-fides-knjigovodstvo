import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import BfLogo from './BfLogo';
import { businessDetails } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('pocetna');

  const navLinks = [
    { name: 'Početna', href: '#pocetna', id: 'pocetna' },
    { name: 'O nama', href: '#o-nama', id: 'o-nama' },
    { name: 'Usluge', href: '#usluge', id: 'usluge' },
    { name: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active anchor observer
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    // "Kontakt" should land on the inquiry form itself, not just the section top
    const scrollTargetId = targetId === 'kontakt' ? 'contact-form-block' : targetId;
    const element = document.getElementById(scrollTargetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
    setIsOpen(false);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-black/90 backdrop-blur-md shadow-lg border-b border-brand-gold/20 py-3'
          : 'bg-transparent py-5'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#pocetna"
            onClick={(e) => handleLinkClick(e, 'pocetna')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg"
            aria-label="BONA FIDES V&D Početna"
          >
            <BfLogo size="md" variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative py-2 font-sans text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded ${
                  activeSection === link.id
                    ? 'text-brand-gold'
                    : 'text-brand-cream/70 hover:text-brand-ivory'
                }`}
              >
                {link.name}
                {/* Active indicator dot/line */}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-gold rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right side Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${businessDetails.phoneFormatted}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-brand-gold/40 rounded-full bg-transparent text-xs font-semibold uppercase tracking-wider text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-300"
              aria-label="Pozovite nas"
            >
              <Phone size={14} className="stroke-[2.5]" />
              <span>{businessDetails.phone}</span>
            </a>
            <a
              href="#kontakt"
              onClick={(e) => handleLinkClick(e, 'kontakt')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-gold text-xs font-semibold uppercase tracking-wider text-brand-black hover:bg-brand-gold-bright transition-all duration-300 shadow-sm"
            >
              Pošaljite upit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-3">
            <a
              href={`tel:${businessDetails.phoneFormatted}`}
              className="p-2.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold"
              aria-label="Nazovite telefonom"
            >
              <Phone size={18} className="stroke-[2.5]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full text-brand-cream hover:bg-brand-gold/10 border border-transparent hover:border-brand-gold/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'}
              id="mobile-menu-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

    </header>

    {/* Mobile Navigation Drawer — rendered OUTSIDE <header> on purpose:
        the scrolled header applies backdrop-filter, which turns it into the
        containing block for position:fixed descendants. Nested here, the
        drawer anchored to the (short) header instead of the viewport and
        collapsed to ~8px tall, spilling the links over the page. As a sibling
        it anchors to the viewport and covers the screen correctly. */}
      <div
        className={`md:hidden fixed inset-x-0 top-[80px] bottom-0 bg-brand-black/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        id="mobile-nav-menu"
      >
        <div className="px-4 pt-4 pb-8 space-y-3 shadow-lg border-b border-brand-gold/15 max-h-[calc(100dvh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`block px-4 py-3.5 rounded-xl font-sans text-base font-semibold tracking-wide transition-all ${
                activeSection === link.id
                  ? 'bg-brand-gold/10 text-brand-gold border-l-4 border-brand-gold pl-3'
                  : 'text-brand-cream/80 hover:bg-brand-gold/5 hover:text-brand-ivory'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-6 border-t border-brand-gold/15 px-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-taupe">
              Kancelarija
            </div>
            <p className="text-sm font-medium text-brand-cream/80">
              {businessDetails.address}<br />
              {businessDetails.city}
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`tel:${businessDetails.phoneFormatted}`}
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-transparent border border-brand-gold/40 text-brand-gold font-bold text-sm tracking-wide"
              >
                <Phone size={16} />
                Pozovite: {businessDetails.phone}
              </a>
              <a
                href="#kontakt"
                onClick={(e) => handleLinkClick(e, 'kontakt')}
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-brand-gold text-brand-black font-bold text-sm tracking-wide shadow-sm"
              >
                <MessageSquare size={16} />
                Pošaljite upit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
