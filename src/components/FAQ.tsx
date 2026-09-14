import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { type Locale, translations } from '../lib/i18n';

export function FAQ({ locale }: { locale: Locale }) {
  const t = translations[locale].faq;
  const cta = translations[locale].ctaBanner;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#0052cc] tracking-wider uppercase block mb-1">
            {t.tag}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3 mb-20">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center text-xs md:text-sm font-semibold text-slate-800 hover:text-[#0052cc] transition"
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="text-slate-400 text-lg font-light shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#0047cc] to-[#0062ff] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{cta.title}</h3>
          <p className="text-xs md:text-sm text-blue-100 mb-6 max-w-md mx-auto">{cta.subtitle}</p>
          <Link
            to="/auth"
            search={{ mode: 'register' }}
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md"
          >
            {cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}