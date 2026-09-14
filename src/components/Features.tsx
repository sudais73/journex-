// app/components/Navbar.tsx, Hero.tsx, About.tsx, etc.
import { type Locale, translations } from '../lib/i18n';

export function Features({ locale }: { locale: Locale }) {
  const t = translations[locale].features;

  const cards = [
    { title: t.f1Title, desc: t.f1Desc, icon: "🗺️" },
    { title: t.f2Title, desc: t.f2Desc, icon: "👥" },
    { title: t.f3Title, desc: t.f3Desc, icon: "🛡️" },
    { title: t.f4Title, desc: t.f4Desc, icon: "💎" },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-2">
          {t.tag}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-200/70 bg-white hover:border-blue-400 transition">
              <div className="text-xl mb-3">{c.icon}</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{c.title}</h3>
              <p className="text-xs text-slate-500 leading-normal">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}