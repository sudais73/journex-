import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { type Locale, translations } from '../lib/i18n';

export function FAQ({ locale }: { locale: Locale }) {
  const t = translations[locale].ctaBanner;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Do I need to pay to join Journex?", a: "You can create an initial account as a customer or start directly as a partner when signing up for a package[cite: 1]." },
    { q: "How does the referral point system work?", a: "You earn Personal Journey Points (PJP) through your courses and Team Journey Points (TJP) through network referrals[cite: 1]." },
    { q: "What is the difference between ETB and PJP?", a: "ETB is the local currency paid for packages[cite: 1]. PJP is your internal achievement & compensation ledger value[cite: 1]." },
    { q: "How are classes delivered?", a: "Classes are delivered via live online sessions, supplemented by digital resources and regular peer evaluations." },
    { q: "Can I upgrade my package later?", a: "Yes, you can upgrade from Foundation or Progress tracks to Mastery or Excellence at any point[cite: 1]." }
  ];

  return (
    <section id="faq" className="py-16 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">FAQ</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Questions, answered</h2>
        </div>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl bg-white overflow-hidden transition">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-5 py-4 flex justify-between items-center text-xs md:text-sm font-semibold text-slate-800"
              >
                <span>{faq.q}</span>
                <span className="text-slate-400 font-normal">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-xs text-slate-500 border-t border-slate-50 pt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#0047cc] to-[#0062ff] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{t.title}</h3>
          <p className="text-xs md:text-sm text-blue-100 mb-6 max-w-md mx-auto">{t.subtitle}</p>
          <Link
            to="/auth"
            search={{ mode: 'register' }}
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-wider transition"
          >
            {t.button}
          </Link>
        </div>
      </div>
    </section>
  );
}