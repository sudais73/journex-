// app/components/Navbar.tsx, Hero.tsx, About.tsx, etc.
import { type Locale, translations } from '../lib/i18n';

export function About({ locale }: { locale: Locale }) {
  const t = translations[locale].about;

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mb-4">
              V
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.visionTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.visionText}</p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mb-4">
              M
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.missionTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.missionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}