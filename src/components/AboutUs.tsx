import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, BookOpen, Quote } from 'lucide-react';
import { businessDetails } from '../data';

export default function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: 'Pravna i administrativna sigurnost',
      text: 'Sve poslovne knjige vodimo u strogoj saglasnosti sa važećim zakonima i poreskim propisima Republike Srbije, pružajući vam miran san.'
    },
    {
      icon: Sparkles,
      title: 'Personalizovan pristup',
      text: 'Svakom klijentu i firmi pristupamo individualno. Razumemo vaše specifične poslovne procese i nudimo rešenja koja optimizuju vaš rad.'
    },
    {
      icon: BookOpen,
      title: 'Ažurnost i transparentnost',
      text: 'Brza razmena dokumenata i pravovremeno izveštavanje omogućavaju vam da uvek imate jasan i tačan uvid u finansijsko zdravlje vašeg biznisa.'
    }
  ];

  return (
    <section 
      id="o-nama" 
      className="py-24 bg-brand-ivory border-y border-brand-bronze/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
            O nama
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-brand-chocolate mt-2 tracking-tight">
            Vaš oslonac za stabilan i siguran rast
          </h2>
          <div className="w-16 h-[2px] bg-brand-bronze/50 mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-walnut leading-snug">
              Knjigovodstvena agencija Bona Fides V&D pruža profesionalne knjigovodstvene usluge, oslanjajući se na 15 godina iskustva u ovoj oblasti.
            </h3>
            
            <p className="text-sm sm:text-base text-brand-chocolate/85 leading-relaxed">
              Vaš biznis je jedinstven, zato mu pružamo personalizovanu podršku, pažljivu analizu i pristup prilagođen vašim stvarnim potrebama. Ne verujemo u šablonska rešenja – analiziramo svaki aspekt vašeg poslovanja kako bismo osigurali maksimalnu poresku efikasnost i administrativni red.
            </p>

            <p className="text-sm sm:text-base text-brand-chocolate/85 leading-relaxed">
              Koristimo savremeni softver koji omogućava brzu razmenu dokumentacije i jasan uvid u stanje poslovanja u bilo kom trenutku. Naša komunikacija je brza, direktna i bez komplikovanog stručnog žargona.
            </p>

            {/* Quote Block */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-brand-cream/40 border border-brand-bronze/20 mt-8">
              <Quote className="absolute top-4 right-4 text-brand-bronze/10 w-16 h-16 pointer-events-none stroke-[1]" />
              <p className="font-serif text-lg sm:text-xl font-medium text-brand-chocolate italic relative z-10">
                &ldquo;Fokusirajte se na rast poslovanja, a knjigovodstvene poslove prepustite nama.&rdquo;
              </p>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-walnut">
                — Ljiljana Marić, osnivač i zastupnik
              </div>
            </div>
          </div>

          {/* Right: Key Values & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-bronze/10 shadow-xs relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-bronze/5 rounded-full blur-xl pointer-events-none" />
              
              <h4 className="font-serif text-xl font-bold text-brand-chocolate mb-6 border-b border-brand-bronze/20 pb-4">
                Naša tri stuba poslovanja
              </h4>

              <div className="space-y-6">
                {values.map((val, index) => {
                  const Icon = val.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-ivory border border-brand-bronze/20 flex items-center justify-center text-brand-walnut">
                        <Icon size={18} className="stroke-[1.75]" />
                      </div>
                      <div>
                        <h5 className="font-serif text-base font-bold text-brand-chocolate">
                          {val.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-brand-chocolate/75 mt-1 leading-relaxed">
                          {val.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stat Card */}
            <div className="p-6 rounded-2xl bg-brand-chocolate text-brand-cream flex items-center justify-between shadow-md">
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-bronze">
                  15+ Godina
                </div>
                <div className="text-[10px] uppercase font-semibold tracking-widest text-brand-cream/60 mt-1">
                  Stručnog iskustva u finansijama
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-bronze text-lg font-serif italic">
                BF
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
